export interface TrustSectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  /** Numeración de capítulo ("01 / 04") — solo en páginas con narrativa secuencial */
  chapter?: string;
}

export default function TrustSectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  chapter,
}: TrustSectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowAlign = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      <div className={`mb-3 flex items-baseline gap-2.5 ${eyebrowAlign}`}>
        {chapter && <span className="eyebrow-chapter">{chapter}</span>}
        <span className="eyebrow-light">{eyebrow}</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
