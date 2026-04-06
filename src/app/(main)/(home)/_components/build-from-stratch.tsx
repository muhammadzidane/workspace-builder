"use client";

import React from "react";

import { Button } from "@/app/_components";

const BuildFromStrach = () => {
  return (
    <section className="px-6 py-12 text-center bg-white border-t">
      <h3 className="text-2xl font-semibold mb-4">Or build from scratch</h3>
      <p className="text-gray-600 mb-6">
        Start with a blank canvas and design your workspace freely.
      </p>
      <Button>Open Designer</Button>
    </section>
  );
};

export default BuildFromStrach;
