import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">EM</span>
          <div>
            <strong>Emil Marinov</strong>
            <p>KI-Beratung, Schulung und Umsetzung</p>
          </div>
        </div>

        <nav aria-label="Rechtliches">
          <ul className="footer-links">
            <li><Link href="/datenschutz">Datenschutz</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
          </ul>
        </nav>

        <p className="copyright">© {year}</p>
      </div>
    </footer>
  );
}
