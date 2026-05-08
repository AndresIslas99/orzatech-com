import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  pulseOriginEvents,
  pulseOriginQuote,
  pulseOriginPhotos,
} from "@/data/pulse";

export default function PulseOriginStory() {
  return (
    <section className="py-16 md:py-28 bg-[#111113] relative" id="origen">
      {/* Decorative radial */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Nuestro Origen"
          title="Lo construimos porque"
          highlight="lo vivimos en carne propia."
          subtitle="Nacido de la frustración real de un proyecto de automatización industrial para LIMSER Cranes. No es una solución teórica — surgió de un dolor operativo concreto."
        />

        <ScrollReveal>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-start mt-12">
            {/* Photo stack */}
            <div className="flex flex-col gap-4">
              {pulseOriginPhotos.map((photo) => (
                <div key={photo.src} className="relative rounded-2xl overflow-hidden border-2 border-dashed border-blue-600/25 min-h-[180px] md:min-h-[280px] lg:min-h-[420px]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent" />

              {pulseOriginEvents.map((event, i) => (
                <div
                  key={event.date}
                  className={`relative mb-8 pb-8 ${i < pulseOriginEvents.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.5)]" />
                  <div className="font-mono text-[0.68rem] text-blue-400 uppercase tracking-[0.1em] mb-1.5">
                    {event.date}
                  </div>
                  <h4 className="text-lg font-semibold mb-1.5">{event.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
              ))}

              {/* Quote */}
              <div className="bg-[#141416] border border-blue-600/30 rounded-xl p-4 md:p-6 relative mt-4">
                <span className="absolute -top-2.5 left-5 text-5xl text-blue-600 font-extrabold leading-none">
                  &ldquo;
                </span>
                <p className="text-base italic text-white leading-relaxed font-light">
                  {pulseOriginQuote.text}
                </p>
                <cite className="block mt-3 font-mono text-xs text-white/40 not-italic">
                  {pulseOriginQuote.cite}
                </cite>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
