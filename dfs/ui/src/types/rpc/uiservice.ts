// @generated by protobuf-ts 2.9.6
// @generated from protobuf file "rpc/uiservice.proto" (package "Ui", syntax proto3)
// tslint:disable
import { DataUsage } from "../rpc_common";
import { SearchResponse } from "../rpc_common";
import { ObjectList } from "../fs/filesystem";
import { Guid } from "../rpc_common";
import { GuidList } from "../rpc_common";
import { Empty } from "../rpc_common";
import { Hash } from "../rpc_common";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message Ui.ObjectOptions
 */
export interface ObjectOptions {
    /**
     * @generated from protobuf field: bool pickFolder = 1;
     */
    pickFolder: boolean;
}
/**
 * @generated from protobuf message Ui.Progress
 */
export interface Progress {
    /**
     * @generated from protobuf field: int64 current = 1;
     */
    current: bigint;
    /**
     * @generated from protobuf field: int64 total = 2;
     */
    total: bigint;
}
/**
 * @generated from protobuf message Ui.Path
 */
export interface Path {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
}
/**
 * @generated from protobuf message Ui.String
 */
export interface String$ {
    /**
     * @generated from protobuf field: string value = 1;
     */
    value: string;
}
/**
 * @generated from protobuf message Ui.ObjectFromDiskOptions
 */
export interface ObjectFromDiskOptions {
    /**
     * @generated from protobuf field: string path = 1;
     */
    path: string;
    /**
     * @generated from protobuf field: int32 chunkSize = 2;
     */
    chunkSize: number;
}
/**
 * @generated from protobuf message Ui.PublishingOptions
 */
export interface PublishingOptions {
    /**
     * @generated from protobuf field: string containerGuid = 1;
     */
    containerGuid: string;
    /**
     * @generated from protobuf field: string trackerUri = 2;
     */
    trackerUri: string;
}
/**
 * @generated from protobuf message Ui.DownloadContainerOptions
 */
export interface DownloadContainerOptions {
    /**
     * @generated from protobuf field: string containerGuid = 1;
     */
    containerGuid: string;
    /**
     * @generated from protobuf field: string trackerUri = 2;
     */
    trackerUri: string;
    /**
     * @generated from protobuf field: string destinationDir = 3;
     */
    destinationDir: string;
    /**
     * @generated from protobuf field: int32 maxConcurrentChunks = 4;
     */
    maxConcurrentChunks: number;
}
/**
 * @generated from protobuf message Ui.SearchRequest
 */
export interface SearchRequest {
    /**
     * @generated from protobuf field: string trackerUri = 1;
     */
    trackerUri: string;
    /**
     * @generated from protobuf field: string query = 2;
     */
    query: string;
}
/**
 * @generated from protobuf message Ui.UsageRequest
 */
