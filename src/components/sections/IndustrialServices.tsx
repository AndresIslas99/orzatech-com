"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

const industrialServices = services.filter((s) => s.vertical === "industrial");

export default function IndustrialServices() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            tag="SERVICIOS INDUSTRIALES"
            title="Soluciones de"
            highlight="Automatizacion"
            subtitle="Disenamos e implementamos sistemas completos de automatizacion industrial adaptados a las necesidades especificas de cada cliente."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {industrialServices.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <ServiceCard
                service={service}
                isActive={activeService === index}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
