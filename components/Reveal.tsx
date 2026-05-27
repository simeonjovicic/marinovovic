"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

/**
 * Wickelt Kinder in einen `.reveal`-Container und schaltet `is-visible`
 * beim Eintritt in den Viewport. Respektiert prefers-reduced-motion
 * (im CSS) und blendet ohne JS sofort ein (.no-js-Klasse in <html>).
 */
export function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const Tag = as as keyof React.JSX.IntrinsicElements;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Erste Aktion: no-js-Klasse entfernen, sonst bleibt Inhalt sofort sichtbar.
    document.documentElement.classList.remove("no-js");

    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = `reveal ${visible ? "is-visible" : ""} ${className}`.trim();

  // @ts-expect-error – dynamische Tags akzeptieren ref + className.
  return <Tag ref={ref} className={classes}>{children}</Tag>;
}
