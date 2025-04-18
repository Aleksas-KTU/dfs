// @generated by protobuf-ts 2.9.6
// @generated from protobuf file "rpc/uiservice.proto" (package "Ui", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Ui } from "./uiservice";
import type { DataUsage } from "../rpc_common";
import type { UsageRequest } from "./uiservice";
import type { SearchResponse } from "../rpc_common";
import type { SearchRequest } from "./uiservice";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { String$ } from "./uiservice";
import type { DownloadContainerOptions } from "./uiservice";
import type { PublishingOptions } from "./uiservice";
import type { ObjectFromDiskOptions } from "./uiservice";
import type { ObjectList } from "../fs/filesystem";
import type { Guid } from "../rpc_common";
import type { Progress } from "./uiservice";
import type { GuidList } from "../rpc_common";
import type { Empty } from "../rpc_common";
import type { Hash } from "../rpc_common";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Path } from "./uiservice";
import type { ObjectOptions } from "./uiservice";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service Ui.Ui
 */
export interface IUiClient {
    /**
     * @generated from protobuf rpc: PickObjectPath(Ui.ObjectOptions) returns (Ui.Path);
     */
    pickObjectPath(input: ObjectOptions, options?: RpcOptions): UnaryCall<ObjectOptions, Path>;
    /**
     * @generated from protobuf rpc: GetObjectPath(rpc_common.Hash) returns (Ui.Path);
     */
    getObjectPath(input: Hash, options?: RpcOptions): UnaryCall<Hash, Path>;
    /**
     * @generated from protobuf rpc: RevealObjectInExplorer(rpc_common.Hash) returns (rpc_common.Empty);
     */
    revealObjectInExplorer(input: Hash, options?: RpcOptions): UnaryCall<Hash, Empty>;
    /**
     * @generated from protobuf rpc: GetAllContainers(rpc_common.Empty) returns (rpc_common.GuidList);
     */
    getAllContainers(input: Empty, options?: RpcOptions): UnaryCall<Empty, GuidList>;
    /**
     * @generated from protobuf rpc: GetDownloadProgress(rpc_common.Hash) returns (Ui.Progress);
     */
    getDownloadProgress(input: Hash, options?: RpcOptions): UnaryCall<Hash, Progress>;
    /**
     * @generated from protobuf rpc: GetContainerObjects(rpc_common.Guid) returns (fs.ObjectList);
     */
    getContainerObjects(input: Guid, options?: RpcOptions): UnaryCall<Guid, ObjectList>;
    /**
     * @generated from protobuf rpc: GetContainerRootHash(rpc_common.Guid) returns (rpc_common.Hash);
     */
    getContainerRootHash(input: Guid, options?: RpcOptions): UnaryCall<Guid, Hash>;
    /**
     * @generated from protobuf rpc: ImportObjectFromDisk(Ui.ObjectFromDiskOptions) returns (rpc_common.Guid);
     */
    importObjectFromDisk(input: ObjectFromDiskOptions, options?: RpcOptions): UnaryCall<ObjectFromDiskOptions, Guid>;
    /**
     * @generated from protobuf rpc: PublishToTracker(Ui.PublishingOptions) returns (rpc_common.Empty);
     */
    publishToTracker(input: PublishingOptions, options?: RpcOptions): UnaryCall<PublishingOptions, Empty>;
    /**
     * @generated from protobuf rpc: DownloadContainer(Ui.DownloadContainerOptions) returns (rpc_common.Empty);
     */
    downloadContainer(input: DownloadContainerOptions, options?: RpcOptions): UnaryCall<DownloadContainerOptions, Empty>;
    /**
     * @generated from protobuf rpc: PauseContainerDownload(rpc_common.Guid) returns (rpc_common.Empty);
     */
    pauseContainerDownload(input: Guid, options?: RpcOptions): UnaryCall<Guid, Empty>;
    /**
     * @generated from protobuf rpc: ResumeContainerDownload(rpc_common.Guid) returns (rpc_common.Empty);
     */
    resumeContainerDownload(input: Guid, options?: RpcOptions): UnaryCall<Guid, Empty>;
    /**
     * @generated from protobuf rpc: CopyToClipboard(Ui.String) returns (rpc_common.Empty);
     */
    copyToClipboard(input: String$, options?: RpcOptions): UnaryCall<String$, Empty>;
    /**
     * @generated from protobuf rpc: SearchForObjects(Ui.SearchRequest) returns (stream rpc_common.SearchResponse);
     */
    searchForObjects(input: SearchRequest, options?: RpcOptions): ServerStreamingCall<SearchRequest, SearchResponse>;
    /**
     * @generated from protobuf rpc: GetDataUsage(Ui.UsageRequest) returns (rpc_common.DataUsage);
     */
    getDataUsage(input: UsageRequest, options?: RpcOptions): UnaryCall<UsageRequest, DataUsage>;
}
/**
 * @generated from protobuf service Ui.Ui
 */
