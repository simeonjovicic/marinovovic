import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiprofessor.at"),
  title: {
    default: "Emil Marinov · KI-Berater für Unternehmen",
    template: "%s · Emil Marinov",
  },
  description:
    "Emil Marinov – KI-Berater, Dozent und Professor. Beratung, Schulung und Umsetzung von KI-Projekten, RAG-Systemen und Prozessautomatisierung für Unternehmen.",
  applicationName: "Emil Marinov · KI-Beratung",
  authors: [{ name: "Emil Marinov", url: "https://kiprofessor.at" }],
  creator: "Emil Marinov",
  publisher: "Emil Marinov",
  keywords: [
    "KI-Berater",
    "KI-Beratung",
    "Künstliche Intelligenz",
    "RAG-Systeme",
    "Retrieval-Augmented Generation",
    "Prozessautomatisierung",
    "n8n",
    "Workshop",
    "Dozent",
    "Professor",
    "Versicherungsmathematik",
    "Data Science",
    "Österreich",
    "Wien",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "/",
    languages: { "de-AT": "/", "de-DE": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://kiprofessor.at",
    siteName: "Emil Marinov · KI-Beratung",
    title: "Emil Marinov · KI-Berater für Unternehmen",
    description:
      "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Emil Marinov · KI-Berater für Unternehmen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emil Marinov · KI-Berater für Unternehmen",
    description:
      "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
    images: ["/og-image.svg"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0E14" },
  ],
  colorScheme: "light dark",
};

const SITE_URL = "https://kiprofessor.at";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Emil Marinov",
      url: SITE_URL,
      image: `${SITE_URL}/emil-portrait.jpg`,
      jobTitle: "KI-Berater, Dozent und Professor",
      description:
        "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
      knowsAbout: [
        "Künstliche Intelligenz",
        "Retrieval-Augmented Generation",
        "Large Language Models",
        "Prozessautomatisierung",
        "Versicherungsmathematik",
        "Data Science",
        "n8n",
      ],
      worksFor: { "@id": `${SITE_URL}/#service` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Emil Marinov · KI-Beratung",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.svg`,
      description:
        "Beratung, Schulung und Umsetzung von KI-Projekten, RAG-Systemen und Prozessautomatisierung für Unternehmen.",
      founder: { "@id": `${SITE_URL}/#person` },
      areaServed: {
        "@type": "Country",
        name: "Österreich",
      },
      serviceType: [
        "KI-Beratung",
        "KI-Workshops",
        "Prozessautomatisierung mit KI-Agents",
        "RAG-Systeme",
        "Schulungen zur Prozessautomatisierung mit n8n",
        "Projektbegleitung",
      ],
      knowsLanguage: ["de", "en"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Emil Marinov · KI-Berater",
      description:
        "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "de-AT",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${sourceSerif.variable} no-js`}>
      <body>
        <a href="#hauptinhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
