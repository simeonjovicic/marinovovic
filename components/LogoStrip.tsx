import { Reveal } from "./Reveal";

const AREAS = [
  "Fachhochschule",
  "HTL",
  "Industrie",
  "Versicherung",
  "Tech-Community",
];

export function LogoStrip() {
  return (
    <section className="logo-strip" aria-label="Wirkungsbereiche">
      <div className="container">
        <Reveal className="logo-strip-row">
          <span className="logo-strip-kicker">Tätig für</span>
          <ul className="logo-strip-list">
            {AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
