"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Header erscheint erst nach ~80 px Scroll; davor unsichtbar.
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
            <li><a href="#top">Start</a></li>
            <li><a href="#ueber-mich">Über mich</a></li>
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#projekte">Projekte</a></li>
            <li><a href="#referenzen">Referenzen</a></li>
            <li><a href="#fachgebiete">Fachgebiete</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#kontakt" className="nav-cta">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
