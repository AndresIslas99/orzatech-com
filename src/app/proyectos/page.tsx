import { generatePageMetadata } from "@/lib/metadata";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CTASection from "@/components/sections/CTASection";
import { projects } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Proyectos - Portfolio de Automatizacion & Software",
  description:
    "Portfolio de proyectos de automatizacion industrial, robotica y software con IA. Casos de exito en manufactura, logistica, energia y tecnologia.",
  keywords: [
    "proyectos automatizacion",
    "portfolio robotica",
    "casos de exito",
    "automatizacion Mexico",
  ],
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-500 font-mono text-sm">// PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            Nuestros <span className="gradient-text">Proyectos</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Soluciones implementadas para clientes en industrias de manufactura, logistica, energia y tecnologia.
          </p>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <CTASection
        title="¿Tienes un proyecto"
        highlight="similar?"
        description="Cuentanos sobre tu proyecto y te ayudamos a encontrar la mejor solucion."
        ctaLabel="Iniciar Proyecto"
        ctaHref="/contacto"
      />
    </>
  );
}
