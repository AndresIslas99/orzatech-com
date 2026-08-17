import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, MapPin, Mail, ArrowRight, Check, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Styleguide — Orza Tech",
  description: "Internal design system reference",
  robots: { index: false, follow: false },
};

const clientLogos = [
  { name: "Ford",   src: "/images/clients/Ford.png",   alt: "Ford" },
  { name: "Kiewit", src: "/images/clients/Kiewit.png", alt: "Kiewit" },
  { name: "Harsco", src: "/images/clients/Harsco.png", alt: "Harsco Rail" },
  { name: "AgNor",  src: "/images/clients/AgNor.png",  alt: "AgNor" },
  { name: "Limser", src: "/images/clients/limser-logo.png", alt: "Limser Cranes" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow-light">{children}</div>;
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8">
      <div className="font-mono text-xs text-ink-400 uppercase tracking-wider mb-2">
        {n} · Styleguide
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function Swatch({ name, value, role }: { name: string; value: string; role: string }) {
  return (
    <div className="trust-card p-4 flex items-center gap-4">
      <div
        className="w-14 h-14 rounded-lg shrink-0 ring-1 ring-trust-border"
        style={{ background: value }}
      />
      <div className="min-w-0">
        <div className="font-mono text-sm text-navy-900 font-medium">{name}</div>
        <div className="font-mono text-xs text-ink-400">{value}</div>
        <div className="text-xs text-ink-500 mt-0.5">{role}</div>
      </div>
    </div>
  );
}

const surfaces = [
  { name: "trust-bg",        value: "#ffffff", role: "Page background" },
  { name: "trust-surface",   value: "#f2f4f8", role: "Alternate sections (frío)" },
  { name: "trust-surface-2", value: "#eaeef4", role: "Sunken surfaces" },
  { name: "paper",           value: "#f6f1ea", role: "Banda cálida — momentos humanos" },
  { name: "trust-border",    value: "#dce2ec", role: "Default borders" },
];

const navyScale = [
  { name: "navy-950", value: "#141c30", role: "Footer / deep" },
  { name: "navy-900", value: "#0f2547", role: "Primary brand · titles" },
  { name: "navy-700", value: "#1c3a6b", role: "Hover / pressed" },
  { name: "navy-500", value: "#35507e", role: "Mid-tone" },
  { name: "navy-300", value: "#6e87ac", role: "Soft accent text" },
];

const accents = [
  { name: "accent-700",   value: "#8a4310", role: "Cobre tinta — CTA / eyebrows" },
  { name: "accent-500",   value: "#b4571c", role: "Cobre — hover / énfasis" },
  { name: "accent-300",   value: "#d98e52", role: "Cobre brillante — sobre navy" },
  { name: "verified-500", value: "#17694a", role: "Verificado · uptime · garantía" },
  { name: "critical-500", value: "#b23327", role: "Solo errores críticos" },
];

const inkScale = [
  { name: "ink-900", value: "#1d2b3f", role: "Body title" },
  { name: "ink-700", value: "#2c3c55", role: "Body text" },
  { name: "ink-500", value: "#51617a", role: "Secondary text" },
  { name: "ink-400", value: "#6e7d95", role: "Captions / metadata" },
  { name: "ink-300", value: "#9aa6ba", role: "Disabled / hint" },
];

export default function StyleguidePage() {
  return (
    <>
      {/* ─────────── PROTOTYPE NAVBAR ─────────── */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-navy-900 flex items-center justify-center text-white font-bold text-sm">
              O
            </div>
            <div className="font-semibold text-navy-900 tracking-tight text-lg">
              Orza Technologies
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-ink-700 font-medium">
            <a className="hover:text-navy-900">Soluciones</a>
            <a className="hover:text-navy-900">Casos</a>
            <a className="hover:text-navy-900">Industria</a>
            <a className="hover:text-navy-900">Pulse</a>
            <a className="hover:text-navy-900">Nosotros</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:+525620595320"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-accent-500"
            >
              <Phone className="w-4 h-4" /> +52 56 2059 5320
            </a>
            <button className="btn-primary text-sm">
              Solicitar cotización <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ─────────── HERO PROTOTYPE ─────────── */}
      <section className="section-light pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="badge-verified mb-5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Empresa constituida · SAPI de CV
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.05]">
              Automatizamos plantas industriales.{" "}
              <span className="text-accent-500">Sin sorpresas.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 max-w-xl leading-relaxed">
              Robótica, software de visibilidad operativa y agentes de IA para
              empresas que necesitan producir más, con menos riesgo. Cotización
              en menos de 48 horas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-accent">
                Solicitar cotización <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/525620595320"
                className="btn-secondary"
              >
                <MessageCircle className="w-4 h-4 text-verified-500" />
                Hablar por WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-ink-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-verified-500" />
                Cotización formal con NDA
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-verified-500" />
                Respuesta &lt; 4 h hábiles
              </div>
            </div>
          </div>

          {/* Right side — trust panel */}
          <aside className="lg:col-span-5">
            <div className="trust-card-elevated p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="eyebrow-light">Operación verificada</div>
                <div className="badge-verified">
                  <Check className="w-3 h-3" /> activa
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="text-3xl data-mono text-navy-900">24/7</div>
                  <div className="text-xs text-ink-500 mt-1">Visibilidad operativa</div>
                </div>
                <div>
                  <div className="text-3xl data-mono text-navy-900">+20%</div>
                  <div className="text-xs text-ink-500 mt-1">Mejora OEE promedio</div>
                </div>
                <div>
                  <div className="text-3xl data-mono text-navy-900">&lt;30</div>
                  <div className="text-xs text-ink-500 mt-1">Días a producción</div>
                </div>
                <div>
                  <div className="text-3xl data-mono text-navy-900">3</div>
                  <div className="text-xs text-ink-500 mt-1">Países (MX · US · LATAM)</div>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-trust-divider flex items-center gap-3">
                <MapPin className="w-4 h-4 text-ink-400" />
                <div className="text-sm text-ink-500">
                  Ciudad de México · Atendemos toda la República
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─────────── CLIENT BAR ─────────── */}
      <section className="section-surface py-10 border-y border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-xs font-mono text-ink-400 uppercase tracking-widest mb-6">
            Confiados por empresas que producen 24/7
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
            {clientLogos.map((c) => (
              <div key={c.name} className="h-10 flex items-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={120}
                  height={40}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── REAL TESTIMONIAL: HUGO / LIMSER ─────────── */}
      <section className="section-light py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Eyebrow>Caso real · Industria metalúrgica</Eyebrow>
          <div className="mt-4 grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <blockquote className="text-2xl md:text-3xl text-navy-900 leading-snug font-medium">
                <span className="text-accent-500 mr-2">&ldquo;</span>
                [Cita pendiente de revisión por cliente — placeholder ilustrativo]
                Trabajamos con Orza para automatizar nuestro transfer car de 60
                toneladas. La cotización fue clara, los tiempos se cumplieron y
                el resultado eliminó los incidentes de seguridad que arrastrábamos.
                <span className="text-accent-500">&rdquo;</span>
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="avatar-initials w-12 h-12 text-sm">HG</div>
                <div>
                  <div className="font-semibold text-navy-900">Hugo García</div>
                  <div className="text-sm text-ink-500">Gerente de Proyectos · Limser Cranes</div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-ink-500">Proyecto entregado en 2 meses</div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="trust-card-elevated p-6">
                <div className="eyebrow-light mb-4">Resultados reales</div>
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between pb-3 border-b border-trust-divider">
                    <div className="text-sm text-ink-500">Incidentes de seguridad</div>
                    <div className="text-2xl font-semibold text-verified-500 tracking-tight">0</div>
                  </div>
                  <div className="flex items-baseline justify-between pb-3 border-b border-trust-divider">
                    <div className="text-sm text-ink-500">Ciclos registrados</div>
                    <div className="text-2xl font-semibold text-navy-900 tracking-tight">100%</div>
                  </div>
                  <div className="flex items-baseline justify-between pb-3 border-b border-trust-divider">
                    <div className="text-sm text-ink-500">Tiempo de ciclo</div>
                    <div className="text-2xl font-semibold text-navy-900 tracking-tight">−18%</div>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm text-ink-500">Duración del proyecto</div>
                    <div className="text-2xl font-semibold text-navy-900 tracking-tight">2 meses</div>
                  </div>
                </div>
                <a className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-700">
                  Ver caso completo <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── DIVIDER: STYLEGUIDE INTERNALS ─────────── */}
      <div className="section-surface border-y border-trust-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="font-mono text-xs text-ink-400 uppercase tracking-widest">
            Below: design system internals (no public)
          </div>
          <div className="badge-neutral">v0.2 · light · trust-first</div>
        </div>
      </div>

      {/* ─────────── PALETTE ─────────── */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel n="01" title="Surfaces & borders" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {surfaces.map((c) => <Swatch key={c.name} {...c} />)}
          </div>

          <div className="mt-16">
            <SectionLabel n="02" title="Navy — primary brand" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {navyScale.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
          </div>

          <div className="mt-16">
            <SectionLabel n="03" title="Accents — reserved use" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accents.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
            <p className="mt-4 text-sm text-ink-500 max-w-2xl">
              El naranja se usa <em>una vez por sección</em> para un CTA o un
              dato clave. El verde se reserva para badges de verificación,
              uptime, o estado correcto. Rojo solo para errores reales.
            </p>
          </div>

          <div className="mt-16">
            <SectionLabel n="04" title="Ink — text scale" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {inkScale.map((c) => <Swatch key={c.name} {...c} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TYPOGRAPHY ─────────── */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel n="05" title="Typography — Archivo + IBM Plex Mono" />
          <div className="space-y-10">
            <div>
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">Display · 6xl · extrabold</div>
              <div className="text-5xl md:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.05]">
                Visibilidad operativa.<br/>Decisiones automáticas.
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">Data · 3xl · IBM Plex Mono (.data-mono)</div>
              <div className="text-3xl data-mono text-navy-900">
                Software industrial certificado para Norteamérica
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">Body · base · regular</div>
              <p className="text-base text-ink-700 max-w-2xl leading-relaxed">
                Construimos automatización industrial, robótica y agentes de IA
                con foco en seguridad operativa. Nuestros proyectos arrancan
                con NDA, cotización formal y entregables clínicamente medibles
                desde la primera reunión.
              </p>
            </div>
            <div>
              <div className="font-mono text-xs text-ink-400 uppercase tracking-widest mb-2">Caption · sm · ink-500</div>
              <p className="text-sm text-ink-500">Cotización válida 30 días · IVA no incluido · Términos de servicio aplican.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── BUTTONS ─────────── */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel n="06" title="Buttons — jerarquía clara" />
          <div className="flex flex-wrap items-center gap-4">
            <button className="btn-primary">Solicitar cotización <ArrowRight className="w-4 h-4" /></button>
            <button className="btn-accent">Llamar ahora <Phone className="w-4 h-4" /></button>
            <button className="btn-secondary">Ver casos</button>
            <a className="text-sm font-medium text-navy-900 hover:text-accent-500 inline-flex items-center gap-1">
              Saber más <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-2xl">
            Por sección: <strong className="text-navy-900">1 botón primario</strong>,{" "}
            <strong className="text-navy-900">1 secundario</strong>. El acento naranja se
            usa solo cuando queremos forzar acción inmediata (ej: "Llamar ahora").
          </p>
        </div>
      </section>

      {/* ─────────── BADGES ─────────── */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel n="07" title="Badges — señales de confianza" />
          <div className="flex flex-wrap items-center gap-3">
            <div className="badge-verified"><ShieldCheck className="w-3.5 h-3.5" /> Empresa verificada</div>
            <div className="badge-verified"><Check className="w-3.5 h-3.5" /> Cotización con NDA</div>
            <div className="badge-accent">Nuevo</div>
            <div className="badge-accent">Pulse · Pre-lanzamiento</div>
            <div className="badge-neutral">ISO 9001 (en proceso)</div>
            <div className="badge-neutral">Partner Universal Robots</div>
          </div>
        </div>
      </section>

      {/* ─────────── AVATARS ─────────── */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel n="08" title="Avatars — placeholder hasta tener foto del equipo" />
          <div className="flex items-center gap-4">
            <div className="avatar-initials w-14 h-14 text-base">AI</div>
            <div className="avatar-initials w-14 h-14 text-base">JR</div>
            <div className="avatar-initials w-14 h-14 text-base">MS</div>
            <div className="avatar-initials w-14 h-14 text-base">DC</div>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-2xl">
            Mientras conseguimos sesión fotográfica del equipo, usamos iniciales
            sobre gradiente navy. El sistema soporta tamaños 10/12/14/16 con
            tipografía proporcional. Cambio sin esfuerzo a foto real cuando esté.
          </p>
        </div>
      </section>

      {/* ─────────── FOOTER PROTOTYPE ─────────── */}
      <footer className="section-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-white text-navy-900 flex items-center justify-center font-bold">
                O
              </div>
              <div className="font-semibold text-white text-lg">Orza Technologies</div>
            </div>
            <p className="text-sm text-navy-100 max-w-md leading-relaxed">
              Soluciones de automatización industrial, robótica y software
              operativo para empresas que producen 24/7 en México, Estados
              Unidos y Latinoamérica.
            </p>
            <div className="mt-6 space-y-2 text-sm text-navy-100">
              <div>Razón social: <span className="text-white">Orza Technologies SAPI de CV</span></div>
              <div>RFC: <span className="text-navy-300">[en proceso de constitución fiscal]</span></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Ciudad de México, México
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-navy-300 mb-4">Contacto directo</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+525620595320" className="flex items-center gap-2 text-white hover:text-accent-500">
                  <Phone className="w-4 h-4" /> +52 56 2059 5320
                </a>
              </li>
              <li>
                <a href="https://wa.me/525620595320" className="flex items-center gap-2 text-white hover:text-accent-500">
                  <MessageCircle className="w-4 h-4 text-verified-500" /> WhatsApp Business
                </a>
              </li>
              <li>
                <a href="mailto:sales@orzatech.com" className="flex items-center gap-2 text-white hover:text-accent-500">
                  <Mail className="w-4 h-4" /> sales@orzatech.com
                </a>
              </li>
              <li className="text-navy-300 text-xs pt-2">
                Atención: Lun–Vie 9:00–19:00 CT
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-navy-300 mb-4">Soluciones</div>
            <ul className="space-y-2 text-sm text-navy-100">
              <li><a className="hover:text-white">Automatización industrial</a></li>
              <li><a className="hover:text-white">Robótica</a></li>
              <li><a className="hover:text-white">Software & IA</a></li>
              <li><a className="hover:text-white">ORZA Pulse</a></li>
              <li><a className="hover:text-white">Casos de éxito</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-navy-300">
            <div>© 2026 Orza Technologies SAPI de CV. Todos los derechos reservados.</div>
            <div className="flex items-center gap-5">
              <a className="hover:text-white">Aviso de privacidad</a>
              <a className="hover:text-white">Términos</a>
              <a className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
