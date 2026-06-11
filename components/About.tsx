"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { CountUp } from "./CountUp";
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

const STAT_NUMS = ["15", "85", "10", "100"];
const STAT_SUFFIXES = ["+", "%+", "+", "%"];

export function About() {
  const { lang } = useLang();
  const tr = tx.about;
  const stats = tr.stats.map((s, i) => ({
    num: STAT_NUMS[i],
    suffix: STAT_SUFFIXES[i],
    title: t(s, lang),
  }));
  return (
    <section className="section" id="ueber-mich">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <span className="deco-ring" aria-hidden="true" />
          <Parallax amount={-14} className="about-photo-parallax">
            <div className="about-photo-card">
              <Image
                src="/emil-portrait.jpg"
                alt="Emil Marinov im Porträt"
                width={600}
                height={780}
                sizes="(max-width: 899px) 22rem, 24rem"
              />
            </div>
          </Parallax>
          <div className="about-photo-caption">
            <span>Emil Marinov</span>
            <small>{t(tr.portraitCaption, lang)}</small>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal as="span" className="badge">{t(tr.badge, lang)}</Reveal>

          <Reveal as="h2" className="section-title">
            {t(tr.titleStart, lang)}{" "}
            <span className="accent">{t(tr.titleAccent, lang)}</span>
          </Reveal>

          <Reveal className="prose">
            <p>{t(tr.para1, lang)}</p>
            <p className="hide-mobile">{t(tr.para2, lang)}</p>
            <p>
              <span className="hide-mobile">{t(tr.para3, lang)}</span>
              <span className="show-mobile">{t(tr.para3Mobile, lang)}</span>
            </p>
          </Reveal>

          <Reveal as="ul" className="approach-list">
            {tr.approach.map((item, i) => (
              <li key={i}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{t(item, lang)}</strong>
              </li>
            ))}
          </Reveal>

          <Reveal as="dl" className="stats">
            {stats.map((stat, i) => (
              <div className="stat" key={i}>
                <dt>
                  <span className="stat-value">
                    <CountUp value={parseInt(stat.num, 10)} />
                    <small>{stat.suffix}</small>
                  </span>
                </dt>
                <dd>{stat.title}</dd>
              </div>
            ))}
          </Reveal>

          <Reveal>
            <a href="#kontakt" className="btn btn-primary">
              {t(tr.cta, lang)}
              <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
