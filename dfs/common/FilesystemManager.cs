﻿using Fs;
using Google.Protobuf;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO.Abstractions;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Tracker;

namespace common
{
    public class FilesystemManager : IFilesystemManager
    {
        private readonly AsyncLock _syncRoot = new();
        private bool disposedValue;

        public IPersistentCache<ByteString, ObjectWithHash> ObjectByHash { get; private set; }
        public IPersistentCache<ByteString, RpcCommon.HashList> ChunkParents { get; private set; }
        public IPersistentCache<Guid, ByteString> Container { get; private set; }
        public IPersistentCache<ByteString, RpcCommon.HashList> Parent { get; private set; }
        public IPersistentCache<ByteString, ByteString> NewerVersion { get; private set; }
        public string DbPath { get; private set; }

        public FilesystemManager(string dbBasePath)
        {
            DbPath = dbBasePath;
            ObjectByHash = new PersistentCache<ByteString, ObjectWithHash>(
                System.IO.Path.Combine(DbPath, "ObjectByHash"),
                new ByteStringSerializer(),
                new Serializer<ObjectWithHash>()
            );

            ChunkParents = new PersistentCache<ByteString, RpcCommon.HashList>(
                System.IO.Path.Combine(DbPath, "ChunkParents"),
                new ByteStringSerializer(),
                new Serializer<RpcCommon.HashList>()
            );

            Container = new PersistentCache<Guid, ByteString>(
                System.IO.Path.Combine(DbPath, "Container"),
                new GuidSerializer(),
                new ByteStringSerializer()
            );

            Parent = new PersistentCache<ByteString, RpcCommon.HashList>(
                System.IO.Path.Combine(DbPath, "Parent"),
                new ByteStringSerializer(),
                new Serializer<RpcCommon.HashList>()
            );

            NewerVersion = new PersistentCache<ByteString, ByteString>(
                System.IO.Path.Combine(DbPath, "NewerVersion"),
                new ByteStringSerializer(),
                new ByteStringSerializer()
            );
        }

        public FilesystemManager(IPersistentCache<ByteString, ObjectWithHash> objectByHash,
            IPersistentCache<ByteString, RpcCommon.HashList> chunkParents,
            IPersistentCache<Guid, ByteString> container,
            IPersistentCache<ByteString, RpcCommon.HashList> parent,
            IPersistentCache<ByteString, ByteString> newerVersion, string dbPath)
        {
            ObjectByHash = objectByHash;
            ChunkParents = chunkParents;
            Container = container;
            Parent = parent;
            NewerVersion = newerVersion;
            DbPath = dbPath;
        }

        public async Task<Guid> CreateObjectContainer(ObjectWithHash[] objects, ByteString rootObject, Guid container)
        {
            ArgumentNullException.ThrowIfNull(objects);
            using (await _syncRoot.LockAsync(CancellationToken.None))
            {
                foreach (var obj in objects)
                {
                    if (await ObjectByHash.ContainsKey(obj.Hash))
                    {
                        continue;
                    }

                    await ObjectByHash.SetAsync(obj.Hash, obj);
                    switch (obj.Object.TypeCase)
                    {
                        case FileSystemObject.TypeOneofCase.File:
                            await SetFileChunkParents(obj);
                            break;
                        case FileSystemObject.TypeOneofCase.Directory:
                            foreach (var child in obj.Object.Directory.Entries)
                            {
                                var value = await Parent.TryGetValue(child);
                                if (value != null)
                                {
                                    value.Data.Add(obj.Hash);
                                    await Parent.SetAsync(child, value);
                                }
                                else
                                {
                                    await Parent.SetAsync(child, new RpcCommon.HashList() { Data = { obj.Hash } });
                                }
                            }
                            break;
                        case FileSystemObject.TypeOneofCase.Link:
                            break;
                        default:
                            throw new ArgumentException("ObjectWithHash has an invalid type");
                    }
                }

                ByteString? oldRoot = await Container.TryGetValue(container);
                if (oldRoot != null)
                {
                    await NewerVersion.SetAsync(oldRoot, rootObject);
                }

                await Container.SetAsync(container, rootObject);

                return container;
            }
        }

        public async Task<List<ObjectWithHash>> GetContainerTree(Guid containerGuid)
        {
            return await GetContainerTree(containerGuid, false);
        }

        private async Task<List<ObjectWithHash>> GetContainerTree(Guid containerGuid, bool noLock)
        {
            using (await _syncRoot.LockAsync(CancellationToken.None, noLock))
            {
                ByteString? root = await Container.TryGetValue(containerGuid);
                if (root != null)
                {
                    return await GetObjectTree(root, true);
                }
                else
                {
                    return [];
                }
            }
        }

