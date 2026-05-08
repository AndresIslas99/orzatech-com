import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import {
  softwareSubServices,
  pricingTiers,
  processSteps,
  problemSolutions,
} from "@/data/software-services";
import { projects } from "@/data/projects";
import JsonLd from "@/components/seo/JsonLd";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustSectionHeader from "@/components/trust/TrustSectionHeader";
import TrustServiceCard from "@/components/trust/TrustServiceCard";
import TrustProblemList from "@/components/trust/TrustProblemList";
import TrustPricingGrid from "@/components/trust/TrustPricingGrid";
import TrustProcessSteps from "@/components/trust/TrustProcessSteps";
import TrustTestimonialBlock from "@/components/trust/TrustTestimonialBlock";
import TrustCTASection from "@/components/trust/TrustCTASection";

export const metadata = generatePageMetadata({
  title: "Software & IA industrial · Visibilidad operativa real",
  description:
    "Dashboards en tiempo real, telemetría industrial, agentes de IA y CRM automatizado. Implementación en menos de 30 días con precios transparentes. Empresa SAPI de CV.",
  keywords: [
    "software industrial México",
    "dashboards tiempo real",
    "agentes IA WhatsApp",
    "telemetría industrial",
    "CRM automatizado",
    "visibilidad operativa",
  ],
  path: "/software",
});

const aiAgentProject = projects.find((p) => p.slug === "agente-ia-crm")!;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Software industrial & IA",
  serviceType: "Industrial Software & AI",
  description:
    "Dashboards en tiempo real, telemetría industrial, agentes de IA por WhatsApp y CRM automatizado. Implementación en menos de 30 días con precios públicos.",
  provider: {
    "@type": "Organization",
    name: "Orza Technologies SAPI de CV",
    url: SITE.url,
  },
  areaServed: ["MX", "US", "LATAM"],
  offers: pricingTiers
    .filter((t) => t.price !== "Personalizado")
    .map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price.replace(/[^0-9]/g, ""),
      priceCurrency: "MXN",
      description: t.description,
      url: `${SITE.url}/contacto/`,
    })),
};

export default function SoftwarePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <TrustPageHero
        eyebrow="Software & IA · Fase 1: visibilidad operativa"
        title={
          <>
            Ve tu operación en tiempo real.{" "}
            <span className="text-accent-500">Antes de tocar el hardware.</span>
          </>
        }
        description="Telemetría industrial, dashboards conectados, agentes de IA por WhatsApp y CRM automatizado. Implementación en menos de 30 días con precios públicos."
        secondaryCta={{ label: "Ver precios", href: "#precios" }}
        trustItems={[
          { label: "Implementación < 30 días" },
          { label: "Precios transparentes" },
          { label: "Sin contratos amarrados" },
        ]}
      />

      {/* Problem → Solution */}
      <section className="section-light py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="¿Estás aquí?"
            title="Síntomas que escuchamos en cada planta."
            subtitle="Si reconoces dos o más, Software & IA debería ser tu primer paso antes de cualquier robot."
          />
          <TrustProblemList items={problemSolutions} />
        </div>
      </section>

      {/* Caso real AGNOR */}
      <TrustTestimonialBlock
        eyebrow="Caso real · AGNOR Dashboard"
        quote="Implementamos un agente de IA y CRM automatizado para AGNOR. Aumentaron leads calificados y redujeron tiempo de respuesta a menos de 30 segundos."
        pendingReview
        authorName="Equipo AGNOR"
        authorInitials="AG"
        authorRole="Equipo comercial"
        authorCompany="AGNOR"
        durationLabel={`Implementación en ${aiAgentProject.duration}`}
        caseHref="/proyectos"
        metrics={[
          { label: "Leads calificados", value: "+60%", highlight: true },
          { label: "Tiempo de respuesta", value: "<30s" },
          { label: "Costo por lead", value: "−45%" },
          { label: "Implementación", value: aiAgentProject.duration ?? "" },
        ]}
      />

      {/* Servicios */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Servicios software & IA"
            title="Cinco soluciones que se combinan según tu operación."
            subtitle="Cada una se puede implementar individual o como conjunto. Compatible con tu ERP, WMS o SCADA actual."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {softwareSubServices.map((service) => (
              <TrustServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="section-light py-20 border-t border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Precios"
            title="Precios públicos. Sin sorpresas en la cotización."
            subtitle="Estos son nuestros planes mensuales para Software & IA. Para automatización industrial física pasamos por cotización formal después de visita en sitio."
          />
          <TrustPricingGrid tiers={pricingTiers} ctaHref="/contacto" />
          <p className="mt-8 text-center text-sm text-ink-400">
            Precios en MXN, no incluyen IVA · Cancelas cuando quieras · NDA al
            iniciar el proyecto
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-surface py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Cómo trabajamos"
            title="Tres pasos. Sin sorpresas."
            subtitle="No necesitas saber de tecnología. Nosotros traducimos al lenguaje técnico y de regreso."
          />
          <TrustProcessSteps steps={processSteps} />
        </div>
      </section>

      <TrustCTASection />
    </>
  );
}
