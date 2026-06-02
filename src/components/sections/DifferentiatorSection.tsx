"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

export default function DifferentiatorSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="differentiator" className="py-12 md:py-16 px-6">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-8 animate-on-scroll">
          Why brands choose us over a generalist agency.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-surface border border-border-card rounded-2xl p-5 md:p-6 animate-on-scroll">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary mb-2">
              AI search is all we do.
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              No paid, no affiliate, no social side-projects. Search and AI
              search are the whole business. I built the agency I wish I could
              have hired as a CMO, one that goes deep instead of spreading thin
              across ten channels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface border border-border-card rounded-2xl p-5 md:p-6 animate-on-scroll">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary mb-2">
              You get the lessons from 30+ brands.
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We run search and AI-search programs across a portfolio of more
              than thirty businesses. When we learn what&apos;s working in one
              regulated, competitive category, you get it applied to yours,
              instead of paying for someone to learn on your budget.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface border border-border-card rounded-2xl p-5 md:p-6 animate-on-scroll">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-bold text-text-primary mb-2">
              AI workflows plus senior humans.
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We pair AI agents and workflows (built in tools like n8n) with
              experienced strategists and content specialists. You get the
              throughput of three or four hires, link acquisition, content,
              AI-visibility dashboards, technical fixes, without the headcount,
              and a senior strategist who owns the outcome.
            </p>
          </div>
        </div>

        {/* Deal-killer band */}
        <div className="mt-6 bg-surface border border-border-card rounded-2xl p-6 md:p-8 animate-on-scroll">
          <p className="text-lg md:text-xl font-bold text-text-primary mb-2">
            The part most agencies dodge: we report revenue, not rankings.
          </p>
          <p className="text-base text-text-muted leading-relaxed">
            Every month you see how much organic-influenced revenue search is
            driving and which buying-intent answers you&apos;re winning, not a
            wall of vanity metrics. Content and rankings are the means. Revenue
            is the point.
          </p>
        </div>
      </div>
    </section>
  );
}
