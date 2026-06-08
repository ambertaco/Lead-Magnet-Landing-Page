import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CallSection from "@/components/sections/CallSection";
import QualifyingForm from "@/components/sections/QualifyingForm";
import FAQSection from "@/components/sections/FAQSection";

export default function PlaybookPage() {
  const playbookUrl =
    "https://innate-target-ea7.notion.site/AI-Search-Playbook-2b16f3cac0cf80a6baa8c64d701fda8e";

  return (
    <>
      <main>
        <HeroSection
          eyebrow="Your Playbook is ready"
          title="Here's your AI Search Playbook."
          notionUrl={playbookUrl}
          buttonText="Click here to get access to the Playbook document"
        />
        <CredibilityBar />
        <ProblemSection />
        <DifferentiatorSection />
        <ResultsSection />
        <ProcessSection />
        <CallSection />
        <QualifyingForm unqualifiedRedirectUrl={playbookUrl} />
        <FAQSection />
      </main>
    </>
  );
}
