import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/LangProvider";
import { SkipLink } from "@/components/SkipLink";
import { FULL_NAME } from "@/lib/i18n";

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
    default: `${FULL_NAME} · KI-Berater für Unternehmen`,
    template: `%s · ${FULL_NAME}`,
  },
  description:
    `${FULL_NAME} – KI-Berater, Dozent und Professor. Beratung, Schulung und Umsetzung von KI-Projekten, RAG-Systemen und Prozessautomatisierung für Unternehmen.`,
  applicationName: `${FULL_NAME} · KI-Beratung`,
  authors: [{ name: FULL_NAME, url: "https://kiprofessor.at" }],
  creator: FULL_NAME,
  publisher: FULL_NAME,
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
    siteName: `${FULL_NAME} · KI-Beratung`,
    title: `${FULL_NAME} · KI-Berater für Unternehmen`,
    description:
      "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${FULL_NAME} · KI-Berater für Unternehmen`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} · KI-Berater für Unternehmen`,
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
        <LangProvider>
          <SkipLink />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
