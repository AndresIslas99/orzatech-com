import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { partners } from "@/data/partners";

export default function TrustPartnersBar() {
  return (
    <section className="section-surface py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="eyebrow-light mb-3">Partners certificados</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
            Trabajamos con los fabricantes
            <br className="hidden md:block" />{" "}
            que tu equipo ya conoce.
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center text-center group">
              <div className="h-14 flex items-center justify-center w-full opacity-80 group-hover:opacity-100 transition">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={120}
                  height={56}
                  className="object-contain max-h-12 w-auto"
                />
              </div>
              <div className="mt-3 text-xs font-medium text-navy-900">{p.name}</div>
              {p.certified && (
                <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-verified-500">
                  <ShieldCheck className="w-3 h-3" /> certificado
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
