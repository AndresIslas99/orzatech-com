import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface TrustVerticalCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export default function TrustVerticalCard({
  eyebrow,
  title,
  description,
  href,
  cta,
}: TrustVerticalCardProps) {
  return (
    <Link
      href={href}
      className="trust-card p-7 flex flex-col h-full group"
    >
      <div className="eyebrow-light">{eyebrow}</div>
      <h3 className="mt-3 text-xl md:text-2xl font-semibold text-navy-900 tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 group-hover:text-accent-500 transition">
        {cta}
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
