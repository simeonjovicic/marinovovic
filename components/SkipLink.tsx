"use client";

import { useLang } from "./LangProvider";
import { tx, t } from "@/lib/i18n";

export function SkipLink() {
  const { lang } = useLang();
  return (
    <a href="#hauptinhalt" className="skip-link">
      {t(tx.nav.skip, lang)}
    </a>
  );
}
