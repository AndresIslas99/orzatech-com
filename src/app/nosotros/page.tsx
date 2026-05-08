import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { MapPin, ShieldCheck } from "lucide-react";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustSectionHeader from "@/components/trust/TrustSectionHeader";
import TrustCTASection from "@/components/trust/TrustCTASection";
import TrustPartnersBar from "@/components/trust/TrustPartnersBar";

export const metadata = generatePageMetadata({
  title: "Sobre nosotros · El equipo detrás de Orza Technologies",
  description:
    "Tres socios construyendo automatización industrial seria en México. Quiénes somos, qué creemos, cómo trabajamos.",
  keywords: [
    "Orza Technologies equipo",
    "fundadores Orza",
    "automatización industrial México fundadores",
  ],
  path: "/nosotros",
});

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
            Tres socios construyendo{" "}
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

      {/* Equipo — foto real + nombres */}
      <section className="section-surface py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <TrustSectionHeader
            eyebrow="El equipo fundador"
            title="Tres socios. Una sola firma."
            subtitle="Foto el día que constituimos Orza Technologies SAPI de CV ante notario. Si quieres conocer a alguno en específico, escríbenos."
            align="left"
          />
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <figure className="lg:col-span-8 trust-card-elevated overflow-hidden">
              <div className="relative aspect-[4/3] bg-trust-surface-2">
                <Image
                  src="/images/team/founders-notaria.webp"
                  alt="Andrés Islas, Victor Enriques y Alan Davila — los tres socios fundadores de Orza Technologies firmando la constitución de la empresa ante notario en Ciudad de México"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
              </div>
              <figcaption className="px-5 py-4 text-xs text-ink-400 font-mono uppercase tracking-widest">
                Constitución ante notario · CDMX · 2025
              </figcaption>
            </figure>
            <div className="lg:col-span-4 space-y-4">
              <div className="trust-card p-5">
                <div className="text-3xl font-semibold text-navy-900 tracking-tight">3</div>
                <div className="text-sm text-ink-500 mt-1">Socios fundadores</div>
              </div>
              <div className="trust-card p-5">
                <div className="text-3xl font-semibold text-navy-900 tracking-tight">100%</div>
                <div className="text-sm text-ink-500 mt-1">
                  Ingeniería propia · sin subcontratación crítica
                </div>
              </div>
              <div className="trust-card p-5">
                <div className="text-3xl font-semibold text-navy-900 tracking-tight">CDMX</div>
                <div className="text-sm text-ink-500 mt-1">
                  Operación física en CDMX · servimos toda la República
                </div>
              </div>
            </div>
          </div>

          {/* Founder cards */}
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              {
                initials: "AI",
                name: "Andrés Islas",
                role: "CEO · Co-founder",
                desc: "Lidera operación, alianzas comerciales y dirección estratégica.",
              },
              {
                initials: "VE",
                name: "Victor Enriques",
                role: "CTO · Co-founder",
                desc: "Responsable de ingeniería, arquitectura técnica y entrega en planta.",
              },
              {
                initials: "AD",
                name: "Alan Davila",
                role: "CIO · Co-founder",
                desc: "Lidera plataforma de software, IA y operación de información interna.",
              },
            ].map((f) => (
              <div key={f.initials} className="trust-card p-6">
                <div className="flex items-center gap-4">
                  <div className="avatar-initials w-14 h-14 text-base shrink-0">
                    {f.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy-900 truncate">
                      {f.name}
                    </div>
                    <div className="text-xs text-accent-500 font-mono uppercase tracking-wider mt-0.5">
                      {f.role}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ink-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
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
                <div className="text-ink-400 text-xs uppercase tracking-wider">Estructura</div>
                <div className="text-navy-900 font-medium mt-1">
                  Sociedad Anónima Promotora de Inversión de Capital Variable
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
