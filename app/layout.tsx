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
  title: "Emil Marinov · KI-Berater für Unternehmen",
  description:
    "Emil Marinov – KI-Berater, Dozent und Professor. Beratung, Schulung und Umsetzung von KI-Projekten, RAG-Systemen und Prozessautomatisierung für Unternehmen.",
  authors: [{ name: "Emil Marinov" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "de_AT",
    title: "Emil Marinov · KI-Berater für Unternehmen",
    description:
      "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emil Marinov · KI-Berater für Unternehmen",
    description:
      "Beratung, Schulung und Umsetzung von KI-Projekten — akademisch fundiert, praktisch anwendbar.",
    images: ["/og-image.svg"],
  },
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
