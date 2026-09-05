import { SiteHeader }      from "@/components/SiteHeader";
import { Hero }            from "@/components/Hero";
import { About }           from "@/components/About";
import { Services }        from "@/components/Services";
import { AiOs }            from "@/components/AiOs";
import { Showcase }        from "@/components/Showcase";
import { Testimonials }    from "@/components/Testimonials";
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
        <About />
        <Services />
        <AiOs />
        <Showcase />
        <Testimonials />
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
