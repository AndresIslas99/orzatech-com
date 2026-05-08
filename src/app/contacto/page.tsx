import { generatePageMetadata } from "@/lib/metadata";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = generatePageMetadata({
  title: "Contacto - Agenda una Consulta",
  description:
    "Contacta a Orza Technologies para discutir tu proyecto de automatizacion industrial o software con IA. Consulta gratuita.",
  keywords: [
    "contacto automatizacion",
    "cotizar robotica",
    "consulta IA",
    "automatizacion Mexico",
  ],
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-500 font-mono text-sm">// CONTACTO</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Cuentanos sobre tus necesidades de automatizacion o software y te ayudaremos a encontrar la solucion perfecta. Consulta gratuita y sin compromiso.
          </p>
        </div>
      </section>

      <ContactSection showHeader={false} />
    </div>
  );
}
