import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import TrustProjectCard from "@/components/trust/TrustProjectCard";
import TrustCTASection from "@/components/trust/TrustCTASection";

// Export estático: una página por proyecto, sin rutas dinámicas en runtime
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return generatePageMetadata({
    title: `${project.title} · Caso de éxito`,
    description: project.description,
    keywords: [...project.tags, project.subtitle, "caso de éxito"],
    path: `/proyectos/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero — ficha del caso */}
      <section className="section-light pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-accent-700 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Todos los proyectos
          </Link>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <span className="eyebrow-light">{project.subtitle}</span>
            {project.duration && (
              <span className="eyebrow-chapter inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {project.duration}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-navy-900 tracking-[-0.02em] leading-[1.06] max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-ink-500 leading-relaxed max-w-2xl">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="badge-neutral">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen principal */}
      <section className="section-light pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <figure className="trust-card-elevated overflow-hidden">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 60rem, 100vw"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Resultados — datos en mono */}
      {project.results && project.results.length > 0 && (
        <section className="section-surface py-14 border-y border-trust-border">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="eyebrow-light mb-6">Resultados medidos</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {project.results.map((r) => (
                <div key={r.label} className="trust-card p-6">
                  <div className="text-3xl data-mono text-navy-900">
                    {r.value}
                  </div>
                  <div className="text-sm text-ink-500 mt-2 leading-snug">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reto y solución — narrativa en papel */}
      {(project.challenge || project.solution) && (
        <section className="section-paper py-16 border-b border-paper-border">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-10">
            {project.challenge && (
              <div>
                <h2 className="eyebrow-light mb-3">El reto</h2>
                <p className="text-base text-ink-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="eyebrow-light mb-3">Lo que construimos</h2>
                <p className="text-base text-ink-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Galería adicional */}
      {project.images && project.images.length > 0 && (
        <section className="section-light py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
            {project.images.map((img, i) => (
              <figure key={img} className="trust-card overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={img}
                    alt={`${project.title} — vista del sistema ${i + 1} de ${project.images!.length}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 30rem, 100vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Proyectos relacionados */}
      <section className="section-light py-16 border-t border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="eyebrow-light">Otros proyectos</h2>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1 text-sm font-medium text-navy-900 hover:text-accent-700 transition"
            >
              Ver todos <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <TrustProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <TrustCTASection />
    </>
  );
}
