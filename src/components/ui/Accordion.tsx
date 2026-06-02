"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl font-semibold text-text-primary pr-8 group-hover:text-accent transition-colors">
          {question}
        </span>
        <span
          className={`text-accent text-2xl font-light flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`accordion-content ${isOpen ? "is-open" : ""}`}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <p className="text-text-muted text-base md:text-lg leading-relaxed pb-6">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
