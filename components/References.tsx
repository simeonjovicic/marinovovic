import { Reveal } from "./Reveal";

const REFS = [
  {
    num: "01",
    title: "Akademisches Umfeld",
    tag: "Lehre",
    text: "Lehre an Fachhochschulen und HTLs in Österreich. Forschungsnahe Vermittlung von KI, Mathematik und Data Science.",
  },
  {
    num: "02",
    title: "Privatwirtschaft",
    tag: "Beratung",
    text: "Projekte und Beratungsmandate in unterschiedlichen Branchen — von Versicherung bis Industrie.",
  },
  {
    num: "03",
    title: "Tech-Community",
    tag: "Austausch",
    text: "Aktiver Austausch mit KI-Expertinnen, Entwicklerinnen und Forschenden im deutschsprachigen Raum.",
  },
];

export function References() {
  return (
    <section className="section" id="referenzen">
      <div className="container">
        <Reveal className="section-head">
          <span className="badge">Referenzen &amp; Netzwerk</span>
          <h2 className="section-title">
            Vertrauen aus <span className="accent">Lehre und Praxis</span>
          </h2>
        </Reveal>

        <div className="reference-layout">
          <Reveal className="reference-summary">
            <span className="ref-kicker">Netzwerk</span>
            <p className="ref-headline">
              Akademie, Unternehmen &amp; Tech-Community.
            </p>
            <p className="ref-lead">
              <span className="hide-mobile">
                Drei Welten, ein roter Faden: Wissen weitergeben, Projekte
                umsetzen, am Puls der Entwicklung bleiben.
              </span>
              <span className="show-mobile">
                Drei Welten, ein roter Faden.
              </span>
            </p>
            <div className="ref-meta">
              <span className="ref-dot" aria-hidden="true" />
              <span>
                <strong>3 Bereiche</strong> · DACH-Raum
              </span>
            </div>
          </Reveal>

          <div className="reference-ledger">
            {REFS.map((r) => (
              <Reveal as="article" key={r.num} className="ref-block">
                <span className="ref-num">{r.num}</span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
                <small>{r.tag}</small>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
