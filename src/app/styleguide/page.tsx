import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styleguide — Orza Tech",
  description: "Internal design system reference",
  robots: { index: false, follow: false },
};

const palette = [
  { name: "bg-deep", value: "#08090c", role: "Page background" },
  { name: "bg-surface", value: "#0f1115", role: "Cards / panels" },
  { name: "bg-elevated", value: "#161922", role: "Elevated surfaces" },
  { name: "steel-700", value: "#1f242f", role: "Borders, dividers" },
  { name: "steel-500", value: "#3a4150", role: "Mid-graphite" },
  { name: "steel-300", value: "#5b6473", role: "Disabled / inactive" },
  { name: "steel-100", value: "#aab2c0", role: "Body text on dark" },
];

const accent = [
  { name: "eng-blue-500", value: "#0066ff", role: "Primary accent (Siemens-saturated)" },
  { name: "eng-blue-400", value: "#3385ff", role: "Hover / link active" },
  { name: "eng-blue-700", value: "#003d99", role: "Pressed" },
  { name: "amber-500", value: "#f59e0b", role: "Secondary — reserved (data callouts, badges)" },
  { name: "op-green-500", value: "#10b981", role: "Operational / success / uptime" },
  { name: "alert-500", value: "#ef4444", role: "Critical only" },
];

