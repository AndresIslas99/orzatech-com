import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseBenefits } from "@/data/pulse";

const iconColorMap = {
  blue: "bg-blue-600/10",
  cyan: "bg-cyan-400/10",
  green: "bg-green-500/10",
  amber: "bg-amber-500/10",
} as const;

export default function PulseBenefits() {
  return (
    <section className="py-16 md:py-28 bg-[#111113]" id="beneficios">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Beneficios"
          title="Transforma tu distribuidora en un"
          highlight="centro de inteligencia."
        />

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-16">
          {pulseBenefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="group bg-[#141416] border border-white/[0.06] rounded-2xl p-5 md:p-9 relative overflow-hidden hover:border-blue-600/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className={`w-14 h-14 rounded-2xl ${iconColorMap[b.color]} flex items-center justify-center text-2xl mb-5`}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {b.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
