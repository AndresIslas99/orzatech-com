import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { CONTACT, WHATSAPP } from "@/lib/constants";

export interface TrustPageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustItems?: { label: string }[];
  showPhone?: boolean;
}

export default function TrustPageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Solicitar cotización", href: "/contacto" },
  secondaryCta,
  trustItems,
  showPhone = true,
}: TrustPageHeroProps) {
  return (
    <section className="section-light pt-12 pb-12 md:pt-16 md:pb-16 border-b border-trust-border">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="eyebrow-light mb-4">{eyebrow}</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 tracking-tight leading-[1.05] max-w-4xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-ink-500 max-w-2xl leading-relaxed">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={primaryCta.href} className="btn-accent">
            {primaryCta.label} <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
          <a
            href={WHATSAPP.getUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MessageCircle className="w-4 h-4 text-verified-500" />
            WhatsApp
          </a>
        </div>
        {(trustItems || showPhone) && (
          <div className="mt-8 pt-6 border-t border-trust-divider flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-ink-500">
            {trustItems?.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-verified-500" />
                {item.label}
              </div>
            ))}
            {showPhone && (
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-navy-900 hover:text-accent-500 font-medium"
              >
                <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
