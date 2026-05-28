"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  description: string;
  year: string;
  href: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: "RAG-Assistenz für Versicherer",
    description:
      "Wissensdatenbank mit Retrieval-Augmented Generation für interne Sachbearbeitung.",
    year: "2025",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Agenten-Workflow für Industrie",
    description:
      "Automatisierte Angebotsprüfung und Rückfragen-Routing über mehrstufige KI-Agents.",
    year: "2025",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "n8n-Pipeline für Fachhochschule",
    description:
      "Datenpipeline zur Aufbereitung von Lehrmaterialien und Auswertung von Lernpfaden.",
    year: "2024",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "KI-Strategie-Workshop",
    description:
      "Zwei-Tages-Format für Führungskräfte: Use-Case-Mapping und Architekturentscheidungen.",
    year: "2024",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Vektor-Datenbank-Integration",
    description:
      "Anbindung einer Vektor-DB an bestehende ERP-Landschaft mit dokumentierter Migration.",
    year: "2023",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Showcase() {
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
            <span className="badge">Projekte</span>
            <h2 className="section-title">
              Ausgewählte <span className="accent">Arbeiten</span>
            </h2>
          </Reveal>

          <Reveal as="p" className="section-copy">
            <span className="hide-mobile">
              Ein Auszug aus Beratungs- und Umsetzungsprojekten der letzten
              Jahre — von RAG-Systemen über Agenten-Workflows bis zu Lehr- und
              Strategie-Formaten.
            </span>
            <span className="show-mobile">
              Auszug aktueller Projekte — RAG, Agenten und Workshops.
            </span>
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
            {PROJECTS.map((p, i) => (
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

          {PROJECTS.map((project, index) => (
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
