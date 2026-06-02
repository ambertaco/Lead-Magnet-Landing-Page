"use client";

import { useState, useEffect } from "react";
import { useScrollTo } from "@/hooks/useAnimations";

export default function Header() {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="Taco home">
          <span className="font-display text-xl font-extrabold text-text-primary tracking-tight">
            taco
          </span>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://innate-target-ea7.notion.site/The-AI-Search-Visibility-Audit-72a6f3cac0cf8372bd5301530bd5436c?pvs=74"
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center justify-center border border-text-muted/30 hover:border-accent text-text-primary text-sm font-semibold py-2 px-5 rounded-lg transition-all duration-200"
          >
            Open the audit
          </a>
          <button
            onClick={() => scrollTo("book-call")}
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2 px-5 rounded-lg transition-all duration-200 cursor-pointer"
          >
            Book a call
          </button>
        </div>
      </div>
    </header>
  );
}
