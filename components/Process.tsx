"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Potenzialanalyse",
    desc: "In einem gemeinsamen Audit analysieren wir Ihre Datenstrukturen und manuellen Prozesse, um rentable KI-Use-Cases zu identifizieren.",
    deliverable: "Roadmap & ROI-Schätzung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#FF4D2D] group-hover:scale-125 transition-transform duration-300">
        <circle cx="11" cy="11" r="8" strokeOpacity="0.3" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Prototyping (PoC)",
    desc: "Schnelle Umsetzung eines minimal lauffähigen Systems innerhalb weniger Tage zur Validierung der Machbarkeit und Leistung.",
    deliverable: "Funktionaler PoC / Sandbox",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#FF4D2D] group-hover:scale-125 transition-transform duration-300">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Sichere Architektur",
    desc: "Konzeptionierung des Systemdesigns nach höchsten Sicherheits- und Datenschutzstandards (DSGVO-konforme Vektorsuche & lokale LLMs).",
    deliverable: "Architektur- & Sicherheitskonzept",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#FF4D2D] group-hover:scale-125 transition-transform duration-300">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeOpacity="0.3" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "API-Integration",
    desc: "Nahtlose Anbindung der Automatisierungs-Pipelines und KI-Agents an Ihre bestehende CRM-, ERP- und SQL-Infrastruktur.",
    deliverable: "Produktives API-Setup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#FF4D2D] group-hover:scale-125 transition-transform duration-300">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Team-Enablement",
    desc: "Übergabe der Systeme gekoppelt mit praxisnahen Workshops für Ihre Mitarbeiter (n8n, Prompting), um Unabhängigkeit zu sichern.",
    deliverable: "Team-Schulung & Playbook",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-[#FF4D2D] group-hover:scale-125 transition-transform duration-300">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" strokeOpacity="0.3" />
      </svg>
    ),
  },
];

// Interactive Process Step Card with mouse coordinates radial glow
function ProcessStepCard({ step }: { step: typeof PROCESS_STEPS[0] }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="bg-[#121212]/50 border border-white/5 hover:border-[#FF4D2D]/35 rounded-3xl p-6 flex flex-col justify-between min-h-[300px] transition-all duration-500 group relative z-10 overflow-hidden cursor-default hover:-translate-y-1"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Radial Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(255, 77, 45, 0.08), transparent 80%)`
        }}
      />
      
      <Reveal as="div" className="relative z-10 h-full flex flex-col justify-between w-full">
        <div>
          {/* Step Top Bar with Number & Icon */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
            <span className="text-3xl font-black outline-text group-hover:text-[#FF4D2D] tracking-tighter select-none transition-colors duration-500">
              {step.step}
            </span>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#FF4D2D]/40 group-hover:bg-[#FF4D2D]/5 transition-all duration-500">
              {step.icon}
            </div>
          </div>
          
          {/* Step Title & Description */}
          <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF4D2D] transition-colors duration-500">
            {step.title}
          </h4>
          <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed mb-6">
            {step.desc}
          </p>
        </div>

        {/* B2B Deliverable Callout Box */}
        <div className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-4 mt-auto group-hover:bg-[#252525] group-hover:border-[#FF4D2D]/20 transition-all duration-500">
          <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">Scope / Ergebnis:</span>
          <span className="text-xs text-white/90 font-medium block">{step.deliverable}</span>
        </div>
      </Reveal>
    </div>
  );
}

export function Process() {
  return (
    <section 
      className="w-full bg-[#0C0C0C] border-b border-white/5 py-12 md:py-20 mesh-grid relative" 
      id="methodik"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
        
        {/* Sub-Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white uppercase">
            Der Weg zur Implementierung
          </h3>
          <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
            Ein transparenter, strukturierter Ablauf garantiert die risikofreie Integration moderner Technologien in Ihren Arbeitsalltag.
          </p>
        </div>

        {/* Connected Roadmap Timeline */}
        <div className="roadmap-track grid grid-cols-1 lg:grid-cols-5 gap-8 w-full mt-4">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStepCard key={i} step={step} />
          ))}
        </div>

      </div>
    </section>
  );
}
