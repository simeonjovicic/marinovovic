# Emil Marinov · KI-Berater — Website

Next.js 16 (App Router, TypeScript) mit React 19 und 3D-Hero-Szene
(`react-three-fiber` + `three`).

## Lokal starten

```bash
npm install
npm run dev
```

Im Browser: **http://localhost:3000**

## Projektstruktur

```
.
├── app/
│   ├── layout.tsx              ← Root-Layout, Fonts, Metadata
│   ├── page.tsx                ← Startseite (komponiert alle Sektionen)
│   ├── globals.css             ← Gesamtes Styling, Dark-Theme
│   ├── datenschutz/page.tsx
│   └── impressum/page.tsx
├── components/
│   ├── SiteHeader.tsx          ← Sticky-Nav + Mobile-Menü
│   ├── Hero.tsx                ← Hero (Text + Foto + 3D)
│   ├── HeroScene.tsx           ← R3F-Canvas: Partikelfeld + Wireframe
│   ├── LogoStrip.tsx
│   ├── About.tsx
│   ├── Services.tsx            ← 5 Leistungskarten
│   ├── References.tsx
│   ├── Domains.tsx
│   ├── Contact.tsx             ← Formular mit Validierung
│   ├── SiteFooter.tsx
│   └── Reveal.tsx              ← Scroll-Reveal-Wrapper
├── public/
│   ├── emil-portrait.jpg
│   ├── favicon.svg
│   └── og-image.svg
├── kiprofessor-website-texte.md  ← Quelltexte (Referenz)
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 3D bearbeiten / erweitern

Die 3D-Szene lebt vollständig in [`components/HeroScene.tsx`](./components/HeroScene.tsx).
Sie wird in `Hero.tsx` per `dynamic(... { ssr: false })` geladen, weil
three.js WebGL/DOM braucht.

Aktuell enthält die Szene zwei Elemente:

- `ParticleField` — ~1400 Punkte, leuchten in Cyan/Grau, mit Maus-Parallax
- `WireFrameShape` — langsam rotierender Wireframe-Icosaeder

Weitere 3D-Objekte fügst du als zusätzliche Komponenten in derselben Datei
ein und renderst sie innerhalb von `<Canvas>` in `HeroScene`. Helper aus
`@react-three/drei` (Float, Stars, MeshTransmissionMaterial, …) sind bereits
installiert.

## Kontaktformular anbinden

Aktuell simuliert das Formular nur einen Versand. Echten Versand aktivieren
in [`components/Contact.tsx`](./components/Contact.tsx):

```ts
const SUBMIT_ENDPOINT = "";   // ← echte URL eintragen
```

Optionen:

| Variante | Aufwand | Hinweis |
|---|---|---|
| [Formspree](https://formspree.io) | sehr gering | URL `https://formspree.io/f/<id>` eintragen |
| Vercel Function `/api/contact` | mittel | eigenen Route-Handler `app/api/contact/route.ts` anlegen |
| Eigenes Backend | hoch | beliebige URL — Body ist JSON, POST |

## Deployen auf Vercel

```bash
npx vercel
```

Oder Repo auf vercel.com importieren — Framework wird automatisch erkannt
(Preset: Next.js, keine Konfiguration nötig).

## Inhalt

Die Quelltexte aller Abschnitte stehen in
[`kiprofessor-website-texte.md`](./kiprofessor-website-texte.md).
Platzhalter in `[eckigen Klammern]` sind absichtlich sichtbar.

## Barrierefreiheit

- Semantisches HTML5
- Skip-Link, sichtbarer Tastatur-Fokus, ARIA-Labels
- `prefers-reduced-motion` respektiert (Reveal-Animation und Smooth-Scroll)
- 3D-Canvas ist `pointer-events: none` und nicht im Tab-Flow
