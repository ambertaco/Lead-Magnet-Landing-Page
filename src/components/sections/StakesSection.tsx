'use client';

import { useScrollAnimation } from '@/hooks/useAnimations';

export default function StakesSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="stakes" className="py-20 md:py-28 px-6">
      <div className="max-w-[800px] mx-auto text-center" ref={sectionRef}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8 animate-on-scroll">
          The search box moved. Most brands haven&apos;t caught up yet.
        </h2>
        <div className="space-y-6 animate-on-scroll">
          <p className="text-lg text-text-muted leading-relaxed">
            For twenty years the game was simple: rank on Google, get the click. Now your buyers ask ChatGPT, Perplexity, or Google&apos;s AI Overview a question and get one synthesized answer that names a few brands and stops. There is no page two in an AI answer. If you&apos;re not in that short list, you are not ranked lower, you are absent from the conversation entirely.
          </p>
          <p className="text-lg text-text-muted leading-relaxed">
            This is winner-take-most, and it compounds. The brands that establish themselves in AI answers now are building a lead that gets harder to close every month. There is still real white space, because who shows up in AI answers overlaps only partly with who ranks on Google. That gap is the opportunity, and it narrows every quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
