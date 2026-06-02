import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { References } from "@/components/References";
import { Showcase } from "@/components/Showcase";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="hauptinhalt" className="relative z-10 bg-[#050505] overflow-hidden">
        
        {/* HERO SECTION */}
        <Hero />

        {/* =================================================================
           KAPITEL 01: PROFIL & PHILOSOPHIE
           ================================================================= */}
        <section className="w-full bg-[#050505] pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20 flex flex-col items-center border-t border-white/5">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Kapitel 01
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mt-3 md:mt-4 leading-none">
              Profil &amp; Philosophie
            </h2>
          </div>
        </section>
        <About />

        {/* =================================================================
           KAPITEL 02: EXPERTISE & CASES
           ================================================================= */}
        <section className="w-full bg-[#050505] pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20 flex flex-col items-center border-t border-white/5">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Kapitel 02
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mt-3 md:mt-4 leading-none">
              Expertise &amp; Case Studies
            </h2>
          </div>
        </section>
        <Services />
        <TechStack />
        <Showcase />

        {/* =================================================================
           KAPITEL 03: ARBEITSWEISE & NETZWERK
           ================================================================= */}
        <section className="w-full bg-[#050505] pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20 flex flex-col items-center border-t border-white/5">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Kapitel 03
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mt-3 md:mt-4 leading-none">
              Arbeitsweise &amp; Netzwerk
            </h2>
          </div>
        </section>
        <Process />
        <References />
        <FAQ />

        {/* =================================================================
           KAPITEL 04: PROJEKT STARTEN
           ================================================================= */}
        <section className="w-full bg-[#050505] pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20 flex flex-col items-center border-t border-white/5">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#FF4D2D] uppercase tracking-[0.2em]">
              // Kapitel 04
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mt-3 md:mt-4 leading-none">
              Projekt starten
            </h2>
          </div>
        </section>
        <Contact />

      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
