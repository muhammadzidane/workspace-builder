"use client";

import React from "react";

import { Button, Card } from "@/app/_components";
import useStore from "@/app/_lib/_store";
import { formatRupiah } from "@/app/_lib/_utils";

const CheckoutCard = () => {
  const models = useStore((state) => state.models);
  const totalPrice = models.reduce((sum, m) => sum + m.price, 0);

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center p-6">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-slate-800">Checkout</h1>

        {/* Items */}
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

        {/* Total */}
        <Card className="flex justify-between items-center">
          <p className="font-semibold text-slate-800">Total</p>
          <p className="text-xl font-bold text-slate-900">
            {formatRupiah(totalPrice)}
          </p>
        </Card>

        {/* Actions */}
        <div className="flex gap-3 justify-end">
          <Button variant="outline">Back</Button>
          <Button disabled={models.length === 0}>Confirm Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
