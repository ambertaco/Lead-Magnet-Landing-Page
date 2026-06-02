"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const steps = [
  {
    num: 1,
    title: "Initial call, audit & onboarding",
    desc: "We learn the business deeply, audit your site and your AI-search visibility, and align on what success means in revenue terms.",
  },
  {
    num: 2,
    title: "Competitive analysis & strategy",
    desc: "We map the buying-intent queries worth winning, see who AI cites instead of you, and build the plan.",
  },
  {
    num: 3,
    title: "Execution, optimization & analysis",
    desc: "Content, technical fixes, links, and LLM citation acquisition, run by senior strategists with AI workflows behind them.",
  },
  {
    num: 4,
    title: "Reporting & doubling down",
    desc: "Monthly reviews tied to revenue. We shift budget toward what's working and compound it.",
  },
];

export default function ProcessSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="process" className="py-12 md:py-16 px-6">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-3 animate-on-scroll">
          How working with us looks.
        </h2>
        <p className="text-base text-text-muted text-center mb-10 animate-on-scroll">
          Custom-tailored for each company, but the shape is always the same.
        </p>

        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-border-card"></div>
          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-1/2 top-14 bottom-14 w-[2px] bg-border-card -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative text-center animate-on-scroll"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-extrabold text-accent">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
