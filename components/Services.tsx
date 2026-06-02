"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

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
      className="bg-[#161616]/75 border border-white/5 hover:border-[#FF4D2D]/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 group hover:-translate-y-1 relative overflow-hidden cursor-default"
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

          {/* Challenge Section */}
          <div className="mb-4">
            <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">Herausforderung:</span>
            <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed">{proj.challenge}</p>
          </div>

          {/* Technical Solution bullets */}
          <div className="mb-6">
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

export function Services() {
  return (
    <section className="bg-[#050505] flex flex-col w-full" id="leistungen">
      
      {/* 1. PROJECTS SHOWCASE GRID PANEL */}
      <div className="w-full bg-[#121212] border-b border-white/5 py-12 md:py-20 relative">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
          
          {/* Sub-Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white uppercase">
              Ausgewählte Case Studies
            </h3>
            <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
              Ein detaillierter Einblick in erfolgreiche Integrationen, prädiktive Berechnungen und Schulungsmaßnahmen.
            </p>
          </div>

          {/* Grid Layout for Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
            {PROJECTS_DATA.map((proj, idx) => (
              <ProjectCard key={idx} proj={proj} />
            ))}
          </div>

        </div>
      </div>

      {/* 2. SERVICES LIST PANEL */}
      <div className="w-full bg-[#0C0C0C] border-b border-white/5 py-12 md:py-20 mesh-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white uppercase">
              Leistungsspektrum &amp; Kompetenzen
            </h3>
            <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
              Präzise definierte Projektumfänge. Von der ersten Machbarkeitsanalyse bis zum dauerhaften In-House-Betrieb.
            </p>
          </div>

          {/* Elevated Capabilities List */}
          <div className="flex flex-col w-full divide-y divide-white/10 mt-4">
            {SERVICES_DATA.map((service) => (
              <div key={service.num} className="py-10 md:py-14 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
                
                {/* Outlined Number + SVG Icon Container */}
                <div className="lg:col-span-3 flex items-center gap-6">
                  <Reveal className="text-6xl md:text-7xl font-black outline-text group-hover:text-[#FF4D2D] leading-none select-none tracking-tighter w-20 transition-all duration-500">
                    {service.num}
                  </Reveal>
                  <Reveal className="p-3 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#FF4D2D]/10 group-hover:border-[#FF4D2D]/30 transition-all duration-500">
                    {service.icon}
                  </Reveal>
                </div>

                {/* Service Details & Scope */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <Reveal as="h4" className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#FF4D2D] transition-colors duration-500">
                    {service.title}
                  </Reveal>
                  <Reveal as="p" className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                    {service.desc}
                  </Reveal>
                  
                  {/* Detailed Scope bullet points */}
                  <Reveal className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider">Projektumfang / Deliverables:</span>
                    <ul className="flex flex-col gap-1.5">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-white/95">
                          <span className="w-1 h-1 rounded-full bg-[#FF4D2D] group-hover:scale-125 transition-transform duration-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                {/* Target Audience / "Ideal For" box */}
                <div className="lg:col-span-4 flex flex-col justify-center h-full">
                  <Reveal className="bg-[#161616]/50 border border-[#FF4D2D]/20 group-hover:border-[#FF4D2D]/40 rounded-2xl p-5 md:p-6 text-xs md:text-sm transition-colors duration-500">
                    <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">Empfohlen für:</span>
                    <p className="text-white/80 leading-relaxed">{service.idealFor}</p>
                  </Reveal>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
