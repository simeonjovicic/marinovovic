# Emil Marinov · KI-Berater — Website

Statische Website (HTML/CSS/JS) für **Emil Marinov**, KI-Berater für
Unternehmen. Kein Build-Schritt, kein Framework. Jeder Static-Host
funktioniert.

## Lokal ansehen

Die Seite muss über einen kleinen Webserver geöffnet werden (nicht
einfach `file://`), damit relative Pfade und der `fetch`-Aufruf des
Formulars korrekt arbeiten.

Eine der folgenden Varianten reicht:

```bash
# Python 3 (in jedem macOS / Linux standardmäßig vorhanden)
python3 -m http.server 8080

# Node, falls installiert
npx serve .

# PHP
php -S localhost:8080
```

Danach im Browser öffnen:

```
http://localhost:8080
```

## Projektstruktur

```
.
├── index.html              ← Landingpage mit allen Abschnitten
├── datenschutz.html        ← Platzhalterseite Datenschutz
├── impressum.html          ← Platzhalterseite Impressum
├── css/
│   ├── reset.css           ← moderner CSS-Reset
│   └── styles.css          ← Hauptstyles (Tokens, Sections, responsive)
├── js/
│   ├── nav.js              ← Mobile-Menü, Header-Scroll, Sprunglinks
│   ├── reveal.js           ← dezente Scroll-Reveal-Animation
│   └── form.js             ← Kontaktformular-Validierung + Versand
├── assets/
│   ├── favicon.svg
│   └── og-image.svg        ← Social-Sharing-Bild
└── kiprofessor-website-texte.md  ← Quelltexte (Referenz)
```

## Kontaktformular anbinden

Aktuell simuliert das Formular nur einen Versand und zeigt eine
Erfolgsmeldung. Der echte Versand wird in einer einzigen Zeile in
`js/form.js` aktiviert:

```js
var SUBMIT_ENDPOINT = '';   // ← hier echte URL eintragen
```

Empfohlene Optionen:

| Option | Aufwand | Hinweis |
|---|---|---|
| [Formspree](https://formspree.io) | sehr gering | URL `https://formspree.io/f/<id>` eintragen |
| Vercel Function `/api/contact` | mittel | eigene Function in `api/contact.ts` |
| Eigenes Backend | hoch | beliebige URL, JSON-Body wird per POST gesendet |

## Deployen

Die Seite ist eine reine Sammlung statischer Dateien — alle gängigen
Static-Hosts funktionieren ohne Konfiguration.

### Netlify
1. Repo auf Netlify verbinden.
2. **Build command:** _leer lassen_
3. **Publish directory:** `.` (Projektwurzel)

### Vercel
1. Repo auf Vercel importieren.
2. **Framework Preset:** _Other_
3. **Build command:** _leer_
4. **Output directory:** _leer_ (Projektwurzel)

### GitHub Pages
1. Settings → Pages → Source = `main` / `/`.

## Inhalt

Die fertigen deutschen Texte aller Abschnitte stehen in
[`kiprofessor-website-texte.md`](./kiprofessor-website-texte.md) und sind
direkt in `index.html` eingearbeitet. Platzhalter in `[eckigen Klammern]`
sind absichtlich sichtbar und werden später ersetzt.

## Barrierefreiheit

- Semantisches HTML5 (header, main, section, nav, footer, h1–h3)
- Skip-Link zur Hauptnavigation
- Sichtbarer Tastatur-Fokus (`:focus-visible`)
- ARIA-Labels für Navigation und Formularstatus
- `prefers-reduced-motion` wird respektiert
- Farbkontraste folgen WCAG AA

## Lizenz

© 2026 Emil Marinov · alle Rechte vorbehalten.
