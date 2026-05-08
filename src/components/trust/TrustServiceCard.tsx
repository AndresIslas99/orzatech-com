import Image from "next/image";
import { Check } from "lucide-react";

export interface TrustServiceCardProps {
  icon?: string;
  title: string;
  description: string;
  features?: string[];
  specs?: string[];
}

export default function TrustServiceCard({
  icon,
  title,
  description,
  features,
  specs,
}: TrustServiceCardProps) {
  return (
    <div className="trust-card p-6 md:p-7 flex flex-col h-full">
      {icon && (
        <div className="mb-5 w-14 h-14 rounded-lg bg-trust-surface-2 flex items-center justify-center overflow-hidden">
          <Image
            src={icon}
            alt=""
            width={56}
            height={56}
            className="object-contain w-9 h-9"
          />
        </div>
      )}
      <h3 className="text-lg md:text-xl font-semibold text-navy-900 tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="mt-5 space-y-2 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
              <Check className="w-4 h-4 text-verified-500 shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {specs && specs.length > 0 && (
        <div className="mt-5 pt-4 border-t border-trust-divider flex flex-wrap gap-2">
          {specs.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] uppercase tracking-wide text-ink-500 px-2 py-1 bg-trust-surface rounded border border-trust-border"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
