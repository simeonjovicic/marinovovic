"use client";

import { ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

export function AiOs() {
  const { lang } = useLang();
  const tr = tx.aiOs;

  return (
    <section className="section" id="ki-betriebssystem">
      <div className="container">
        <div className="section-intro">
          <Reveal className="section-head">
            <span className="badge">{t(tr.badge, lang)}</span>
            <h2 className="section-title">
              {t(tr.titleStart, lang)}{" "}
              <span className="accent">{t(tr.titleAccent, lang)}</span>
            </h2>
          </Reveal>

          <Reveal as="p" className="section-copy">
            <span className="hide-mobile">{t(tr.lead, lang)}</span>
            <span className="show-mobile">{t(tr.leadMobile, lang)}</span>
          </Reveal>
        </div>

        {/* Die Schichten stehen bewusst von oben (Zugang) nach unten (Daten) —
            wie im Architekturbild eines Betriebssystems. */}
        <ol className="layer-stack">
          {tr.layers.map((layer, i) => (
            <Reveal as="li" key={i} className="layer">
              <span className="layer-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="layer-body">
                <h3>{t(layer.title, lang)}</h3>
                <p>{t(layer.text, lang)}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="layer-governance">
          <span className="layer-governance-icon" aria-hidden="true">
            <ShieldCheck size={20} strokeWidth={1.75} />
          </span>
          <div>
            <h3>{t(tr.governance.title, lang)}</h3>
            <p>{t(tr.governance.text, lang)}</p>
          </div>
        </Reveal>

        <Reveal className="layer-cta">
          <a href="#kontakt" className="btn btn-primary">
            {t(tr.cta, lang)}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
