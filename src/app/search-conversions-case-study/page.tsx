import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import PivotSection from "@/components/sections/PivotSection";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CallSection from "@/components/sections/CallSection";
import QualifyingForm from "@/components/sections/QualifyingForm";
import FAQSection from "@/components/sections/FAQSection";
import Header from "@/components/sections/Header";

export default function SearchConversionsCaseStudyPage() {
  const loomShareUrl =
    "https://www.loom.com/share/8507657907a841a8b1c9eeef2932c280";
  const loomEmbedUrl =
    "https://www.loom.com/embed/8507657907a841a8b1c9eeef2932c280";

  return (
    <>
      <Header />
      <main>
        <HeroSection
          eyebrow="CASE STUDY VIDEO"
          title="15 to 48 Search Conversions and 3 to 74 AIOs in 5 Months"
          videoEmbedUrl={loomEmbedUrl}
        />
        <CredibilityBar />
        <PivotSection
          headline="You've watched the case study. Here's the honest truth about it."
          paragraphs={[
            "That video is the real thing. If you apply the same structural content pruning and AI visibility workflows, you'll see a massive lift in your search position.",
            "But I also know how this goes: you're busy running your business, and setting up complex indexing, authority citation campaigns, and content updates takes time.",
            "So here's the offer. Give me 15 minutes and my team will run our 10-point audit on your brand and your competitors, then hand you a prioritized list of exactly what to fix first.",
            "Your buyers are already asking AI which brand to choose. Right now, it probably isn't naming you. Let's change that."
          ]}
          hideVideoPlaceholder={true}
        />
        <ProblemSection />
        <DifferentiatorSection />
        <ResultsSection />
        <ProcessSection />
        <CallSection />
        <QualifyingForm />
        <FAQSection />
      </main>
    </>
  );
}
