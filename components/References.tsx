"use client";

import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

export function References() {
  const { lang } = useLang();
  const tr = tx.references;

  return (
    <section className="section" id="referenzen">
      <div className="container">
        <Reveal className="section-head">
          <span className="badge">{t(tr.badge, lang)}</span>
          <h2 className="section-title">
            {t(tr.titleStart, lang)} <span className="accent">{t(tr.titleAccent, lang)}</span>
          </h2>
        </Reveal>

        <div className="reference-layout">
          <Reveal className="reference-summary">
            <span className="ref-kicker">{t(tr.summaryKicker, lang)}</span>
            <p className="ref-headline">{t(tr.summaryHeadline, lang)}</p>
            <p className="ref-lead">{t(tr.summaryLead, lang)}</p>
            <div className="ref-meta">
              <span className="ref-dot" aria-hidden="true" />
              <span>{t(tr.summaryMeta, lang)}</span>
            </div>

            <div className="ref-named">
              <span className="ref-named-label">{t(tr.namedLabel, lang)}</span>
              <ul>
                {tr.named.map((p) => (
                  <li key={p.name}>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.name}
                    </a>
                    <small>{t(p.role, lang)}</small>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="reference-ledger">
            {tr.items.map((r, i) => (
              <Reveal as="article" key={i} className="ref-block">
                <span className="ref-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t(r.title, lang)}</h3>
                  <p>{t(r.text, lang)}</p>
                </div>
                <small>{t(r.tag, lang)}</small>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
