"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

export default function BookCallSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="book-call" className="py-12 md:py-16 px-6">
      <div className="max-w-[700px] mx-auto text-center" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-3 animate-on-scroll">
          See if you qualify.
        </h2>
        <p className="text-base text-text-muted mb-8 animate-on-scroll">
          30 minutes with Chirag. No deck, no pressure. You&apos;ll answer a
          few quick questions when you book to see if you qualify, so the call
          is useful from minute one.
        </p>

        {/* Calendly embed area */}
        <div className="bg-surface border border-border-card rounded-2xl overflow-hidden animate-on-scroll">
          {/* Replace this placeholder with your actual Calendly embed */}
          {/* Example: <iframe src="https://calendly.com/YOUR_LINK" className="w-full" style={{minHeight: '700px'}} frameBorder="0" /> */}
          <div className="p-8 md:p-12">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <p className="text-text-primary font-display font-semibold text-lg mb-2">
              Book a 30-minute call with Chirag
            </p>
            <p className="text-text-muted text-sm mb-6">
              Insert your Calendly link below to enable live booking.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
            >
              Book a 30-minute call with Chirag →
            </a>
          </div>
        </div>

        <p className="mt-5 text-xs text-text-muted animate-on-scroll">
          Worst case, you leave knowing exactly where you stand.
        </p>
      </div>
    </section>
  );
}