function Swatch({ name, value, role }: { name: string; value: string; role: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="w-16 h-16 rounded-lg ring-1 ring-white/10 shrink-0"
        style={{ background: value }}
      />
      <div className="min-w-0">
        <div className="font-mono text-sm text-white">{name}</div>
        <div className="font-mono text-xs text-text-tertiary">{value}</div>
        <div className="text-xs text-text-secondary mt-0.5">{role}</div>
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2 className="font-display text-4xl text-white mb-10">{title}</h2>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
      {/* Header */}
      <div className="pb-16">
        <div className="eyebrow mb-4">Internal · v0.1 · Industrial premium</div>
        <h1 className="font-display text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
          Orza Design System
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-2xl">
          Reference for the visual language of orzatech.com. Industrial
          editorial — sober palette, technical accents, dimensional depth,
          precision motion. Inspired by ABB, Siemens and Rockwell visual
          systems.
        </p>
      </div>

      {/* Palette — surfaces */}
      <Section eyebrow="01 · Palette" title="Surfaces & graphite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {palette.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
      </Section>

      {/* Palette — accents */}
      <Section eyebrow="02 · Palette" title="Engineering & operational accents">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accent.map((c) => (
            <Swatch key={c.name} {...c} />
          ))}
        </div>
        <p className="mt-8 text-sm text-text-tertiary max-w-3xl">
          The amber accent is used <em>sparingly</em>. Reserve it for: a single
          data callout per section, a critical CTA, a status badge. Overuse
          breaks the industrial feel.
        </p>
      </Section>

      {/* Typography */}
      <Section eyebrow="03 · Type" title="Pareada — sans + serif display + mono">
        <div className="space-y-12">
          <div>
            <div className="eyebrow mb-3">Display · Fraunces (variable)</div>
            <div className="font-display text-7xl text-white tracking-tight leading-[0.9]">
              Visibilidad operativa.
            </div>
            <div className="font-display text-7xl gradient-text tracking-tight leading-[0.9] mt-2">
              Decisiones automáticas.
            </div>
          </div>

          <div>
            <div className="eyebrow mb-3">UI · Geist Sans</div>
            <p className="text-2xl text-white max-w-3xl">
              Construimos software industrial, robótica e IA para empresas
              que ya no toleran operar a ciegas.
            </p>
            <p className="mt-3 text-base text-text-secondary max-w-3xl">
              Desde grúas automatizadas hasta agentes de IA conversacionales,
              cada solución parte del piso de planta — no del laboratorio.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">Data · Geist Mono · tabular numerics</div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="metric-display text-6xl gradient-text">
                  187
                </div>
                <div className="font-mono text-xs text-text-tertiary mt-2 uppercase tracking-wider">
                  proyectos
                </div>
              </div>
              <div>
                <div className="metric-display text-6xl text-white">
                  62%
                </div>
                <div className="font-mono text-xs text-text-tertiary mt-2 uppercase tracking-wider">
                  Δ ciclo medio
                </div>
              </div>
              <div>
                <div className="metric-display text-6xl gradient-text-amber">
                  24/7
                </div>
                <div className="font-mono text-xs text-text-tertiary mt-2 uppercase tracking-wider">
                  uptime SCADA
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Shadows */}
      <Section eyebrow="04 · Depth" title="Compound shadows">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-surface rounded-2xl p-8 shadow-industrial-sm">
            <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
              shadow-industrial-sm
            </div>
            <p className="text-text-primary">Elemento hairline / chips de baja jerarquía.</p>
          </div>
          <div className="bg-bg-surface rounded-2xl p-8 shadow-industrial-md">
            <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
              shadow-industrial-md
            </div>
            <p className="text-text-primary">Cards estándar. Profundidad de lectura sin gritar.</p>
          </div>
          <div className="bg-bg-surface rounded-2xl p-8 shadow-industrial-lg">
            <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
              shadow-industrial-lg
            </div>
            <p className="text-text-primary">Hero callouts, modales, focus principal.</p>
          </div>
        </div>
      </Section>

      {/* Glass variants */}
      <Section eyebrow="05 · Surface" title="Glass — tinted variants">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
              .glass-card
            </div>
            <p className="text-text-secondary">
              Default neutral glass. Hover hace tilt hacia azul.
            </p>
          </div>
          <div className="glass-steel rounded-2xl p-8">
            <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
              .glass-steel
            </div>
            <p className="text-text-secondary">
              Tinted graphite. Para superficies elevadas con personalidad.
            </p>
          </div>
          <div className="glass-amber rounded-2xl p-8">
            <div className="font-mono text-xs text-amber-500 uppercase tracking-wider mb-3">
              .glass-amber
            </div>
            <p className="text-text-secondary">
              Reserved. CTA crítico, badge de novedad, alerta de oportunidad.
            </p>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section eyebrow="06 · CTAs" title="Buttons — jerarquía industrial">
        <div className="flex flex-wrap gap-4 items-center">
          <button className="px-6 py-3 rounded-lg bg-eng-blue-500 hover:bg-eng-blue-400 text-white font-medium transition shadow-industrial-md">
            Hablar con ventas
          </button>
          <button className="px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 hover:bg-white/5 text-white font-medium transition">
            Ver casos
          </button>
          <button className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-bg-deep font-semibold transition shadow-amber-glow">
            Cotización urgente
          </button>
          <button className="px-6 py-3 rounded-lg bg-transparent text-eng-blue-400 hover:text-white font-medium transition">
            Saber más →
          </button>
        </div>
      </Section>

      {/* Sample composition: editorial callout */}
      <Section eyebrow="07 · Composition" title="Editorial callout — preview">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-4 text-amber-500">Caso · Distribuidor eléctrico</div>
            <blockquote className="font-display text-3xl lg:text-4xl text-white leading-tight">
              &ldquo;Pasamos de procesar 12 cotizaciones al día a más de 80,
              sin sumar personal. ORZA Pulse no es un kiosko: es nuestro
              ejecutivo de mostrador.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-steel-500" />
              <div>
                <div className="text-white font-medium">Ing. María Pacheco</div>
                <div className="text-text-tertiary">Gerente de operaciones · Distribuidora del Norte</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l border-white/10">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="metric-display text-5xl gradient-text">+560%</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary mt-2">
                  cotizaciones / día
                </div>
              </div>
              <div>
                <div className="metric-display text-5xl text-white">−40%</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary mt-2">
                  tiempo por cliente
                </div>
              </div>
              <div>
                <div className="metric-display text-5xl gradient-text-amber">6 sem</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary mt-2">
                  go-live
                </div>
              </div>
              <div>
                <div className="metric-display text-5xl text-white">100%</div>
                <div className="text-xs uppercase tracking-wider text-text-tertiary mt-2">
                  uptime · 90 días
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="hairline mt-16" />
      <footer className="py-8 text-xs text-text-muted font-mono">
        Internal · noindex · iterar antes de aplicar a producción
      </footer>
    </div>
  );
}
