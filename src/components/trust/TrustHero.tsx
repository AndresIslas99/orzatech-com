import Link from "next/link";
import { ShieldCheck, Check, ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { CONTACT, WHATSAPP } from "@/lib/constants";
import { stats } from "@/data/stats";

export default function TrustHero() {
  return (
    <section className="section-light pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left — copy + CTAs */}
        <div className="lg:col-span-7">
          <div className="badge-verified mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Empresa constituida · SAPI de CV
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 tracking-tight leading-[1.05]">
            Automatizamos plantas industriales.{" "}
            <span className="text-accent-500">Sin sorpresas.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed">
            Robótica, software de visibilidad operativa y agentes de IA para
            empresas que necesitan producir más, con menos riesgo. Cotización
            formal en menos de 48 horas.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contacto" className="btn-accent">
              Solicitar cotización <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WHATSAPP.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-4 h-4 text-verified-500" />
              Hablar por WhatsApp
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-verified-500" />
              Cotización formal con NDA
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-verified-500" />
              Respuesta en menos de 4 h hábiles
            </div>
          </div>
        </div>

        {/* Right — trust panel */}
        <aside className="lg:col-span-5">
          <div className="trust-card-elevated p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="eyebrow-light">Operación verificada</div>
              <div className="badge-verified">
                <Check className="w-3 h-3" /> activa
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-semibold text-navy-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-500 mt-1.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-trust-divider flex items-center gap-3">
              <MapPin className="w-4 h-4 text-ink-400" />
              <div className="text-sm text-ink-500">
                {CONTACT.location} · Atendemos toda la República
              </div>
            </div>
            <a
              href={`tel:${CONTACT.phone}`}
              className="mt-3 flex items-center gap-2 text-sm text-navy-900 font-medium hover:text-accent-500"
            >
              <span className="text-ink-400">o llama directo:</span>
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
