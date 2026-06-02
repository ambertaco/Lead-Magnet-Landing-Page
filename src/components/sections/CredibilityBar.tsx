"use client";

import StatCounter from "@/components/ui/StatCounter";
import { useScrollAnimation } from "@/hooks/useAnimations";

export default function CredibilityBar() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="credibility" className="py-10 md:py-14 px-6">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 animate-on-scroll">
          <StatCounter
            value={10}
            prefix="$"
            suffix="B+"
            label="total revenue across the brands we've worked with"
          />
          <StatCounter
            value={2}
            prefix="$"
            suffix="B+"
            label="driven through search"
          />
          <StatCounter
            value={30}
            suffix="+"
            label="brands in our active portfolio"
          />
        </div>
        <p className="text-center text-text-muted text-sm mt-8 max-w-[700px] mx-auto animate-on-scroll">
          The organic brains behind fast-growing brands across B2B SaaS,
          eCommerce, healthcare, and fintech, including some of the most
          regulated categories in search.
        </p>
      </div>
    </section>
  );
}
