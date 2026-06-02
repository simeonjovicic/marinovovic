"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

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
  <svg viewBox="0 0 20 20" aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5">
    <path
      d="M4 10h11M11 6l4 4-4 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
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
        message: "Bitte alle Felder korrekt ausfüllen.",
      });
      return;
    }

    setStatus({ kind: "sending" });

    if (!SUBMIT_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 800));
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
        message: "Senden fehlgeschlagen. Bitte später erneut versuchen.",
      });
    }
  };

  return (
    <section 
      className="w-full bg-[#0C0C0C] border-b border-white/5 py-12 md:py-20 mesh-grid relative" 
      id="kontakt"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/30 via-transparent to-[#0C0C0C]/90 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col h-full justify-between">
          <div>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed mb-10 max-w-md">
              Haben Sie Fragen zu potenziellen Use-Cases, Lehrinhalten oder Automatisierungsworkflows? Schreiben Sie mir kurz, worum es geht. Ich melde mich in der Regel innerhalb von zwei Werktagen mit einer ersten Einschätzung.
            </p>
          </div>

          <div className="flex flex-col gap-6 border-t border-white/10 pt-10 mt-6 w-full">
            <Reveal className="flex items-center gap-4 text-white hover:text-[#FF4D2D] transition-colors group">
              <a href="mailto:kontakt@kiprofessor.at" className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FF4D2D] group-hover:bg-[#FF4D2D]/5 transition-all duration-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 7L12 13L20 7M4 5H20C21.1 5 22 5.9 22 7V17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V7C2 5.9 2.9 5 4 5Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-base md:text-lg tracking-tight">kontakt@kiprofessor.at</span>
              </a>
            </Reveal>
            
            <Reveal className="flex items-center gap-4 text-[#A0A0A0] text-sm">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7V12L15 15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>Antwort in der Regel innerhalb von 48 Stunden</span>
            </Reveal>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 w-full bg-[#161616]/40 border border-white/5 rounded-2xl p-6 md:p-10">
          <form onSubmit={onSubmit} noValidate className="flex flex-col gap-8">
            
            {/* Name field */}
            <Reveal className="flex flex-col gap-1 group/field">
              <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D2D]">Ihr Name</label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.name ? 'border-red-500' : 'border-white/15'
                  } py-3 text-white font-medium text-sm md:text-base focus:outline-none transition-colors duration-300`}
                  placeholder="Max Mustermann"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4D2D] transition-all duration-300 group-focus-within/field:w-full" />
              </div>
            </Reveal>

            {/* Email field */}
            <Reveal className="flex flex-col gap-1 group/field">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D2D]">Ihre E-Mail</label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.email ? 'border-red-500' : 'border-white/15'
                  } py-3 text-white font-medium text-sm md:text-base focus:outline-none transition-colors duration-300`}
                  placeholder="max@beispiel.at"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4D2D] transition-all duration-300 group-focus-within/field:w-full" />
              </div>
            </Reveal>

            {/* Message field */}
            <Reveal className="flex flex-col gap-1 group/field">
              <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-[#FF4D2D]">Worum geht es?</label>
              <div className="relative">
                <textarea
                  id="message"
                  rows={3}
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  className={`w-full bg-transparent border-b ${
                    errors.message ? 'border-red-500' : 'border-white/15'
                  } py-3 text-white font-medium text-sm md:text-base focus:outline-none transition-colors duration-300 resize-none`}
                  placeholder="Projekt, Ziel oder kurze Frage..."
                />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4D2D] transition-all duration-300 group-focus-within/field:w-full" />
              </div>
            </Reveal>

            {/* Privacy agreement */}
            <Reveal className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                checked={values.privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
                className="mt-1 w-4 h-4 bg-transparent border border-white/20 rounded cursor-pointer checked:bg-[#FF4D2D] checked:border-transparent focus:ring-[#FF4D2D]"
              />
              <label htmlFor="privacy" className={`text-xs leading-relaxed ${errors.privacy ? 'text-red-500 font-medium' : 'text-[#A0A0A0]'}`}>
                Ich stimme der Datenverarbeitung zu. Weitere Infos in der <a href="/datenschutz" className="text-white hover:underline font-semibold">Datenschutzerklärung</a>.
              </label>
            </Reveal>

            {/* Status Messages & Submit */}
            <Reveal className="flex flex-col sm:flex-row items-center gap-6 border-t border-white/5 pt-6 mt-4">
              <button
                type="submit"
                disabled={status.kind === "sending"}
                className="btn-pill btn-pill-coral w-full sm:w-auto group flex items-center justify-center"
              >
                {status.kind === "sending" ? "Sende..." : "Nachricht senden"}
                <ArrowIcon />
              </button>
              
              {status.kind === "error" && <span className="text-red-500 text-xs font-semibold">{status.message}</span>}
              {status.kind === "ok" && <span className="text-emerald-500 text-xs font-semibold">{status.message}</span>}
            </Reveal>
            
          </form>
        </div>
        
      </div>
    </section>
  );
}
