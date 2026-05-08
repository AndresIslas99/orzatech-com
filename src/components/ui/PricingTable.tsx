import Link from "next/link";
import { PricingTier } from "@/types";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PricingTableProps {
  tiers: PricingTier[];
}

export default function PricingTable({ tiers }: PricingTableProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {tiers.map((tier, i) => (
        <ScrollReveal key={tier.name} delay={i * 75}>
          <div
            className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${
              tier.highlighted
                ? "bg-blue-600/10 border-blue-500/50 pricing-highlight"
                : "bg-white/[0.02] border-white/10 hover:border-white/20"
            }`}
          >
            {tier.highlighted && (
              <span className="inline-block text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full mb-4 w-fit">
                MAS POPULAR
              </span>
            )}
            <h3 className="text-2xl font-bold">{tier.name}</h3>
            <div className="mt-4 mb-2">
              <span className="text-4xl font-black gradient-text">{tier.price}</span>
              {tier.period && (
                <span className="text-white/50 ml-2">{tier.period}</span>
              )}
            </div>
            <p className="text-white/60 text-sm mb-6">{tier.description}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {tier.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-white/70">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contacto"
              className={`block text-center py-3 rounded-full font-medium transition-colors ${
                tier.highlighted
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border border-white/20 hover:bg-white/5 text-white"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
