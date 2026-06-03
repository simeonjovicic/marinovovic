"use client";

import { Sparkles, Sigma, LineChart, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

const ICONS: LucideIcon[] = [Sparkles, Sigma, LineChart, GraduationCap];

export function Domains() {
  const { lang } = useLang();
  const tr = tx.domains;

  return (
    <section className="section section-alt" id="fachgebiete">
      <div className="container">
        <div className="domain-layout">
          <Reveal className="domain-copy">
            <span className="badge">{t(tr.badge, lang)}</span>
            <h2 className="section-title">
              {t(tr.titleStart, lang)} <span className="accent">{t(tr.titleAccent, lang)}</span>{t(tr.titleEnd, lang)}
            </h2>
            <p>{t(tr.lead, lang)}</p>
          </Reveal>

          <ul className="domain-grid">
            {tr.items.map((d, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal as="li" key={i} className="domain">
                  <span className="domain-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3>{t(d.title, lang)}</h3>
                    <p>{t(d.text, lang)}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
