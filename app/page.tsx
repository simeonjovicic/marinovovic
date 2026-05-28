import { SiteHeader }      from "@/components/SiteHeader";
import { Hero }            from "@/components/Hero";
import { LogoStrip }       from "@/components/LogoStrip";
import { About }           from "@/components/About";
import { Services }        from "@/components/Services";
import { Showcase }        from "@/components/Showcase";
import { References }      from "@/components/References";
import { Domains }         from "@/components/Domains";
import { FAQ }             from "@/components/FAQ";
import { Contact }         from "@/components/Contact";
import { SiteFooter }      from "@/components/SiteFooter";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="hauptinhalt">
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <Showcase />
        <References />
        <Domains />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
