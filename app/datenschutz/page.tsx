import Link from "next/link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Datenschutz · Emil Marinov",
  description: "Datenschutzerklärung – Emil Marinov, KI-Berater.",
  robots: { index: false },
};

export default function Datenschutz() {
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
          <h1>Datenschutzerklärung</h1>

          <p>
            [Platzhalter] Diese Seite enthält die nach DSGVO und österreichischem
            Datenschutzgesetz erforderlichen Informationen zur Verarbeitung
            personenbezogener Daten auf dieser Website. Der endgültige Text ist
            durch den Auftraggeber bzw. einen Rechtsbeistand zu finalisieren.
          </p>

          <h2>Verantwortlicher</h2>
          <p>[Vor- und Nachname / Firmenname]<br/>[Adresse]<br/>[E-Mail]<br/>[Telefon]</p>

          <h2>Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            [Beschreibung der erhobenen Daten, Zweck, Rechtsgrundlage,
            Speicherdauer und ggf. Empfänger.]
          </p>

          <h2>Kontaktformular</h2>
          <p>
            [Beschreibung welche Daten beim Absenden des Kontaktformulars
            erhoben und wie sie verarbeitet werden.]
          </p>

          <h2>Ihre Rechte</h2>
          <p>
            [Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit,
            Widerspruch und Beschwerde bei der Aufsichtsbehörde.]
          </p>

          <Link href="/" className="back">← Zurück zur Startseite</Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
