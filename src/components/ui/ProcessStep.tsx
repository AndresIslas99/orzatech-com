import { ProcessStep as ProcessStepType } from "@/types";

interface ProcessStepProps {
  step: ProcessStepType;
  isLast: boolean;
}

export default function ProcessStep({ step, isLast }: ProcessStepProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 font-bold text-lg shrink-0">
          {step.step}
        </div>
        {!isLast && <div className="w-px h-full bg-white/10 mt-2" />}
      </div>
      <div className="pb-10">
        <h3 className="text-xl font-bold mb-1">{step.title}</h3>
        <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded mb-3 inline-block">
          {step.duration}
        </span>
        <p className="text-white/60">{step.description}</p>
      </div>
    </div>
  );
}
