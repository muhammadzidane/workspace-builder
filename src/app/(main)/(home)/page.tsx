import React from "react";

import { TemplateCard } from "@/app/_components";

import { BuildFromStrach, HeroSection, HowItWorks } from "./_components";
import { TEMPLATES } from "./_lib/constants";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Templates Section */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Choose a Template</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEMPLATES.map((tpl, idx) => (
            <TemplateCard
              desc={tpl.desc}
              image={tpl.image}
              key={idx}
              title={tpl.title}
            />
          ))}
        </div>
      </section>

      {/* Build From Scratch */}
      <BuildFromStrach />

      {/* How it works */}
      <HowItWorks />
    </>
  );
};

export default HomePage;
