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
  themeColor: "#0A1628",
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
      </body>
    </html>
  );
}
