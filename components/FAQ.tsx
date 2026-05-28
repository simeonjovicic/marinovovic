import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Wie läuft ein erstes Gespräch ab?",
    a: "Ein unverbindliches 30-Minuten-Gespräch — per Video oder Telefon. Wir klären, worum es geht, ob das Vorhaben sinnvoll umsetzbar ist und welche nächsten Schritte ich empfehle. Ohne Verkaufsdruck.",
  },
  {
    q: "Was kostet ein Workshop?",
    a: "Abhängig vom Format und der Teilnehmerzahl. Inhouse-Workshops starten ab einem Tagessatz, der mehrere Teilnehmer:innen einschließt. Auf Anfrage schicke ich gerne eine konkrete Kalkulation für Ihr Anliegen.",
  },
  {
    q: "Wie lange dauert ein RAG-Projekt?",
    a: "Ein erster Prototyp ist meist in 2–4 Wochen produktionsnah verfügbar. Bis zur stabilen, dokumentierten Bereitstellung sind je nach Datenlage und Integrationsaufwand 6–12 Wochen realistisch.",
  },
  {
    q: "Arbeiten Sie auch remote?",
    a: "Ja, Beratungs- und Umsetzungsprojekte laufen überwiegend remote. Für Workshops bin ich österreichweit vor Ort, bei Bedarf auch im DACH-Raum.",
  },
  {
    q: "In welcher Sprache findet die Schulung statt?",
    a: "Deutsch oder Englisch — je nach Teilnehmerkreis. Unterlagen können zweisprachig bereitgestellt werden.",
  },
  {
    q: "Welche Branchen haben Sie bereits begleitet?",
    a: "Versicherung, Industrie, Bildung und öffentliche Verwaltung. Der inhaltliche Schwerpunkt ist immer derselbe: KI-Methoden technisch sauber und für das jeweilige Umfeld verständlich anwendbar machen.",
  },
];

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <Reveal className="faq-side">
            <span className="badge">FAQ</span>
            <h2 className="faq-title">
              Häufige Fragen vor dem{" "}
              <span className="accent">Erstgespräch</span>
            </h2>
            <p className="faq-lead">
              Die meistgestellten Fragen — hier kompakt beantwortet.
            </p>

            <a href="#kontakt" className="faq-side-cta">
              <span className="faq-side-cta-icon" aria-hidden="true">
                <MessageCircleQuestion size={18} strokeWidth={1.75} />
              </span>
              <span>
                <strong>Andere Frage?</strong>
                <small>Schreiben Sie mir direkt</small>
              </span>
            </a>
          </Reveal>

          <div className="faq-list">
            {FAQS.map((item) => (
              <Reveal key={item.q}>
                <details className="faq-item">
                  <summary>
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <ChevronDown size={18} strokeWidth={2.25} />
                    </span>
                  </summary>
                  <div className="faq-body">
                    <p>{item.a}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