export interface UsageRequest {
    /**
     * @generated from protobuf field: string trackerUri = 1;
     */
    trackerUri: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ObjectOptions$Type extends MessageType<ObjectOptions> {
    constructor() {
        super("Ui.ObjectOptions", [
            { no: 1, name: "pickFolder", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ObjectOptions>): ObjectOptions {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.pickFolder = false;
        if (value !== undefined)
            reflectionMergePartial<ObjectOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ObjectOptions): ObjectOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool pickFolder */ 1:
                    message.pickFolder = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ObjectOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool pickFolder = 1; */
        if (message.pickFolder !== false)
            writer.tag(1, WireType.Varint).bool(message.pickFolder);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.ObjectOptions
 */
export const ObjectOptions = new ObjectOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Progress$Type extends MessageType<Progress> {
    constructor() {
        super("Ui.Progress", [
            { no: 1, name: "current", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "total", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Progress>): Progress {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.current = 0n;
        message.total = 0n;
        if (value !== undefined)
            reflectionMergePartial<Progress>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Progress): Progress {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 current */ 1:
                    message.current = reader.int64().toBigInt();
                    break;
                case /* int64 total */ 2:
                    message.total = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Progress, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 current = 1; */
        if (message.current !== 0n)
            writer.tag(1, WireType.Varint).int64(message.current);
        /* int64 total = 2; */
        if (message.total !== 0n)
            writer.tag(2, WireType.Varint).int64(message.total);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.Progress
 */
export const Progress = new Progress$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Path$Type extends MessageType<Path> {
    constructor() {
        super("Ui.Path", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Path>): Path {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.path = "";
        if (value !== undefined)
            reflectionMergePartial<Path>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Path): Path {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Path, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.path);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.Path
 */
export const Path = new Path$Type();
// @generated message type with reflection information, may provide speed optimized methods
class String$$Type extends MessageType<String$> {
    constructor() {
        super("Ui.String", [
            { no: 1, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<String$>): String$ {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.value = "";
        if (value !== undefined)
            reflectionMergePartial<String$>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: String$): String$ {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string value */ 1:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: String$, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string value = 1; */
        if (message.value !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.String
 */
export const String$ = new String$$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ObjectFromDiskOptions$Type extends MessageType<ObjectFromDiskOptions> {
    constructor() {
        super("Ui.ObjectFromDiskOptions", [
            { no: 1, name: "path", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "chunkSize", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<ObjectFromDiskOptions>): ObjectFromDiskOptions {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.path = "";
        message.chunkSize = 0;
        if (value !== undefined)
            reflectionMergePartial<ObjectFromDiskOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ObjectFromDiskOptions): ObjectFromDiskOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string path */ 1:
                    message.path = reader.string();
                    break;
                case /* int32 chunkSize */ 2:
                    message.chunkSize = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ObjectFromDiskOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string path = 1; */
        if (message.path !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.path);
        /* int32 chunkSize = 2; */
        if (message.chunkSize !== 0)
            writer.tag(2, WireType.Varint).int32(message.chunkSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.ObjectFromDiskOptions
 */
export const ObjectFromDiskOptions = new ObjectFromDiskOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublishingOptions$Type extends MessageType<PublishingOptions> {
    constructor() {
        super("Ui.PublishingOptions", [
            { no: 1, name: "containerGuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "trackerUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PublishingOptions>): PublishingOptions {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.containerGuid = "";
        message.trackerUri = "";
        if (value !== undefined)
            reflectionMergePartial<PublishingOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PublishingOptions): PublishingOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string containerGuid */ 1:
                    message.containerGuid = reader.string();
                    break;
                case /* string trackerUri */ 2:
                    message.trackerUri = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PublishingOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string containerGuid = 1; */
        if (message.containerGuid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.containerGuid);
        /* string trackerUri = 2; */
        if (message.trackerUri !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.trackerUri);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.PublishingOptions
 */
export const PublishingOptions = new PublishingOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DownloadContainerOptions$Type extends MessageType<DownloadContainerOptions> {
    constructor() {
        super("Ui.DownloadContainerOptions", [
            { no: 1, name: "containerGuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "trackerUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "destinationDir", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "maxConcurrentChunks", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<DownloadContainerOptions>): DownloadContainerOptions {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.containerGuid = "";
        message.trackerUri = "";
        message.destinationDir = "";
        message.maxConcurrentChunks = 0;
        if (value !== undefined)
            reflectionMergePartial<DownloadContainerOptions>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DownloadContainerOptions): DownloadContainerOptions {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string containerGuid */ 1:
                    message.containerGuid = reader.string();
                    break;
                case /* string trackerUri */ 2:
                    message.trackerUri = reader.string();
                    break;
                case /* string destinationDir */ 3:
                    message.destinationDir = reader.string();
                    break;
                case /* int32 maxConcurrentChunks */ 4:
                    message.maxConcurrentChunks = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DownloadContainerOptions, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string containerGuid = 1; */
        if (message.containerGuid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.containerGuid);
        /* string trackerUri = 2; */
        if (message.trackerUri !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.trackerUri);
        /* string destinationDir = 3; */
        if (message.destinationDir !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.destinationDir);
        /* int32 maxConcurrentChunks = 4; */
        if (message.maxConcurrentChunks !== 0)
            writer.tag(4, WireType.Varint).int32(message.maxConcurrentChunks);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.DownloadContainerOptions
 */
export const DownloadContainerOptions = new DownloadContainerOptions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchRequest$Type extends MessageType<SearchRequest> {
    constructor() {
        super("Ui.SearchRequest", [
            { no: 1, name: "trackerUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "query", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SearchRequest>): SearchRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.trackerUri = "";
        message.query = "";
        if (value !== undefined)
            reflectionMergePartial<SearchRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchRequest): SearchRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string trackerUri */ 1:
                    message.trackerUri = reader.string();
                    break;
                case /* string query */ 2:
                    message.query = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: SearchRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string trackerUri = 1; */
        if (message.trackerUri !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.trackerUri);
        /* string query = 2; */
        if (message.query !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.query);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.SearchRequest
 */
export const SearchRequest = new SearchRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UsageRequest$Type extends MessageType<UsageRequest> {
    constructor() {
        super("Ui.UsageRequest", [
            { no: 1, name: "trackerUri", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UsageRequest>): UsageRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.trackerUri = "";
        if (value !== undefined)
            reflectionMergePartial<UsageRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UsageRequest): UsageRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string trackerUri */ 1:
                    message.trackerUri = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UsageRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string trackerUri = 1; */
        if (message.trackerUri !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.trackerUri);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Ui.UsageRequest
 */
export const UsageRequest = new UsageRequest$Type();
/**
 * @generated ServiceType for protobuf service Ui.Ui
 */
export const Ui = new ServiceType("Ui.Ui", [
    { name: "PickObjectPath", options: {}, I: ObjectOptions, O: Path },
    { name: "GetObjectPath", options: {}, I: Hash, O: Path },
    { name: "RevealObjectInExplorer", options: {}, I: Hash, O: Empty },
    { name: "GetAllContainers", options: {}, I: Empty, O: GuidList },
    { name: "GetDownloadProgress", options: {}, I: Hash, O: Progress },
    { name: "GetContainerObjects", options: {}, I: Guid, O: ObjectList },
    { name: "GetContainerRootHash", options: {}, I: Guid, O: Hash },
    { name: "ImportObjectFromDisk", options: {}, I: ObjectFromDiskOptions, O: Guid },
    { name: "PublishToTracker", options: {}, I: PublishingOptions, O: Empty },
    { name: "DownloadContainer", options: {}, I: DownloadContainerOptions, O: Empty },
    { name: "PauseContainerDownload", options: {}, I: Guid, O: Empty },
    { name: "ResumeContainerDownload", options: {}, I: Guid, O: Empty },
    { name: "CopyToClipboard", options: {}, I: String$, O: Empty },
    { name: "SearchForObjects", serverStreaming: true, options: {}, I: SearchRequest, O: SearchResponse },
    { name: "GetDataUsage", options: {}, I: UsageRequest, O: DataUsage }
]);
