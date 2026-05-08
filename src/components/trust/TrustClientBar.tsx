import Image from "next/image";
import { clients } from "@/data/clients";

export default function TrustClientBar() {
  return (
    <section className="section-surface py-10 border-y border-trust-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center text-xs font-mono text-ink-400 uppercase tracking-widest mb-6">
          Confiados por empresas que producen 24/7
        </div>
        <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap">
          {clients.map((c) => (
            <div
              key={c.name}
              className="h-10 flex items-center grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={40}
                className="object-contain max-h-10 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
