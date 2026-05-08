import Image from "next/image";
import Link from "next/link";
import {
  Mic,
  ShieldCheck,
  Box,
  Brain,
  ChevronRight,
  Check,
  X,
  TrendingUp,
  Zap,
  ArrowRight,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import TrustSectionHeader from "@/components/trust/TrustSectionHeader";
import TrustCTASection from "@/components/trust/TrustCTASection";
import {
  pulseProblems,
  pulseSolutionFeatures,
  pulseSteps,
  pulseStandards,
  pulseAICapabilities,
  pulseDashKPIs,
  pulseChartBars,
  pulseInsights,
  pulseBIFeatures,
  pulseROIMetrics,
  pulseCompareTraditional,
  pulseComparePulse,
  pulseTimelineSteps,
  pulseOriginEvents,
  pulseOriginQuote,
  pulseTeamDescription,
  pulseTeamStats,
  pulseTeamPartners,
} from "@/data/pulse";

export const metadata = generatePageMetadata({
  title: "ORZA Pulse · Asistencia técnica con IA para distribuidoras eléctricas",
  description:
    "Kioscos con inteligencia artificial que validan normativas CMAA, IEC e IEEE en tiempo real. Recomienda el componente exacto del inventario y captura demanda invisible.",
  keywords: [
    "ORZA Pulse",
    "kiosko IA distribuidoras",
    "CMAA IEC IEEE",
    "asistencia técnica IA",
    "BI distribuidora eléctrica",
  ],
  path: "/pulse",
});

const featureIcons = [Mic, ShieldCheck, Box, Brain];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ORZA Pulse",
  description:
    "Kiosko con inteligencia artificial para distribuidoras eléctricas. Validación normativa CMAA/IEC/IEEE en tiempo real, recomendación de productos del inventario y captura de demanda invisible.",
  brand: {
    "@type": "Brand",
    name: "Orza Technologies",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Orza Technologies SAPI de CV",
    url: SITE.url,
  },
  category: "Industrial AI Kiosk",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "MXN",
    url: `${SITE.url}/contacto/`,
    seller: {
      "@type": "Organization",
      name: "Orza Technologies SAPI de CV",
    },
  },
};

