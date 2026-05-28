import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import { LegalHeader } from "@/components/LegalHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Impressum · Emil Marinov",
  description: "Impressum — Emil Marinov, KI-Berater.",
  robots: { index: false },
};

const SECTIONS = [
  {
    id: "medieninhaber",
    title: "Medieninhaber und Herausgeber",
    body: (
      <p>
        [Vor- und Nachname / Firmenname]
        <br />
        [Straße, Hausnummer]
        <br />
        [PLZ Ort]
        <br />
        [Land]
      </p>
    ),
  },
  {
    id: "kontakt",
    title: "Kontakt",
    body: (
      <p>
        E-Mail:{" "}
        <a href="mailto:kontakt@kiprofessor.at">kontakt@kiprofessor.at</a>
        <br />
        Telefon: [+43 …]
      </p>
    ),
  },
  {
    id: "unternehmensgegenstand",
    title: "Unternehmensgegenstand",
    body: (
      <p>
        Beratung, Schulung und Umsetzung im Bereich Künstliche Intelligenz,
        Versicherungsmathematik und Data Science.
      </p>
    ),
  },
  {
    id: "aufsicht",
    title: "Aufsichtsbehörde / Gewerberecht",
    body: <p>[Zuständige Bezirkshauptmannschaft / Magistrat]</p>,
  },
  {
    id: "berufsbezeichnung",
    title: "Berufsbezeichnung",
    body: <p>[z. B. Unternehmensberater · ausgeübt in Österreich]</p>,
  },
  {
    id: "haftung",
    title: "Haftungsausschluss",
    body: (
      <>
        <p>
          <strong>Inhaltshaftung.</strong> Trotz sorgfältiger inhaltlicher
          Kontrolle wird keine Haftung für die Richtigkeit, Vollständigkeit und
          Aktualität der bereitgestellten Inhalte übernommen.
        </p>
        <p>
          <strong>Linkhaftung.</strong> Für die Inhalte verlinkter externer
          Websites sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p>
          <strong>Urheberrecht.</strong> Alle Inhalte auf dieser Website sind
          urheberrechtlich geschützt. Eine Verwendung außerhalb des privaten
          Bereichs ist nur mit ausdrücklicher Zustimmung gestattet.
        </p>
      </>
    ),
  },
];

export default function Impressum() {
  return (
    <>
      <LegalHeader />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container narrow">
            <span className="badge">Rechtliches</span>
            <h1 className="legal-title">
              Im<span className="accent">pressum</span>
            </h1>
            <p className="legal-lead">
              Angaben gemäß § 5 ECG und § 25 MedienG. Verantwortlich für die
              Inhalte dieser Website.
            </p>
            <p className="legal-meta">Stand: Mai 2026 · Platzhaltertext</p>
          </div>
        </section>

        <section className="legal-content">
          <div className="container narrow">
            {SECTIONS.map((s, i) => (
              <article key={s.id} id={s.id} className="legal-section">
                <h2 className="legal-section-title">
                  <span className="legal-section-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="legal-section-name">{s.title}</span>
                </h2>
                <div className="legal-section-body">{s.body}</div>
              </article>
            ))}

            <div className="legal-footer-cta">
              <Link href="/" className="btn btn-primary">
                <ArrowLeft size={16} strokeWidth={2.25} aria-hidden="true" />
                <span>Zurück zur Startseite</span>
              </Link>
              <a href="mailto:kontakt@kiprofessor.at" className="btn btn-ghost">
                <Mail size={16} strokeWidth={2.25} aria-hidden="true" />
                <span>Kontakt aufnehmen</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
