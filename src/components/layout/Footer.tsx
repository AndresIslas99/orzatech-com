import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { IMAGES, CONTACT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={IMAGES.logo}
                alt="Orza Tech"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold">ORZA Technologies</span>
            </Link>
            <p className="text-sm text-white/40">
              Software industrial, IA y automatizacion para empresas en MX, US y LATAM.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white/70">Navegacion</span>
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white/70">Contacto</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {CONTACT.phoneDisplay}
            </a>
            <span className="text-sm text-white/50">{CONTACT.location}</span>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Orza Technologies. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
