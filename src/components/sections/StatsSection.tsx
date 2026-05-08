import { stats } from "@/data/stats";
import StatCard from "@/components/ui/StatCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionHeader
            tag="RESULTADOS"
            title="Metricas que"
            highlight="importan"
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 75}>
              <StatCard stat={stat} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
