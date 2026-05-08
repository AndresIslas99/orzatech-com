import { XCircle, CheckCircle } from "lucide-react";
import { ProblemSolution } from "@/types";

export default function TrustProblemList({
  items,
}: {
  items: ProblemSolution[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.problem}
          className="trust-card grid md:grid-cols-2 gap-4 p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <XCircle className="w-5 h-5 text-critical-500 shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-ink-500 leading-relaxed">
              {item.problem}
            </p>
          </div>
          <div className="flex items-start gap-3 md:border-l md:border-trust-divider md:pl-4">
            <CheckCircle className="w-5 h-5 text-verified-500 shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-navy-900 font-medium leading-relaxed">
              {item.solution}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
