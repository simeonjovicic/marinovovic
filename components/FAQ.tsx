"use client";

import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

export function FAQ() {
  const { lang } = useLang();
  const tr = tx.faq;

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <Reveal className="faq-side">
            <span className="badge">{t(tr.badge, lang)}</span>
            <h2 className="faq-title">
              {t(tr.titleStart, lang)}{" "}
              <span className="accent">{t(tr.titleAccent, lang)}</span>
            </h2>
            <p className="faq-lead">{t(tr.lead, lang)}</p>

            <a href="#kontakt" className="faq-side-cta">
              <span className="faq-side-cta-icon" aria-hidden="true">
                <MessageCircleQuestion size={18} strokeWidth={1.75} />
              </span>
              <span>
                <strong>{t(tr.sideCtaStrong, lang)}</strong>
                <small>{t(tr.sideCtaSmall, lang)}</small>
              </span>
            </a>
          </Reveal>

          <div className="faq-list">
            {tr.items.map((item, i) => (
              <Reveal key={i}>
                <details className="faq-item">
                  <summary>
                    <span className="faq-question">{t(item.q, lang)}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <ChevronDown size={18} strokeWidth={2.25} />
                    </span>
                  </summary>
                  <div className="faq-body">
                    <p>{t(item.a, lang)}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
