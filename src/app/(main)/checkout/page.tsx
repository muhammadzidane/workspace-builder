import React from "react";

import { Metadata } from "next";

import { ItemCard, TotalCard } from "./_components";
import ActionButtons from "./_components/action-buttons";
import { meta } from "./_lib/meta";

export const metadata: Metadata = meta;

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex justify-center p-6">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <h1 className="text-2xl font-semibold text-slate-800">Checkout</h1>
        <ItemCard />
        <TotalCard />
        <ActionButtons />
      </div>
    </div>
  );
};

export default CheckoutPage;
