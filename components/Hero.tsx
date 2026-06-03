"use client";

import { Reveal } from "./Reveal";
import { InfiniteGridBg } from "./InfiniteGridBg";
import { HeroTitle } from "./HeroTitle";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="btn-icon">
    <path
      d="M4 10h11M11 6l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Hero() {
  const { lang } = useLang();
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <InfiniteGridBg />
      </div>

      <div className="hero-inner">
        <Reveal as="span" className="badge">
          {t(tx.hero.badge, lang)}
        </Reveal>

        <HeroTitle />

        <Reveal as="p" className="hero-lead">
          {t(tx.hero.lead, lang)}
        </Reveal>

        <Reveal className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">
            {t(tx.hero.ctaPrimary, lang)}
            <ArrowIcon />
          </a>
          <a href="#leistungen" className="btn btn-ghost">
            {t(tx.hero.ctaSecondary, lang)}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
