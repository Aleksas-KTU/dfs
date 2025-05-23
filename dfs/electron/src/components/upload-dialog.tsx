"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { FolderUp } from "lucide-react";
import { GetNodeService } from "@/IpcService/GetNodeService";
import log from "electron-log/renderer";

interface UploadDialogProps {
  readonly open: boolean;
  readonly onOpenChange: (open: boolean) => void;
}

export function UploadDialog({ open, onOpenChange }: UploadDialogProps) {
  const handleFileSelect = async () => {
    log.info("picking...");
    const service = await GetNodeService();
    const path = (await window.electronAPI.selectFolder()) ?? "";
    log.info(`got: ${path}`);
    await service.ImportObjectToContainer({ path, chunkSize: 1024 * 1024 });
    log.info(`imported: ${path}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload files</DialogTitle>
          <DialogDescription>
            Select files to upload to your drive
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 border rounded-lg p-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-muted p-4">
              <FolderUp className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Select files to upload</p>
              <p className="text-xs text-muted-foreground mt-1">
                Choose files from your device
              </p>
            </div>
            <Button onClick={handleFileSelect} className="mt-2">
              <FolderUp className="mr-2 h-4 w-4" />
              Choose files
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
