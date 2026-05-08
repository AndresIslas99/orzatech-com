import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LeadMagnet from "@/components/layout/LeadMagnet";
import { SITE, CONTACT } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
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
  url: SITE.url,
  logo: `${SITE.url}/images/logo/orza-logo.webp`,
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
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-bg-deep text-white`}
      >
        <div className="min-h-screen bg-bg-deep text-white overflow-x-hidden">
          {/* Background grid */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />

          {/* Decorative ambient orbs (industrial blue + amber accent) */}
          <div className="fixed top-20 left-10 w-72 h-72 bg-eng-blue-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-20 right-10 w-96 h-96 bg-eng-blue-600/6 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed top-1/3 right-1/4 w-64 h-64 bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <LeadMagnet />
        </div>
      </body>
    </html>
  );
}
