import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { PULSE } from "@/lib/constants";

/**
 * /pulse quedó como redirección: el producto vive ahora en pulse.orzatech.com
 * (app Vite/React en el VPS). El canonical apunta al subdominio para que las
 * señales de SEO acumuladas por esta ruta se consoliden allá en vez de competir.
 *
 * El contenido de marketing original sigue en git (commit 9c3bfa7) y sus datos
 * en src/data/pulse.ts, por si se quiere recuperar.
 */
const baseMetadata = generatePageMetadata({
  title: "ORZA Pulse · Asistencia técnica con IA para distribuidoras eléctricas",
  description:
    "Kioscos con inteligencia artificial que validan normativas CMAA, IEC e IEEE en tiempo real. Ahora en pulse.orzatech.com.",
  keywords: [
    "ORZA Pulse",
    "kiosko IA distribuidoras",
    "CMAA IEC IEEE",
    "asistencia técnica IA",
    "BI distribuidora eléctrica",
  ],
  path: "/pulse",
});

// Canonical Y og:url apuntan al subdominio — deben coincidir para no
// mandar señales mixtas a los crawlers.
export const metadata = {
  ...baseMetadata,
  alternates: { canonical: PULSE.url },
  openGraph: { ...baseMetadata.openGraph, url: PULSE.url },
};

export default function PulseRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${PULSE.url}`} />
      <section className="section-light py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="badge-accent mb-5">ORZA Pulse</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
            ORZA Pulse ahora tiene su propio sitio
          </h1>
          <p className="mt-5 text-base text-ink-500 leading-relaxed">
            Te estamos llevando a{" "}
            <span className="font-medium text-navy-900">pulse.orzatech.com</span>.
            Si no ocurre en unos segundos, entra directo desde el botón.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PULSE.url}
              className="btn-primary inline-flex items-center justify-center gap-1.5"
            >
              Ir a ORZA Pulse
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Volver a Orza Technologies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
