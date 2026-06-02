import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityBar from "@/components/sections/CredibilityBar";
import ProblemSection from "@/components/sections/ProblemSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ResultsSection from "@/components/sections/ResultsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CallSection from "@/components/sections/CallSection";
import QualifyingForm from "@/components/sections/QualifyingForm";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
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
