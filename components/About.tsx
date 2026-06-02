"use client";

import { Reveal } from "./Reveal";

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

// Custom Premium SVG Icons for the Core Pillars with Hover Micro-animations
const TargetIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-8 h-8 text-[#FF4D2D] group-hover:rotate-180 transition-transform duration-1000 ease-out"
  >
    <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M12 2V5M12 19V22M2 12H5M19 12H22" strokeLinecap="round" />
  </svg>
);

const BlueprintIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-8 h-8 text-[#FF4D2D] group-hover:scale-110 group-hover:skew-x-3 transition-transform duration-500 ease-out"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" strokeOpacity="0.2" />
    <path d="M9 3V21M15 3V21M3 9H21M3 15H21" strokeOpacity="0.1" strokeDasharray="2 2" />
    <path d="M4 4L20 20M20 4L4 20" strokeLinecap="round" strokeOpacity="0.3" />
    <circle cx="12" cy="12" r="4" fill="#0C0C0C" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const TransferIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    className="w-8 h-8 text-[#FF4D2D] group-hover:translate-y-1 transition-transform duration-500 ease-out"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeOpacity="0.3" />
    <circle cx="9" cy="7" r="4" strokeOpacity="0.3" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M12 14l3 3m0 0l3-3m-3 3V10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Large Custom Glowing Mathematical Schematic SVG with Pulsing Inner Nodes
const MathSchematic = () => (
  <svg viewBox="0 0 320 320" className="w-full max-w-[280px] md:max-w-[320px] aspect-square mx-auto opacity-75" aria-hidden="true">
    <defs>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF4D2D" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#050505" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Glowing Background */}
    <circle cx="160" cy="160" r="120" fill="url(#glow)" className="animate-pulse" style={{ animationDuration: '4s' }} />
    
    {/* Vector Grid System */}
    <circle cx="160" cy="160" r="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    <circle cx="160" cy="160" r="70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    <circle cx="160" cy="160" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    <line x1="60" y1="160" x2="260" y2="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    <line x1="160" y1="60" x2="160" y2="260" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    
    {/* Interconnected Neural Lines */}
    <g stroke="rgba(255, 77, 45, 0.25)" strokeWidth="1.5">
      <line x1="80" y1="120" x2="160" y2="80" className="animate-pulse" style={{ animationDuration: '3s' }} />
      <line x1="80" y1="120" x2="160" y2="160" />
      <line x1="80" y1="200" x2="160" y2="160" />
      <line x1="80" y1="200" x2="160" y2="240" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
      <line x1="160" y1="80" x2="240" y2="140" />
      <line x1="160" y1="160" x2="240" y2="140" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
      <line x1="160" y1="240" x2="240" y2="180" />
    </g>
    
    {/* Interconnected Pulsing Nodes */}
    <g fill="#050505" stroke="#FF4D2D" strokeWidth="2">
      <circle cx="80" cy="120" r="6" className="animate-pulse" style={{ animationDuration: '2.2s' }} />
      <circle cx="80" cy="200" r="6" className="animate-pulse" style={{ animationDuration: '1.8s' }} />
      <circle cx="160" cy="80" r="6" className="animate-pulse" style={{ animationDuration: '2.6s' }} />
      <circle cx="160" cy="160" r="7" fill="#FF4D2D" className="animate-pulse" style={{ animationDuration: '1.2s' }} />
      <circle cx="160" cy="240" r="6" className="animate-pulse" style={{ animationDuration: '3.1s' }} />
      <circle cx="240" cy="140" r="6" className="animate-pulse" style={{ animationDuration: '2s' }} />
      <circle cx="240" cy="180" r="6" className="animate-pulse" style={{ animationDuration: '2.4s' }} />
    </g>
    
    {/* Mathematical Formula Overlays */}
    <text x="50" y="70" fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">f(x) = σ(Wᵀx + b)</text>
    <text x="210" y="240" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily="monospace">∫ e⁻ˣ² dx</text>
    <text x="210" y="80" fill="rgba(255,77,45,0.4)" fontSize="14" fontFamily="monospace" fontWeight="bold">Σ</text>
    <text x="60" y="260" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="monospace">∇f(x) = 0</text>
  </svg>
);

