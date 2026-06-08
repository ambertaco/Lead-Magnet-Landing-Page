"use client";

import { useState, useCallback, useEffect } from "react";
import Script from "next/script";
import { useScrollAnimation } from "@/hooks/useAnimations";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  role: string;
  roleOther: string;
  revenue: string;
  paidSpend: string;
  industry: string;
  industryOther: string;
  pain: string;
  timeline: string;
  email: string;
  website: string;
  notes: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const AUDIT_URL =
  "https://innate-target-ea7.notion.site/The-AI-Search-Visibility-Audit-72a6f3cac0cf8372bd5301530bd5436c?pvs=74";

const ROLES = [
  "Founder / CEO",
  "CMO / VP or Head of Marketing",
  "Head of Growth / Demand Gen",
  "Head of SEO / Content",
  "Other (please specify)",
];

const REVENUES = [
  "Under $1M",
  "$1M to $10M",
  "$10M to $50M",
  "$50M to $250M",
  "$250M+",
];

const PAID_SPENDS = [
  "Not running search/paid ads yet",
  "Under $10K / month",
  "$10K to $50K / month",
  "$50K to $100K / month",
  "$100K+ / month",
];

const INDUSTRIES = [
  "B2B SaaS",
  "eCommerce / DTC",
  "Healthcare / Health & wellness",
  "Fintech",
  "B2B services",
  "Other (please specify)",
];

const PAINS = [
  "We're invisible in ChatGPT and AI answers and don't know how to fix it.",
  "Our paid CAC is rising and we need organic to carry more of the load.",
  "We get traffic and rankings but can't connect SEO to revenue.",
  "We have an SEO agency but they can't deliver AI search / GEO.",
  "We're just starting to take AI search seriously and want a plan.",
];

const TIMELINES = [
  "This month, it's a priority",
  "This quarter",
  "Next 3 to 6 months",
  "Just exploring for now",
];

const DECISION_MAKER_ROLES = [
  "Founder / CEO",
  "CMO / VP or Head of Marketing",
  "Head of Growth / Demand Gen",
  "Head of SEO / Content",
];

// ─── Component ───────────────────────────────────────────────────────────────

const TOTAL_STEPS = 9;

interface QualifyingFormProps {
  unqualifiedRedirectUrl?: string;
}

