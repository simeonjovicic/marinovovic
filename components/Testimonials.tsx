"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

/** Pixel pro Sekunde — langsam genug zum Mitlesen. */
const SPEED = 34;

export function Testimonials() {
  const { lang } = useLang();
  const tr = tx.testimonials;
  const railRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Der zweite Durchlauf ist eine reine Kopie: Sobald die erste Hälfte
  // durchgescrollt ist, springen wir um genau diese Hälfte zurück — der
  // Inhalt an der neuen Position ist derselbe, der Sprung bleibt unsichtbar.
  const track = [...tr.items, ...tr.items];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || hovered) return;

    let raf = 0;
    let last = performance.now();
    // scrollLeft rundet beim Schreiben auf ganze Pixel. Bei 34 px/s wären das
    // rund 0,57 px pro Frame — die würden jedes Mal wegrundet und die Leiste
    // stünde still. Deshalb sammeln wir den Rest und schieben nur ganze Pixel.
    let carry = 0;

    const step = (now: number) => {
      const advance = (SPEED * (now - last)) / 1000 + carry;
      last = now;
      const px = Math.floor(advance);
      carry = advance - px;

      if (px > 0) {
        rail.scrollLeft += px;
        const half = rail.scrollWidth / 2;
        if (half > 0 && rail.scrollLeft >= half) rail.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hovered]);

  return (
    <section className="section section-alt" id="stimmen">
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
            {t(tr.lead, lang)}
          </Reveal>
        </div>
      </div>

      {/* Außerhalb von .container, damit die Karten an beiden Rändern
          aus dem Bild laufen statt am Raster zu stoppen. */}
      <div
        className="marquee"
        role="group"
        aria-label={t(tr.regionLabel, lang)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="marquee-rail" ref={railRef} tabIndex={0}>
          <ul className="marquee-track">
            {track.map((item, i) => {
              const name = t(item.name, lang);
              const clone = i >= tr.items.length;
              return (
                <li
                  className="testimonial"
                  key={i}
                  /* Kopien nicht doppelt vorlesen und nicht antabbbar machen. */
                  aria-hidden={clone || undefined}
                  inert={clone || undefined}
                >
                  <figure>
                    <blockquote>
                      <Quote
                        className="testimonial-mark"
                        size={15}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                      {t(item.quote, lang)}
                    </blockquote>
                    <figcaption>
                      <span className="testimonial-avatar" aria-hidden="true">
                        {name.charAt(0)}
                      </span>
                      <span className="testimonial-person">
                        <strong>{name}</strong>
                        <small>{t(item.role, lang)}</small>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
