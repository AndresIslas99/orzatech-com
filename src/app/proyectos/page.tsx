import { generatePageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustProjectCard from "@/components/trust/TrustProjectCard";
import TrustCTASection from "@/components/trust/TrustCTASection";

export const metadata = generatePageMetadata({
  title: "Casos de éxito · Proyectos entregados con métricas reales",
  description:
    "Portfolio de proyectos de automatización industrial, robótica y software con IA. Cada caso con métricas verificables: tiempos de entrega, ROI, mejoras operativas reales.",
  keywords: [
    "casos de éxito automatización",
    "portfolio robótica industrial",
    "proyectos Orza Technologies",
    "automatización México",
  ],
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <TrustPageHero
        eyebrow="Casos de éxito"
        title={
          <>
            Proyectos entregados.{" "}
            <span className="text-accent-500">Con números, no con promesas.</span>
          </>
        }
        description="Cada proyecto incluye sus métricas reales: ROI, tiempos de entrega, mejoras operativas. Sin marketing, solo lo que medimos junto con el cliente."
        primaryCta={{ label: "Solicitar caso similar", href: "/contacto" }}
        trustItems={[
          { label: "Métricas verificadas con cliente" },
          { label: "NDA disponible bajo solicitud" },
        ]}
      />

      <section className="section-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <TrustProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TrustCTASection />
    </>
  );
}
