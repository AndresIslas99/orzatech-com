import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Check } from "lucide-react";
import { CONTACT, WHATSAPP } from "@/lib/constants";

export default function TrustCTASection() {
  return (
    <section className="section-light py-20 border-t border-trust-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="trust-card-elevated p-8 md:p-12 text-center">
          <div className="eyebrow-light mb-4">Hablemos de tu proyecto</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-2xl mx-auto leading-tight">
            En 30 minutos te decimos si podemos automatizar tu proceso —
            <span className="text-accent-500"> y cuánto cuesta</span>.
          </h2>
          <p className="mt-4 text-base text-ink-500 max-w-xl mx-auto leading-relaxed">
            Diagnóstico gratuito, sin compromiso. Te respondemos en menos de
            4 horas hábiles con cotización formal y NDA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contacto" className="btn-accent">
              Agendar diagnóstico gratis <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4 text-verified-500" />
              WhatsApp directo
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="btn-secondary"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-verified-500" />
              Sin compromiso
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-verified-500" />
              NDA disponible al instante
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-verified-500" />
              Respuesta en &lt; 4 h hábiles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
