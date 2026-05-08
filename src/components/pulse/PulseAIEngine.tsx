import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseStandards, pulseAICapabilities } from "@/data/pulse";

const capIconColor = {
  blue: "bg-blue-600/12",
  cyan: "bg-cyan-400/12",
} as const;

export default function PulseAIEngine() {
  return (
    <section className="py-16 md:py-28 border-t border-white/[0.06] relative" id="motor-ia">
      {/* Decorative radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Motor de IA"
          title="Respaldado por normativas"
          highlight="de clase mundial."
          subtitle="Nuestros agentes no adivinan. Consultan las mismas fuentes que un ingeniero especialista usa para especificar componentes industriales."
        />

        {/* Standards grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-12 mb-12">
            {pulseStandards.map((s) => (
              <div
                key={s.name}
                className="bg-[#141416] border border-white/[0.06] rounded-xl p-4 md:p-6 text-center hover:border-blue-600/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)] transition-all duration-400 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="text-3xl mb-3 relative z-10">{s.icon}</div>
                <h4 className="font-mono text-sm font-semibold mb-1.5 relative z-10">{s.name}</h4>
                <p className="text-xs text-white/40 font-light relative z-10">{s.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* AI Capabilities */}
        <ScrollReveal delay={150}>
          <div className="grid md:grid-cols-2 gap-6">
            {pulseAICapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-[#141416] border border-white/[0.06] rounded-2xl p-5 md:p-7 flex gap-4 hover:border-blue-600/30 transition-all duration-300"
              >
                <div className={`w-10 h-10 min-w-[40px] rounded-xl ${capIconColor[cap.color]} flex items-center justify-center text-lg`}>
                  {cap.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{cap.title}</h4>
                  <p className="text-[0.78rem] text-white/60 leading-relaxed font-light">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
