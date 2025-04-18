// @generated by protobuf-ts 2.9.6
// @generated from protobuf file "rpc_common.proto" (package "rpc_common", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * :)
 *
 * @generated from protobuf message rpc_common.Empty
 */
export interface Empty {
}
/**
 * @generated from protobuf message rpc_common.Guid
 */
export interface Guid {
    /**
     * @generated from protobuf field: string guid = 1;
     */
    guid: string;
}
/**
 * @generated from protobuf message rpc_common.GuidList
 */
export interface GuidList {
    /**
     * @generated from protobuf field: repeated string guid = 1;
     */
    guid: string[];
}
/**
 * @generated from protobuf message rpc_common.Hash
 */
export interface Hash {
    /**
     * @generated from protobuf field: bytes data = 1;
     */
    data: Uint8Array;
}
/**
 * @generated from protobuf message rpc_common.SearchResponse
 */
export interface SearchResponse {
    /**
     * @generated from protobuf field: string guid = 1;
     */
    guid: string;
    /**
     * @generated from protobuf field: repeated bytes hash = 2;
     */
    hash: Uint8Array[];
}
/**
 * @generated from protobuf message rpc_common.DataUsage
 */
export interface DataUsage {
    /**
     * @generated from protobuf field: int64 upload = 1;
     */
    upload: bigint;
    /**
     * @generated from protobuf field: int64 download = 2;
     */
    download: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("rpc_common.Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
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
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Guid$Type extends MessageType<Guid> {
    constructor() {
        super("rpc_common.Guid", [
            { no: 1, name: "guid", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Guid>): Guid {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.guid = "";
        if (value !== undefined)
            reflectionMergePartial<Guid>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Guid): Guid {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string guid */ 1:
                    message.guid = reader.string();
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
    internalBinaryWrite(message: Guid, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string guid = 1; */
        if (message.guid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.guid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.Guid
 */
export const Guid = new Guid$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GuidList$Type extends MessageType<GuidList> {
    constructor() {
        super("rpc_common.GuidList", [
            { no: 1, name: "guid", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<GuidList>): GuidList {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.guid = [];
        if (value !== undefined)
            reflectionMergePartial<GuidList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GuidList): GuidList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string guid */ 1:
                    message.guid.push(reader.string());
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
    internalBinaryWrite(message: GuidList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated string guid = 1; */
        for (let i = 0; i < message.guid.length; i++)
            writer.tag(1, WireType.LengthDelimited).string(message.guid[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.GuidList
 */
export const GuidList = new GuidList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Hash$Type extends MessageType<Hash> {
    constructor() {
        super("rpc_common.Hash", [
            { no: 1, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<Hash>): Hash {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.data = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<Hash>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Hash): Hash {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes data */ 1:
                    message.data = reader.bytes();
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
    internalBinaryWrite(message: Hash, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes data = 1; */
        if (message.data.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.Hash
 */
export const Hash = new Hash$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchResponse$Type extends MessageType<SearchResponse> {
    constructor() {
        super("rpc_common.SearchResponse", [
            { no: 1, name: "guid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<SearchResponse>): SearchResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.guid = "";
        message.hash = [];
        if (value !== undefined)
            reflectionMergePartial<SearchResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SearchResponse): SearchResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string guid */ 1:
                    message.guid = reader.string();
                    break;
                case /* repeated bytes hash */ 2:
                    message.hash.push(reader.bytes());
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
    internalBinaryWrite(message: SearchResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string guid = 1; */
        if (message.guid !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.guid);
        /* repeated bytes hash = 2; */
        for (let i = 0; i < message.hash.length; i++)
            writer.tag(2, WireType.LengthDelimited).bytes(message.hash[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.SearchResponse
 */
export const SearchResponse = new SearchResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DataUsage$Type extends MessageType<DataUsage> {
    constructor() {
        super("rpc_common.DataUsage", [
            { no: 1, name: "upload", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "download", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<DataUsage>): DataUsage {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.upload = 0n;
        message.download = 0n;
        if (value !== undefined)
            reflectionMergePartial<DataUsage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DataUsage): DataUsage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 upload */ 1:
                    message.upload = reader.int64().toBigInt();
                    break;
                case /* int64 download */ 2:
                    message.download = reader.int64().toBigInt();
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
    internalBinaryWrite(message: DataUsage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 upload = 1; */
        if (message.upload !== 0n)
            writer.tag(1, WireType.Varint).int64(message.upload);
        /* int64 download = 2; */
        if (message.download !== 0n)
            writer.tag(2, WireType.Varint).int64(message.download);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message rpc_common.DataUsage
 */
export const DataUsage = new DataUsage$Type();
