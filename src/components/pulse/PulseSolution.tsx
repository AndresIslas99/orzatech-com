import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseSolutionFeatures, pulseArchLayers } from "@/data/pulse";

const tagColorMap = {
  blue: "bg-blue-600/8 border-blue-600/15 text-blue-400",
  cyan: "bg-cyan-400/8 border-cyan-400/15 text-cyan-400",
  green: "bg-green-500/8 border-green-500/15 text-green-400",
} as const;

export default function PulseSolution() {
  return (
    <section className="py-16 md:py-28 border-t border-white/[0.06]" id="solucion">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="La Solución"
          title="Un ingeniero de IA en cada"
          highlight="punto de venta."
          subtitle="ORZA Pulse combina pantallas interactivas con agentes de IA entrenados en normativas industriales y conectados a tu inventario en tiempo real."
        />

        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-20 items-center mt-16">
            {/* Features list */}
            <div className="flex flex-col gap-2">
              {pulseSolutionFeatures.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-5 rounded-xl border border-transparent hover:bg-[#141416] hover:border-white/[0.06] transition-all duration-300"
                >
                  <div className="w-11 h-11 min-w-[44px] rounded-xl bg-blue-600/10 flex items-center justify-center text-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture diagram */}
            <div className="bg-[#141416] border border-white/[0.06] rounded-2xl p-4 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

              {pulseArchLayers.map((layer, i) => (
                <div key={layer.label}>
                  <div className="bg-[#0a0a0b] border border-white/[0.06] rounded-xl p-4 hover:border-blue-600/30 hover:shadow-[0_0_20px_rgba(37,99,235,0.08)] transition-all duration-300">
                    <div className="font-mono text-[0.6rem] text-white/40 uppercase tracking-[0.15em] mb-2">
                      {layer.label}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.tags.map((tag) => (
                        <span
                          key={tag.text}
                          className={`${tagColorMap[tag.color]} border rounded-md px-2.5 py-1 text-xs font-mono font-medium`}
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < pulseArchLayers.length - 1 && (
                    <div className="text-center py-1.5 text-white/40 text-sm">
                      {i === 0 ? "↓" : "↕"}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
