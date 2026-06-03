"use client";

import { useState } from "react";

const TECH_CATEGORIES = [
  {
    num: "01",
    kicker: "Intelligence",
    title: "Künstliche Intelligenz & LLMs",
    desc: "Vektorräume, RAG-Architektur und proprietäre wie quelloffene LLMs.",
    techs: ["OpenAI", "Anthropic Claude", "Ollama / Llama-3", "Qdrant", "Pinecone", "LangChain", "Hugging Face"],
  },
  {
    num: "02",
    kicker: "Automation",
    title: "Prozessautomatisierung",
    desc: "Robuste, verteilte Workflow-Pipelines für B2B-Datenflüsse.",
    techs: ["n8n", "Zapier", "Make", "Webhooks", "REST APIs", "Docker"],
  },
  {
    num: "03",
    kicker: "Math & Data",
    title: "Mathematics & Data Science",
    desc: "Statistik, stochastische Prozesse und aktuarielle Modellierung.",
    techs: ["Python", "SciPy / Scikit", "PyTorch", "R", "Jupyter", "SQL"],
  },
  {
    num: "04",
    kicker: "Engineering",
    title: "Software Engineering & Dev",
    desc: "Performante, sichere Architekturen für Web-Cockpits und Schnittstellen.",
    techs: ["Next.js", "TypeScript", "Tailwind", "Node / FastAPI", "Git", "Linux"],
  },
];

function TechCategoryCard({ cat }: { cat: typeof TECH_CATEGORIES[0] }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className="bg-[#161616]/50 border border-white/5 hover:border-[#FF4D2D]/25 rounded-3xl p-8 md:p-10 flex flex-col gap-8 transition-all duration-300 relative overflow-hidden group cursor-default"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(255, 77, 45, 0.06), transparent 80%)`,
        }}
      />

      {/* Top: number + kicker */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="text-[10px] font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
          // {cat.num}
        </span>
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
          {cat.kicker}
        </span>
      </div>

      {/* Middle: title + short desc */}
      <div className="relative z-10 flex flex-col gap-3">
        <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-[#FF4D2D] transition-colors duration-300">
          {cat.title}
        </h4>
        <p className="text-sm text-[#A0A0A0] leading-relaxed max-w-[42ch]">
          {cat.desc}
        </p>
      </div>

      {/* Divider */}
      <div className="relative z-10 h-px bg-white/10" />

      {/* Tech tags */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {cat.techs.map((t, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/5 border border-white/10 text-white/85 font-mono text-[11px] rounded-full transition-colors duration-200 hover:border-[#FF4D2D]/40 hover:text-[#FF4D2D]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section
      className="w-full bg-[#121212] border-t border-b border-white/5 py-16 md:py-24 relative"
      id="tech-stack"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-12 md:gap-16">

        {/* Sub-Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 w-full">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Tech Stack
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Technologische Expertise &amp; Integration
            </h3>
          </div>
          <p className="text-[#A0A0A0] text-xs md:text-sm max-w-xs leading-relaxed">
            Erprobte Werkzeuge — datenschutzkonform und produktionsreif.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
          {TECH_CATEGORIES.map((cat, i) => (
            <TechCategoryCard key={i} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
