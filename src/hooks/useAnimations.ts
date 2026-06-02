"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll(".animate-on-scroll");
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCountUp(
  end: number,
  duration: number = 2000,
  prefix: string = "",
  suffix: string = ""
) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const el = ref.current;
            if (!el) return;

            const startTime = performance.now();

            function animate(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(eased * end);

              if (el) {
                el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            }

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, prefix, suffix]);

  return ref;
}

export function useScrollTo() {
  const scrollToElement = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return scrollToElement;
}
