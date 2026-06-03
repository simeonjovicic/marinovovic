"use client";

import { Reveal } from "./Reveal";

const TABLE_DATA = [
  {
    partner: "FH Technikum Wien",
    detail: "Lehrbeauftragter für Informatik, angewandte Statistik und Data Science",
    category: "Lehre & Forschung",
    num: "01",
  },
  {
    partner: "HTL Wien West",
    detail: "Professor für Informatik, künstliche Intelligenz und mathematische Modellierung",
    category: "Lehre",
    num: "02",
  },
  {
    partner: "KI-Anomalieerkennung",
    detail: "Diplomprojektbetreuung (M. Mustermann) — Anomaliedetektion in Produktionstexten",
    category: "Forschung",
    num: "03",
  },
  {
    partner: "Risikoanalyse mit NLP",
    detail: "Diplomprojektbetreuung (A. Schmidt) — LLM-basierte Auswertung von Gutachten",
    category: "Forschung",
    num: "04",
  },
  {
    partner: "Lieferketten-Optimierung",
    detail: "Diplomprojektbetreuung (L. Weber) — Optimierung durch Reinforcement Learning",
    category: "Forschung",
    num: "05",
  },
  {
    partner: "Privatwirtschaftliche Beratung",
    detail: "Architektur-Reviews, RAG-System-Audits und n8n-Workflow-Automatisierung",
    category: "Consulting",
    num: "06",
  },
  {
    partner: "Versicherungsmathematik",
    detail: "Aktuarielle Modelle, Risikokalkulationen und stochastische Auswertungen",
    category: "Gutachten",
    num: "07",
  },
];

export function References() {
  return (
    <section 
      className="w-full bg-[#121212] border-b border-white/5 py-12 md:py-20 mesh-grid relative" 
      id="referenzen"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8">
        
        {/* Sub-Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Referenzen &amp; Akademisches Netzwerk
          </h3>
          <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
            Eine Auszug aus betreuten Diplomarbeiten, akademischen Institutionen und wirtschaftlichen Kooperationspartnern.
          </p>
        </div>

        {/* Table representation */}
        <div className="w-full overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 text-[#FF4D2D] text-xs font-bold uppercase tracking-wider">
                <th className="py-4 font-bold">Partner / Projekt</th>
                <th className="py-4 font-bold">Details / Fokus</th>
                <th className="py-4 font-bold">Bereich</th>
                <th className="py-4 font-bold text-right">Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {TABLE_DATA.map((row) => (
                <tr 
                  key={row.num} 
                  className="group hover:bg-white/[0.01] transition-colors"
                >
                  {/* Column 1: Partner */}
                  <td className="py-6 pr-4">
                    <Reveal className="font-bold text-white group-hover:text-[#FF4D2D] transition-colors text-sm md:text-base">
                      {row.partner}
                    </Reveal>
                  </td>
                  
                  {/* Column 2: Detail */}
                  <td className="py-6 pr-4">
                    <Reveal className="text-[#A0A0A0] text-xs md:text-sm">
                      {row.detail}
                    </Reveal>
                  </td>
                  
                  {/* Column 3: Category */}
                  <td className="py-6 pr-4">
                    <Reveal className="text-xs text-white/80">
                      {row.category}
                    </Reveal>
                  </td>
                  
                  {/* Column 4: Index */}
                  <td className="py-6 text-right font-mono text-xs text-[#A0A0A0] group-hover:text-white transition-colors">
                    <Reveal>
                      {row.num}
                    </Reveal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
