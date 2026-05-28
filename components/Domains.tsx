import { Sparkles, Sigma, LineChart, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Domain = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

const DOMAINS: Domain[] = [
  {
    title: "Künstliche Intelligenz",
    text: "LLMs, Agenten, RAG, ML-Engineering",
    Icon: Sparkles,
  },
  {
    title: "Versicherungsmathematik",
    text: "Aktuarielle Modelle, stochastische Methoden",
    Icon: Sigma,
  },
  {
    title: "Data Science",
    text: "Statistik, Modellierung, Auswertung",
    Icon: LineChart,
  },
  {
    title: "Bildung & Mentoring",
    text: "Lehre, Workshops, Coaching",
    Icon: GraduationCap,
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
            {DOMAINS.map(({ title, text, Icon }) => (
              <Reveal as="li" key={title} className="domain">
                <span className="domain-icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
