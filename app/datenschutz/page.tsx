import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Mail } from "lucide-react";
import { LegalHeader } from "@/components/LegalHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Datenschutz · Emil Marinov",
  description: "Datenschutzerklärung — Emil Marinov, KI-Berater.",
  robots: { index: false },
};

const SECTIONS = [
  {
    id: "verantwortlicher",
    title: "Verantwortlicher",
    body: (
      <>
        <p>
          [Vor- und Nachname / Firmenname]
          <br />
          [Straße, Hausnummer]
          <br />
          [PLZ Ort, Land]
        </p>
        <p>
          E-Mail: <a href="mailto:kontakt@kiprofessor.at">kontakt@kiprofessor.at</a>
          <br />
          Telefon: [+43 …]
        </p>
      </>
    ),
  },
  {
    id: "erhebung",
    title: "Erhebung und Speicherung personenbezogener Daten",
    body: (
      <p>
        [Beschreibung der erhobenen Daten, Zweck der Verarbeitung, Rechtsgrundlage
        nach Art. 6 DSGVO, Speicherdauer und ggf. Empfänger.]
      </p>
    ),
  },
  {
    id: "kontaktformular",
    title: "Kontaktformular",
    body: (
      <p>
        Wenn Sie das Kontaktformular nutzen, werden Ihr Name, Ihre E-Mail-Adresse
        und Ihre Nachricht zur Bearbeitung Ihrer Anfrage gespeichert.
        Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
        Die Daten werden gelöscht, sobald die Bearbeitung abgeschlossen ist und
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
    ),
  },
  {
    id: "hosting",
    title: "Hosting",
    body: (
      <p>
        Diese Website wird bei Cloudflare Pages gehostet. Beim Aufruf der Seite
        werden technisch notwendige Daten (z. B. IP-Adresse, Datum, Uhrzeit,
        aufgerufene Seite) zur Auslieferung der Inhalte und zur Abwehr von
        Angriffen verarbeitet.
      </p>
    ),
  },
  {
    id: "rechte",
    title: "Ihre Rechte",
    body: (
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden
        können Sie an die österreichische Datenschutzbehörde richten
        (dsb.gv.at).
      </p>
    ),
  },
  {
    id: "kontakt",
    title: "Kontakt bei Datenschutzanliegen",
    body: (
      <p>
        Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten erreichen Sie
        mich jederzeit unter{" "}
        <a href="mailto:kontakt@kiprofessor.at">kontakt@kiprofessor.at</a>.
      </p>
    ),
  },
];

export default function Datenschutz() {
  return (
    <>
      <LegalHeader />

      <main className="legal-page">
        <section className="legal-hero">
          <div className="container narrow">
            <span className="badge">Rechtliches</span>
            <h1 className="legal-title">
              Datenschutz<span className="accent">erklärung</span>
            </h1>
            <p className="legal-lead">
              Informationen zur Verarbeitung personenbezogener Daten auf dieser
              Website — gemäß DSGVO und österreichischem Datenschutzgesetz.
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
                <span>Fragen zum Datenschutz?</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
