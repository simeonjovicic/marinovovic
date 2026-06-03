"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

const META = [
  {
    year: "2025",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2025",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2024",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2023",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Showcase() {
  const { lang } = useLang();
  const tr = tx.showcase;
  const projects = tr.items.map((it, i) => ({
    title: t(it.title, lang),
    description: t(it.description, lang),
    ...META[i],
  }));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, targetRef.current.x, 0.18),
        y: lerp(prev.y, targetRef.current.y, 0.18),
      }));
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const isVisible = hoveredIndex !== null;

  return (
    <section className="section" id="projekte">
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

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="showcase-list"
        >
          <div
            className="showcase-preview"
            style={{
              transform: `translate3d(${smoothPosition.x + 24}px, ${
                smoothPosition.y - 110
              }px, 0)`,
              opacity: isVisible ? 1 : 0,
            }}
            aria-hidden="true"
          >
            {projects.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.title}
                src={p.image}
                alt=""
                style={{
                  opacity: hoveredIndex === i ? 1 : 0,
                  transform:
                    hoveredIndex === i ? "scale(1)" : "scale(1.08)",
                  filter: hoveredIndex === i ? "none" : "blur(8px)",
                }}
              />
            ))}
          </div>

          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <a
                href={project.href}
                className="showcase-item"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-active={hoveredIndex === index}
              >
                <div className="showcase-item-main">
                  <h3>
                    <span>{project.title}</span>
                  </h3>
                  <p>{project.description}</p>
                </div>
                <span className="showcase-year">{project.year}</span>
                <ArrowUpRight
                  className="showcase-arrow"
                  aria-hidden="true"
                  size={18}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