        public async Task<(ByteString, List<ObjectWithHash>)> ModifyContainer(Ui.FsOperation operation)
        {
            ArgumentNullException.ThrowIfNull(operation);
            using (await _syncRoot.LockAsync(CancellationToken.None))
            {
                var root = await Container.GetAsync(Guid.Parse(operation.ContainerGuid));
                var objects = await GetObjectTree(root, true);
                Dictionary<ByteString, ObjectWithHash> removalDiff = new(new ByteStringComparer());

                ObjectWithHash? extracted = null;

                if (operation.Type != Ui.OperationType.Copy && operation.Type != Ui.OperationType.Create)
                {
                    extracted = await ObjectByHash.GetAsync(operation.Target.Data);
                    if (operation.Type == Ui.OperationType.Rename)
                    {
                        extracted.Object.Name = operation.NewName;
                        extracted.Hash = HashUtils.GetHash(extracted.Object);
                    }

                    removalDiff = FilesystemUtils
                        .RemoveObjectFromTree(objects, root, operation.Target.Data, operation.Parent.Data)
                        .ToDictionary(new ByteStringComparer());

                    root = removalDiff[root].Hash;

                    if (extracted != null)
                        objects.RemoveAll(o => o.Hash == extracted.Hash);

                    objects.RemoveAll(o => removalDiff.ContainsKey(o.Hash));
                    objects.AddRange(removalDiff.Values);
                }

                if (operation.Type != Ui.OperationType.Delete)
                {
                    ObjectList toAdd = operation.Objects;
                    if (extracted != null)
                    {
                        toAdd = new() { Data = { extracted } };
                    }
                    if (operation.Type == Ui.OperationType.Copy)
                    {
                        toAdd = new() { Data = { await ObjectByHash.GetAsync(operation.Target.Data) } };
                    }

                    var newParent = operation.Type == Ui.OperationType.Move || operation.Type == Ui.OperationType.Copy
                        ? operation.NewParent.Data
                        : operation.Parent.Data;

                    if (removalDiff.TryGetValue(newParent, out ObjectWithHash? value))
                    {
                        newParent = value.Hash;
                    }

                    var diff = FilesystemUtils.AddObjectToTree(objects, root, extracted == null ? operation.Target.Data : extracted.Hash, newParent);
                    root = diff[root].Hash;
                    objects.RemoveAll(o => diff.ContainsKey(o.Hash));
                    objects.AddRange(diff.Values);
                    if (operation.Type != Ui.OperationType.Copy && operation.Type != Ui.OperationType.Move)
                    {
                        objects.AddRange(toAdd.Data);
                    }
                }

                objects = [.. objects.Distinct()];
                return (root, objects);
            }
        }

        public async Task<List<ObjectWithHash>> GetObjectTree(ByteString root)
        {
            return await GetObjectTree(root, false);
        }

        private async Task<List<ObjectWithHash>> GetObjectTree(ByteString root, bool noLock)
        {
            using (await _syncRoot.LockAsync(CancellationToken.None, noLock))
            {
                Dictionary<ByteString, ObjectWithHash> obj = new(new ByteStringComparer());
                async Task Traverse(ByteString hash)
                {
                    var o = await ObjectByHash.GetAsync(hash);
                    obj[hash] = o;
                    if (o.Object.TypeCase != FileSystemObject.TypeOneofCase.Directory)
                    {
                        return;
                    }

                    foreach (var next in o.Object.Directory.Entries)
                    {
                        await Traverse(next);
                    }
                }

                await Traverse(root);
                return [.. obj.Values];
            }
        }

        private async Task SetFileChunkParents(ObjectWithHash fileObject)
        {
            if (fileObject.Object.TypeCase != Fs.FileSystemObject.TypeOneofCase.File)
            {
                throw new ArgumentException("fileObject doesn't represent a file");
            }

            var parentHash = fileObject.Hash;
            var file = fileObject.Object.File;
            foreach (var chunkHash in file.Hashes.Hash)
            {
                // if there is a large amount of duplicate files this will be slow, but imports (ie writes) are rare
                // in comparison to reads, so this is... fine?
                RpcCommon.HashList? parents = await ChunkParents.TryGetValue(chunkHash);
                if (parents != null)
                {
                    parents.Data.Add(parentHash);
                    await ChunkParents.SetAsync(chunkHash, parents);
                    continue;
                }

                await ChunkParents.SetAsync(chunkHash, new RpcCommon.HashList() { Data = { parentHash } });
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    ChunkParents.Dispose();
                    ObjectByHash.Dispose();
                    Container.Dispose();
                    Parent.Dispose();
                    NewerVersion.Dispose();
                    _syncRoot.Dispose();
                }

                disposedValue = true;
            }
        }

        ~FilesystemManager()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: false);
        }

        public void Dispose()
        {
            // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
            Dispose(disposing: true);
            GC.SuppressFinalize(this);
        }
    }
}
