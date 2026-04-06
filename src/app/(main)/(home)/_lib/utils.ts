import { MODEL_CATALOG } from "./constants";

export const groupedModels = Object.entries(MODEL_CATALOG).reduce(
  (acc, [key, model]) => {
    if (!acc[model.category]) acc[model.category] = [];
    acc[model.category].push({ key, ...model });
    return acc;
  },
  {} as Record<
    string,
    Array<(typeof MODEL_CATALOG)[keyof typeof MODEL_CATALOG] & { key: string }>
  >,
);
