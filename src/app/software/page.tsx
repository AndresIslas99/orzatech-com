import { generatePageMetadata } from "@/lib/metadata";
import HeroVertical from "@/components/sections/HeroVertical";
import CTASection from "@/components/sections/CTASection";
import PricingTable from "@/components/ui/PricingTable";
import ProcessStepComponent from "@/components/ui/ProcessStep";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { XCircle, CheckCircle, Check } from "lucide-react";
import {
  softwareSubServices,
  pricingTiers,
  processSteps,
  problemSolutions,
} from "@/data/software-services";

export const metadata = generatePageMetadata({
  title: "Software & Inteligencia Artificial para Empresas",
  description:
    "Agentes de IA, CRM automatizado, dashboards en tiempo real e integracion de sistemas. Soluciones de software con inteligencia artificial para empresas en Mexico.",
  keywords: [
    "agentes IA",
    "CRM automatizado",
    "dashboards",
    "software IA Mexico",
    "inteligencia artificial empresas",
    "automatizacion procesos",
  ],
  path: "/software",
});

export default function SoftwarePage() {
  return (
    <>
      <HeroVertical
        tag="Fase 1: Visibilidad Operativa"
        title="Ve tu operacion"
        highlight="en tiempo real."
        subtitle="Desde tu planta hasta tu CRM."
        description="Telemetria industrial, dashboards conectados, agentes de IA y CRM automatizado. Ya sea que operes una planta, un almacen o un negocio en crecimiento, empezamos con datos. Implementacion en menos de 30 dias."
        primaryCta={{ label: "Agendar Diagnostico Gratuito", href: "/contacto" }}
        secondaryCta={{ label: "Ver Precios", href: "#precios" }}
      />

      {/* Problem → Solution */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="EL PROBLEMA"
              title="¿Tu operacion tiene estos"
              highlight="sintomas?"
            />
          </ScrollReveal>

          <div className="space-y-4">
            {problemSolutions.map((item, i) => (
              <ScrollReveal key={item.problem} delay={i * 60}>
                <div
                  className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-white/70">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <p className="text-white/90 font-medium">{item.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="SERVICIOS"
              title="Soluciones de"
              highlight="Software & IA"
              subtitle="Para plantas industriales, almacenes y negocios en crecimiento."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {softwareSubServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 80}>
                <div
                  className="group glass-card p-8 rounded-2xl"
                >
                  <div className="icon-glow w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden flex items-center justify-center p-4 mb-5">
                    <Image src={service.icon} alt={service.title} width={144} height={144} className="icon-blend object-contain w-full h-full drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                        <Check className="w-4 h-4 text-blue-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="PRECIOS"
              title="Precios"
              highlight="transparentes"
              subtitle="Sin sorpresas. Elige el plan que mejor se adapta a tu negocio."
            />
          </ScrollReveal>

          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="PROCESO"
              title="3 pasos para"
              highlight="empezar"
              subtitle="No necesitas saber de tecnologia. Nosotros nos encargamos de todo."
            />
          </ScrollReveal>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 120}>
                <ProcessStepComponent
                  step={step}
                  isLast={index === processSteps.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Listo para llevar tu empresa al"
        highlight="siguiente nivel?"
        description="Agenda una consulta gratuita de 30 minutos. Te mostramos como la IA puede transformar tu negocio."
        ctaLabel="Agendar Consulta Gratuita"
        ctaHref="/contacto"
      />
    </>
  );
}