export default function PulsePage() {
  return (
    <>
      <JsonLd data={productSchema} />
      {/* 1 — Hero with chat preview */}
      <section className="section-light pt-12 pb-16 md:pt-16 md:pb-20 border-b border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="badge-accent mb-5">ORZA Pulse · Producto</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 tracking-tight leading-[1.05]">
              Asistencia técnica impulsada por IA{" "}
              <span className="text-accent-500">en tu mostrador.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed">
              Pantallas interactivas que entienden requerimientos técnicos,
              validan contra normativas industriales (CMAA, IEC, IEEE) y
              recomiendan el producto exacto de tu inventario.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contacto" className="btn-accent">
                Agendar demo personalizada <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#como-funciona" className="btn-secondary">
                Ver cómo funciona
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <span className="text-navy-900 font-semibold">94.7%</span>
                precisión de match
              </div>
              <div className="flex items-center gap-2">
                <span className="text-navy-900 font-semibold">+38%</span>
                visitas recurrentes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-navy-900 font-semibold">2.1 min</span>
                tiempo de atención
              </div>
            </div>
          </div>

          {/* Chat preview */}
          <aside className="lg:col-span-5">
            <div className="trust-card-elevated overflow-hidden">
              <div className="bg-navy-900 px-5 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                <span className="text-xs font-mono text-navy-100 tracking-wider uppercase">
                  Pulse · sesión activa
                </span>
              </div>
              <div className="p-5 space-y-4 bg-trust-surface">
                <div className="bg-white rounded-xl border border-trust-border p-3.5 text-sm text-ink-700">
                  Necesito un contactor trifásico para un polipasto de 15 HP,
                  aplicación grúa industrial clase D según CMAA.
                </div>
                <div className="bg-navy-900 text-white rounded-xl p-4 text-sm space-y-3">
                  <div>
                    Para tu aplicación de polipasto clase D CMAA con motor 15
                    HP, te recomiendo:
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="text-accent-500">→ Siemens 3RT2027 · AC-3, 32A</div>
                    <div className="text-accent-500">→ Cat. AC-4 para reversible</div>
                  </div>
                  <div className="text-navy-100 text-xs italic">
                    Ref. IEC 60947-4-1 para servicio pesado.
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="badge-verified text-[10px] py-0.5">
                      <Check className="w-3 h-3" /> CMAA · IEC validado
                    </span>
                    <span className="text-xs text-navy-100">3 unidades en stock</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 2 — Problem */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="El problema en distribuidoras"
            title="Tres puntos de fuga que ningún CRM detecta."
            subtitle="Distribuidoras eléctricas pierden ventas y clientes en los puntos donde el conocimiento técnico no escala."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {pulseProblems.map((p) => (
              <div key={p.title} className="trust-card p-6 flex flex-col h-full">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed flex-1">
                  {p.description}
                </p>
                <div className="mt-5 pt-5 border-t border-trust-divider">
                  <div className="text-2xl font-semibold text-critical-500 tracking-tight">
                    {p.statValue}
                  </div>
                  <div className="text-xs text-ink-400 mt-1 uppercase tracking-wide">
                    {p.statLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Solution + How it works */}
      <section id="como-funciona" className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="La solución"
            title="Un asesor técnico experto. Disponible 24/7. Sin nómina."
            subtitle="ORZA Pulse combina interacción natural por voz/texto con motores de IA entrenados en normativas industriales y conexión directa a tu inventario."
          />

          {/* 4 features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {pulseSolutionFeatures.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={f.title} className="trust-card p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center mb-4">
                    {Icon ? <Icon className="w-5 h-5" /> : <span className="text-lg">{f.icon}</span>}
                  </div>
                  <h3 className="text-base font-semibold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* 4 steps */}
          <div className="eyebrow-light mb-4 text-center">El flujo, paso a paso</div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pulseSteps.map((step, i) => (
              <div key={step.label} className="trust-card overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] bg-trust-surface-2">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute top-3 left-3 badge-neutral bg-white/95">
                    {step.label}
                  </div>
                </div>
                <div className="p-5 flex-1">
                  <h4 className="font-semibold text-navy-900 text-sm">
                    {i + 1}. {step.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Tech / AI engine */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Motor de IA"
            title="Cuatro capacidades técnicas que lo hacen funcionar."
            subtitle="No es un chatbot. Es un sistema RAG entrenado sobre datalakes normativos con un motor de equivalencias por inventario."
          />
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {pulseAICapabilities.map((c) => (
              <div key={c.title} className="trust-card p-6 flex gap-4">
                <div className="text-2xl shrink-0">{c.icon}</div>
                <div>
                  <h3 className="font-semibold text-navy-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="trust-card-elevated p-6 md:p-8">
            <div className="eyebrow-light mb-4">
              Datalakes normativos integrados
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pulseStandards.map((s) => (
                <div key={s.name} className="flex gap-3">
                  <div className="text-2xl shrink-0">{s.icon}</div>
                  <div>
                    <div className="font-semibold text-navy-900">{s.name}</div>
                    <div className="text-xs text-ink-500 mt-1 leading-snug">
                      {s.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Dashboard / BI showcase (static) */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Business Intelligence"
            title="Captura demanda invisible. Convierte cada interacción en dato."
            subtitle="El backoffice ve en tiempo real lo que tus clientes buscan, lo que falta en tu inventario y dónde se rompe la conversión."
          />

          {/* KPIs row */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            {pulseDashKPIs.map((k) => (
              <div key={k.label} className="trust-card-elevated p-5 text-center">
                <div className="text-2xl md:text-3xl font-semibold text-navy-900 tracking-tight">
                  {k.value}
                </div>
                <div className="text-xs text-ink-400 mt-1.5 uppercase tracking-wide">
                  {k.label}
                </div>
              </div>
            ))}
          </div>

          {/* Insights + chart */}
          <div className="grid lg:grid-cols-2 gap-5 mb-12">
            <div className="trust-card-elevated p-6">
              <div className="eyebrow-light mb-4">Demanda vs stock por categoría</div>
              <div className="space-y-3">
                {pulseChartBars.map((b) => (
                  <div key={b.label}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-navy-900 font-medium">{b.label}</span>
                      <span className="text-ink-400">
                        Demanda {b.demand} · Stock {b.stock}
                      </span>
                    </div>
                    <div className="relative h-6 rounded bg-trust-surface-2 overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-navy-900/80"
                        style={{ width: `${b.demand}%` }}
                      />
                      <div
                        className="absolute inset-y-0 left-0 bg-accent-500/85"
                        style={{ width: `${b.stock}%`, height: "50%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="trust-card-elevated p-6">
              <div className="eyebrow-light mb-4">Insights del periodo</div>
              <div className="space-y-3">
                {pulseInsights.map((i, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border-l-4 text-sm leading-relaxed ${
                      i.type === "alert"
                        ? "bg-critical-50 border-critical-500 text-ink-700"
                        : i.type === "success"
                        ? "bg-verified-50 border-verified-500 text-ink-700"
                        : "bg-trust-surface border-navy-500 text-ink-700"
                    }`}
                  >
                    {i.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BI features list */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pulseBIFeatures.map((f) => (
              <div key={f.title} className="trust-card p-5">
                <h4 className="font-semibold text-navy-900 text-base">{f.title}</h4>
                <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Results: ROI + comparison + timeline */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Resultados verificables"
            title="ROI medido en meses, no en años."
          />

          {/* ROI grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {pulseROIMetrics.map((m) => (
              <div key={m.metric} className="trust-card-elevated p-6">
                <div
                  className={`text-3xl font-semibold tracking-tight ${
                    m.color === "green"
                      ? "text-verified-500"
                      : m.color === "amber"
                      ? "text-accent-500"
                      : "text-navy-900"
                  }`}
                >
                  {m.value}
                </div>
                <div className="font-medium text-navy-900 mt-2 text-sm">
                  {m.metric}
                </div>
                <p className="mt-2 text-xs text-ink-500 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            <div className="trust-card p-6">
              <div className="badge-neutral mb-3">{pulseCompareTraditional.badge}</div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                {pulseCompareTraditional.title}
              </h3>
              <ul className="space-y-2.5">
                {pulseCompareTraditional.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-500"
                  >
                    <X className="w-4 h-4 text-ink-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="trust-card-elevated p-6 border-2 border-accent-500/30">
              <div className="badge-accent mb-3">{pulseComparePulse.badge}</div>
              <h3 className="text-lg font-semibold text-navy-900 mb-4">
                {pulseComparePulse.title}
              </h3>
              <ul className="space-y-2.5">
                {pulseComparePulse.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-navy-900 font-medium"
                  >
                    <Check className="w-4 h-4 text-verified-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="eyebrow-light mb-4 text-center">
              Implementación · 6 semanas estándar
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pulseTimelineSteps.map((step, idx) => (
                <div key={step.title} className="trust-card p-5 relative">
                  <div className="absolute -top-2.5 left-5 bg-navy-900 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    Sem {step.weeks}
                  </div>
                  <h4 className="mt-2 font-semibold text-navy-900 text-sm">
                    {idx + 1}. {step.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {step.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wide text-ink-500 px-1.5 py-0.5 bg-trust-surface rounded border border-trust-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Origin story + team */}
      <section className="section-light py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Por qué construimos Pulse"
            title="Nosotros fuimos el cliente frustrado."
            subtitle="ORZA Pulse no fue diseñado en un escritorio. Fue forjado en la trinchera industrial."
            align="left"
          />

          {/* Quote */}
          <blockquote className="border-l-4 border-accent-500 pl-6 my-10 text-xl md:text-2xl text-navy-900 leading-snug">
            &ldquo;{pulseOriginQuote.text}&rdquo;
            <footer className="text-sm text-ink-500 mt-3 font-normal not-italic">
              {pulseOriginQuote.cite}
            </footer>
          </blockquote>

          {/* Origin events timeline */}
          <ol className="space-y-5 mb-12">
            {pulseOriginEvents.map((e, idx) => (
              <li key={e.title} className="flex gap-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-navy-900 text-white text-sm font-semibold flex items-center justify-center">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-accent-500 font-mono">
                    {e.date}
                  </div>
                  <h3 className="text-base font-semibold text-navy-900 mt-1">
                    {e.title}
                  </h3>
                  <p className="text-sm text-ink-500 mt-1.5 leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Team */}
          <div className="trust-card-elevated p-6 md:p-8">
            <div className="eyebrow-light mb-3">El equipo detrás de Pulse</div>
            <p className="text-base text-ink-700 leading-relaxed">
              {pulseTeamDescription}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 pb-6 border-b border-trust-divider">
              {pulseTeamStats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-semibold text-navy-900 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs text-ink-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="text-xs uppercase tracking-widest text-ink-400 font-mono mb-3">
                Trabajamos con
              </div>
              <div className="flex flex-wrap gap-2">
                {pulseTeamPartners.map((p) => (
                  <span key={p} className="badge-neutral">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — Final CTA */}
      <TrustCTASection />
    </>
  );
}
