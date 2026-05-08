"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroVerticalProps {
  tag: string;
  title: string;
  highlight: string;
  subtitle?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroVertical({
  tag,
  title,
  highlight,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
}: HeroVerticalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
      <div
        className={`max-w-4xl mx-auto px-6 py-20 text-center relative z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-sm text-white/70 font-mono">{tag}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
          {title} <span className="gradient-text">{highlight}</span>
          {subtitle && (
            <>
              <br />
              <span className="text-white/80">{subtitle}</span>
            </>
          )}
        </h1>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105 text-center"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full text-lg font-semibold transition-all hover:bg-white/5 text-center"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