export function About() {
  return (
    <section className="bg-[#050505] flex flex-col w-full" id="ueber-mich">
      
      {/* PANEL 1: Slogan Panel (Split Editorial Layout) */}
      <div className="w-full bg-[#121212] border-b border-white/5 py-12 md:py-20 lg:py-24 mesh-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]/90 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="lg:col-span-8 text-center md:text-left w-full">
              <Reveal as="h2" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-white">
                Durchdachte KI für <span className="text-[#FF4D2D]">Unternehmen mit Anspruch</span> — entwickelt, um in einer komplexen Welt <span className="text-[#FF4D2D]">messbaren Vorsprung</span> zu sichern.
              </Reveal>
            </div>
            
            {/* Right: Technical Schema Icon */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <Reveal>
                <MathSchematic />
              </Reveal>
            </div>
            
          </div>
        </div>
      </div>

      {/* PANEL 2: Bio & Profile Intro Panel */}
      <div className="w-full bg-[#0C0C0C] border-b border-white/5 py-12 md:py-20 lg:py-24 mesh-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col justify-between">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <Reveal as="h3" className="lg:col-span-8 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tighter leading-snug text-white">
                Ich bin ein vielseitiger <span className="text-[#FF4D2D]">KI-Berater und Dozent</span>, der komplexe Mathematik mit moderner künstlicher Intelligenz verbindet. Mein Fokus liegt auf <span className="text-[#FF4D2D]">tragfähiger Architektur</span>, nützlichen Systemen und dem <span className="text-[#FF4D2D]">Transfer in die Praxis</span>.
              </Reveal>
              
              <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-8 lg:border-l border-white/10">
                <Reveal as="p" className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
                  Ich begleite Ihre Projekte von der ersten Analyse bis zur produktiven Integration in Ihre bestehenden Systeme. Fundierte Methodik und realistische Erwartungen stehen dabei an erster Stelle.
                </Reveal>
                
                <Reveal>
                  <a href="#leistungen" className="btn-pill btn-pill-coral self-start">
                    Leistungen ansehen
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4">
                      <path
                        d="M4 10h11M11 6l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>

          {/* Stats Grid with Hover Elevation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-12 mt-16 md:mt-24 w-full">
            {STATS.map((stat, i) => (
              <Reveal key={i} className="flex flex-col gap-2 p-5 md:p-6 bg-[#161616]/40 border border-white/5 rounded-2xl hover:border-[#FF4D2D]/20 hover:-translate-y-1 hover:bg-[#1E1E1E]/40 transition-all duration-300">
                <span className="text-4xl md:text-5xl font-black text-[#FF4D2D] tracking-tight">{stat.num}</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">{stat.title}</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed hidden md:block">{stat.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Core Pillars with Custom SVG rotations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12 mt-12 w-full">
            
            {/* Pillar 1 */}
            <Reveal className="flex flex-col gap-3 md:gap-4 bg-[#121212]/40 border border-white/5 hover:border-[#FF4D2D]/35 hover:-translate-y-1 hover:bg-[#1E1E1E]/20 transition-all duration-500 p-5 md:p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D2D]/5 flex items-center justify-center">
                <TargetIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider font-mono">Pfeiler 01</span>
                <h4 className="text-lg font-bold text-white uppercase mt-1">Use Case schärfen</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mt-2 hidden md:block">
                  Identifizieren, welche KI-Verfahren im individuellen Kontext echten, messbaren Nutzen stiften und Potenziale optimal heben.
                </p>
              </div>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal className="flex flex-col gap-3 md:gap-4 bg-[#121212]/40 border border-white/5 hover:border-[#FF4D2D]/35 hover:-translate-y-1 hover:bg-[#1E1E1E]/20 transition-all duration-500 p-5 md:p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D2D]/5 flex items-center justify-center">
                <BlueprintIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider font-mono">Pfeiler 02</span>
                <h4 className="text-lg font-bold text-white uppercase mt-1">Architektur etablieren</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mt-2 hidden md:block">
                  Robuste, wartbare und modular aufgebahaute RAG-Systeme und n8n-Workflowpipelines planen, sichern und nahtlos implementieren.
                </p>
              </div>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal className="flex flex-col gap-3 md:gap-4 bg-[#121212]/40 border border-white/5 hover:border-[#FF4D2D]/35 hover:-translate-y-1 hover:bg-[#1E1E1E]/20 transition-all duration-500 p-5 md:p-6 rounded-2xl group">
              <div className="w-12 h-12 rounded-xl bg-[#FF4D2D]/5 flex items-center justify-center">
                <TransferIcon />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#FF4D2D] uppercase tracking-wider font-mono">Pfeiler 03</span>
                <h4 className="text-lg font-bold text-white uppercase mt-1">Transfer &amp; Enablement</h4>
                <p className="text-xs text-[#A0A0A0] leading-relaxed mt-2 hidden md:block">
                  Mitarbeiter befähigen und anleiten. Praktische n8n-Workshops und Prompt-Engineering Schulungen für langfristige Unabhängigkeit.
                </p>
              </div>
            </Reveal>
            
          </div>
        </div>
      </div>
    </section>
  );
}
