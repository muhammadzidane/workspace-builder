/* eslint-disable sonarjs/pseudo-random */
"use client";

import { Suspense, useState } from "react";

import { Model, Room, Scene } from "@/app/_components";

import { MODEL_CATALOG } from "./_lib/constants";
import { groupedModels } from "./_lib/utils";

interface ModelData {
  id: number;
  position: [number, number, number];
  url: string;
}

const Home = () => {
  const [dragging, setDragging] = useState(false);
  const [models, setModels] = useState<ModelData[]>([]);

  const addModel = (modelKey: keyof typeof MODEL_CATALOG) => {
    // eslint-disable-next-line security/detect-object-injection
    const model = MODEL_CATALOG[modelKey];

    setModels((prev) => [
      ...prev,
      {
        category: model.category,
        id: Date.now(),
        name: model.name,
        position: [Math.random() * 4 - 2, 0, Math.random() * 4 - 2],
        price: model.price,
        url: model.url,
      },
    ]);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 p-5 flex flex-col gap-6 border-r bg-white">
        <h2 className="text-lg font-semibold text-slate-800">Catalog</h2>

        <div className="flex flex-col gap-6 overflow-y-auto">
          {Object.entries(groupedModels).map(([category, items]) => (
            <div key={category}>
              {/* Category title */}
              <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                {category}
              </h3>

              {/* Items */}
              <div className="grid gap-3">
                {items.map((item) => (
                  <button
                    onClick={() =>
                      addModel(item.key as keyof typeof MODEL_CATALOG)
                    }
                    className="flex flex-col items-start rounded-xl border p-3 bg-slate-50 hover:bg-slate-100 hover:shadow transition"
                    key={item.key}
                  >
                    <span className="font-medium text-slate-800">
                      {item.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      ${item.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-auto space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-800">Controls</p>
          <p>• Drag to move</p>
          <p>• Shift/Ctrl/Alt + drag to rotate</p>
          <p>• Scroll to fine rotate</p>
        </div>
      </div>

      {/* Scene */}
      <div className="flex-1 relative">
        {/* Empty state hint */}
        {models.length === 0 && (
          <div className="absolute top-4 left-4 text-sm text-gray-500 z-10">
            No models yet — add one from the sidebar
          </div>
        )}

        <Scene dragging={dragging}>
          {models.map((model) => (
            <Suspense fallback={null} key={model.id}>
              <Model
                position={model.position}
                setDragging={setDragging}
                url={model.url}
              />
            </Suspense>
          ))}
          <Room />
        </Scene>
      </div>
    </div>
  );
};

export default Home;
