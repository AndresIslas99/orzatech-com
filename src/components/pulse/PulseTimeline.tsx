import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseTimelineSteps } from "@/data/pulse";

export default function PulseTimeline() {
  return (
    <section className="py-16 md:py-28 border-t border-white/[0.06]" id="implementacion">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Implementación"
          title="De cero a operando en"
          highlight="semanas, no meses."
          subtitle="Un proceso de implementación ágil diseñado para minimizar la disrupción en tu operación diaria."
        />

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 relative">
            {/* Horizontal connector line (lg only) */}
            <div className="hidden lg:block absolute top-10 left-[60px] right-[60px] h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-green-400 opacity-40 rounded" />

            {pulseTimelineSteps.map((step) => (
              <div key={step.weeks} className="text-center relative group">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#141416] border-[3px] border-blue-600/30 flex flex-col items-center justify-center mx-auto mb-5 relative z-10 group-hover:border-blue-600 group-hover:shadow-[0_0_60px_rgba(37,99,235,0.15)] group-hover:scale-[1.08] transition-all duration-400">
                  <div className="font-mono text-[0.6rem] text-white/40 uppercase tracking-[0.1em]">Sem</div>
                  <div className="text-xl font-extrabold text-blue-400">{step.weeks}</div>
                </div>
                <h4 className="text-[0.95rem] font-semibold mb-2">{step.title}</h4>
                <p className="text-[0.78rem] text-white/60 leading-relaxed font-light">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center mt-3">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-600/8 border border-blue-600/15 rounded px-2 py-0.5 font-mono text-[0.6rem] text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Total summary */}
        <ScrollReveal delay={200}>
          <div className="flex justify-center mt-10">
            <div className="bg-[#141416] border border-blue-600/30 rounded-xl px-6 py-5 inline-flex items-center gap-4">
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="text-base font-semibold">6 semanas de implementación completa</h4>
                <p className="text-sm text-white/60 font-light">
                  Soporte continuo post-lanzamiento incluido. Sin interrumpir tu operación diaria.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
