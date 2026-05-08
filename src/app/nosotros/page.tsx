import { generatePageMetadata } from "@/lib/metadata";
import { Linkedin, MapPin, ShieldCheck } from "lucide-react";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustSectionHeader from "@/components/trust/TrustSectionHeader";
import TrustCTASection from "@/components/trust/TrustCTASection";
import TrustPartnersBar from "@/components/trust/TrustPartnersBar";

export const metadata = generatePageMetadata({
  title: "Sobre nosotros · El equipo detrás de Orza Technologies",
  description:
    "Cuatro egresados del Tec de Monterrey construyendo automatización industrial seria en México. Quiénes somos, qué creemos, cómo trabajamos.",
  keywords: [
    "Orza Technologies equipo",
    "fundadores Tec de Monterrey",
    "automatización industrial México fundadores",
  ],
  path: "/nosotros",
});

const founders = [
  { initials: "AI", name: "[Fundador 1]", role: "[Cargo · LinkedIn]" },
  { initials: "JR", name: "[Fundador 2]", role: "[Cargo · LinkedIn]" },
  { initials: "MS", name: "[Fundador 3]", role: "[Cargo · LinkedIn]" },
  { initials: "DC", name: "[Fundador 4]", role: "[Cargo · LinkedIn]" },
];

const values = [
  {
    title: "Ingeniería sobre marketing",
    description:
      "Cada propuesta arranca con un ingeniero responsable, no con un comercial. Si no podemos ejecutarlo, no lo vendemos.",
  },
  {
    title: "Métricas verificables",
    description:
      "Cada caso de éxito incluye números medidos junto con el cliente. Sin promesas vagas. Si no se puede medir, no se promete.",
  },
  {
    title: "Trinchera industrial",
    description:
      "Diseñamos en planta, no en escritorios. Cada solución parte de problemas reales que vimos operando, no de hipótesis.",
  },
  {
    title: "Transparencia operativa",
    description:
      "Precios públicos, NDAs disponibles al instante, alcance escrito antes de cualquier orden. Tú firmas con claridad o no firmas.",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Fundación",
    description:
      "Cuatro egresados del Tec de Monterrey unen experiencia industrial con desarrollo de IA bajo el nombre de Orza Technologies.",
  },
  {
    year: "2024",
    title: "Primer caso industrial",
    description:
      "Proyecto LIMSER Cranes — automatización de transfer car de 60 toneladas. Cero incidentes, 100% ciclos registrados.",
  },
  {
    year: "2025",
    title: "Lanzamiento ORZA Pulse",
    description:
      "Producto propio: kioscos con IA para distribuidoras eléctricas. Validación normativa en tiempo real (CMAA, IEC, IEEE).",
  },
  {
    year: "2026",
    title: "Expansión multi-vertical",
    description:
      "Servicios industriales certificados (UR, ABB, Siemens, Yaskawa) + plataforma de software & IA. Operación en MX, US y LATAM.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <TrustPageHero
        eyebrow="Sobre nosotros"
        title={
          <>
            Cuatro ingenieros del Tec de Monterrey construyendo{" "}
            <span className="text-accent-500">automatización seria en México</span>.
          </>
        }
        description="No somos una agencia. Somos un equipo de ingenieros que diseña, integra y entrega proyectos en planta — desde digital twins hasta kioscos con IA."
        primaryCta={{ label: "Hablar con el equipo", href: "/contacto" }}
        secondaryCta={{ label: "Ver casos", href: "/proyectos" }}
        trustItems={[
          { label: "Empresa SAPI de CV constituida" },
          { label: "Equipo dedicado en CDMX" },
        ]}
      />

      {/* Manifesto / valores */}
      <section className="section-light py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Cómo trabajamos"
            title="Cuatro principios no negociables."
            subtitle="No son slogans. Son las reglas internas que aplicamos en cada proyecto que tomamos."
            align="left"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="trust-card p-6">
                <div className="text-xs font-mono text-accent-500 mb-2 uppercase tracking-widest">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-semibold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo (placeholder hasta tener fotos reales) */}
      <section className="section-surface py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="El equipo fundador"
            title="Cuatro caras detrás del trabajo."
            subtitle="Foto de equipo en preparación. Mientras tanto, así nos verás representados en avatares — cada link te lleva a LinkedIn cuando esté listo."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {founders.map((f) => (
              <div key={f.initials} className="trust-card p-6 text-center">
                <div className="avatar-initials w-20 h-20 text-2xl mx-auto">
                  {f.initials}
                </div>
                <div className="mt-4 font-semibold text-navy-900">{f.name}</div>
                <div className="text-sm text-ink-500 mt-1">{f.role}</div>
                <a className="mt-3 inline-flex items-center gap-1 text-xs text-ink-400 hover:text-accent-500 transition">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn (próximamente)
                </a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-400 max-w-2xl mx-auto">
            Estamos coordinando una sesión fotográfica del equipo. Hasta
            entonces, los avatares con iniciales son nuestro placeholder.
            ¿Quieres conocer a alguien específico? Escríbenos.
          </p>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="section-light py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="Cómo llegamos hasta aquí"
            title="Cuatro hitos en cuatro años."
            align="left"
          />
          <ol className="relative space-y-0">
            {timeline.map((item, i) => {
              const isLast = i === timeline.length - 1;
              return (
                <li key={item.year} className="flex gap-6 pb-10 last:pb-0 relative">
                  {!isLast && (
                    <div className="absolute left-[27px] top-14 bottom-0 w-px bg-trust-border" />
                  )}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-navy-900 text-white font-mono text-sm font-semibold flex items-center justify-center relative z-10">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="text-lg font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Datos corporativos visibles */}
      <section className="section-surface py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="trust-card-elevated p-6 md:p-8">
            <div className="badge-verified mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Datos corporativos verificables
            </div>
            <div className="grid sm:grid-cols-2 gap-5 text-sm">
              <div>
                <div className="text-ink-400 text-xs uppercase tracking-wider">Razón social</div>
                <div className="text-navy-900 font-medium mt-1">
                  Orza Technologies SAPI de CV
                </div>
              </div>
              <div>
                <div className="text-ink-400 text-xs uppercase tracking-wider">RFC</div>
                <div className="text-ink-400 italic mt-1">
                  [en proceso de constitución fiscal]
                </div>
              </div>
              <div>
                <div className="text-ink-400 text-xs uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Ubicación
                </div>
                <div className="text-navy-900 font-medium mt-1">
                  Ciudad de México · Servimos toda la República
                </div>
              </div>
              <div>
                <div className="text-ink-400 text-xs uppercase tracking-wider">Activos desde</div>
                <div className="text-navy-900 font-medium mt-1">
                  2023 · 4 años en operación
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustPartnersBar />

      <TrustCTASection />
    </>
  );
}
