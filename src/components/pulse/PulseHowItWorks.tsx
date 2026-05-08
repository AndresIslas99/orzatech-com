import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseSteps } from "@/data/pulse";

export default function PulseHowItWorks() {
  return (
    <section className="py-16 md:py-28 bg-[#111113]" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Cómo Funciona"
          title="De la pregunta al producto correcto en"
          highlight="menos de 3 minutos."
        />

        <div className="flex flex-col gap-10 md:gap-16 mt-16 relative">
          {/* Vertical connector line (lg only) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent opacity-15 -translate-x-1/2" />

          {pulseSteps.map((step, i) => {
            const isReverse = i % 2 === 1;
            return (
              <ScrollReveal key={step.label} delay={i * 80}>
                <div
                  className={`grid lg:grid-cols-[1fr_1.5fr] gap-5 lg:gap-12 items-center ${isReverse ? "lg:[grid-template-columns:1.5fr_1fr]" : ""}`}
                >
                  <div className={isReverse ? "lg:order-2" : ""}>
                    <div className="group">
                      <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl bg-[#141416] border-2 border-blue-600/30 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-600 group-hover:shadow-[0_0_60px_rgba(37,99,235,0.15)] group-hover:scale-105 transition-all duration-400">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <div className="font-mono text-[0.62rem] text-blue-400 uppercase tracking-[0.15em] mb-2">
                        {step.label}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className={`rounded-xl overflow-hidden relative aspect-video ${isReverse ? "lg:order-1" : ""}`}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      unoptimized
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
