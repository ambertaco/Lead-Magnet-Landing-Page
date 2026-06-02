"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";

const results = [
  {
    industry: "Healthcare eCommerce",
    pillColor: "bg-[#FF00A6]/15 text-[#FF4DC4]",
    whatWeDid:
      "Rebuilt and pruned their content, fixed the technical foundation (404s, broken redirects), and concentrated links on revenue pages.",
    outcome: "$20K/mo to $250K/mo in 8 months. 180+ AI Overview answers.",
  },
  {
    industry: "B2B Services",
    pillColor: "bg-[#4FB7B3]/15 text-[#4FB7B3]",
    whatWeDid:
      "Won the bottom-of-funnel queries their buyers actually search, instead of chasing vanity traffic.",
    outcome: "5-6 leads/mo to 30-40 leads/mo over 8 months.",
  },
  {
    industry: "Healthcare SaaS",
    pillColor: "bg-[#FF00A6]/15 text-[#FF4DC4]",
    whatWeDid:
      "Built an AI-visibility dashboard across 100+ buying-intent prompts, then created and optimized content to win them.",
    outcome: "AI-answer visibility: 7 to 36. Conversions rose alongside.",
  },
  {
    industry: "DTC / Consumer",
    pillColor: "bg-[#F59E0B]/15 text-[#F59E0B]",
    whatWeDid:
      "Technical cleanup, optimized product and collection pages, and a high-authority link-building campaign.",
    outcome: "551% increase in search inclusion. 66% rise in organic revenue.",
  },
  {
    industry: "Health & Wellness",
    pillColor: "bg-[#4ADE80]/15 text-[#4ADE80]",
    whatWeDid:
      "Created multiple collection-page variations to capture different buying intents, plus citation outreach to third-party listicles AI engines pull from.",
    outcome: "Won a wide set of bottom-of-funnel queries driving meaningful new revenue.",
  },
  {
    industry: "B2B SaaS",
    pillColor: "bg-[#4FB7B3]/15 text-[#4FB7B3]",
    whatWeDid:
      "End-to-end search and AI-search program, managed to revenue rather than output.",
    outcome: "25-30% of new leads now come from search work we run.",
  },
];

export default function ResultsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="results" className="py-12 md:py-16 px-6 bg-surface-alt">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-3 animate-on-scroll">
          What this looks like when it works.
        </h2>
        <p className="text-base text-text-muted text-center mb-8 animate-on-scroll">
          Real engagements across the industries we serve. Identities kept
          private, the numbers are not.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-surface border border-border-card rounded-2xl p-5 animate-on-scroll"
            >
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${r.pillColor}`}
              >
                {r.industry}
              </span>
              <p className="text-text-muted text-xs leading-relaxed mb-3">
                {r.whatWeDid}
              </p>
              <p className="text-xl md:text-2xl font-extrabold text-text-primary font-display leading-tight">
                {r.outcome}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-text-muted text-center mt-6 max-w-[600px] mx-auto animate-on-scroll">
          Organic and AI search compound, they are not overnight. Most brands
          see early movement in the first few months and meaningful revenue
          impact over six to twelve.
        </p>
      </div>
    </section>
  );
}
