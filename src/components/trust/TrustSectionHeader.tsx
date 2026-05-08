export interface TrustSectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}

export default function TrustSectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: TrustSectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl mb-12 ${alignClass}`}>
      <div className="eyebrow-light mb-3">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-500 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
