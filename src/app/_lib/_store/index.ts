import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createModelsSlice, ModelsSlice } from "./_app/model";

type Store = ModelsSlice;

const useStore = create<Store>()(
  persist(
    (...a) => ({
      ...createModelsSlice(...a),
    }),
    {
      name: "storage",
    },
  ),
);

export default useStore;
