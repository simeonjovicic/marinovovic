"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

/* =================================================================
   Versand-Anbindung:
   - Aktuell wird KEIN echter Versand durchgeführt (Demo).
   - Echten Versand aktivieren: SUBMIT_ENDPOINT auf eine URL setzen
     (Formspree, eigene Vercel-Function, …).
   ================================================================= */
const SUBMIT_ENDPOINT = "";

type FieldErrors = Partial<Record<"name" | "email" | "message" | "privacy", boolean>>;
type FormValues = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};
type FormStatus =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "ok"; message: string }
  | { kind: "error"; message: string };

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  message: "",
  privacy: false,
};

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="btn-icon">
    <path
      d="M4 10h11M11 6l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactIconProps = {
  className?: string;
};

const EnvelopeIcon = ({ className = "contact-icon" }: ContactIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M4 6.5h16v11H4z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="m4.8 7.2 7.2 5.5 7.2-5.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = ({ className = "contact-icon" }: ContactIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    className={className}
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M12 7.5V12l3 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MapPinIcon = ({ className = "contact-icon" }: ContactIconProps) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 20s6-5.3 6-10a6 6 0 0 0-12 0c0 4.7 6 10 6 10Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="10"
      r="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

export function Contact() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  const set = (key: "name" | "email" | "message", value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: false }));
  };

  const setPrivacy = (checked: boolean) => {
    setValues((v) => ({ ...v, privacy: checked }));
    if (errors.privacy) setErrors((e) => ({ ...e, privacy: false }));
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!values.name.trim()) e.name = true;
    if (!isValidEmail(values.email.trim())) e.email = true;
    if (values.message.trim().length < 10) e.message = true;
    if (!values.privacy) e.privacy = true;
    return e;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus({
        kind: "error",
        message:
          "Bitte alle Felder korrekt ausfüllen und die Datenverarbeitung bestätigen.",
      });
      return;
    }

    setStatus({ kind: "sending" });

    if (!SUBMIT_ENDPOINT) {
      // Demo-Pfad – kein echter Versand konfiguriert.
      await new Promise((r) => setTimeout(r, 500));
      setStatus({
        kind: "ok",
        message: "Vielen Dank! (Demo: Versand ist noch nicht angebunden.)",
      });
      setValues(INITIAL_VALUES);
      return;
    }

    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus({
        kind: "ok",
        message: "Vielen Dank — Ihre Nachricht ist angekommen.",
      });
      setValues(INITIAL_VALUES);
    } catch {
      setStatus({
        kind: "error",
        message:
          "Senden fehlgeschlagen. Bitte später erneut versuchen oder per E-Mail kontaktieren.",
      });
    }
  };

  const statusClass =
    status.kind === "error" ? "form-status is-error"
      : status.kind === "ok" ? "form-status is-ok"
      : "form-status";
  const statusText =
    status.kind === "sending" ? "Wird gesendet …"
      : status.kind === "ok" || status.kind === "error" ? status.message
      : "";

  return (
    <section className="section" id="kontakt">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-copy">
            <span className="contact-badge">
              <EnvelopeIcon className="contact-badge-icon" />
              Kontakt aufnehmen
            </span>

            <h2 className="contact-title">
              Lassen Sie uns Ihr <span className="accent">KI-Projekt</span>{" "}
              starten.
            </h2>

            <p className="contact-lead">
              Schreiben Sie mir kurz, worum es geht. Ich melde mich in der
              Regel innerhalb von zwei Werktagen mit einer konkreten
              Einschätzung.
            </p>

            <div className="contact-points" aria-label="Kontaktinformationen">
              <a href="mailto:kontakt@kiprofessor.at" className="contact-point">
                <span className="contact-point-icon">
                  <EnvelopeIcon />
                </span>
                <span>kontakt@kiprofessor.at</span>
              </a>
              <div className="contact-point">
                <span className="contact-point-icon">
                  <ClockIcon />
                </span>
                <span>Antwort innerhalb von 2 Werktagen</span>
              </div>
              <div className="contact-point">
                <span className="contact-point-icon">
                  <MapPinIcon />
                </span>
                <span>Österreichweit und remote</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            noValidate
            onSubmit={onSubmit}
            aria-describedby="form-status"
          >
            <div className={`field${errors.name ? " has-error" : ""}`}>
              <label htmlFor="name">Ihr Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Name"
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
              />
            </div>

            <div className={`field${errors.email ? " has-error" : ""}`}>
              <label htmlFor="email">Ihre E-Mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="E-Mail"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={!!errors.email}
              />
            </div>

            <div className={`field${errors.message ? " has-error" : ""}`}>
              <label htmlFor="message">Worum geht es?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Projekt, Ziel oder kurze Frage"
                value={values.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={!!errors.message}
              />
            </div>

            <div className={`privacy-field${errors.privacy ? " has-error" : ""}`}>
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                checked={values.privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                aria-invalid={!!errors.privacy}
              />
              <label htmlFor="privacy">
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und
                Bearbeitung meiner Anfrage verarbeitet werden. Weitere
                Informationen in der{" "}
                <a href="/datenschutz">Datenschutzerklärung</a>.
              </label>
            </div>

            <div className="form-row">
              <button
                type="submit"
                className="btn contact-submit"
                disabled={status.kind === "sending"}
              >
                Nachricht senden
                <ArrowIcon />
              </button>
              <p id="form-status" className={statusClass} role="status" aria-live="polite">
                {statusText}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
