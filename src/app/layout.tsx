import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-white`}
      >
        <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
          {/* Background grid */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />

          {/* Decorative elements */}
          <div className="fixed top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

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
