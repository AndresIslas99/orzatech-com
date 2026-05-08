import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseROIMetrics } from "@/data/pulse";

const valueColorMap = {
  green: "text-green-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
} as const;

export default function PulseROIGrid() {
  return (
    <section className="py-16 md:py-28 border-t border-white/[0.06] relative overflow-hidden" id="roi">
      <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Retorno de Inversión"
          title="Números que hablan"
          highlight="más fuerte que promesas."
          subtitle="Impacto proyectado basado en métricas de operación en distribuidoras eléctricas del mercado industrial mexicano."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {pulseROIMetrics.map((m, i) => (
            <ScrollReveal key={m.metric} delay={i * 100}>
              <div className="group bg-[#141416] border border-white/[0.06] rounded-2xl p-5 md:p-8 text-center relative overflow-hidden hover:border-green-500/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-400">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className={`text-4xl font-black mb-1 tracking-tight ${valueColorMap[m.color]}`}>
                  {m.value}
                </div>
                <div className="font-mono text-[0.68rem] text-white/40 uppercase tracking-[0.1em] mb-3">
                  {m.metric}
                </div>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {m.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center mt-8 font-mono text-[0.68rem] text-white/40">
          * Proyecciones basadas en análisis de operaciones industriales. Resultados pueden variar según volumen y tipo de distribuidora.
        </p>
      </div>
    </section>
  );
}
