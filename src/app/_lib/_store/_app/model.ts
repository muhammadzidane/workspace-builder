import { ModelData } from "@/app/_types";

import { StateCreator } from "zustand";

export type ModelsSlice = {
  addModel: (model: ModelData) => void;
  clearModel: () => void;
  models: ModelData[];
};

export const createModelsSlice: StateCreator<
  ModelsSlice,
  [],
  [],
  ModelsSlice
> = (set) => ({
  addModel: (model) =>
    set((state) => ({
      models: [...state.models, model],
    })),

  clearModel: () => set({ models: [] }),

  models: [],
});
