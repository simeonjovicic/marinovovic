"use client";

import { useEffect, useState } from "react";

const PARTS: { text: string; accent?: boolean }[] = [
  { text: "Künstliche" },
  { text: "Intelligenz," },
  { text: "anwendbar", accent: true },
  { text: "gemacht.", accent: true },
];

export function HeroTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <h1 className={`hero-title hero-title-stagger${mounted ? " is-on" : ""}`}>
      {PARTS.map((part, i) => (
        <span
          key={i}
          className={`hero-word${part.accent ? " accent" : ""}`}
          style={{ ["--i" as string]: i }}
        >
          {part.text}
          {i < PARTS.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
