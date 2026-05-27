import { Reveal } from "./Reveal";
import { InfiniteGridBg } from "./InfiniteGridBg";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="btn-icon">
    <path
      d="M4 10h11M11 6l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <InfiniteGridBg />
      </div>

      <div className="hero-inner">
        <Reveal as="span" className="badge">
          KI-Berater · Dozent
        </Reveal>

        <Reveal as="h1" className="hero-title">
          Künstliche Intelligenz,{" "}
          <span className="accent">anwendbar&nbsp;gemacht</span>.
        </Reveal>

        <Reveal as="p" className="hero-lead">
          Beratung, Schulung und Umsetzung für Unternehmen.
        </Reveal>

        <Reveal className="hero-actions">
          <a href="#kontakt" className="btn btn-primary">
            Kontakt aufnehmen
            <ArrowIcon />
          </a>
          <a href="#leistungen" className="btn btn-ghost">
            Leistungen ansehen
          </a>
        </Reveal>
      </div>
    </section>
  );
}
