import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CallSection from "@/components/sections/CallSection";
import QualifyingForm from "@/components/sections/QualifyingForm";
import FAQSection from "@/components/sections/FAQSection";

export default function HealthcareChecklistPage() {
  const checklistUrl =
    "https://tacochiragkulkarni.notion.site/70-Point-AI-Visibility-Checklist-for-Healthcare-Websites-f8035979c84248c98bc2e7f20051a953";

  return (
    <>
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
