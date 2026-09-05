"use client";

import Link from "next/link";
import { useLang } from "./LangProvider";
import { tx, t, FULL_NAME } from "@/lib/i18n";

export function SiteFooter() {
  const { lang } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">EM</span>
          <div>
            <strong>{FULL_NAME}</strong>
            <p>{t(tx.about.portraitCaption, lang)}</p>
          </div>
        </div>

        <nav aria-label="Rechtliches">
          <ul className="footer-links">
            <li><Link href="/datenschutz">{t(tx.footer.privacy, lang)}</Link></li>
            <li><Link href="/impressum">{t(tx.footer.imprint, lang)}</Link></li>
          </ul>
        </nav>

        <p className="copyright">© {year}</p>
      </div>
    </footer>
  );
}
