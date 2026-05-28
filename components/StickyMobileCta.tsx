"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.6;
      const contact = document.getElementById("kontakt");
      const inContact =
        !!contact &&
        contact.getBoundingClientRect().top < window.innerHeight * 0.7;
      setShow(past && !inContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#kontakt"
      className={`sticky-cta${show ? " is-visible" : ""}`}
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      Kontakt aufnehmen
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
    </a>
  );
}
