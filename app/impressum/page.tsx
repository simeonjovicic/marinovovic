import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Impressum · Emil Marinov",
  description: "Impressum – Emil Marinov, KI-Berater.",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="Zurück zur Startseite">
            <span className="brand-mark" aria-hidden="true">EM</span>
            <span className="brand-name">Emil Marinov</span>
          </Link>
        </div>
      </header>

      <main className="legal-page">
        <div className="container narrow">
          <h1>Impressum</h1>

          <p>
            [Platzhalter] Angaben gemäß § 5 ECG und § 25 MedienG.
            Der endgültige Text ist durch den Auftraggeber zu finalisieren.
          </p>

          <h2>Medieninhaber und Herausgeber</h2>
          <p>
            [Vor- und Nachname / Firmenname]<br/>
            [Straße, Hausnummer]<br/>
            [PLZ Ort]<br/>
            [Land]
          </p>

          <h2>Kontakt</h2>
          <p>
            E-Mail: [kontakt@kiprofessor.at]<br/>
            Telefon: [+43 …]
          </p>

          <h2>Unternehmensgegenstand</h2>
          <p>[Beratung, Schulung und Umsetzung im Bereich Künstliche Intelligenz und Mathematik.]</p>

          <h2>Aufsichtsbehörde / Gewerberecht</h2>
          <p>[Zuständige Bezirkshauptmannschaft / Magistrat]</p>

          <h2>Berufsbezeichnung</h2>
          <p>[z. B. Unternehmensberater · ausgeübt in Österreich]</p>

          <h2>Haftungsausschluss</h2>
          <p>
            [Hinweise zu Inhaltshaftung, Linkhaftung, Urheberrecht und
            Bildquellen.]
          </p>

          <Link href="/" className="back">← Zurück zur Startseite</Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
