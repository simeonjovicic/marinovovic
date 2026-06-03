"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

export function HeroTitle() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const parts = t(tx.hero.titleParts, lang);
  const accentIdx = tx.hero.titleAccentIdx;

  return (
    <h1 className={`hero-title hero-title-stagger${mounted ? " is-on" : ""}`}>
      {parts.map((text, i) => (
        <span
          key={i}
          className={`hero-word${accentIdx.includes(i) ? " accent" : ""}`}
          style={{ ["--i" as string]: i }}
        >
          {text}
          {i < parts.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
