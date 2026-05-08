import { partners, techStack } from "@/data/partners";
import SectionHeader from "@/components/ui/SectionHeader";
import PartnerLogo from "@/components/ui/PartnerLogo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader
            tag="PARTNERS & TECH STACK"
            title="Tecnologia de"
            highlight="Clase Mundial"
            subtitle="Trabajamos con los mejores fabricantes y plataformas de tecnologia del mundo."
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 40}>
              <PartnerLogo partner={partner} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="text-white/40 font-mono text-sm">Cloud & Frameworks</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <ScrollReveal key={tech.name} delay={i * 40}>
              <PartnerLogo partner={tech} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
