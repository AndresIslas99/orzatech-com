import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  pulseTeamDescription,
  pulseTeamStats,
  pulseTeamPartners,
  pulseTeamPhotos,
} from "@/data/pulse";

export default function PulseTeam() {
  return (
    <section className="py-16 md:py-28 border-t border-white/[0.06]" id="equipo">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Quiénes Somos"
          title="Ingenieros que construyen donde"
          highlight="la industria lo necesita."
        />

        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-center mt-12">
            {/* Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                ORZA Tech — Automatización, Robótica e IA Industrial
              </h3>
              <p className="text-[0.95rem] text-white/60 leading-relaxed font-light mb-6">
                {pulseTeamDescription}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-7">
                {pulseTeamStats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#141416] border border-white/[0.06] rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-blue-400">{s.value}</div>
                    <div className="font-mono text-[0.6rem] text-white/40 uppercase tracking-[0.1em] mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partners */}
              <div className="font-mono text-[0.65rem] text-white/40 uppercase tracking-[0.15em] mb-4">
                Partners tecnológicos
              </div>
              <div className="flex flex-wrap gap-3">
                {pulseTeamPartners.map((partner) => (
                  <span
                    key={partner}
                    className="bg-[#141416] border border-white/[0.06] rounded-lg px-4 py-2 font-mono text-xs text-white/60 font-medium hover:border-blue-600/30 hover:text-blue-400 transition-all duration-300"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {pulseTeamPhotos.map((photo) => (
                <div
                  key={photo.src}
                  className={`relative rounded-2xl overflow-hidden border-2 border-dashed border-blue-600/25 ${photo.tall ? "row-span-2 min-h-[280px] md:min-h-[416px]" : "min-h-[140px] md:min-h-[200px]"}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
