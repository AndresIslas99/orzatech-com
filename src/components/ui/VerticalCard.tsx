import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VerticalCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  external?: boolean;
}

export default function VerticalCard({ icon, title, description, href, cta, external }: VerticalCardProps) {
  const cardContent = (
    <div className="group glass-card p-8 rounded-2xl h-full flex flex-col items-center text-center">
      <div className="icon-glow w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden flex items-center justify-center p-4 mb-6">
        <Image
          src={icon}
          alt={title}
          width={176}
          height={176}
          className="icon-blend object-contain w-full h-full drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
        />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 mb-6 flex-1">{description}</p>
      <span className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
        {cta}
        <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return <Link href={href}>{cardContent}</Link>;
}
