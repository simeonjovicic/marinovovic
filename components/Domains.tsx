import { Reveal } from "./Reveal";

const DOMAINS = [
  {
    title: "Künstliche Intelligenz",
    text: "LLMs, Agenten, RAG, ML-Engineering",
    code: "AI",
  },
  {
    title: "Versicherungsmathematik",
    text: "Aktuarielle Modelle, stochastische Methoden",
    code: "ACT",
  },
  {
    title: "Data Science",
    text: "Statistik, Modellierung, Auswertung",
    code: "DS",
  },
  {
    title: "Bildung & Mentoring",
    text: "Lehre, Workshops, Coaching",
    code: "EDU",
  },
];

export function Domains() {
  return (
    <section className="section section-alt" id="fachgebiete">
      <div className="container">
        <div className="domain-layout">
          <Reveal className="domain-copy">
            <span className="badge">Fachgebiete</span>
            <h2 className="section-title">
              Wo ich <span className="accent">tief im Thema</span> bin
            </h2>
            <p>
              Die Kombination aus Mathematik, KI-Engineering und Lehre sorgt
              dafür, dass Projekte technisch tragfähig und verständlich
              kommunizierbar bleiben.
            </p>
          </Reveal>

          <ul className="domain-grid">
            {DOMAINS.map((d) => (
              <Reveal as="li" key={d.title} className="domain">
                <span>{d.code}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
