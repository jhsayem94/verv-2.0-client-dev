import { TPropertyDetailsStoreSchema } from "@/schema/listing.schema";
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
