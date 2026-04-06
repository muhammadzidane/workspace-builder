"use client";

import React from "react";

import { Card } from "@/app/_components";
import useStore from "@/app/_lib/_store";
import { formatRupiah } from "@/app/_lib/_utils";

const ItemCard = () => {
  // Hooks
  const models = useStore((state) => state.models);

  return (
    <Card className="flex flex-col gap-4">
      <h2 className="font-semibold text-slate-700">Order Summary</h2>

      {models.length === 0 ? (
        <p className="text-sm text-slate-500">No items in your cart.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {models.map((model) => (
            <div
              className="flex justify-between items-center border-b pb-2"
              key={model.id}
            >
              <div>
                <p className="font-medium text-slate-800">{model.name}</p>
              </div>
              <p className="text-slate-700 font-medium">
                {formatRupiah(model.price)}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default ItemCard;
