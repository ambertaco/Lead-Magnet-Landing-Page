'use client';

import { useScrollAnimation } from '@/hooks/useAnimations';

const testimonials = [
  {
    quote:
      'When we ran an RFP for a growth firm, they stood out with tactical strategies and real outcomes. I\u2019d pick them again and again.',
    attribution: 'Head of Marketing',
  },
  {
    quote:
      'Most agencies promise the world and deliver very little. They cut through it and helped us deliver real results.',
    attribution: 'Founder, DTC brand',
  },
  {
    quote:
      'They were integral to driving a step-change in our organic growth.',
    attribution: 'Head of Organic Growth',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6">
      <div className="max-w-[1100px] mx-auto" ref={sectionRef}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary text-center mb-12 animate-on-scroll">
          What partners say.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface border border-border-card rounded-2xl p-6 md:p-8 animate-on-scroll"
            >
              <svg
                className="w-8 h-8 text-accent/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.986z" />
              </svg>
              <blockquote className="text-lg text-text-primary leading-relaxed mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-text-muted">{testimonial.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
