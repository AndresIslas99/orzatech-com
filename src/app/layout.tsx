import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { SITE, CONTACT } from "@/lib/constants";

// Tipografía heredada de pulse.orzatech.com: Archivo para UI/display,
// IBM Plex Mono para datos, cifras y eyebrows técnicos.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ogImage = `${SITE.url}/images/og-image.jpg`;

export const metadata: Metadata = {
  title: "Orza Tech | Software Industrial, IA & Automatizacion para Empresas",
  description:
    "Software de visibilidad operativa, dashboards industriales, agentes de IA y automatizacion fisica para empresas en Mexico, US y LATAM.",
  keywords: [
    "software industrial",
    "visibilidad operativa",
    "dashboards industriales",
    "agentes IA",
    "automatizacion industrial",
    "robotica",
    "AGV",
    "AMR",
    "Mexico",
  ],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: `${SITE.url}/`,
  },
  openGraph: {
    title: "Orza Tech | Software Industrial, IA & Automatizacion para Empresas",
    description:
      "Software de visibilidad operativa, dashboards industriales, agentes de IA y automatizacion fisica para empresas.",
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: `${SITE.url}/`,
    images: [{ url: ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orza Tech | Software Industrial, IA & Automatizacion para Empresas",
    description:
      "Software de visibilidad operativa, dashboards industriales, agentes de IA y automatizacion fisica para empresas.",
    images: [ogImage],
  },
};

// Static JSON-LD schema — safe to inline since all values are hardcoded constants
const jsonLdString = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: "Orza Technologies SAPI de CV",
  url: SITE.url,
  logo: `${SITE.url}/images/logo/orza-logo.webp`,
  image: `${SITE.url}/images/team/founders-notaria.webp`,
  foundingDate: "2023",
  founders: [
    { "@type": "Person", name: "Andrés Islas", jobTitle: "CEO" },
    { "@type": "Person", name: "Victor Enriques", jobTitle: "CTO" },
    { "@type": "Person", name: "Alan Davila", jobTitle: "CIO" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phone,
    contactType: "sales",
    email: CONTACT.email,
    areaServed: ["MX", "US", "CO", "BR", "AR", "CL"],
    availableLanguage: ["Spanish", "English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de Mexico",
    addressCountry: "MX",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        {/* Safe: static hardcoded JSON-LD from constants, no user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
      </head>
      <body
        className={`${archivo.variable} ${plexMono.variable} antialiased`}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
