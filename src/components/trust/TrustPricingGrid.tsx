import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";
import { PricingTier } from "@/types";

export default function TrustPricingGrid({
  tiers,
  ctaHref = "/contacto",
}: {
  tiers: PricingTier[];
  ctaHref?: string;
}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {tiers.map((tier) => {
        const isHighlighted = tier.highlighted;
        return (
          <div
            key={tier.name}
            className={`relative rounded-xl p-6 flex flex-col ${
              isHighlighted
                ? "bg-navy-900 text-white border border-navy-900 shadow-industrial-md"
                : "trust-card"
            }`}
          >
            {isHighlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                <Star className="w-3 h-3 fill-current" /> Más popular
              </div>
            )}
            <div
              className={`text-sm font-medium ${
                isHighlighted ? "text-navy-100" : "text-ink-500"
              }`}
            >
              {tier.name}
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span
                className={`text-3xl data-mono ${
                  isHighlighted ? "text-white" : "text-navy-900"
                }`}
              >
                {tier.price}
              </span>
              {tier.period && (
                <span
                  className={`text-sm ${
                    isHighlighted ? "text-navy-300" : "text-ink-400"
                  }`}
                >
                  {tier.period}
                </span>
              )}
            </div>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                isHighlighted ? "text-navy-100" : "text-ink-500"
              }`}
            >
              {tier.description}
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className={`flex items-start gap-2 text-sm ${
                    isHighlighted ? "text-navy-100" : "text-ink-700"
                  }`}
                >
                  <Check
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isHighlighted ? "text-accent-500" : "text-verified-500"
                    }`}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              href={ctaHref}
              className={`mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-semibold rounded-lg px-4 py-2.5 transition ${
                isHighlighted
                  ? "bg-accent-500 hover:bg-accent-600 text-white"
                  : "bg-navy-900 hover:bg-navy-700 text-white"
              }`}
            >
              {tier.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
