import { INodeService } from "./types/wrap/INodeService";

export {};

declare global {
  interface Window {
    electronAPI: {
      selectFile: () => Promise<string | null>;
      selectFolder: () => Promise<string | null>;
      writeClipboard: (text: string) => void;
      readClipboard: () => string;
      onAppQuit: (callback: () => void) => void;
      confirmQuit: () => void;
    };
    ipcService: INodeService;
  }
}
