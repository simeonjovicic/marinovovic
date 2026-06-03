"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  durationMs?: number;
  className?: string;
};

const parse = (s: string): { num: number; suffix: string } => {
  const match = s.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: s };
  return { num: parseInt(match[1], 10), suffix: match[2] };
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function CountUp({ value, durationMs = 1600, className }: Props) {
  const { num, suffix } = parse(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      let raf = 0;
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / durationMs);
        setDisplay(Math.round(easeOutCubic(t) * num));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
