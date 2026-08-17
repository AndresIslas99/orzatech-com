import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { PULSE } from "@/lib/constants";
import { featuredProjects, projects } from "@/data/projects";
import TrustHero from "@/components/trust/TrustHero";
import TrustClientBar from "@/components/trust/TrustClientBar";
import TrustTestimonialBlock from "@/components/trust/TrustTestimonialBlock";
import TrustVerticalCard from "@/components/trust/TrustVerticalCard";
import TrustProjectCard from "@/components/trust/TrustProjectCard";
import TrustPartnersBar from "@/components/trust/TrustPartnersBar";
import TrustCTASection from "@/components/trust/TrustCTASection";

export const metadata = generatePageMetadata({
  title: "Automatización Industrial Confiable",
  description:
    "Automatización industrial, robótica y software de visibilidad operativa para empresas en México, US y LATAM. Cotización formal en menos de 48 horas. Empresa SAPI de CV.",
  keywords: [
    "automatización industrial México",
    "robótica industrial",
    "software industrial",
    "agentes IA",
    "telemetría",
    "AGV AMR",
    "Orza Technologies",
  ],
  path: "/",
});

// Real Limser project for the testimonial section
const limserProject = projects.find((p) => p.slug === "transfer-car")!;

export default function Home() {
  return (
    <>
      <TrustHero />

      <TrustClientBar />

      {/* Real testimonial — Hugo García / Limser Cranes */}
      <TrustTestimonialBlock
        chapter="01 / 04"
        eyebrow="Caso real · Industria metalúrgica"
        quote="Trabajamos con Orza para automatizar nuestro transfer car de 60 toneladas. La cotización fue clara, los tiempos se cumplieron y el resultado eliminó los incidentes de seguridad que arrastrábamos."
        pendingReview
        authorName="Hugo García"
        authorInitials="HG"
        authorRole="Gerente de Proyectos"
        authorCompany="Limser Cranes"
        durationLabel={`Proyecto entregado en ${limserProject.duration}`}
        caseHref="/proyectos/transfer-car"
        metrics={[
          { label: "Incidentes de seguridad", value: "0", highlight: true },
          { label: "Ciclos registrados", value: "100%" },
          { label: "Tiempo de ciclo", value: "−18%" },
          { label: "Duración del proyecto", value: limserProject.duration ?? "" },
        ]}
      />

      {/* Verticales */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mb-3 flex items-baseline gap-2.5 justify-center">
              <span className="eyebrow-chapter">02 / 04</span>
              <span className="eyebrow-light">Soluciones</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              Tres formas de empezar a automatizar tu operación.
            </h2>
            <p className="mt-4 text-base text-ink-500">
              Elige la vertical que mejor se adapta a tu prioridad ahora —
              después escalamos al resto.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <TrustVerticalCard
              eyebrow="Software & IA"
              title="Visibilidad antes del hardware"
              description="Dashboards en tiempo real, telemetría industrial, agentes de IA y CRM automatizado. El paso 1 cuando todavía no sabes qué optimizar."
              href="/software"
              cta="Ver software & IA"
            />
            <TrustVerticalCard
              eyebrow="Industria"
              title="Robótica y automatización física"
              description="Brazos robóticos, AGV/AMR, gemelos digitales y automatización de grúas. Para cuando ya tienes datos y necesitas mover toneladas."
              href="/industria"
              cta="Ver soluciones industriales"
            />
            <TrustVerticalCard
              eyebrow="Producto · Pulse"
              title="Kiosko de IA para distribuidoras"
              description="ORZA Pulse: cotización técnica automatizada, validación normativa y BI en tiempo real para distribuidoras eléctricas."
              href={PULSE.url}
              cta="Conocer ORZA Pulse"
            />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-light py-20 border-t border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="mb-3 flex items-baseline gap-2.5">
                <span className="eyebrow-chapter">03 / 04</span>
                <span className="eyebrow-light">Casos de éxito</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight max-w-xl">
                Proyectos entregados con números, no con promesas.
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 hover:text-accent-500 transition"
            >
              Ver todos los proyectos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <TrustProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TrustPartnersBar />

      {/* Equipo — strip de prueba social con foto real */}
      <section className="section-light py-16 border-t border-trust-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-3 flex items-baseline gap-2.5">
              <span className="eyebrow-chapter">04 / 04</span>
              <span className="eyebrow-light">El equipo detrás de Orza</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight max-w-lg">
              Tres socios firmando la constitución de Orza Technologies ante notario.
            </h2>
            <p className="mt-4 text-base text-ink-500 leading-relaxed max-w-lg">
              No somos una agencia ni un intermediario. Cuando contratas con
              Orza, hablas directo con los socios responsables del proyecto.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/nosotros" className="btn-primary">
                Conoce al equipo <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="badge-verified self-center">
                <ShieldCheck className="w-3.5 h-3.5" />
                SAPI de CV constituida
              </div>
            </div>
          </div>
          <figure className="lg:col-span-5 order-1 lg:order-2 trust-card-elevated overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/team/founders-square.webp"
                alt="Los tres socios fundadores de Orza Technologies firmando ante notario"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </figure>
        </div>
      </section>

      <TrustCTASection />
    </>
  );
}
