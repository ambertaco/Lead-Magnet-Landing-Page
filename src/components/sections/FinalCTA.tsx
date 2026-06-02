"use client";

import { useScrollTo, useScrollAnimation } from "@/hooks/useAnimations";

export default function FinalCTA() {
  const scrollTo = useScrollTo();
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="final-cta"
      className="relative py-12 md:py-16 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-accent/3 pointer-events-none" />

      <div
        className="relative z-10 max-w-[600px] mx-auto text-center"
        ref={sectionRef}
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4 animate-on-scroll">
          Want to know if your brand shows up where your buyers are now looking?
        </h2>
        <p className="text-base text-text-muted mb-6 animate-on-scroll">
          Book 30 minutes. I&apos;ll come prepared with a real look at your AI
          search visibility, and you&apos;ll leave with a clear next step
          whether or not we work together.
        </p>
        <div className="animate-on-scroll">
          <button
            onClick={() => scrollTo("qualifying-form")}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base cursor-pointer"
          >
            Book a 30-minute call with Chirag
          </button>
        </div>
        <p className="mt-4 text-xs text-text-muted animate-on-scroll">
          No deck. No pressure. Worst case, you learn exactly where you stand.
        </p>
      </div>
    </section>
  );
}
