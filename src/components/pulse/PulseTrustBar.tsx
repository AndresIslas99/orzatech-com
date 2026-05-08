import { pulseTrustPartners } from "@/data/pulse";

export default function PulseTrustBar() {
  return (
    <div className="py-14 border-t border-b border-white/[0.06] bg-[#111113] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center font-mono text-[0.65rem] text-white/40 uppercase tracking-[0.2em] mb-8">
          Tecnología respaldada por partners de clase mundial
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          {pulseTrustPartners.map((name) => (
            <div
              key={name}
              className="w-[100px] h-10 md:w-[120px] md:h-12 bg-[#141416] border border-white/[0.06] rounded-xl flex items-center justify-center hover:border-blue-600/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="font-mono text-[0.7rem] font-semibold text-white/60 tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
