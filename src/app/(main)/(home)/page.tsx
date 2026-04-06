/* eslint-disable sonarjs/pseudo-random */
"use client";

import { Suspense, useState } from "react";

import { Button, Card, Model, Room, Scene } from "@/app/_components";
import { formatRupiah } from "@/app/_lib/_utils";
import { ModelData } from "@/app/_types";

import { MODEL_CATALOG } from "./_lib/constants";
import { groupedModels } from "./_lib/utils";

const Home = () => {
  // Hooks
  const [dragging, setDragging] = useState(false);
  const [models, setModels] = useState<ModelData[]>([]);

  // Data
  const totalPrice = formatRupiah(
    models.reduce((sum, model) => sum + model.price, 0),
  );

  // Handlers
  const handleAddModel = (modelKey: keyof typeof MODEL_CATALOG) => {
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
                      handleAddModel(item.key as keyof typeof MODEL_CATALOG)
                    }
                    className="cursor-pointer flex flex-col items-start rounded-xl border p-3 bg-slate-50 hover:bg-slate-100 hover:shadow transition"
                    key={item.key}
                  >
                    <span className="font-medium text-slate-800">
                      {item.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {formatRupiah(item.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4 mt-auto">
          <Card className="flex flex-col gap-2">
            <p className="font-semibold text-slate-800">Controls</p>
            <p className="text-xs text-slate-600">• Drag to move</p>
            <p className="text-xs text-slate-600">
              • Shift/Ctrl/Alt + drag to rotate
            </p>
            <p className="text-xs text-slate-600">• Scroll to fine rotate</p>
          </Card>

          <Card>
            <p className="text-sm text-slate-500">Total</p>
            <p className="text-xl font-semibold text-slate-800">{totalPrice}</p>
          </Card>

          <Button size="large">Checkout</Button>
        </div>
      </div>

      {/* Scene */}
      <div className="flex-1 relative">
        {/* Empty state hint */}
        {models.length === 0 && (
          <div className="absolute top-4 left-4 text-sm text-gray-500 z-10">
            No products yet — add one from the sidebar
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
