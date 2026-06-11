"use client";

import { useEffect, useState } from "react";

const CHAPTERS = [
  { num: "01", label: "Profil", href: "#ueber-mich", ids: ["ueber-mich"] },
  {
    num: "02",
    label: "Expertise",
    href: "#leistungen",
    ids: ["leistungen", "tech-stack", "projekte"],
  },
  {
    num: "03",
    label: "Arbeitsweise",
    href: "#methodik",
    ids: ["methodik", "referenzen", "faq"],
  },
  { num: "04", label: "Kontakt", href: "#kontakt", ids: ["kontakt"] },
];

/**
 * Fixe Kapitel-Navigation am rechten Rand (Desktop).
 * Zeigt das aktive Kapitel basierend auf der Scroll-Position,
 * erscheint erst nach dem Hero.
 */
export function ChapterRail() {
  const [active, setActive] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const vh = window.innerHeight;
      setVisible(window.scrollY > vh * 0.6);

      const probe = vh * 0.45;
      let current = -1;
      CHAPTERS.forEach((ch, i) => {
        for (const id of ch.ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= probe && rect.bottom > probe) current = i;
        }
      });
      setActive(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Kapitel"
      className={`hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-x-0 pointer-events-auto"
          : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      {CHAPTERS.map((ch, i) => {
        const isActive = i === active;
        return (
          <a
            key={ch.num}
            href={ch.href}
            className="group flex items-center justify-end gap-3 no-underline"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`text-[10px] font-mono font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                isActive
                  ? "text-[#FF4D2D] opacity-100 translate-x-0"
                  : "text-white/0 group-hover:text-white/60 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              }`}
            >
              {ch.label}
            </span>
            <span
              className={`block h-px transition-all duration-300 ${
                isActive
                  ? "w-10 bg-[#FF4D2D]"
                  : "w-6 bg-white/25 group-hover:bg-white/60"
              }`}
            />
            <span
              className={`text-[10px] font-mono font-bold transition-colors duration-300 ${
                isActive ? "text-[#FF4D2D]" : "text-white/35 group-hover:text-white/70"
              }`}
            >
              {ch.num}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
