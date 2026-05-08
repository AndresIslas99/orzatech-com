"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  pulseDashKPIs,
  pulseChartBars,
  pulseInsights,
  pulseBIFeatures,
} from "@/data/pulse";

const kpiColorMap = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  green: "text-green-400",
} as const;

const insightDotColor = {
  alert: "bg-amber-500",
  success: "bg-green-500",
  info: "bg-blue-400",
} as const;

function InsightText({ text }: { text: string }) {
  // Split on " — " to bold the product name before it
  const dashIdx = text.indexOf(" — ");
  if (dashIdx === -1) return <span className="text-xs text-white/60 leading-snug">{text}</span>;
  const label = text.slice(0, dashIdx);
  const rest = text.slice(dashIdx);
  return (
    <span className="text-xs text-white/60 leading-snug">
      <strong className="text-white font-semibold">{label}</strong>
      {rest}
    </span>
  );
}

export default function PulseBIDashboard() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-28 bg-[#111113]" id="inteligencia">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Inteligencia de Negocio"
          title="Más que un CRM."
          highlight="Intención de compra real."
          subtitle="Los CRM tradicionales solo registran lo que se vendió. ORZA Pulse captura lo que se buscó, lo que casi se compró y por qué no se concretó la venta."
        />

        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-20 items-center mt-16">
            {/* Dashboard mockup */}
            <div className="bg-[#141416] border border-white/[0.06] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* Header */}
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/[0.06]">
                <div className="text-sm font-semibold">📊 ORZA Pulse · Dashboard BI</div>
                <div className="font-mono text-[0.65rem] text-white/40">Feb 2026 · Dimeint Sucursal Centro</div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {pulseDashKPIs.map((kpi) => (
                  <div key={kpi.label} className="bg-[#0a0a0b] rounded-xl p-3.5 text-center">
                    <div className={`text-xl font-extrabold ${kpiColorMap[kpi.color]}`}>
                      {kpi.value}
                    </div>
                    <div className="font-mono text-[0.62rem] text-white/40 uppercase tracking-[0.1em] mt-1">
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-[#0a0a0b] rounded-xl p-4 mb-4" ref={chartRef}>
                <div className="font-mono text-[0.7rem] text-white/40 uppercase tracking-[0.1em] mb-4">
                  Demanda vs Inventario · Top productos
                </div>
                <div className="flex items-end gap-2 h-[100px]">
                  {pulseChartBars.map((bar) => (
                    <div key={bar.label} className="flex-1 flex flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-t bg-blue-600 transition-all duration-700 ease-out"
                        style={{ height: visible ? `${bar.demand}px` : "4px" }}
                      />
                      <div
                        className="w-full rounded-t bg-cyan-400/60 transition-all duration-700 ease-out delay-200"
                        style={{ height: visible ? `${bar.stock}px` : "4px" }}
                      />
                      <div className="font-mono text-[0.58rem] text-white/40 mt-1">
                        {bar.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 mt-2.5 justify-center">
                  <div className="flex items-center gap-1 font-mono text-[0.6rem] text-white/40">
                    <div className="w-2 h-2 bg-blue-600 rounded-sm" />Demanda
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[0.6rem] text-white/40">
                    <div className="w-2 h-2 bg-cyan-400/60 rounded-sm" />En stock
                  </div>
                </div>
              </div>

              {/* Insights */}
              <div className="bg-[#0a0a0b] rounded-xl p-4">
                <div className="font-mono text-[0.7rem] text-white/40 uppercase tracking-[0.1em] mb-3">
                  🔔 Insights activos
                </div>
                {pulseInsights.map((insight, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 py-2 ${i < pulseInsights.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                  >
                    <div className={`w-2 h-2 rounded-full min-w-[8px] ${insightDotColor[insight.type]}`} />
                    <InsightText text={insight.text} />
                  </div>
                ))}
              </div>
            </div>

            {/* BI Features */}
            <div className="flex flex-col gap-7">
              {pulseBIFeatures.map((f) => (
                <div key={f.title} className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]" />
                  <h4 className="text-base font-semibold mb-1.5">{f.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
