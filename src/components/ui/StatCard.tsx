import { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <div className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-colors">
      <div className="text-4xl md:text-5xl font-black gradient-text">{stat.value}</div>
      <div className="text-white/70 mt-2 font-medium">{stat.label}</div>
      <div className="text-white/40 text-sm mt-1">{stat.description}</div>
    </div>
  );
}
