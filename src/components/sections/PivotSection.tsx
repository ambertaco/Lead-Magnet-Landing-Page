"use client";

import { useScrollTo } from "@/hooks/useAnimations";
import { useScrollAnimation } from "@/hooks/useAnimations";

export default function PivotSection() {
  const scrollTo = useScrollTo();
  const sectionRef = useScrollAnimation();

  return (
    <section id="pivot" className="py-20 md:py-28 px-6 bg-surface-alt">
      <div className="max-w-[800px] mx-auto" ref={sectionRef}>
        <p className="uppercase tracking-[0.2em] text-[13px] text-accent font-semibold mb-4 animate-on-scroll">
          A QUICK NOTE FROM CHIRAG
        </p>

        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8 animate-on-scroll">
          You&apos;ve got the audit. Here&apos;s the honest truth about it.
        </h2>

        <div className="space-y-4 mb-10 animate-on-scroll">
          <p className="text-lg text-text-muted leading-relaxed">
            That audit is the real thing. If you work through all ten points,
            you&apos;ll know more about your AI search position than most
            companies in your category.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            But I also know how this goes: you&apos;re a busy operator, the tab
            stays open, and the audit never gets run.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            So here&apos;s the offer. Give me 15 minutes and my team will run
            all ten points on your brand and your competitors, then hand you a
            prioritized list of exactly what to fix first.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            Your buyers are already asking AI which brand to choose. Right now,
            it probably isn&apos;t naming you. Let&apos;s change that.
          </p>
        </div>

        <button
          onClick={() => scrollTo("qualifying-form")}
          className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-lg animate-on-scroll"
        >
          Book my 15-minute call
        </button>

        <p className="mt-4 text-sm text-text-muted animate-on-scroll">
          No deck. No pressure. Worst case, you leave knowing exactly where you
          stand.
        </p>

        <div className="mt-10 bg-surface border border-border-card rounded-2xl p-8 text-center animate-on-scroll">
          <p className="text-text-muted text-sm">
            [Optional: 2 to 3 minute video of Chirag walking through what the
            call covers]
          </p>
        </div>
      </div>
    </section>
  );
}
