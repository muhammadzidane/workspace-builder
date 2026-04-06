"use client";

import React from "react";

import Link from "next/link";

import { Button } from "@/app/_components";

const ActionButtons = () => {
  return (
    <div className="flex gap-3 justify-center">
      <Link href="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
