interface SectionHeaderProps {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

export default function SectionHeader({ tag, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <span className="text-blue-500 font-mono text-sm">// {tag}</span>
      <h2 className="text-4xl md:text-5xl font-black mt-4">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-white/50 mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