export class UiClient implements IUiClient, ServiceInfo {
    typeName = Ui.typeName;
    methods = Ui.methods;
    options = Ui.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: PickObjectPath(Ui.ObjectOptions) returns (Ui.Path);
     */
    pickObjectPath(input: ObjectOptions, options?: RpcOptions): UnaryCall<ObjectOptions, Path> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ObjectOptions, Path>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetObjectPath(rpc_common.Hash) returns (Ui.Path);
     */
    getObjectPath(input: Hash, options?: RpcOptions): UnaryCall<Hash, Path> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<Hash, Path>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: RevealObjectInExplorer(rpc_common.Hash) returns (rpc_common.Empty);
     */
    revealObjectInExplorer(input: Hash, options?: RpcOptions): UnaryCall<Hash, Empty> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<Hash, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAllContainers(rpc_common.Empty) returns (rpc_common.GuidList);
     */
    getAllContainers(input: Empty, options?: RpcOptions): UnaryCall<Empty, GuidList> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<Empty, GuidList>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetDownloadProgress(rpc_common.Hash) returns (Ui.Progress);
     */
    getDownloadProgress(input: Hash, options?: RpcOptions): UnaryCall<Hash, Progress> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<Hash, Progress>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetContainerObjects(rpc_common.Guid) returns (fs.ObjectList);
     */
    getContainerObjects(input: Guid, options?: RpcOptions): UnaryCall<Guid, ObjectList> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<Guid, ObjectList>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetContainerRootHash(rpc_common.Guid) returns (rpc_common.Hash);
     */
    getContainerRootHash(input: Guid, options?: RpcOptions): UnaryCall<Guid, Hash> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<Guid, Hash>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ImportObjectFromDisk(Ui.ObjectFromDiskOptions) returns (rpc_common.Guid);
     */
    importObjectFromDisk(input: ObjectFromDiskOptions, options?: RpcOptions): UnaryCall<ObjectFromDiskOptions, Guid> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<ObjectFromDiskOptions, Guid>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: PublishToTracker(Ui.PublishingOptions) returns (rpc_common.Empty);
     */
    publishToTracker(input: PublishingOptions, options?: RpcOptions): UnaryCall<PublishingOptions, Empty> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<PublishingOptions, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DownloadContainer(Ui.DownloadContainerOptions) returns (rpc_common.Empty);
     */
    downloadContainer(input: DownloadContainerOptions, options?: RpcOptions): UnaryCall<DownloadContainerOptions, Empty> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<DownloadContainerOptions, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: PauseContainerDownload(rpc_common.Guid) returns (rpc_common.Empty);
     */
    pauseContainerDownload(input: Guid, options?: RpcOptions): UnaryCall<Guid, Empty> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<Guid, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ResumeContainerDownload(rpc_common.Guid) returns (rpc_common.Empty);
     */
    resumeContainerDownload(input: Guid, options?: RpcOptions): UnaryCall<Guid, Empty> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<Guid, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: CopyToClipboard(Ui.String) returns (rpc_common.Empty);
     */
    copyToClipboard(input: String$, options?: RpcOptions): UnaryCall<String$, Empty> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<String$, Empty>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SearchForObjects(Ui.SearchRequest) returns (stream rpc_common.SearchResponse);
     */
    searchForObjects(input: SearchRequest, options?: RpcOptions): ServerStreamingCall<SearchRequest, SearchResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<SearchRequest, SearchResponse>("serverStreaming", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetDataUsage(Ui.UsageRequest) returns (rpc_common.DataUsage);
     */
    getDataUsage(input: UsageRequest, options?: RpcOptions): UnaryCall<UsageRequest, DataUsage> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<UsageRequest, DataUsage>("unary", this._transport, method, opt, input);
    }
}
