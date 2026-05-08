import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseProblems, pulseProblemPhotos } from "@/data/pulse";

export default function PulseProblemGrid() {
  return (
    <section className="py-16 md:py-28 relative" id="problema">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="El Problema"
          title="El conocimiento técnico se queda"
          highlight="detrás del mostrador."
          subtitle="En distribuidoras eléctricas, solo el gerente o un técnico especializado puede atender requerimientos industriales complejos. Esto genera cuellos de botella, errores en entregas y pérdida de clientes."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {pulseProblems.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="group bg-[#141416] border border-white/[0.06] rounded-2xl p-5 md:p-8 relative overflow-hidden hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="w-12 h-12 rounded-[14px] bg-red-500/8 flex items-center justify-center text-xl mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {p.description}
                </p>
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-red-500">{p.statValue}</span>
                  <span className="text-xs text-white/40 font-mono">{p.statLabel}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Problem photos */}
        <ScrollReveal delay={300}>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {pulseProblemPhotos.map((photo) => (
              <div key={photo.src} className="rounded-2xl overflow-hidden border-2 border-dashed border-blue-600/25 min-h-[140px] md:min-h-[200px] relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
