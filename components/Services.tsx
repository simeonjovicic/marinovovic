"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { ChapterTitle } from "./ChapterTitle";

const PROJECTS_DATA = [
  {
    title: "Enterprise RAG-Wissensdatenbank",
    category: "Knowledge Management / KI",
    metrics: "90% Zeitersparnis",
    challenge: "Manuelle Suche in Tausenden Verträgen & PDFs war fehleranfällig.",
    solution: [
      "Embedding & Vektorisierung aller Dokumente",
      "Hybride Suche (Vektor + Keyword)",
      "GPT-4o Integration mit Halluzinations-Schutz",
    ],
    result: "Sekundenschnelle Suche. 100% In-House & DSGVO-konform.",
    tech: "Qdrant, Python, LangChain, GPT-4o, Docker",
    year: "2025",
  },
  {
    title: "Multi-Agenten n8n Pipeline",
    category: "Process Automation",
    metrics: "85% Automatisierung",
    challenge: "Täglicher Posteingang musste manuell sortiert und zugewiesen werden.",
    solution: [
      "Autonome n8n KI-Agenten zur Mail-Triage",
      "Extraktion relevanter Kundendaten & Beträge",
      "REST-API Anbindung für Tickets",
    ],
    result: "24/7-Triage. Manuelle Sichtung um 85% reduziert.",
    tech: "n8n, Claude 3.5, REST-APIs, Node.js",
    year: "2026",
  },
  {
    title: "Aktuarielle Schadenschätzung",
    category: "Versicherungsmathematik",
    metrics: "Präzisierte Prognostik",
    challenge: "Hohe Volatilität erschwerte die stochastische Großschadenprognose.",
    solution: [
      "Stochastische Point-Prozess-Modellierung",
      "Fusion klassischer Tabellen mit Neuronalen Netzen",
      "Monte-Carlo-Validierung historischer Daten",
    ],
    result: "18% geringere Schwankungsbreite bei Reservekalkulation.",
    tech: "Python, PyTorch, Pandas, Scipy, Jupyter",
    year: "2024",
  },
  {
    title: "B2B AI-Enablement & n8n Training",
    category: "Training & Workshops",
    metrics: "150+ geschulte Fachkräfte",
    challenge: "IT- & Ops-Teams fehlte Know-how für eigenständige LLM-Automatisierungen.",
    solution: [
      "Konzeptionierung von Prompt-Playbooks",
      "n8n Bootcamps & API-Hands-on-Training",
      "Coaching bei ersten Pilotprojekten vor Ort",
    ],
    result: "Mitarbeiter bauen eigene Workflows in 2 Wochen.",
    tech: "n8n, Prompting Playbooks, LLM API-Design",
    year: "2025",
  },
  {
    title: "DSGVO-konformes Legal-RAG",
    category: "Knowledge Management / Legal",
    metrics: "12.000 Akten indexiert",
    challenge: "Anwaltskanzlei brauchte Mandantsuche über Aktenarchive ohne Cloud-Abfluss.",
    solution: [
      "On-Premise Vektor-DB mit lokalem Llama-3 Modell",
      "Mandanten- & Mandatsbezogene Berechtigungsfilter",
      "Audit-Log für jeden Retrieval-Vorgang",
    ],
    result: "Recherchezeit von Stunden auf Sekunden reduziert.",
    tech: "Qdrant, Llama-3, Postgres RLS, Docker",
    year: "2025",
  },
  {
    title: "Predictive Maintenance Pipeline",
    category: "Industrial AI",
    metrics: "32% weniger Stillstand",
    challenge: "Ungeplante Ausfälle an Produktionsmaschinen verursachten hohe Folgekosten.",
    solution: [
      "Time-Series Anomaliedetektion auf Sensordaten",
      "Verschmelzung historischer Wartungsprotokolle",
      "Frühwarnsystem mit konfigurierbaren Schwellen",
    ],
    result: "Wartung verschiebt sich von reaktiv zu prädiktiv.",
    tech: "Python, PyTorch, MQTT, TimescaleDB, Grafana",
    year: "2024",
  },
];

