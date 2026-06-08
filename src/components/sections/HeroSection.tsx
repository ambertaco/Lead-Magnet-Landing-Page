"use client";

import { useScrollTo } from "@/hooks/useAnimations";

interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  notionUrl?: string;
  buttonText?: string;
}

export default function HeroSection({
  eyebrow = "Your Audit document is ready",
  title = "Here's your AI Search Visibility Audit.",
  notionUrl = "https://innate-target-ea7.notion.site/The-AI-Search-Visibility-Audit-72a6f3cac0cf8372bd5301530bd5436c?pvs=74",
  buttonText = "Click here to get access to the Audit document"
}: HeroSectionProps) {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-32 md:pb-16 px-6"
    >
      <div className="hero-glow opacity-50"></div>

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Resource delivery - compact, left-aligned feel */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
          {/* Left: resource */}
          <div className="flex-1">
            <p className="uppercase tracking-[0.2em] text-[13px] text-accent font-semibold mb-4">
              {eyebrow}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary leading-[1.15] mb-4">
              {title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href={notionUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                {buttonText}
              </a>
            </div>
          </div>

          {/* Right: nudge to keep reading */}
          <div className="group md:w-[420px] bg-gradient-to-br from-surface via-surface to-accent/5 border border-accent/20 hover:border-accent/40 rounded-2xl p-8 flex-shrink-0 shadow-2xl shadow-accent/5 hover:shadow-accent/15 transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] uppercase tracking-[0.15em] text-accent font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Skip the DIY
            </div>
            
            <h3 className="font-display text-xl md:text-2xl text-text-primary font-extrabold leading-snug mb-4">
              Your buyers are already asking AI who to buy from. <span className="text-accent font-black">We make sure it names you.</span>
            </h3>
            
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              We build end-to-end SEO and AI search programs that turn visibility into measurable pipeline. Stop guessing where you stand and start capturing the highest-intent traffic in your market.
            </p>
            
            <button
              onClick={() => scrollTo("qualifying-form")}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white text-base font-bold py-4 px-6 rounded-xl transition-all duration-200 cursor-pointer w-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book a 30-minute call with Chirag</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
