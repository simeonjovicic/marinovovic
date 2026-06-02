"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#top", label: "Start" },
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
      setScrolled(window.scrollY > 80);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "md:top-4 md:flex md:justify-center md:px-4 md:opacity-100 md:pointer-events-auto md:bg-transparent md:backdrop-blur-none md:border-b-0 top-0 py-2 bg-[#E8E8E6]/95 backdrop-blur-md border-b border-black/10"
          : "top-0 py-3 md:py-4 bg-transparent border-b border-black/5 md:border-b-0 md:opacity-0 md:pointer-events-none md:-translate-y-4"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ease-out ${
          scrolled
            ? "md:max-w-fit md:bg-[#121212]/80 md:backdrop-blur-xl md:border md:border-white/10 md:shadow-2xl md:rounded-full md:px-3 md:py-2 md:flex md:items-center container flex items-center justify-between h-12 md:h-auto"
            : "container flex items-center justify-between h-12 md:h-14"
        }`}
      >
        {/* Brand Copyright - hidden in desktop scrolled floating pill */}
        <a
          href="#top"
          className={`font-semibold tracking-tight hover:opacity-75 transition-opacity truncate ${
            scrolled
              ? "text-black text-xs sm:text-sm md:hidden"
              : "text-black text-xs sm:text-sm max-w-[70%] sm:max-w-none"
          }`}
          aria-label="Startseite Emil Marinov"
        >
          <span className="sm:hidden">© Emil Marinov</span>
          <span className="hidden sm:inline">© Emil Marinov — KI-Consulting &amp; Lehre</span>
        </a>

        {/* Mobile menu trigger - always visible on mobile */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 text-black flex-shrink-0"
          aria-expanded={open}
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block w-5 h-0.5 bg-black transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-black transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation list */}
        <nav
          className="hidden md:flex items-center"
          aria-label="Hauptnavigation"
        >
          <ul
            className={`flex flex-row items-center ${
              scrolled ? "gap-1" : "gap-6"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full ${
                    scrolled
                      ? "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                      : "text-black/70 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#kontakt"
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full ${
                  scrolled
                    ? "bg-[#FF4D2D] text-white hover:bg-[#E63E1F]"
                    : "bg-black text-white hover:bg-black/80"
                }`}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <nav
          className="md:hidden absolute top-full left-3 right-3 mt-2 bg-[#E8E8E6] border border-black/10 rounded-2xl p-4 shadow-xl"
          aria-label="Mobile Hauptnavigation"
        >
          <ul
            className="flex flex-col w-full gap-1"
            onClick={() => setOpen(false)}
          >
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
                className="block text-sm font-semibold uppercase tracking-wider bg-black text-white hover:bg-[#FF4D2D] px-4 py-3 rounded-lg text-center transition-colors"
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
