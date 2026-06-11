"use client";

import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { ChapterTitle } from "./ChapterTitle";

const STATS = [
  {
    num: "15+",
    title: "B2B-Integrationen",
    desc: "Erfolgreich implementierte KI-Systeme in bestehende Firmenstrukturen.",
  },
  {
    num: "85%+",
    title: "Prozessbeschleunigung",
    desc: "Durchschnittliche Zeitersparnis bei automatisierten Dokumenten-Workflows.",
  },
  {
    num: "10+",
    title: "Jahre Lehre",
    desc: "Akademische Lehrerfahrung an österreichischen Hochschulen & HTLs.",
  },
  {
    num: "100%",
    title: "DSGVO-konform",
    desc: "Sichere Systemarchitekturen ohne unbefugten Datenabfluss.",
  },
];

export function About() {
  return (
    <section className="bg-[#050505] flex flex-col w-full" id="ueber-mich">
      
      {/* PANEL: Title + Bio + Stats — one viewport */}
      <div className="w-full bg-[#0C0C0C] border-t border-b border-white/5 min-h-[100svh] flex items-center mesh-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-10 md:py-12 flex flex-col gap-6 md:gap-8">

          {/* Chapter title */}
          <ChapterTitle kicker="// Kapitel 01" title="Profil & Philosophie" />

          {/* Bio headline */}
          <Reveal as="h3" className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-bold tracking-tighter leading-snug text-white max-w-5xl">
            Ich bin ein vielseitiger <span className="text-[#FF4D2D]">KI-Berater und Dozent</span>, der komplexe Mathematik mit moderner künstlicher Intelligenz verbindet. Mein Fokus liegt auf <span className="text-[#FF4D2D]">tragfähiger Architektur</span>, nützlichen Systemen und dem <span className="text-[#FF4D2D]">Transfer in die Praxis</span>.
          </Reveal>

          {/* Stats Grid — animated count up */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {STATS.map((stat, i) => (
              <Reveal key={i} className="flex flex-col gap-2 p-5 md:p-6 bg-[#161616]/40 border border-white/5 rounded-2xl hover:border-[#FF4D2D]/20 hover:-translate-y-1 hover:bg-[#1E1E1E]/40 transition-all duration-300">
                <CountUp value={stat.num} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FF4D2D] tracking-tight" />
                <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">{stat.title}</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed hidden md:block">{stat.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
