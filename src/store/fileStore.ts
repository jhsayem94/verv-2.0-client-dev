/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { openDB } from "idb";
import { IFileStoreState, IStoredFile } from "@/types";

const DB_NAME = process.env.NEXT_PUBLIC_DB_NAME as string;
const STORE_NAME = process.env.NEXT_PUBLIC_STORE_NAME as string;

// Initialize IndexedDB
const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

// Convert File to ArrayBuffer for IndexedDB storage
const fileToArrayBuffer = (file: File): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target?.result as ArrayBuffer);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

// Zustand Store
const useFileStore = create<IFileStoreState>((set) => ({
  files: [],

  setFiles: async (files: File[]) => {
    const db = await initDB();
    const storedFiles: IStoredFile[] = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await fileToArrayBuffer(file); // Convert to ArrayBuffer
        return {
          fileName: file.name,
          fileType: file.type,
          fileData: arrayBuffer,
        };
      })
    );

    await db.put(STORE_NAME, storedFiles, "uploadedFiles"); // Store file data in IndexedDB
    set({ files: storedFiles });
  },

  loadFiles: async () => {
    const db = await initDB();
    const storedFiles = (await db.get(STORE_NAME, "uploadedFiles")) || [];

    const reconstructedFiles = storedFiles.map(
      (file: { fileData: BlobPart; fileType: any; fileName: string }) => {
        const blob = new Blob([file.fileData], { type: file.fileType });
        const reconstructedFile = new File([blob], file.fileName, {
          type: file.fileType,
        }); // ✅ Convert back to File
        const fileURL = URL.createObjectURL(blob); // Generate URL for preview

        return { ...file, file: reconstructedFile, fileURL };
      }
    );

    set({ files: reconstructedFiles });
  },

  clearFiles: async () => {
    const db = await initDB();
    await db.delete(STORE_NAME, "uploadedFiles");
    set({ files: [] });
  },
}));

export default useFileStore;
