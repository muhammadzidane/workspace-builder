"use client";

import React from "react";

const HowItWorks = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h3 className="text-2xl font-semibold mb-8 text-center">How it works</h3>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-2xl border">
          <h4 className="font-semibold mb-2">1. Choose Furniture</h4>
          <p className="text-sm text-gray-600">
            Select desks, chairs, monitors, and accessories.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <h4 className="font-semibold mb-2">2. Customize Layout</h4>
          <p className="text-sm text-gray-600">
            Arrange items visually in your workspace.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <h4 className="font-semibold mb-2">3. Rent Instantly</h4>
          <p className="text-sm text-gray-600">
            Confirm your setup and get it delivered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
