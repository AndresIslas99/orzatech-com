import { generatePageMetadata } from "@/lib/metadata";
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Check } from "lucide-react";
import TrustPageHero from "@/components/trust/TrustPageHero";
import TrustContactForm from "@/components/trust/TrustContactForm";
import { CONTACT, WHATSAPP } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contacto · Solicita tu cotización formal",
  description:
    "Cuéntanos sobre tu proyecto de automatización industrial o software. Cotización formal en menos de 4 horas hábiles. NDA disponible. Sin compromiso.",
  keywords: [
    "contacto Orza Technologies",
    "cotización automatización México",
    "consulta robótica industrial",
    "WhatsApp Orza",
  ],
  path: "/contacto",
});

const channels = [
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    badge: "directo a operaciones",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Business",
    value: "Mensaje inmediato",
    href: WHATSAPP.getUrl(),
    badge: "respuesta < 1 h",
    external: true,
  },
  {
    icon: Mail,
    label: "Email corporativo",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    badge: null,
  },
];

export default function ContactoPage() {
  return (
    <>
      <TrustPageHero
        eyebrow="Hablemos de tu proyecto"
        title={
          <>
            Cotización formal en menos de{" "}
            <span className="text-accent-500">4 horas</span>.
          </>
        }
        description="Cuéntanos en qué estás trabajando y te respondemos con un alcance preliminar. NDA disponible al instante. Sin compromiso de tu lado."
        showPhone={false}
        trustItems={[
          { label: "NDA al instante" },
          { label: "Sin compromiso" },
          { label: "Cotización con desglose" },
        ]}
      />

      <section className="section-light pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <TrustContactForm source="contacto-page" />
          </div>

          {/* Side panel — direct channels */}
          <aside className="lg:col-span-5 space-y-4">
            <div className="trust-card-elevated p-6">
              <div className="badge-verified mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Empresa constituida · SAPI de CV
              </div>
              <h3 className="text-lg font-semibold text-navy-900">
                ¿Prefieres llamar o escribir directo?
              </h3>
              <p className="text-sm text-ink-500 mt-1">
                Estos canales van directo al equipo, no a un call center.
              </p>
              <div className="mt-5 space-y-3">
                {channels.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-trust-surface transition group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-trust-surface flex items-center justify-center shrink-0 group-hover:bg-navy-900 group-hover:text-white transition">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs uppercase tracking-wider text-ink-400 font-mono">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-navy-900 mt-0.5 group-hover:text-accent-500 transition truncate">
                          {c.value}
                        </div>
                        {c.badge && (
                          <div className="text-xs text-verified-500 mt-1 flex items-center gap-1">
                            <Check className="w-3 h-3" /> {c.badge}
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="trust-card p-6">
              <div className="text-xs font-mono text-ink-400 uppercase tracking-wider mb-3">
                Datos corporativos
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-ink-400 text-xs">Razón social</div>
                  <div className="text-navy-900 font-medium">
                    Orza Technologies SAPI de CV
                  </div>
                </div>
                <div>
                  <div className="text-ink-400 text-xs">RFC</div>
                  <div className="text-ink-400 italic">
                    [en proceso de constitución fiscal]
                  </div>
                </div>
                <div>
                  <div className="text-ink-400 text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> Ubicación
                  </div>
                  <div className="text-navy-900 font-medium">
                    {CONTACT.location}
                  </div>
                </div>
                <div>
                  <div className="text-ink-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" /> Horario de atención
                  </div>
                  <div className="text-navy-900 font-medium">
                    Lun–Vie · 9:00–19:00 CT
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
