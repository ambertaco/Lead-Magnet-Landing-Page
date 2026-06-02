"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const painCards = [
  {
    quote: "We have no idea if ChatGPT even knows we exist.",
    explanation:
      "You can't see whether you show up where your buyers now start their research. Your rank-tracker doesn't measure it.",
  },
  {
    quote:
      "Our paid CAC keeps going up, and we need organic to actually work.",
    explanation:
      "Every month you lean harder on paid, your cost to acquire a customer climbs. You need a channel that compounds instead of resetting to zero the day you stop paying.",
  },
  {
    quote:
      "Traffic goes up, rankings go up, and my CEO says: that's nice, but what did it do for revenue?",
    explanation:
      "You've been sold traffic and rankings before. What you need is search work that connects to pipeline, in a way you can show the board.",
  },
  {
    quote:
      "AI Overviews are changing our traffic and we don't know how to respond.",
    explanation:
      "The results page is being rewritten in real time, and the old SEO playbook doesn't fully cover it.",
  },
];

export default function ProblemSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="problem" className="py-12 md:py-16 px-6 bg-surface-alt">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-3 animate-on-scroll">
          You&apos;re probably here because one of these is true.
        </h2>
        <p className="text-base text-text-muted text-center mb-8 animate-on-scroll">
          These are the exact things the marketing leaders I talk to say, almost
          word for word.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {painCards.map((card, i) => (
            <div
              key={i}
              className="group bg-surface border border-border-card rounded-2xl p-6 md:p-8 hover:border-text-muted/30 transition-colors duration-300 animate-on-scroll"
            >
              <svg
                className="w-6 h-6 text-accent/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-lg md:text-xl font-medium text-text-primary leading-snug mb-4">
                &ldquo;{card.quote}&rdquo;
              </blockquote>
              <p className="text-text-muted text-sm leading-relaxed">
                {card.explanation}
              </p>
            </div>
          ))}
        </div>
        <p className="text-base text-text-muted text-center mt-8 animate-on-scroll">
          If you nodded at even one of those, you&apos;re exactly who we built
          this for.
        </p>
      </div>
    </section>
  );
}
