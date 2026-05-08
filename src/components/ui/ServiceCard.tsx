"use client";

import Image from "next/image";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function ServiceCard({ service, isActive, onMouseEnter, onMouseLeave }: ServiceCardProps) {
  return (
    <div
      className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-blue-600/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          : "glass-card"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-start gap-6">
        <div className="icon-glow w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center p-3">
          <Image
            src={service.icon}
            alt={service.title}
            width={128}
            height={128}
            className="icon-blend object-contain w-full h-full drop-shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <span className="text-xs font-mono text-white/40 px-2 py-1 bg-white/5 rounded">
              {service.subtitle}
            </span>
          </div>
          <p className="text-white/60 mb-3">{service.description}</p>
          <p className="text-blue-400/80 text-sm mb-4 italic">{service.benefit}</p>
          <div className="flex flex-wrap gap-2">
            {service.specs.map((spec, i) => (
              <span
                key={i}
                className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-white/70"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
