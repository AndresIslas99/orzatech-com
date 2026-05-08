import { generatePageMetadata } from "@/lib/metadata";
import HeroVertical from "@/components/sections/HeroVertical";
import StatsSection from "@/components/sections/StatsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";
import IndustrialServices from "@/components/sections/IndustrialServices";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export const metadata = generatePageMetadata({
  title: "Automatizacion Industrial de Clase Mundial",
  description:
    "Brazos roboticos, AGV/AMR, automatizacion de gruas y gemelos digitales. Integramos las mejores marcas del mundo con ingenieria mexicana.",
  keywords: [
    "brazos roboticos",
    "AGV",
    "AMR",
    "gruas automatizadas",
    "gemelo digital",
    "automatizacion industrial Mexico",
  ],
  path: "/industria",
});

export default function IndustriaPage() {
  return (
    <>
      <HeroVertical
        tag="Automatizacion Industrial"
        title="Automatizacion Industrial de"
        highlight="Clase Mundial"
        description="Brazos roboticos, AGV/AMR, automatizacion de gruas y gemelos digitales. Integramos las mejores marcas del mundo con ingenieria mexicana."
        primaryCta={{ label: "Cotizar Proyecto", href: "/contacto" }}
        secondaryCta={{ label: "Ver Proyectos", href: "/proyectos" }}
      />

      <StatsSection />

      <IndustrialServices />

      {/* All Projects */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="PORTFOLIO"
              title="Proyectos"
              highlight="Industriales"
            />
          </ScrollReveal>

          <ProjectsGrid projects={projects} />
        </div>
      </section>

      <PartnersSection />

      <CTASection
        title="¿Listo para"
        highlight="automatizar?"
        description="Agenda una llamada con nuestro equipo de ingenieros para discutir tu proyecto de automatizacion industrial."
        ctaLabel="Agendar Consulta"
        ctaHref="/contacto"
      />
    </>
  );
}
