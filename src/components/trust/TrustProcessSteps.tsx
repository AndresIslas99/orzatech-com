import { ProcessStep } from "@/types";

export default function TrustProcessSteps({
  steps,
}: {
  steps: ProcessStep[];
}) {
  return (
    <ol className="relative space-y-0">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step.step} className="flex gap-5 md:gap-7 pb-10 last:pb-0 relative">
            {!isLast && (
              <div className="absolute left-[19px] md:left-[23px] top-12 bottom-0 w-px bg-trust-border" />
            )}
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-900 text-white font-semibold text-base md:text-lg flex items-center justify-center relative z-10">
              {step.step}
            </div>
            <div className="flex-1 pt-1.5">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-navy-900 tracking-tight">
                  {step.title}
                </h3>
                {step.duration && (
                  <span className="badge-neutral">{step.duration}</span>
                )}
              </div>
              <p className="text-sm md:text-base text-ink-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
