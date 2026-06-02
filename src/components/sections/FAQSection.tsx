"use client";

import { useScrollAnimation } from "@/hooks/useAnimations";
import Accordion from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "How long until we see results?",
    answer:
      "Organic and AI search compound, so this is a year-long play, not overnight. Most brands see early movement (rising impressions, first AI-answer mentions) within the first few months, and meaningful revenue impact over six to twelve. AI visibility can move faster than classic SEO, sometimes inside the first three months for a given query. I'll set realistic expectations, not inflated ones.",
  },
  {
    question: "How much does this cost?",
    answer:
      "Our engagements are a flat monthly retainer, all in: people, tooling, content, and links. That covers a complete SEO and AI search program run by senior strategists with AI workflows behind them. I'll only take on engagements where that investment makes sense for your stage and revenue.",
  },
  {
    question: "We already have an SEO agency. Why would we need you?",
    answer:
      "Plenty of our clients did too. The common gap: their existing agency does traditional SEO but can't deliver AI search and GEO, getting cited inside ChatGPT, Perplexity, and AI Overviews. That's the layer we specialize in, and we often work alongside what you already have.",
  },
  {
    question: "How is this different from regular SEO?",
    answer:
      "The foundations carry over and still matter. But AI search has its own levers: getting your brand inserted into the content that already ranks (because the AI grounds its answers in those sources), and earning presence on the third-party sites and communities AI engines lean on. We do both, and we measure your visibility inside the AI answers directly.",
  },
  {
    question: "We've been burned by agencies before. Why is this different?",
    answer:
      "The most common thing I hear. Two answers. First, we report revenue and pipeline, not rankings and traffic, so you can see if it's working. Second, terms are month-to-month with a 60-day wind-down, no annual lock-in. You stay because it works, not because you're trapped.",
  },
  {
    question: "Do you optimize for ChatGPT and Google, or only one?",
    answer:
      "Both, plus Perplexity and Claude. Traditional SEO and AI search are like a Venn diagram: some specific nuances, but the core principles overlap.",
  },
  {
    question: "What kind of companies do you work best with?",
    answer:
      "B2B SaaS, eCommerce, healthcare, and fintech, usually $10M+ in revenue, often already spending on paid search and wanting organic to carry more of the load. If that's not you yet, I'll tell you honestly.",
  },
];

export default function FAQSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="faq" className="py-12 md:py-16 px-6 bg-surface-alt">
      <div className="max-w-[800px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary text-center mb-8 animate-on-scroll">
          The questions I get asked most.
        </h2>
        <div className="animate-on-scroll">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
