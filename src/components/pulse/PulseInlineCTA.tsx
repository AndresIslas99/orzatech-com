import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PulseInlineCTAProps {
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function PulseInlineCTA({
  text = "¿Te interesa ver cómo ORZA Pulse funcionaría en tu distribuidora?",
  ctaLabel = "Agenda una Demo",
  ctaHref = "/contacto",
}: PulseInlineCTAProps) {
  return (
    <div className="border-t border-white/[0.06] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-white/70 text-lg text-center sm:text-left">{text}</p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all hover:scale-105 whitespace-nowrap shrink-0"
            >
              {ctaLabel}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
