import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { pulseCompareTraditional, pulseComparePulse } from "@/data/pulse";

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="min-w-[18px] mt-0.5 text-red-500">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="min-w-[18px] mt-0.5 text-green-500">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PulseComparison() {
  return (
    <section className="py-16 md:py-28 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Comparación"
          title="No es otro CRM."
          highlight="Es una nueva categoría."
        />

        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {/* Traditional */}
            <div className="bg-[#141416] border border-white/[0.06] rounded-2xl p-5 md:p-9">
              <span className="inline-block font-mono text-[0.65rem] tracking-[0.15em] uppercase bg-white/5 text-white/40 px-3 py-1 rounded-full mb-4">
                {pulseCompareTraditional.badge}
              </span>
              <h3 className="text-xl font-bold mb-6">{pulseCompareTraditional.title}</h3>
              <ul className="flex flex-col gap-3.5">
                {pulseCompareTraditional.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed">
                    <XIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pulse */}
            <div className="bg-gradient-to-br from-blue-600/8 to-cyan-400/4 border border-blue-600/30 rounded-2xl p-5 md:p-9 relative overflow-hidden shadow-[0_0_60px_rgba(37,99,235,0.15)]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400" />
              <span className="inline-block font-mono text-[0.65rem] tracking-[0.15em] uppercase bg-blue-600/15 text-blue-400 px-3 py-1 rounded-full mb-4">
                {pulseComparePulse.badge}
              </span>
              <h3 className="text-xl font-bold mb-6">{pulseComparePulse.title}</h3>
              <ul className="flex flex-col gap-3.5">
                {pulseComparePulse.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/60 leading-relaxed">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
