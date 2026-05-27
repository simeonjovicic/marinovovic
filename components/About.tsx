import Image from "next/image";
import { Reveal } from "./Reveal";

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

export function About() {
  return (
    <section className="section" id="ueber-mich">
      <div className="container about-grid">
        <Reveal className="about-photo">
          <span className="deco-ring" aria-hidden="true" />
          <div className="about-photo-card">
            <Image
              src="/emil-portrait.jpg"
              alt="Emil Marinov im Porträt"
              width={600}
              height={780}
              sizes="(max-width: 899px) 22rem, 24rem"
            />
          </div>
          <div className="about-photo-caption">
            <span>Emil Marinov</span>
            <small>KI-Beratung · Lehre · Umsetzung</small>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal as="span" className="badge">Über mich</Reveal>

          <Reveal as="h2" className="section-title">
            Akademisch fundiert.{" "}
            <span className="accent">Praktisch anwendbar.</span>
          </Reveal>

          <Reveal className="prose">
            <p>
              Ich bin Dozent an einer Fachhochschule und Professor an einer HTL.
              Meine Arbeit verbindet komplexe Mathematik mit moderner
              künstlicher Intelligenz — akademisch fundiert, praktisch anwendbar.
            </p>
            <p>
              Für Unternehmen bin ich Berater, Sparringspartner und Umsetzer:
              Ich helfe dabei, KI-Projekte nicht beim Proof-of-Concept enden zu
              lassen, sondern in produktive, messbare Lösungen zu überführen.
            </p>
          </Reveal>

          <Reveal as="ul" className="approach-list">
            <li>
              <span>01</span>
              <strong>Use Case schärfen</strong>
            </li>
            <li>
              <span>02</span>
              <strong>Architektur greifbar machen</strong>
            </li>
            <li>
              <span>03</span>
              <strong>In Teams verankern</strong>
            </li>
          </Reveal>

          <Reveal as="dl" className="stats">
            <div className="stat">
              <dt><span className="stat-value">10<small>+</small></span></dt>
              <dd>Jahre Lehrerfahrung</dd>
            </div>
            <div className="stat">
              <dt><span className="stat-value">FH</span></dt>
              <dd>&amp; HTL — Akademische Lehre</dd>
            </div>
            <div className="stat">
              <dt><span className="stat-value">KI</span></dt>
              <dd>&amp; Mathematik — Fachgebiete</dd>
            </div>
          </Reveal>

          <Reveal>
            <a href="#kontakt" className="btn btn-primary">
              Kontakt aufnehmen
              <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
