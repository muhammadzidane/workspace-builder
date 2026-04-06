"use client";

import React from "react";

import { Button } from "@/app/_components";

const HeroSection = () => {
  return (
    <section className="px-6 py-16 text-center bg-linear-to-b from-white to-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Design your workspace. Rent it instantly.
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Build your ideal office setup visually — choose desks, chairs, monitors,
        and accessories, then rent everything in one click.
      </p>
      <div className="flex justify-center gap-4">
        <Button>Start Designing</Button>
        <Button variant="outline">View Templates</Button>
      </div>
    </section>
  );
};

export default HeroSection;
