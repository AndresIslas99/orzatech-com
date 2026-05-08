import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export interface TrustTestimonialMetric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface TrustTestimonialProps {
  eyebrow: string;
  quote: string;
  pendingReview?: boolean;
  authorName: string;
  authorInitials: string;
  authorRole: string;
  authorCompany: string;
  metrics: TrustTestimonialMetric[];
  durationLabel?: string;
  caseHref?: string;
}

export default function TrustTestimonialBlock({
  eyebrow,
  quote,
  pendingReview,
  authorName,
  authorInitials,
  authorRole,
  authorCompany,
  metrics,
  durationLabel,
  caseHref,
}: TrustTestimonialProps) {
  return (
    <section className="section-light py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="eyebrow-light">{eyebrow}</div>
        <div className="mt-4 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <blockquote className="text-2xl md:text-3xl text-navy-900 leading-snug font-medium">
              <span className="text-accent-500 mr-1">&ldquo;</span>
              {pendingReview && (
                <span className="text-xs uppercase tracking-widest text-ink-400 font-mono mr-2">
                  [pendiente revisión cliente]
                </span>
              )}
              {quote}
              <span className="text-accent-500">&rdquo;</span>
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="avatar-initials w-12 h-12 text-sm">{authorInitials}</div>
              <div>
                <div className="font-semibold text-navy-900">{authorName}</div>
                <div className="text-sm text-ink-500">
                  {authorRole} · {authorCompany}
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              {durationLabel && <div className="text-ink-500">{durationLabel}</div>}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="trust-card-elevated p-6">
              <div className="eyebrow-light mb-4">Resultados reales</div>
              <div className="space-y-4">
                {metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`flex items-baseline justify-between ${
                      i < metrics.length - 1 ? "pb-3 border-b border-trust-divider" : ""
                    }`}
                  >
                    <div className="text-sm text-ink-500">{m.label}</div>
                    <div
                      className={`text-2xl font-semibold tracking-tight ${
                        m.highlight ? "text-verified-500" : "text-navy-900"
                      }`}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
              {caseHref && (
                <Link
                  href={caseHref}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-700"
                >
                  Ver caso completo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
