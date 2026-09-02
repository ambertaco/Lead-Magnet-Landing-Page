"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
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
          <Image src="/taco-logo.jpg" alt="Taco Logo" width={40} height={40} className="rounded" />
        </a>

        <div className="flex items-center gap-3">
          {/* Action buttons removed per user request */}
        </div>
      </div>
    </header>
  );
}
