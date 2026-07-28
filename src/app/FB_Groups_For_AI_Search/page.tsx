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

export default function FBGroupsForAISearchPage() {
  const loomShareUrl =
    "https://www.loom.com/share/c06765bd98834da8ba23607126e044c1";
  const loomEmbedUrl =
    "https://www.loom.com/embed/c06765bd98834da8ba23607126e044c1";

  return (
    <>
      <main>
        <HeroSection
          eyebrow="STRATEGY VIDEO"
          title="FB Groups for AI Search"
          videoEmbedUrl={loomEmbedUrl}
        />
        <CredibilityBar />
        <PivotSection
          headline="You've watched the walkthrough. Here's the honest truth about it."
          paragraphs={[
            "That strategy is the real thing. If you tap into the exact Facebook group databases and citation networks, you'll see AI search engines indexing and recommending your brand for competitive buying queries.",
            "But I also know how this goes: finding the right communities, scraping search patterns, and mapping conversational keywords is a full-time job.",
            "So here's the offer. Give me 15 minutes and my team will run our AI-search visibility audit on your brand and your competitors, then hand you a prioritized list of exactly what to fix first.",
            "Your buyers are already asking AI which brand to choose. Right now, it probably isn't naming you. Let's change that."
          ]}
          hideVideoPlaceholder={true}
        />
        <ProblemSection />
        <DifferentiatorSection />
        <ResultsSection />
        <ProcessSection />
        <CallSection />
        <QualifyingForm unqualifiedRedirectUrl={loomShareUrl} />
        <FAQSection />
      </main>
    </>
  );
}
