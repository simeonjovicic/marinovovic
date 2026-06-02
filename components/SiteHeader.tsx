"use client";

import { useEffect, useState } from "react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "top-4 flex justify-center px-4"
          : "top-0 py-4 bg-transparent border-b border-black/5"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-fit bg-[#121212]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-3 py-2 flex items-center"
            : "container flex items-center justify-between h-14"
        }`}
      >
        {/* Brand Copyright - Hidden when scrolled into a floating bar */}
        {!scrolled && (
          <a
            href="#top"
            className="text-black font-semibold text-sm tracking-tight hover:opacity-75 transition-opacity"
            aria-label="Startseite Emil Marinov"
          >
            © Emil Marinov — KI-Consulting &amp; Lehre
          </a>
        )}

        {/* Mobile menu trigger button - only visible when not scrolled or on larger screens */}
        {!scrolled && (
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-black"
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
        )}

        {/* Navigation list */}
        <nav
          className={`
            ${
              scrolled
                ? "flex items-center"
                : open
                ? "absolute top-full left-4 right-4 mt-2 bg-[#E8E8E6] border border-black/10 rounded-2xl p-4 shadow-xl flex"
                : "hidden md:flex items-center"
            }
          `}
          aria-label="Hauptnavigation"
        >
          <ul
            className={`
              flex
              ${
                scrolled
                  ? "flex-row items-center gap-1"
                  : open
                  ? "flex-col w-full gap-3 text-center"
                  : "flex-row items-center gap-6"
              }
            `}
            onClick={() => setOpen(false)}
          >
            <li>
              <a
                href="#top"
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full ${
                  scrolled
                    ? "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              >
                Start
              </a>
            </li>
            <li>
              <a
                href="#ueber-mich"
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full ${
                  scrolled
                    ? "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              >
                Über mich
              </a>
            </li>
            <li>
              <a
                href="#leistungen"
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full ${
                  scrolled
                    ? "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              >
                Leistungen
              </a>
            </li>
            <li>
              <a
                href="#referenzen"
                className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full ${
                  scrolled
                    ? "text-[#A0A0A0] hover:text-white hover:bg-white/5"
                    : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              >
                Referenzen
              </a>
            </li>
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
    </header>
  );
}
