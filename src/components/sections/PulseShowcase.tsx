import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { pulseROIMetrics } from "@/data/pulse";

const colorMap: Record<string, string> = {
  green: "text-green-400",
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
};

export default function PulseShowcase() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a0b] via-[#0f1729] to-[#0a0a0b] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <ScrollReveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-300 font-mono">PRODUCTO PROPIO</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="gradient-text">ORZA Pulse</span>
              </h2>

              <p className="text-lg text-white/60 max-w-lg">
                Kioscos con IA que asesoran tecnicamente a tus clientes, validan contra normativas industriales y generan business intelligence de cada interaccion.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {pulseROIMetrics.map((m) => (
                  <div
                    key={m.value}
                    className="bg-[#141416] border border-white/[0.06] rounded-xl p-5"
                  >
                    <p className={`text-2xl font-black ${colorMap[m.color] ?? "text-white"}`}>
                      {m.value}
                    </p>
                    <p className="text-sm text-white/50 mt-1">{m.metric}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/pulse"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105"
              >
                Descubrir ORZA Pulse
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — Image */}
          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/pulse/pulse-foto7.webp"
                alt="Trabajador usando kiosco ORZA Pulse"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-mono text-white/70">ORZA Pulse &bull; Asesoria tecnica con IA</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
