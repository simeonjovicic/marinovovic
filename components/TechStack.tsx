"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const TECH_CATEGORIES = [
  {
    title: "Künstliche Intelligenz & LLMs",
    desc: "Erstellen von semantischen Vektorräumen, Einbindung proprietärer und quelloffener LLMs, Feintuning und RAG-Architektur.",
    techs: ["OpenAI (GPT-4o)", "Anthropic Claude", "Ollama / Llama-3", "Qdrant", "Pinecone", "LangChain", "Hugging Face"],
    integration: "Setup datenschutzkonformer RAG-Systeme mittels Qdrant in virtualisierten Docker-Containern, kombiniert mit API-Gateways für kontrollierten LLM-Zugriff.",
  },
  {
    title: "Prozessautomatisierung",
    desc: "Aufbau robuster, verteilter Workflow-Pipelines zur Synchronisierung und Transformation von B2B-Firmendaten.",
    techs: ["n8n (Self-Hosted)", "Zapier", "Make / Integromat", "Custom Webhooks", "REST APIs", "Docker Deployment"],
    integration: "Zentralisierte Workflow-Orchestrierung mit n8n zur Anbindung von ERP- und CRM-Systemen an künstliche Intelligenz mit Fallback-Logik.",
  },
  {
    title: "Mathematics & Data Science",
    desc: "Statistische Berechnungen, stochastische Prozesse, aktuarielle Tarifierungsmodelle und Datenvisualisierung.",
    techs: ["Python (Pandas, Numpy)", "SciPy / Scikit-Learn", "PyTorch", "R Language", "Jupyter Notebooks", "SQL Databases"],
    integration: "Entwicklung statistischer Datenpipelines in Python zur Analyse risikorelevanter Zeitreihen und zur dynamischen aktuariellen Rückstellungsberechnung.",
  },
  {
    title: "Software Engineering & Dev",
    desc: "Entwicklung hochperformanter, sicherer Architekturen für webbasierte Cockpits und Schnittstellen.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js / FastAPI", "Git Version Control", "Linux Servers"],
    integration: "Bespoke Web-Dashboards zur Visualisierung automatisierter Pipelines und KI-Entscheidungen, performant ausgeliefert mit Next.js.",
  },
];

// Interactive Tech Category Card with mouse coordinates radial glow
function TechCategoryCard({ cat }: { cat: typeof TECH_CATEGORIES[0] }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      className="bg-[#161616]/60 border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group cursor-default"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Radial Hover Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(255, 77, 45, 0.06), transparent 80%)`
        }}
      />
      
      <Reveal as="div" className="relative z-10 h-full flex flex-col justify-between w-full">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-[#FF4D2D] transition-colors duration-300">
            {cat.title}
          </h4>
          <p className="text-xs md:text-sm text-[#A0A0A0] leading-relaxed mb-6">
            {cat.desc}
          </p>
          
          {/* Integration Details - B2B Focus */}
          <div className="bg-[#1C1C1C] border border-white/5 rounded-2xl p-4 md:p-5 mb-6 group-hover:bg-[#222] transition-colors duration-500">
            <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider block mb-1">Integrations-Szenario:</span>
            <p className="text-xs text-white/95 leading-relaxed">{cat.integration}</p>
          </div>
        </div>

        {/* Technologies list */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
          {cat.techs.map((t, idx) => (
            <span 
              key={idx} 
              className="px-2.5 py-1 bg-white/5 border border-white/5 hover:border-[#FF4D2D]/30 text-white font-mono text-[10px] rounded-full transition-colors duration-300 hover:text-[#FF4D2D]"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function TechStack() {
  return (
    <section 
      className="w-full bg-[#121212] border-b border-white/5 py-12 md:py-20 relative" 
      id="tech-stack"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
        
        {/* Sub-Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white uppercase">
            Technologische Expertise &amp; Integration
          </h3>
          <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
            Eine gezielte Auswahl erprobter Werkzeuge für datenschutzkonforme Unternehmensautomatisierung und komplexe Berechnungen.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          {TECH_CATEGORIES.map((cat, i) => (
            <TechCategoryCard key={i} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}
