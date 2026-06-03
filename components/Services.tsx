"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

const SERVICES = [
  {
    num: "01",
    label: "Automation",
    title: "Prozessautomatisierung mit KI-Agents",
    text: "Analyse, Konzeption und Umsetzung vollautomatisierter Geschäftsprozesse. Wir identifizieren wiederkehrende Aufgaben, modellieren Agenten-Workflows und integrieren sie in Ihre Systemlandschaft.",
    short:
      "Wiederkehrende Aufgaben durch mehrstufige KI-Agents automatisieren — von der Analyse bis zur Integration.",
    features: [
      "Identifikation automatisierbarer Prozesse",
      "Mehrstufige Agenten-Workflows mit klaren Übergaben",
      "Integration in bestehende ERP- und CRM-Systeme",
      "Monitoring, Logging und Failover-Strategien",
    ],
  },
  {
    num: "02",
    label: "Custom AI",
    title: "Maßgeschneiderte KI-Lösungen & RAG-Systeme",
    text: "Individuelle KI-Applikationen — von der Retrieval-Augmented-Generation-Architektur über Vektor-Datenbanken bis zur produktiven Bereitstellung. Sicher, dokumentiert, wartbar.",
    short:
      "Eigene RAG-Systeme auf Ihren Daten: vom Prototyp bis zur sicheren Bereitstellung.",
    features: [
      "Retrieval-Augmented Generation auf eigenen Daten",
      "Vektor-Datenbank-Auswahl und -Integration",
      "Evaluation, Guardrails und Prompt-Strategien",
      "Sichere Bereitstellung in der eigenen Infrastruktur",
    ],
  },
  {
    num: "03",
    label: "Enablement",
    title: "Schulungen zu Künstlicher Intelligenz",
    text: "Praxisnahe Workshops für Fach- und Führungskräfte. Von den Grundlagen über Prompt Engineering bis zur strategischen Einordnung von KI im Unternehmen.",
    short:
      "Praxisnahe KI-Workshops für Fach- und Führungskräfte — Grundlagen bis Strategie.",
    features: [
      "Grundlagen-Sessions für gemischte Teams",
      "Prompt Engineering mit echten Use Cases",
      "Strategische Einordnung von KI im Unternehmen",
      "Hands-on Übungen statt Folien-Schlachten",
    ],
  },
  {
    num: "04",
    label: "Workflow",
    title: "Schulungen zur Prozessautomatisierung mit n8n",
    text: "Automatisierung von Datenpipelines und Geschäftsprozessen mit n8n. Hands-on, mit eigenen Use Cases und konkreten Beispielen aus der Teilnehmerpraxis.",
    short:
      "n8n-Schulungen für Datenpipelines und Automatisierung — hands-on mit echten Use Cases.",
    features: [
      "n8n-Grundlagen und Architektur-Konzepte",
      "Eigene Workflows live im Workshop bauen",
      "Anbindung von APIs, Datenbanken und LLMs",
      "Self-hosting versus Cloud — Entscheidungshilfen",
    ],
  },
  {
    num: "05",
    label: "Begleitung",
    title: "Individuelle Beratung & Projektbegleitung",
    text: "Maßgeschneiderte Beratung über die gesamte Projektdauer — vom Erstgespräch über Architektur-Reviews bis zur begleitenden Umsetzung. Auch als externer Sparringspartner für interne Teams.",
    short:
      "Beratung & Sparring über die gesamte Projektlaufzeit — auch als externer Reviewer.",
    features: [
      "Architektur-Reviews und Sparring",
      "Externe Zweitmeinung für interne Teams",
      "Begleitung über die gesamte Projektlaufzeit",
      "Klare Empfehlungen statt Buzzword-Bingo",
    ],
  },
];

export function Services() {
  const { lang } = useLang();
  const tr = tx.services;
  const items = tr.items;
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    let raf = 0;

    const updateProgress = () => {
      const rect = list.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh * 0.4;
      const scrolled = vh * 0.7 - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      list.style.setProperty("--progress", progress.toFixed(4));
    };

    const onWindowScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    const onListScroll = () => {
      if (!list) return;
      const center = list.scrollLeft + list.clientWidth / 2;
      let nearest = 0;
      let minDist = Infinity;
      const items = list.querySelectorAll<HTMLElement>(".service-item");
      items.forEach((item, i) => {
        const c = item.offsetLeft + item.clientWidth / 2;
        const d = Math.abs(c - center);
        if (d < minDist) {
          minDist = d;
          nearest = i;
        }
      });
      setActive(nearest);
    };

    updateProgress();
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    window.addEventListener("resize", onWindowScroll, { passive: true });
    list.addEventListener("scroll", onListScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("resize", onWindowScroll);
      list.removeEventListener("scroll", onListScroll);
    };
  }, []);

  const goTo = (i: number) => {
    const list = listRef.current;
    if (!list) return;
    const items = list.querySelectorAll<HTMLElement>(".service-item");
    const target = items[i];
    if (target) {
      const offset = target.offsetLeft - list.offsetLeft;
      list.scrollTo({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="section section-alt" id="leistungen">
      <div className="container">
        <div className="section-intro">
          <Reveal className="section-head">
            <span className="badge">{t(tr.badge, lang)}</span>
            <h2 className="section-title">
              {t(tr.titleStart, lang)} <span className="accent">{t(tr.titleAccent, lang)}</span>
            </h2>
          </Reveal>

          <Reveal as="p" className="section-copy">
            <span className="hide-mobile">{t(tr.lead, lang)}</span>
            <span className="show-mobile">{t(tr.leadMobile, lang)}</span>
          </Reveal>
        </div>

        <div className="service-list" ref={listRef}>
          <div className="service-progress" aria-hidden="true">
            <div className="service-progress-bar" />
          </div>

          {items.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <article key={num} className="service-item">
                <div className="service-meta">
                  <Reveal>
                    <span className="service-num">{num}</span>
                    <span className="service-num-rule" aria-hidden="true" />
                    <small className="service-label">{t(s.label, lang)}</small>
                    <span className="service-counter" aria-hidden="true">
                      {i + 1} / {items.length}
                    </span>
                  </Reveal>
                </div>

                <div className="service-content">
                  <Reveal as="h3">{t(s.title, lang)}</Reveal>
                  <Reveal>
                    <p className="hide-mobile">{t(s.text, lang)}</p>
                    <p className="show-mobile">{t(s.short, lang)}</p>
                  </Reveal>
                  <Reveal as="ul" className="service-features">
                    {t(s.features, lang).map((f) => (
                      <li key={f}>
                        <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>

        <div className="service-dots" aria-hidden="true">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`service-dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`${t(tr.showLabel, lang)} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
