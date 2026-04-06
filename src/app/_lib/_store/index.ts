import { create } from "zustand";

import { createModelsSlice, ModelsSlice } from "./_app/model";

type Store = ModelsSlice;

const useStore = create<Store>()((...a) => ({
  ...createModelsSlice(...a),
}));

export default useStore;
