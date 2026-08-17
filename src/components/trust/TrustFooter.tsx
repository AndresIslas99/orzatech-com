import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { CONTACT, WHATSAPP, IMAGES, PULSE } from "@/lib/constants";

export default function TrustFooter() {
  return (
    <footer className="section-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid md:grid-cols-12 gap-10">
        {/* Brand + razón social */}
        <div className="md:col-span-5">
          <Link href="/" className="flex items-center gap-3 mb-5" aria-label="Orza Technologies — inicio">
            <div className="w-11 h-11 rounded-md bg-white p-1.5 flex items-center justify-center">
              <Image
                src={IMAGES.logo}
                alt="Orza Technologies"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-semibold text-white text-lg">Orza Technologies</div>
          </Link>
          <p className="text-sm text-navy-100 max-w-md leading-relaxed">
            Soluciones de automatización industrial, robótica y software
            operativo para empresas que producen 24/7 en México, Estados
            Unidos y Latinoamérica.
          </p>
          <div className="mt-6 space-y-2 text-sm text-navy-100">
            <div>
              <span className="text-navy-300">Razón social:</span>{" "}
              <span className="text-white">Orza Technologies SAPI de CV</span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <MapPin className="w-4 h-4 text-navy-300" />
              {CONTACT.location}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-navy-300 mb-4">
            Contacto directo
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-white hover:text-accent-300 transition"
              >
                <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP.getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-accent-300 transition"
              >
                <MessageCircle className="w-4 h-4 text-verified-500" />
                WhatsApp Business
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-white hover:text-accent-300 transition"
              >
                <Mail className="w-4 h-4" /> {CONTACT.email}
              </a>
            </li>
            <li className="text-navy-300 text-xs pt-3">
              Atención: Lun–Vie 9:00–19:00 CT
            </li>
          </ul>
        </div>

        {/* Soluciones */}
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-navy-300 mb-4">
            Soluciones
          </div>
          <ul className="space-y-2.5 text-sm text-navy-100">
            <li><Link href="/industria" className="hover:text-white transition">Automatización industrial</Link></li>
            <li><Link href="/industria" className="hover:text-white transition">Robótica</Link></li>
            <li><Link href="/software" className="hover:text-white transition">Software & IA</Link></li>
            <li><Link href={PULSE.url} className="hover:text-white transition">ORZA Pulse</Link></li>
          </ul>
        </div>

        {/* Compañía */}
        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-widest text-navy-300 mb-4">
            Compañía
          </div>
          <ul className="space-y-2.5 text-sm text-navy-100">
            <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="/proyectos" className="hover:text-white transition">Casos de éxito</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
            <li>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-1 text-accent-300 hover:text-accent-100 transition font-medium pt-1"
              >
                Solicitar cotización <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-navy-300">
          <div>© 2026 Orza Technologies SAPI de CV. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a className="hover:text-white transition">Aviso de privacidad</a>
            <a className="hover:text-white transition">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
