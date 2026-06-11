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
import { ChapterRail } from "@/components/ChapterRail";
import { ChapterTitle } from "@/components/ChapterTitle";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="hauptinhalt" className="relative z-10 bg-[#050505] overflow-x-clip">
        
        {/* HERO SECTION */}
        <Hero />

        <About />

        <Services />
        <TechStack />
        <Showcase />

        {/* =================================================================
           KAPITEL 03: ARBEITSWEISE & NETZWERK
           ================================================================= */}
        <section className="w-full bg-[#050505] pt-20 md:pt-32 lg:pt-40 pb-12 md:pb-20 flex flex-col items-center border-t border-white/5">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
            <ChapterTitle kicker="// Kapitel 03" title="Arbeitsweise & Netzwerk" />
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
            <ChapterTitle kicker="// Kapitel 04" title="Projekt starten" />
          </div>
        </section>
        <Contact />

      </main>
      <SiteFooter />
      <StickyMobileCta />
      <ChapterRail />
    </>
  );
}
