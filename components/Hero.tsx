"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
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
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Cinematic Exit: Inhalt fährt beim Scrollen langsamer mit,
  // blendet aus und skaliert leicht zurück — wie eine Kamerafahrt.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div
        className="hero-bg"
        style={reduce ? undefined : { y: bgY }}
      >
        <InfiniteGridBg />
      </motion.div>

      <motion.div
        className="hero-inner"
        style={reduce ? undefined : { y, opacity, scale }}
      >
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
      </motion.div>

      <motion.a
        href="#ueber-mich"
        className="scroll-hint"
        style={reduce ? undefined : { opacity: hintOpacity }}
        aria-label="Scroll"
      >
        <span className="scroll-hint-label">Scroll</span>
        <span className="scroll-hint-line" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
