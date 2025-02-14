"use client";

import { Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/extension/file-uploader";
import { ImageUploadIcon } from "@/assets/icons/icons";
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  files: File[] | null;
  setFiles: React.Dispatch<React.SetStateAction<File[] | null>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ files, setFiles }) => {
  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
  };

  return (
    <>
      <FileUploader
        value={files}
        onValueChange={setFiles}
        dropzoneOptions={dropZoneConfig}
        className="relative bg-[#EEF8EB] rounded-lg px-[326px] py-[38px]"
      >
        <FileInput className="outline-dashed outline-1 outline-white">
          <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full space-y-5">
            <ImageUploadIcon width={36} height={36} />
            <p className="text-colorTextLime font-semibold leading-[24px]">
              Drag a photo here, or click &quot;Add Photos&quot; to select your
              photos
            </p>
            <Button
              type="button"
              className="text-white text-sm font-medium leading-[20px] rounded-[8px] bg-colorButton px-10 py-2"
            >
              Add Photo
            </Button>
          </div>
        </FileInput>
        <FileUploaderContent>
          {files &&
            files.length > 0 &&
            files.map((file, i) => (
              <FileUploaderItem key={i} index={i}>
                <Paperclip className="h-4 w-4 stroke-current" />
                <span>{file.name}</span>
              </FileUploaderItem>
            ))}
        </FileUploaderContent>
      </FileUploader>
    </>
  );
};

export default ImageUploader;
