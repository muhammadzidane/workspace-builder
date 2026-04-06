import React from "react";

import { Metadata } from "next";

import { ItemCard, TotalCard } from "./_components";
import ActionButtons from "./_components/action-buttons";

export const metadata: Metadata = {
  description:
    "Complete your rental checkout securely with Monis Rent. Review your selected items, pricing, and confirm your order in a fast and simple process.",
  keywords: [
    "checkout",
    "rental checkout",
    "Monis Rent",
    "3D furniture rental",
    "product rental",
    "secure payment",
  ],
  openGraph: {
    description:
      "Review your selected items and complete your rental checkout with Monis Rent.",
    siteName: "Monis Rent",
    title: "Checkout | Monis Rent",
    type: "website",
  },
  robots: {
    follow: true,
    index: true,
  },
  title: "Checkout | Monis Rent",
  twitter: {
    card: "summary_large_image",
    description:
      "Review your selected items and complete your rental checkout with Monis Rent.",
    title: "Checkout | Monis Rent",
  },
};

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
