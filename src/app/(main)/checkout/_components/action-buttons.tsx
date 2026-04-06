"use client";

import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/app/_components";
import useStore from "@/app/_lib/_store";

const ActionButtons = () => {
  // Hooks
  const router = useRouter();
  const clearModel = useStore((state) => state.clearModel);

  // Handlers
  const handleConfirmCheckout = () => {
    clearModel();
    router.push("/checkout/success");
  };

  return (
    <div className="flex gap-3 justify-end">
      <Link href="/design">
        <Button variant="outline">Back</Button>
      </Link>
      <Button onClick={handleConfirmCheckout}>Confirm Checkout</Button>
    </div>
  );
};

export default ActionButtons;
