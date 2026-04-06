"use client";

import React from "react";

import { Card } from "@/app/_components";
import useStore from "@/app/_lib/_store";
import { formatUSD } from "@/app/_lib/_utils";

const TotalCard = () => {
  const models = useStore((state) => state.models);
  const totalPrice = models.reduce((sum, m) => sum + m.price, 0);

  return (
    <Card className="flex justify-between items-center">
      <p className="font-semibold text-slate-800">Total</p>
      <p className="text-xl font-bold text-slate-900">
        {formatUSD(totalPrice)} / Month
      </p>
    </Card>
  );
};

export default TotalCard;
