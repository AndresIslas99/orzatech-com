import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import JsonLd from "@/components/seo/JsonLd";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustSectionHeader from "@/components/trust/TrustSectionHeader";
import TrustServiceCard from "@/components/trust/TrustServiceCard";
import TrustProjectCard from "@/components/trust/TrustProjectCard";
import TrustTestimonialBlock from "@/components/trust/TrustTestimonialBlock";
import TrustPartnersBar from "@/components/trust/TrustPartnersBar";
import TrustCTASection from "@/components/trust/TrustCTASection";
import { ShieldCheck, Wrench, Layers } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Automatización industrial certificada",
  description:
    "Brazos robóticos, AGV/AMR, automatización de grúas y gemelos digitales. Integración certificada con Universal Robots, ABB, Siemens y Yaskawa. Empresa SAPI de CV.",
  keywords: [
    "automatización industrial México",
    "robótica industrial",
    "AGV AMR",
    "automatización grúas",
    "gemelos digitales",
    "Universal Robots ABB Siemens",
  ],
  path: "/industria",
});

const industrialServices = services.filter((s) => s.vertical === "industrial");
const industrialProjects = projects.filter((p) =>
  ["transfer-car", "amr-brazo-robotico", "telemetria-industrial", "gemelo-digital-grua", "wms-fleet-management"].includes(p.slug)
);

const transferCar = projects.find((p) => p.slug === "transfer-car")!;

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Certificación verificable",
    description:
      "Trabajamos con vendors certificados (UR, ABB, Siemens, Yaskawa). Cada proyecto se entrega con manuales, planos eléctricos y trazabilidad completa.",
  },
  {
    icon: Wrench,
    title: "Ingeniería en sitio",
    description:
      "No vendemos cajas — diseñamos, integramos y comisionamos en tu planta. Reuniones técnicas en sitio antes de cualquier orden de compra.",
  },
  {
    icon: Layers,
    title: "Soporte post-arranque",
    description:
      "12 meses de garantía de operación incluida. Soporte remoto y visitas en sitio según contrato. Tu equipo capacitado, no dependiente.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización Industrial",
  serviceType: "Industrial Automation",
  description:
    "Brazos robóticos, AGV/AMR, automatización de grúas y gemelos digitales. Integración certificada con Universal Robots, ABB, Siemens y Yaskawa.",
  provider: {
    "@type": "Organization",
    name: "Orza Technologies SAPI de CV",
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
  },
  areaServed: ["MX", "US", "LATAM"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Industriales",
    itemListElement: industrialServices.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function IndustriaPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <TrustPageHero
        eyebrow="Industria · Automatización física"
        title={
          <>
            Robótica y automatización industrial{" "}
            <span className="text-accent-500">certificada</span>.
          </>
        }
        description="Brazos robóticos, AGV/AMR, automatización de grúas y gemelos digitales. Integramos vendors líderes con ingeniería mexicana en sitio."
        secondaryCta={{ label: "Ver casos industriales", href: "/proyectos" }}
        trustItems={[
          { label: "Partners certificados UR · ABB · Siemens · Yaskawa" },
          { label: "12 meses garantía operación" },
          { label: "Diseño en sitio antes de cotización" },
        ]}
      />

      {/* Trust pillars */}
      <section className="section-light py-16 md:py-20 border-b border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {trustPillars.map((p) => (
              <div key={p.title} className="trust-card p-6">
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso real Limser primero — antes que servicios */}
      <TrustTestimonialBlock
        eyebrow="Caso real · Limser Cranes"
        quote="Trabajamos con Orza para automatizar nuestro transfer car de 60 toneladas. La cotización fue clara, los tiempos se cumplieron y el resultado eliminó los incidentes de seguridad que arrastrábamos."
        pendingReview
        authorName="Hugo García"
        authorInitials="HG"
        authorRole="Gerente de Proyectos"
        authorCompany="Limser Cranes"
        durationLabel={`Proyecto entregado en ${transferCar.duration}`}
        caseHref="/proyectos"
        metrics={[
          { label: "Incidentes de seguridad", value: "0", highlight: true },
          { label: "Ciclos registrados", value: "100%" },
          { label: "Tiempo de ciclo", value: "−18%" },
          { label: "Duración del proyecto", value: transferCar.duration ?? "" },
        ]}
      />

      {/* Servicios industriales */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Soluciones industriales"
            title="Tres áreas técnicas con equipo dedicado."
            subtitle="No subcontratamos lo crítico. Cada vertical tiene un líder técnico interno responsable del proyecto de extremo a extremo."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {industrialServices.map((s) => (
              <TrustServiceCard
                key={s.id}
                icon={s.icon}
                title={s.title}
                description={s.description}
                features={[s.benefit]}
                specs={s.specs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Portfolio industrial"
            title="Proyectos entregados en planta real."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industrialProjects.map((project) => (
              <TrustProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <TrustPartnersBar />

      <TrustCTASection />
    </>
  );
}
