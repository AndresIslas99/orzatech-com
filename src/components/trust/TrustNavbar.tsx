"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const navItems = [
  {
    label: "Soluciones",
    children: [
      { label: "Software & IA", href: "/software", desc: "Dashboards, telemetría, agentes de IA" },
      { label: "ORZA Pulse", href: "/pulse", desc: "Kiosko IA para distribuidoras eléctricas" },
    ],
  },
  { label: "Industria", href: "/industria" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export default function TrustNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-trust-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-md bg-navy-900 flex items-center justify-center text-white font-bold text-sm tracking-tight">
            O
          </div>
          <span className="font-semibold text-navy-900 tracking-tight text-base sm:text-lg">
            Orza <span className="hidden sm:inline">Technologies</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm text-ink-700 font-medium">
          {/* Soluciones with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-navy-900">
              Soluciones <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 pt-2 w-72">
                <div className="bg-white rounded-lg border border-trust-border shadow-lg overflow-hidden">
                  {navItems[0].children?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-trust-surface group"
                    >
                      <div className="font-medium text-navy-900 group-hover:text-accent-500">
                        {item.label}
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href="/industria" className="hover:text-navy-900">Industria</Link>
          <Link href="/proyectos" className="hover:text-navy-900">Proyectos</Link>
          <Link href="/contacto" className="hover:text-navy-900">Contacto</Link>
        </nav>

        {/* Right side: phone + CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-accent-500"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">{CONTACT.phoneDisplay}</span>
          </a>
          <Link href="/contacto" className="hidden sm:inline-flex btn-primary text-sm">
            <span className="hidden md:inline">Solicitar </span>cotización
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            className="lg:hidden p-2 -mr-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-trust-border">
          <nav className="px-6 py-5 flex flex-col gap-4 text-sm font-medium text-navy-900">
            <div className="text-xs uppercase tracking-widest text-ink-400">Soluciones</div>
            {navItems[0].children?.map((item) => (
              <Link key={item.href} href={item.href} className="pl-3 border-l-2 border-trust-border hover:border-accent-500">
                {item.label}
              </Link>
            ))}
            <div className="border-t border-trust-divider pt-4 mt-1 text-xs uppercase tracking-widest text-ink-400">Navegar</div>
            <Link href="/industria">Industria</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/contacto">Contacto</Link>
            <div className="border-t border-trust-divider pt-4 mt-1 flex flex-col gap-3">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}
              </a>
              <Link href="/contacto" className="btn-primary justify-center">
                Solicitar cotización <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
