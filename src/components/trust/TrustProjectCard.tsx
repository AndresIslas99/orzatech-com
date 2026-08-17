import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

export default function TrustProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className="trust-card overflow-hidden flex flex-col h-full group"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-trust-surface-2">
        {/* alt vacío: la imagen es decorativa dentro del link — el h3 ya nombra el caso */}
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="eyebrow-light text-ink-400">{project.subtitle}</div>
        <h3 className="mt-2 text-lg font-semibold text-navy-900 tracking-tight leading-snug">
          {project.title}
        </h3>
        {project.results && project.results.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-trust-divider">
            {project.results.slice(0, 3).map((r) => (
              <div key={r.label}>
                <div className="text-base data-mono text-navy-900">
                  {r.value}
                </div>
                <div className="text-[10.5px] text-ink-400 leading-snug mt-0.5 uppercase tracking-wide">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy-900 group-hover:text-accent-500 transition">
          Ver caso <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
