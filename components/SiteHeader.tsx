"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
    >
      {/* Full-width liquid glass pill */}
      <div
        className="relative bg-[#0A0A0A]/55 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[0_10px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)] rounded-full pl-3 pr-3 py-2 flex items-center justify-between gap-4 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:via-white/[0.02] before:to-transparent before:pointer-events-none"
      >
        {/* Logo placeholder (left) */}
        <a
          href="#top"
          className="flex items-center gap-2 text-white hover:opacity-75 transition-opacity flex-shrink-0"
          aria-label="Startseite Emil Marinov"
        >
          <span
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#FF4D2D] text-white text-[11px] font-bold tracking-tight"
            aria-hidden="true"
          >
            EM
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-tight">
            Emil Marinov
          </span>
        </a>

        {/* Desktop nav (center) */}
        <nav className="hidden md:flex" aria-label="Hauptnavigation">
          <ul className="flex flex-row items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 px-3 py-1.5 rounded-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontakt (right) - desktop */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex text-xs font-semibold uppercase tracking-wider bg-[#FF4D2D] text-white hover:bg-[#E63E1F] transition-colors px-4 py-2 rounded-full flex-shrink-0"
        >
          Kontakt
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-white flex-shrink-0"
          aria-expanded={open}
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white border border-black/10 rounded-2xl p-4 shadow-xl pointer-events-auto"
          aria-label="Mobile Hauptnavigation"
        >
          <ul className="flex flex-col w-full gap-1" onClick={() => setOpen(false)}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-sm font-semibold uppercase tracking-wider text-black/80 hover:text-black hover:bg-black/5 px-3 py-3 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#kontakt"
                className="block text-sm font-semibold uppercase tracking-wider bg-black text-white hover:bg-black/80 px-4 py-3 rounded-lg text-center transition-colors"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
