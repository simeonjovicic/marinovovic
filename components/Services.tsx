import { Reveal } from "./Reveal";

const SERVICES = [
  {
    num: "01",
    label: "Automation",
    title: "Prozessautomatisierung mit KI-Agents",
    text: "Analyse, Konzeption und Umsetzung vollautomatisierter Geschäftsprozesse. Wir identifizieren wiederkehrende Aufgaben, modellieren Agenten-Workflows und integrieren sie in Ihre Systemlandschaft.",
  },
  {
    num: "02",
    label: "Custom AI",
    title: "Maßgeschneiderte KI-Lösungen & RAG-Systeme",
    text: "Individuelle KI-Applikationen — von der Retrieval-Augmented-Generation-Architektur über Vektor-Datenbanken bis zur produktiven Bereitstellung. Sicher, dokumentiert, wartbar.",
  },
  {
    num: "03",
    label: "Enablement",
    title: "Schulungen zu Künstlicher Intelligenz",
    text: "Praxisnahe Workshops für Fach- und Führungskräfte. Von den Grundlagen über Prompt Engineering bis zur strategischen Einordnung von KI im Unternehmen.",
  },
  {
    num: "04",
    label: "Workflow",
    title: "Schulungen zur Prozessautomatisierung mit n8n",
    text: "Automatisierung von Datenpipelines und Geschäftsprozessen mit n8n. Hands-on, mit eigenen Use Cases und konkreten Beispielen aus der Teilnehmerpraxis.",
  },
  {
    num: "05",
    label: "Begleitung",
    title: "Individuelle Beratung & Projektbegleitung",
    text: "Maßgeschneiderte Beratung über die gesamte Projektdauer — vom Erstgespräch über Architektur-Reviews bis zur begleitenden Umsetzung. Auch als externer Sparringspartner für interne Teams.",
  },
];

export function Services() {
  return (
    <section className="section section-alt" id="leistungen">
      <div className="container">
        <div className="section-intro">
          <Reveal className="section-head">
            <span className="badge">Leistungen</span>
            <h2 className="section-title">
              Wie ich Unternehmen <span className="accent">unterstütze</span>
            </h2>
          </Reveal>

          <Reveal as="p" className="section-copy">
            Von der ersten Einschätzung bis zur produktiven Anwendung: Die
            Arbeit ist auf Klarheit, technische Substanz und Transfer in den
            Alltag ausgelegt.
          </Reveal>
        </div>

        <div className="service-list">
          {SERVICES.map((s) => (
            <Reveal as="article" key={s.num} className="service-item">
              <span className="service-num">{s.num}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <small>{s.label}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
