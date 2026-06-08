"use client";

import { useState } from "react";
import { RESOURCES } from "@/data/links";

export default function LinksPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (url: string, index: number) => {
    // Generate full URL for internal paths
    const fullUrl = url.startsWith("/")
      ? `${window.location.origin}${url}`
      : url;

    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const funnels = RESOURCES.filter((r) => r.category === "funnel");
  const documents = RESOURCES.filter((r) => r.category === "notion");

  return (
    <div className="min-h-screen bg-background text-text-primary py-20 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[700px] w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center font-display text-2xl font-black tracking-wider text-text-primary mb-3">
            TACO<span className="text-accent">.</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold text-text-primary mb-3">
            Marketing Resources Directory
          </h1>
          <p className="text-text-muted text-base">
            Quickly navigate to your live landing pages and direct Notion documents.
          </p>
        </div>

        {/* Live Marketing Funnels */}
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4">
            Live Marketing Funnels
          </h2>
          <div className="space-y-4">
            {funnels.map((resource) => {
              const globalIndex = RESOURCES.indexOf(resource);
              return (
                <div
                  key={resource.url}
                  className="bg-surface border border-border-card rounded-2xl p-6 flex items-start justify-between gap-4 hover:border-accent/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      Open Page →
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(resource.url, globalIndex)}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 bg-surface-alt hover:bg-border-card text-text-muted hover:text-text-primary border border-border-card rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer"
                  >
                    {copiedIndex === globalIndex ? (
                      <>
                        <svg
                          className="w-3.5 h-3.5 text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-success">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3"
                          />
                        </svg>
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Direct Notion Files */}
        <div>
          <h2 className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4">
            Notion Source Documents
          </h2>
          <div className="space-y-4">
            {documents.map((resource) => {
              const globalIndex = RESOURCES.indexOf(resource);
              return (
                <div
                  key={resource.url}
                  className="bg-surface border border-border-card rounded-2xl p-6 flex items-start justify-between gap-4 hover:border-accent/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-text-primary mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      Open in Notion ↗
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(resource.url, globalIndex)}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 bg-surface-alt hover:bg-border-card text-text-muted hover:text-text-primary border border-border-card rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer"
                  >
                    {copiedIndex === globalIndex ? (
                      <>
                        <svg
                          className="w-3.5 h-3.5 text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-success">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3"
                          />
                        </svg>
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Back to Home footer */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="text-sm text-text-muted hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
          >
            ← Back to Main Site
          </a>
        </div>
      </div>
    </div>
  );
}
