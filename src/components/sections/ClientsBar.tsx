import { clients } from "@/data/clients";
import ClientLogo from "@/components/ui/ClientLogo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientsBar() {
  return (
    <section className="py-16 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <ScrollReveal>
            <p className="text-white/40 text-sm font-mono mb-6">EMPRESAS QUE CONFIAN EN NOSOTROS</p>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {clients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 75}>
                <ClientLogo client={client} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