// SVGs for the Services Section with micro-animations
const AgentSvg = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-12 h-12 text-[#FF4D2D] group-hover:rotate-90 transition-transform duration-[1500ms] ease-in-out"
  >
    <circle cx="12" cy="12" r="3" fill="#0C0C0C" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="2" r="1.5" fill="currentColor" />
    <circle cx="12" cy="22" r="1.5" fill="currentColor" />
    <circle cx="2" cy="12" r="1.5" fill="currentColor" />
    <circle cx="22" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const RagSvg = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-12 h-12 text-[#FF4D2D] group-hover:-translate-y-1 transition-transform duration-500 ease-out"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
    <path d="M11 17h2M12 15v4" strokeLinecap="round" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);

const TrainingSvg = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-12 h-12 text-[#FF4D2D] group-hover:scale-110 transition-transform duration-500 ease-out"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    <path d="M12 12v10" strokeDasharray="3 3" />
  </svg>
);

const SERVICES_DATA = [
  {
    num: "01",
    title: "KI-Agents & Prozessautomatisierung",
    desc: "Analyse, Konzeption und Umsetzung vollautomatisierter Geschäftsprozesse. Wir identifizieren repetitive Aufgaben, modellieren Agenten-Workflows und integrieren sie nahtlos in Ihre bestehende Systemlandschaft.",
    icon: <AgentSvg />,
    scope: [
      "Modellierung autonomer Task-Agenten",
      "Schnittstellenanbindung & n8n Enterprise Setups",
      "Fehlerbehandlung & Ausfallsicherung von API-Pipelines",
    ],
    idealFor: "Unternehmen mit hohem E-Mail-, Beleg- oder Ticketvolumen, das manuell sortiert und eingegeben wird.",
  },
  {
    num: "02",
    title: "Custom AI & RAG-Systeme",
    desc: "Maßgeschneiderte KI-Applikationen auf Basis modernster Architekturen. Von der Vektorisierung eigener Unternehmensdaten (Retrieval-Augmented Generation) bis zur produktiven Bereitstellung. Sicher, DSGVO-konform und wartbar.",
    icon: <RagSvg />,
    scope: [
      "Optimiertes Dokumenten-Parsing & Chunking",
      "Vektorsuche mit Qdrant, Pinecone oder Milvus",
      "Sichere Anbindung lokaler LLMs (Llama-3, Mistral)",
    ],
    idealFor: "Organisationen, die internes Wissen (Leitfäden, Verträge, Wikis) per Freitext-Suche für Teams nutzbar machen wollen.",
  },
  {
    num: "03",
    title: "Akademische & B2B Schulungen",
    desc: "Praxisnahe Workshops und strukturierte Lehre für Fach- und Führungskräfte sowie Studierende. Vermittlung von fundiertem mathematischen Wissen gepaart mit Hands-on-Erfahrung im Prompt-Engineering und n8n-Workflow-Design.",
    icon: <TrainingSvg />,
    scope: [
      "In-House n8n Bootcamps & Zertifizierungsvorbereitung",
      "Prompt-Engineering & LLM API-Design Playbooks",
      "Vorlesungen & HTL/FH Lehrplan-Entwicklung für Data Science",
    ],
    idealFor: "Firmen, die eigene IT- & Ops-Teams befähigen wollen, KI-Automatisierungen autark weiterzuentwickeln.",
  },
];

// Sub-component for Project Cards with Mouse Hover Radial Glow Effect
function ProjectCard({ proj }: { proj: typeof PROJECTS_DATA[0] }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="bg-[#161616]/75 border border-white/5 hover:border-[#FF4D2D]/30 rounded-3xl p-5 md:p-6 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden cursor-default h-full"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Radial Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 77, 45, 0.08), transparent 80%)`
        }}
      />
      
      <Reveal as="div" className="relative z-10 h-full flex flex-col justify-between w-full">
        <div>
          {/* Top Line */}
          <div className="flex items-center justify-between text-xs font-mono text-[#A0A0A0] mb-5 pb-3 border-b border-white/5">
            <span className="text-white/80">{proj.category}</span>
            <span>({proj.year})</span>
          </div>

          {/* Project Title */}
          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#FF4D2D] transition-colors uppercase tracking-tight mb-5">
            {proj.title}
          </h4>

          {/* Challenge Section - hidden on mobile to reduce card density */}
          <div className="mb-4 hidden md:block">
            <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">Herausforderung:</span>
            <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed">{proj.challenge}</p>
          </div>

          {/* Technical Solution bullets - hidden on mobile */}
          <div className="mb-6 hidden md:block">
            <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1.5">Lösung:</span>
            <ul className="flex flex-col gap-1.5">
              {proj.solution.map((sol, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/90">
                  <span className="text-[#FF4D2D] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results Card & Tech Tags */}
        <div className="mt-auto">
          <div className="bg-[#1F1F1F]/60 border border-white/5 rounded-xl p-3 md:p-4 mb-5 group-hover:bg-[#252525]/60 transition-colors duration-500">
            <span className="text-[9px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-0.5">Impact ({proj.metrics}):</span>
            <p className="text-xs text-white/80 leading-relaxed font-semibold">{proj.result}</p>
          </div>

          <div className="border-t border-white/5 pt-3 flex flex-wrap gap-1.5 text-[9px] font-mono text-[#A0A0A0]">
            {proj.tech.split(", ").map((t, i) => (
              <span key={i} className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-full text-white/70 group-hover:text-white group-hover:border-white/10 transition-colors duration-300">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

// Per-item sticky scroll — each item's left meta sticks while its content scrolls past.
// Vertical coral progress line on the left fills based on scroll through the whole list.
function CapabilitiesSticky({
  services,
}: {
  services: typeof SERVICES_DATA;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // start filling when list enters from the bottom, finish when it leaves
      const total = rect.height + vh * 0.4;
      const scrolled = vh * 0.7 - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      el.style.setProperty("--progress", progress.toFixed(4));
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
    <div
      ref={listRef}
      className="hidden lg:block relative mt-6 pl-10"
      style={{ ["--progress" as string]: "0" }}
    >
      {/* Vertical progress line on the left */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10 rounded-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#FF4D2D] to-[#E63E1F] transition-[height] duration-75 linear"
          style={{ height: "calc(var(--progress) * 100%)" }}
        />
      </div>

      {services.map((service, i) => (
        <article
          key={service.num}
          className="grid grid-cols-12 gap-12 py-16 xl:py-20 first:pt-0 last:pb-0 border-b last:border-b-0 border-white/10"
        >
          {/* Sticky left meta — sticks during this item's scroll */}
          <div className="col-span-5 self-start sticky top-24">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF4D2D]/10 border border-[#FF4D2D]/30 mb-6">
              {service.icon}
            </div>
            <span
              className="block text-[5rem] xl:text-[7rem] font-black tracking-tighter leading-none select-none bg-gradient-to-b from-[#FF4D2D] to-[#E63E1F] bg-clip-text text-transparent"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              {service.num}
            </span>
            <div className="w-12 h-[3px] bg-[#FF4D2D] my-4 rounded-full" />
            <span className="block text-[11px] font-bold text-white uppercase tracking-[0.16em] mb-2">
              Leistung
            </span>
            <span className="block text-xs font-mono text-[#A0A0A0] tracking-wide">
              {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>

          {/* Right scrolling content */}
          <div className="col-span-7 flex flex-col gap-5">
            <h4 className="text-2xl xl:text-3xl font-bold text-white uppercase tracking-tight leading-tight">
              {service.title}
            </h4>
            <p className="text-[#A0A0A0] text-base leading-relaxed max-w-[58ch]">
              {service.desc}
            </p>

            <div className="flex flex-col gap-2 pt-5 mt-2 border-t border-white/10">
              <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider">
                Projektumfang / Deliverables:
              </span>
              <ul className="flex flex-col gap-2.5">
                {service.scope.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-white/95"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2D] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#161616]/60 border border-[#FF4D2D]/20 rounded-2xl p-5 md:p-6 text-sm">
              <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">
                Empfohlen für:
              </span>
              <p className="text-white/80 leading-relaxed">
                {service.idealFor}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// Auto-rotating 2-col carousel with top progress bar (desktop only)
function ProjectsCarousel({
  items,
  intervalMs = 6000,
}: {
  items: typeof PROJECTS_DATA;
  intervalMs?: number;
}) {
  const pageSize = 2;
  const pages = Math.max(1, Math.ceil(items.length / pageSize));
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => {
      setPage((p) => (p + 1) % pages);
    }, intervalMs);
    return () => window.clearTimeout(id);
  }, [page, paused, pages, intervalMs]);

  const visible = items.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div
      ref={containerRef}
      className="hidden lg:block mt-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Progress bar */}
      <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden mb-6 relative">
        <div
          key={`${page}-${paused ? "paused" : "running"}`}
          className="absolute inset-0 bg-[#FF4D2D] carousel-progress-fill"
          style={{
            animationDuration: `${intervalMs}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>

      {/* Page indicator dots */}
      <div className="flex justify-end gap-2 mb-4">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setPage(i)}
            aria-label={`Seite ${i + 1} von ${pages}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === page ? "w-8 bg-[#FF4D2D]" : "w-4 bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Cards */}
      <div key={page} className="grid grid-cols-2 gap-8 w-full carousel-fade">
        {visible.map((proj, idx) => (
          <ProjectCard key={`${page}-${idx}`} proj={proj} />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="bg-[#050505] flex flex-col w-full" id="leistungen">
      
      {/* 1. PROJECTS SHOWCASE GRID PANEL — title + cards fit one viewport */}
      <div className="w-full bg-[#121212] border-t border-b border-white/5 min-h-[100svh] flex items-center relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-10 md:py-12 flex flex-col gap-5 md:gap-6">

          {/* Chapter title (was standalone divider, now inline) */}
          <div className="flex flex-col gap-2 md:gap-3">
            <ChapterTitle kicker="// Kapitel 02" title="Expertise & Case Studies" />
            <p className="text-[#A0A0A0] text-xs md:text-sm max-w-2xl leading-relaxed mt-1">
              Ein Einblick in erfolgreiche Integrationen, prädiktive Berechnungen und Schulungsmaßnahmen.
            </p>
          </div>

          {/* Mobile: swipeable horizontal carousel. Desktop (lg+): 2-col grid */}
          <div className="lg:hidden -mx-6 mt-4">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-4 scrollbar-hide">
              {PROJECTS_DATA.map((proj, idx) => (
                <div key={idx} className="snap-center shrink-0 w-[85vw] max-w-md">
                  <ProjectCard proj={proj} />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-1.5 mt-2">
              {PROJECTS_DATA.map((_, idx) => (
                <span key={idx} className="w-1.5 h-1.5 rounded-full bg-white/20" />
              ))}
            </div>
          </div>

          <ProjectsCarousel items={PROJECTS_DATA} />


        </div>
      </div>

      {/* 2. SERVICES LIST PANEL */}
      <div className="w-full bg-[#0C0C0C] border-b border-white/5 py-12 md:py-20 mesh-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Leistungsspektrum &amp; Kompetenzen
            </h3>
            <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
              Präzise definierte Projektumfänge. Von der ersten Machbarkeitsanalyse bis zum dauerhaften In-House-Betrieb.
            </p>
          </div>

          {/* Desktop: sticky scroll. Mobile: simple stacked list */}
          <CapabilitiesSticky services={SERVICES_DATA} />

          <div className="lg:hidden flex flex-col w-full divide-y divide-white/10 mt-4">
            {SERVICES_DATA.map((service) => (
              <div key={service.num} className="py-8 first:pt-0 last:pb-0 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-[#FF4D2D] leading-none tracking-tighter">
                    {service.num}
                  </span>
                  <div className="p-2.5 bg-[#FF4D2D]/10 border border-[#FF4D2D]/30 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">
                  {service.title}
                </h4>
                <div className="bg-[#161616]/50 border border-[#FF4D2D]/20 rounded-2xl p-5 text-xs">
                  <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">
                    Empfohlen für:
                  </span>
                  <p className="text-white/80 leading-relaxed">{service.idealFor}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
