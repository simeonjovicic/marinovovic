import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalHeader() {
  return (
    <header className="legal-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="Zurück zur Startseite">
          <span className="brand-mark" aria-hidden="true">EM</span>
          <span className="brand-name">Emil Marinov</span>
        </Link>

        <Link href="/" className="legal-back-link">
          <ArrowLeft size={16} strokeWidth={2.25} aria-hidden="true" />
          <span>Zurück zur Startseite</span>
        </Link>
      </div>
    </header>
  );
}
