"use client";

import { useCountUp } from "@/hooks/useAnimations";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: StatCounterProps) {
  const ref = useCountUp(value, 2000, prefix, suffix);

  return (
    <div className="flex flex-col items-center text-center p-4">
      <span
        ref={ref}
        className="text-5xl md:text-6xl font-extrabold text-accent font-display"
      >
        {prefix}0{suffix}
      </span>
      <span className="mt-3 text-sm text-text-muted leading-snug max-w-[200px]">
        {label}
      </span>
    </div>
  );
}
