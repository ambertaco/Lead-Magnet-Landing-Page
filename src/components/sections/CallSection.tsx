"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const checkItems = [
  "A deep dive into how our full SEO and AI search programs drive measurable revenue, not just traffic.",
  "A look at our proprietary playbooks for ranking in ChatGPT, Perplexity, and Google AI Overviews.",
  "An honest assessment of whether our engagement is the right fit for your current growth stage.",
  "A clear picture of what it looks like to partner with senior strategists who own your organic outcomes.",
];

export default function CallSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="call" className="py-12 md:py-16 px-6 bg-surface-alt">
      <div className="max-w-[800px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-3 animate-on-scroll">
          What happens on the 30 minutes call.
        </h2>
        <p className="text-base text-text-muted text-center mb-8 animate-on-scroll">
          This is not a pitch with forty slides. Here&apos;s what you walk away
          with, whether or not we ever work together:
        </p>

        <div className="space-y-4 mb-8 animate-on-scroll">
          {checkItems.map((item, i) => (
            <div key={i} className="flex gap-3">
              <svg
                className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-base text-text-muted leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
