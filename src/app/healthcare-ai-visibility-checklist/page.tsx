import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CallSection from "@/components/sections/CallSection";
import QualifyingForm from "@/components/sections/QualifyingForm";
import FAQSection from "@/components/sections/FAQSection";
import Header from "@/components/sections/Header";

export default function ChecklistPage() {
  const checklistUrl =
    "https://innate-target-ea7.notion.site/Healthcare-AI-Search-Visibility-Checklist-38e55e54f9a04a37b3b3a32223a51f0f";

  return (
    <>
      <Header />
      <main>
        <HeroSection
          eyebrow="Your Checklist is ready"
          title="Here's your 70-Point AI Visibility Checklist for Healthcare Websites."
          notionUrl={checklistUrl}
          buttonText={
            <span className="text-center block leading-tight py-1">
              Click here to get access to the
              <br />
              AI Visibility Checklist.
            </span>
          }
        />
        <CredibilityBar />
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