export default function QualifyingForm({
  unqualifiedRedirectUrl = "https://innate-target-ea7.notion.site/The-AI-Search-Visibility-Audit-72a6f3cac0cf8372bd5301530bd5436c?pvs=74"
}: QualifyingFormProps) {
  const sectionRef = useScrollAnimation();
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isQualified, setIsQualified] = useState<boolean | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    role: "",
    roleOther: "",
    revenue: "",
    paidSpend: "",
    industry: "",
    industryOther: "",
    pain: "",
    timeline: "",
    email: "",
    website: "",
    notes: "",
  });

  useEffect(() => {
    if (isQualified && (window as any).Calendly) {
      try {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/taco-digital/30min-call-with-chirag?hide_gdpr_banner=1",
          parentElement: document.getElementById("calendly-embed-container"),
        });
      } catch (e) {
        console.error("Failed to initialize Calendly inline widget:", e);
      }
    }
  }, [isQualified, scriptLoaded]);

  const updateField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const canAdvance = useCallback(() => {
    switch (currentStep) {
      case 0:
        return formData.role !== "" && (formData.role !== "Other (please specify)" || formData.roleOther !== "");
      case 1:
        return formData.revenue !== "";
      case 2:
        return formData.paidSpend !== "";
      case 3:
        return formData.industry !== "" && (formData.industry !== "Other (please specify)" || formData.industryOther !== "");
      case 4:
        return formData.pain !== "";
      case 5:
        return formData.timeline !== "";
      case 6:
        return formData.email !== "" && formData.email.includes("@") && formData.email.includes(".");
      case 7:
        return formData.website !== "" && formData.website.length > 3;
      case 8:
        return true; // Notes are optional
      default:
        return false;
    }
  }, [currentStep, formData]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    const isHighRevenue = ["$10M to $50M", "$50M to $250M", "$250M+"].includes(
      formData.revenue
    );
    const isHighSpend = formData.paidSpend === "$100K+ / month";
    const qualified = isHighRevenue || isHighSpend;

    setIsQualified(qualified);
    setSubmitted(true);

    try {
      const response = await fetch("/api/qualify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          qualified,
        }),
      });
      const result = await response.json();
      console.log("Form submitted, response:", result);
    } catch (err) {
      console.error("Error submitting qualifying form:", err);
    }
  }, [formData]);

  // ─── Result Screens ─────────────────────────────────────────────────────

  if (submitted && isQualified !== null) {
    return (
      <section id="qualifying-form" className="pt-0 pb-20 md:pb-28 px-6 bg-surface-alt">
        <div className="max-w-[600px] mx-auto text-center">
          {isQualified ? (
            <div className="animate-on-scroll is-visible">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
                You qualify for a 1-on-1 strategy call.
              </h3>
              <p className="text-lg text-text-muted mb-8">
                Grab a time below. I&apos;ll come prepared with a custom look at your AI search visibility.
              </p>
              {/* Calendly Inline Widget */}
              <div className="w-full bg-surface border border-border-card rounded-2xl overflow-hidden mt-6 shadow-xl relative" style={{ minHeight: "700px" }}>
                <div
                  id="calendly-embed-container"
                  className="w-full"
                  style={{ minWidth: "320px", height: "700px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="afterInteractive"
                  onLoad={() => setScriptLoaded(true)}
                />
              </div>
            </div>
          ) : (
            <div className="animate-on-scroll is-visible">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Thank you for your submission.
              </h3>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Our team will evaluate and get in touch with you shortly.
              </p>
              <div className="bg-surface border border-border-card rounded-2xl p-8 md:p-10">
                <p className="text-text-muted text-sm mb-6 leading-relaxed">
                  {unqualifiedRedirectUrl.includes("Playbook")
                    ? "In the meantime, you can access the Notion AI Search Playbook template below to start optimizing your search presence:"
                    : "In the meantime, you can access the Notion AI Search Visibility Audit template below to start auditing your own search presence:"}
                </p>
                <a
                  href={unqualifiedRedirectUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-lg"
                >
                  {unqualifiedRedirectUrl.includes("Playbook")
                    ? "Open the AI Search Playbook"
                    : "Open the AI Search Visibility Audit"}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // ─── Form Steps ──────────────────────────────────────────────────────────

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <section id="qualifying-form" className="pt-0 pb-20 md:pb-28 px-6 bg-surface-alt">
      <div className="max-w-[600px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary text-center mb-4 animate-on-scroll">
          See if it&apos;s a fit. Takes 60 seconds.
        </h2>
        <p className="text-lg text-text-muted text-center mb-12 animate-on-scroll">
          A few quick questions so the call is useful from minute one. Your
          answers come straight to me.
        </p>

        {/* Progress bar */}
        <div className="mb-10 animate-on-scroll">
          <div className="flex justify-between text-xs text-text-muted mb-2">
            <span>
              Step {currentStep + 1} of {TOTAL_STEPS}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Step content */}
        <div className="bg-surface border border-border-card rounded-2xl p-6 md:p-8 animate-on-scroll">
          {/* Step 0: Role */}
          {currentStep === 0 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                What&apos;s your role?
              </h3>
              <div className="space-y-3">
                {ROLES.map((role) => (
                  <label
                    key={role}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.role === role
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.role === role
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.role === role && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary">{role}</span>
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={(e) => updateField("role", e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
                {formData.role === "Other (please specify)" && (
                  <input
                    type="text"
                    placeholder="Your role..."
                    value={formData.roleOther}
                    onChange={(e) => updateField("roleOther", e.target.value)}
                    className="w-full mt-2 p-4 bg-background border border-border-card rounded-xl text-text-primary placeholder-text-muted/50 text-base"
                  />
                )}
              </div>
            </div>
          )}

          {/* Step 1: Revenue */}
          {currentStep === 1 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Approximate annual revenue?
              </h3>
              <div className="space-y-3">
                {REVENUES.map((rev) => (
                  <label
                    key={rev}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.revenue === rev
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.revenue === rev
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.revenue === rev && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary">{rev}</span>
                    <input
                      type="radio"
                      name="revenue"
                      value={rev}
                      checked={formData.revenue === rev}
                      onChange={(e) => updateField("revenue", e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Paid Spend */}
          {currentStep === 2 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Roughly how much do you spend on paid search / ad acquisition per month?
              </h3>
              <div className="space-y-3">
                {PAID_SPENDS.map((spend) => (
                  <label
                    key={spend}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.paidSpend === spend
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.paidSpend === spend
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.paidSpend === spend && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary">{spend}</span>
                    <input
                      type="radio"
                      name="paidSpend"
                      value={spend}
                      checked={formData.paidSpend === spend}
                      onChange={(e) =>
                        updateField("paidSpend", e.target.value)
                      }
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Industry */}
          {currentStep === 3 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                What industry are you in?
              </h3>
              <div className="space-y-3">
                {INDUSTRIES.map((ind) => (
                  <label
                    key={ind}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.industry === ind
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.industry === ind
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.industry === ind && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary">{ind}</span>
                    <input
                      type="radio"
                      name="industry"
                      value={ind}
                      checked={formData.industry === ind}
                      onChange={(e) => updateField("industry", e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
                {formData.industry === "Other (please specify)" && (
                  <input
                    type="text"
                    placeholder="Your industry..."
                    value={formData.industryOther}
                    onChange={(e) =>
                      updateField("industryOther", e.target.value)
                    }
                    className="w-full mt-2 p-4 bg-background border border-border-card rounded-xl text-text-primary placeholder-text-muted/50 text-base"
                  />
                )}
              </div>
            </div>
          )}

          {/* Step 4: Pain */}
          {currentStep === 4 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Which sounds most like you right now?
              </h3>
              <div className="space-y-3">
                {PAINS.map((pain) => (
                  <label
                    key={pain}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.pain === pain
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        formData.pain === pain
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.pain === pain && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary text-sm leading-relaxed">
                      &ldquo;{pain}&rdquo;
                    </span>
                    <input
                      type="radio"
                      name="pain"
                      value={pain}
                      checked={formData.pain === pain}
                      onChange={(e) => updateField("pain", e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Timeline */}
          {currentStep === 5 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                How soon are you looking to decide?
              </h3>
              <div className="space-y-3">
                {TIMELINES.map((t) => (
                  <label
                    key={t}
                    className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                      formData.timeline === t
                        ? "border-accent bg-accent/5"
                        : "border-border-card hover:border-text-muted/50"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.timeline === t
                          ? "border-accent"
                          : "border-text-muted/50"
                      }`}
                    >
                      {formData.timeline === t && (
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-text-primary">{t}</span>
                    <input
                      type="radio"
                      name="timeline"
                      value={t}
                      checked={formData.timeline === t}
                      onChange={(e) => updateField("timeline", e.target.value)}
                      className="sr-only"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Email */}
          {currentStep === 6 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Your work email
              </h3>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full p-4 bg-background border border-border-card rounded-xl text-text-primary placeholder-text-muted/50 text-lg"
                autoFocus
              />
              <p className="mt-3 text-xs text-text-muted">
                Please use a business email address.
              </p>
            </div>
          )}

          {/* Step 7: Website */}
          {currentStep === 7 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Company website
              </h3>
              <input
                type="url"
                placeholder="https://yourcompany.com"
                value={formData.website}
                onChange={(e) => updateField("website", e.target.value)}
                className="w-full p-4 bg-background border border-border-card rounded-xl text-text-primary placeholder-text-muted/50 text-lg"
                autoFocus
              />
            </div>
          )}

          {/* Step 8: Notes */}
          {currentStep === 8 && (
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Anything you&apos;d want me to know before the call?
              </h3>
              <textarea
                placeholder="Optional, but helpful..."
                value={formData.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                rows={4}
                className="w-full p-4 bg-background border border-border-card rounded-xl text-text-primary placeholder-text-muted/50 text-base resize-none"
              />
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`text-sm font-semibold py-2 px-4 rounded-lg transition-all cursor-pointer ${
                currentStep === 0
                  ? "text-text-muted/30 cursor-not-allowed"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              ← Back
            </button>

            {currentStep < TOTAL_STEPS - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canAdvance()}
                className={`font-semibold py-3 px-6 rounded-xl transition-all duration-200 cursor-pointer ${
                  canAdvance()
                    ? "bg-accent hover:bg-accent-hover text-white hover:-translate-y-0.5"
                    : "bg-accent/30 text-white/50 cursor-not-allowed"
                }`}
              >
                Continue →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                See my availability →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
