"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LANGS, type Lang } from "@/lib/i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  cycleLang: () => void;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang") as Lang | null;
      if (saved && LANGS.includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    } catch {}
  }, []);

  const cycleLang = useCallback(() => {
    setLangState((prev) => {
      const next = LANGS[(LANGS.indexOf(prev) + 1) % LANGS.length];
      try {
        window.localStorage.setItem("lang", next);
        document.documentElement.lang = next;
      } catch {}
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, cycleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
