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
      <div className="container logo-strip-inner">
        <Reveal className="logo-strip-copy">
          <span className="logo-strip-kicker">Wirkungsbereiche</span>
          <p className="logo-strip-caption">
            Tätig in Lehre, Forschung und Wirtschaft
          </p>
        </Reveal>

        <ul className="logo-chips">
          {AREAS.map((area) => (
            <Reveal as="li" key={area}>
              <span>{area}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
