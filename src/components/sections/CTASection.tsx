import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTASection({
  title = "¿Listo para",
  highlight = "automatizar?",
  description = "Agenda una llamada con nuestro equipo para discutir tu proyecto.",
  ctaLabel = "Agendar Consulta",
  ctaHref = "/contacto",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="relative p-6 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                {title} <span className="gradient-text">{highlight}</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                {description}
              </p>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                {ctaLabel}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
