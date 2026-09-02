"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { useScrollAnimation } from "@/hooks/useAnimations";

export default function QualifyingForm() {
  const sectionRef = useScrollAnimation();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).Calendly) {
      try {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/taco-digital/30min-call-with-chirag?hide_gdpr_banner=1",
          parentElement: document.getElementById("calendly-embed-container"),
        });
      } catch (e) {
        console.error("Failed to initialize Calendly inline widget:", e);
      }
    }
  }, [scriptLoaded]);

  return (
    <section id="qualifying-form" className="py-20 md:py-28 px-6 bg-surface-alt">
      <div className="max-w-[700px] mx-auto text-center" ref={sectionRef}>
        <div className="animate-on-scroll">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Book a 1-on-1 Strategy Call
          </h2>
          <p className="text-lg text-text-muted mb-8">
            Grab a time below. I&apos;ll come prepared with a custom look at your AI search visibility.
          </p>
          {/* Calendly Inline Widget */}
          <div className="w-full bg-surface border border-border-card rounded-2xl overflow-hidden mt-6 shadow-xl relative" style={{ minHeight: "700px" }}>
            <div
              id="calendly-embed-container"
              className="w-full"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
              onLoad={() => setScriptLoaded(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
