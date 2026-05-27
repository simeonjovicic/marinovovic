import { SiteHeader }  from "@/components/SiteHeader";
import { Hero }        from "@/components/Hero";
import { LogoStrip }   from "@/components/LogoStrip";
import { About }       from "@/components/About";
import { Services }    from "@/components/Services";
import { References }  from "@/components/References";
import { Domains }     from "@/components/Domains";
import { Contact }     from "@/components/Contact";
import { SiteFooter }  from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="hauptinhalt">
        <Hero />
        <LogoStrip />
        <About />
        <Services />
        <References />
        <Domains />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
