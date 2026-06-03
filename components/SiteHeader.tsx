"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";
import { tx, t, LANG_LABELS } from "@/lib/i18n";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, cycleLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Startseite Emil Marinov">
          <span className="brand-mark" aria-hidden="true">EM</span>
          <span className="brand-name">Emil Marinov</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primaryNav"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primaryNav"
          className={`primary-nav${open ? " is-open" : ""}`}
          aria-label="Hauptnavigation"
        >
          <ul onClick={closeMenu}>
            <li><a href="#top">{t(tx.nav.start, lang)}</a></li>
            <li><a href="#ueber-mich">{t(tx.nav.about, lang)}</a></li>
            <li><a href="#leistungen">{t(tx.nav.services, lang)}</a></li>
            <li><a href="#projekte">{t(tx.nav.projects, lang)}</a></li>
            <li><a href="#referenzen">{t(tx.nav.references, lang)}</a></li>
            <li><a href="#fachgebiete">{t(tx.nav.domains, lang)}</a></li>
            <li><a href="#faq">{t(tx.nav.faq, lang)}</a></li>
            <li><a href="#kontakt" className="nav-cta">{t(tx.nav.contact, lang)}</a></li>
            <li className="lang-li">
              <button
                type="button"
                className="lang-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  cycleLang();
                }}
                aria-label={t(tx.nav.langAria, lang)}
              >
                {LANG_LABELS[lang]}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
