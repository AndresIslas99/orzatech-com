import { generatePageMetadata } from "@/lib/metadata";
import HeroHome from "@/components/sections/HeroHome";
import ClientsBar from "@/components/sections/ClientsBar";
import StatsSection from "@/components/sections/StatsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";
import VerticalCard from "@/components/ui/VerticalCard";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { featuredProjects } from "@/data/projects";
import PulseShowcase from "@/components/sections/PulseShowcase";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Software Industrial & Automatizacion para Empresas | Orza Technologies",
  description:
    "Software de visibilidad operativa, dashboards industriales, agentes de IA y automatizacion fisica. Implementacion en menos de 30 dias para empresas en Mexico, US y LATAM.",
  keywords: [
    "software industrial",
    "visibilidad operativa",
    "dashboards industriales",
    "agentes IA",
    "automatizacion industrial",
    "robotica industrial",
    "AGV",
    "AMR",
    "Mexico",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroHome />

      <ClientsBar />

      <PulseShowcase />

      {/* Three-Phase Journey */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="TU CAMINO"
              title="De datos a"
              highlight="automatizacion"
              subtitle="La automatizacion exitosa empieza por entender tu operacion. Cada fase construye sobre la anterior."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line between phases (desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-[calc(33.33%+12px)] right-[calc(33.33%+12px)] h-px bg-gradient-to-r from-blue-500/40 via-blue-500/20 to-blue-500/10 z-0" />

            {/* Fase 1 — highlighted */}
            <ScrollReveal delay={0}>
              <div className="rounded-2xl border border-blue-500/50 relative z-10 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <Image src="/images/icons/phase-visibility.webp" alt="Control room con dashboards" width={800} height={800} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-mono text-blue-400 bg-blue-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    EMPIEZA AQUI
                  </span>
                </div>
                <div className="p-6 pt-0 -mt-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Fase 1 — Visibilidad</h3>
                  <p className="text-white/60">
                    Dashboards conectados, telemetria industrial y agentes de IA 24/7. Entiende tu operacion antes de cambiarla.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fase 2 */}
            <ScrollReveal delay={100}>
              <div className="rounded-2xl border border-white/10 relative z-10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <Image src="/images/icons/phase-optimization.webp" alt="Gemelo digital y simulacion 3D" width={800} height={800} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                </div>
                <div className="p-6 pt-0 -mt-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Fase 2 — Optimizacion</h3>
                  <p className="text-white/60">
                    Gemelos digitales, simulacion y prediccion. Valida mejoras antes de invertir en hardware.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fase 3 */}
            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-white/10 relative z-10 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                <div className="relative h-52 md:h-56 overflow-hidden">
                  <Image src="/images/icons/phase-automation.webp" alt="Fabrica automatizada con robots" width={800} height={800} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/40 to-transparent" />
                </div>
                <div className="p-6 pt-0 -mt-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Fase 3 — Automatizacion</h3>
                  <p className="text-white/60">
                    Brazos roboticos, AGV/AMR y gruas automatizadas. El paso natural cuando ya tienes visibilidad.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Link
                href="/software"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Empezar con Visibilidad
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StatsSection />

      {/* Verticals Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="SOLUCIONES"
              title="¿Que necesita tu"
              highlight="empresa?"
              subtitle="Cada negocio tiene retos diferentes. Elige la vertical que mejor se adapta a tu operacion."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <VerticalCard
                icon="/images/pulse/pulse-foto7.webp"
                title="ORZA Pulse"
                description="Kioscos con IA para distribuidoras: asesoria tecnica automatizada, validacion normativa y business intelligence."
                href="/pulse"
                cta="Conocer ORZA Pulse"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <VerticalCard
                icon="/images/icons/software-ai.webp"
                title="Software & IA"
                description="Empieza aqui: dashboards en tiempo real, agentes de IA y CRM automatizado. Visibilidad total antes de invertir en hardware."
                href="/software"
                cta="Ver servicios de IA"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <VerticalCard
                icon="/images/icons/factory.webp"
                title="Automatizacion Industrial"
                description="Brazos roboticos, AGV/AMR y automatizacion de gruas cuando ya tienes visibilidad de tus procesos."
                href="/industria"
                cta="Explorar soluciones"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="CASOS DE EXITO"
              title="Proyectos"
              highlight="Destacados"
              subtitle="Soluciones implementadas para clientes en industrias de manufactura, logistica, energia y tecnologia."
            />
          </ScrollReveal>

          <ProjectsGrid projects={featuredProjects} />

          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PartnersSection />

      <CTASection
        title="¿Por donde empezar?"
        highlight="Por los datos."
        description="En 30 minutos te mostramos que parte de tu operacion tiene datos utiles y como convertirlos en visibilidad inmediata."
        ctaLabel="Agendar Diagnostico Gratuito"
        ctaHref="/contacto"
      />
    </>
  );
}
