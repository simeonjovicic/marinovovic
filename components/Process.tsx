"use client";

import { Reveal } from "./Reveal";

type Step = {
  num: string;
  title: string;
  desc: string;
  duration: string;
  tint: string; // subtle warm/cool tint for inner card so each post-it has personality
  rotate: number;
  side: "left" | "right";
};

const PROCESS_STEPS: Step[] = [
  {
    num: "01",
    title: "Potenzialanalyse",
    desc: "Gemeinsames Audit Ihrer Datenstrukturen und manuellen Prozesse — wir identifizieren rentable KI-Use-Cases.",
    duration: "30 Min",
    tint: "#1E1714", // warm coral-tinted dark
    rotate: -3,
    side: "left",
  },
  {
    num: "02",
    title: "Prototyping (PoC)",
    desc: "Minimal lauffähiges System in wenigen Tagen — Validierung der Machbarkeit und Performance.",
    duration: "1 Woche",
    tint: "#16191E", // cool blue-tinted dark
    rotate: 2,
    side: "right",
  },
  {
    num: "03",
    title: "Sichere Architektur",
    desc: "Systemdesign nach höchsten Datenschutzstandards. DSGVO-konforme Vektorsuche, lokale LLMs.",
    duration: "2 Wochen",
    tint: "#1A171E", // slight purple-tinted dark
    rotate: -2,
    side: "left",
  },
  {
    num: "04",
    title: "API-Integration",
    desc: "Nahtlose Anbindung der Pipelines und KI-Agents an Ihre CRM-, ERP- und SQL-Infrastruktur.",
    duration: "Variabel",
    tint: "#1E1A14", // warm beige-tinted dark
    rotate: 3,
    side: "right",
  },
  {
    num: "05",
    title: "Team-Enablement",
    desc: "Übergabe mit praxisnahen Workshops für Ihre Mitarbeiter — Unabhängigkeit gesichert.",
    duration: "1 Tag",
    tint: "#161A1E", // cool blue-tinted dark
    rotate: -2,
    side: "left",
  },
];

function GlassyPin() {
  return (
    <div
      aria-hidden="true"
      className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 w-7 h-7"
    >
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-1.5 rounded-full bg-black/40 blur-[2px]" />
      <div
        className="relative w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.35) 8%, #FF4D2D 40%, #E63E1F 65%, #8A2412 100%)`,
          boxShadow: `
            0 4px 12px rgba(0,0,0,0.6),
            inset -2px -3px 4px rgba(0,0,0,0.4),
            inset 1px 1px 1px rgba(255,255,255,0.5)
          `,
        }}
      />
      <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/85 blur-[0.5px]" />
    </div>
  );
}

function PostIt({ step }: { step: Step }) {
  return (
    <div
      className="relative group transition-transform duration-500 hover:-translate-y-1 hover:rotate-0 w-full max-w-[360px] md:max-w-[420px]"
      style={{ transform: `rotate(${step.rotate}deg)` }}
    >
      <GlassyPin />

      {/* Outer "paper" frame */}
      <div
        className="relative bg-[#161616] border border-white/10 rounded-2xl p-4 pt-8 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7),0_8px_16px_-6px_rgba(0,0,0,0.5)] transition-colors duration-500 group-hover:border-[#FF4D2D]/30"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 8%), radial-gradient(circle at 50% 0%, rgba(0,0,0,0.35) 0%, transparent 30%)",
        }}
      >
        {/* Inner colored post-it */}
        <div
          className="relative rounded-xl p-6 md:p-8 flex flex-col gap-4 min-h-[260px] md:min-h-[300px] border border-white/5"
          style={{
            backgroundColor: step.tint,
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 35%, rgba(0,0,0,0.25) 100%)",
          }}
        >
          {/* Top: cursive serif number + duration */}
          <div className="flex items-start justify-between">
            <span
              className="font-serif italic text-4xl md:text-[2.6rem] leading-none tracking-tight text-[#FF4D2D] lowercase"
              style={{
                fontFamily:
                  'var(--font-serif), "Source Serif 4", Georgia, serif',
              }}
            >
              {step.num}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-white/40 mt-1">
              {step.duration}
            </span>
          </div>

          {/* Title */}
          <h4 className="text-xl md:text-[1.65rem] font-bold leading-[1.15] tracking-tight text-white uppercase mt-1">
            {step.title}
          </h4>

          {/* Description */}
          <p className="text-sm md:text-[14px] leading-relaxed text-[#A0A0A0]">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section
      className="w-full bg-[#0C0C0C] border-t border-b border-white/5 py-16 md:py-24 mesh-grid relative overflow-hidden"
      id="methodik"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-14 md:gap-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6 w-full">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Methodik
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Der Weg zur Implementierung
            </h3>
          </div>
          <p className="text-[#A0A0A0] text-xs md:text-sm max-w-md leading-relaxed">
            Strukturierter Ablauf — risikofreie Integration in Ihren Arbeitsalltag.
          </p>
        </div>

        {/* Zigzag pinboard layout */}
        <div className="relative">
          {/* Dashed coral connectors between cards */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1900"
            preserveAspectRatio="none"
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
          >
            <path
              d="M 250 220 C 380 300, 600 280, 760 360"
              fill="none"
              stroke="#FF4D2D"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
            />
            <path
              d="M 760 600 C 600 700, 380 680, 250 760"
              fill="none"
              stroke="#FF4D2D"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
            />
            <path
              d="M 250 1000 C 380 1080, 600 1060, 760 1140"
              fill="none"
              stroke="#FF4D2D"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
            />
            <path
              d="M 760 1380 C 600 1480, 380 1460, 250 1540"
              fill="none"
              stroke="#FF4D2D"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeDasharray="3 8"
              strokeLinecap="round"
            />
          </svg>

          <ul className="flex flex-col gap-14 md:gap-20 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <Reveal
                as="li"
                key={step.num}
                className={`flex ${
                  step.side === "left"
                    ? "justify-start md:pl-4 lg:pl-12"
                    : "justify-end md:pr-4 lg:pr-12"
                }`}
              >
                <PostIt step={step} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
