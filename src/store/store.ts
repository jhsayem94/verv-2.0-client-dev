/* eslint-disable @typescript-eslint/no-explicit-any */
import { TPropertyDetailsStoreSchema } from "@/schema/listing.schema";
// import { IFileState } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type TPropertyDetailsState = Partial<TPropertyDetailsStoreSchema> & {
  setData: (data: Partial<TPropertyDetailsStoreSchema>) => void;
};

export const usePropertyDetailsStore = create<TPropertyDetailsState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: "property-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// export const useFileStore = create(
//   persist<IFileState>(
//     (set) => ({
//       files: [],
//       setFilesToStore: (files) => set({ files }),
//       clearFilesFromStore: () => set({ files: [] }),
//     }),
//     {
//       name: "file-storage",
//       storage: {
//         getItem: (key) => {
//           const stored = sessionStorage.getItem(key);
//           if (!stored) return null;
//           const parsed = JSON.parse(stored);
//           if (parsed?.state?.files) {
//             // Convert stored file metadata back into File objects
//             return {
//               state: {
//                 files: parsed.state.files.map(
//                   (file: any) =>
//                     new File([file], file.name, { type: file.type })
//                 ),
//               },
//             };
//           }
//           return parsed;
//         },
//         setItem: (key, value) =>
//           sessionStorage.setItem(key, JSON.stringify(value)),
//         removeItem: (key) => sessionStorage.removeItem(key),
//       },
//     }
//   )
// );
