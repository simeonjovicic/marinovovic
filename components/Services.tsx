"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

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

          <Reveal as="p" className="section-copy">{t(tr.lead, lang)}</Reveal>
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
                  <Reveal as="p">{t(s.text, lang)}</Reveal>
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

        <Reveal className="scope-block">
          <h3 className="scope-title">{t(tr.scope.title, lang)}</h3>
          <p className="scope-text">{t(tr.scope.text, lang)}</p>
          <ul className="scope-areas">
            {t(tr.scope.areas, lang).map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="scope-note">{t(tr.scope.note, lang)}</p>
        </Reveal>
      </div>
    </section>
  );
}
