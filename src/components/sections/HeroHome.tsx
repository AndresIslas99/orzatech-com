"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IMAGES } from "@/lib/constants";

export default function HeroHome() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/70 font-mono">Sistemas operando en MX, US, LATAM</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            Primero los
            <br />
            <span className="gradient-text">datos.</span>
            <br />
            Despues los
            <br />
            robots.
          </h1>

          <p className="text-lg text-white/60 max-w-xl">
            Implementamos software de visibilidad operativa, IA y automatizacion fisica para industrias en MX, US y LATAM.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link
              href="/pulse"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all hover:scale-105 text-center"
            >
              Conoce ORZA Pulse
            </Link>
            <Link
              href="/software"
              className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full text-lg font-semibold transition-all hover:bg-white/5 text-center"
            >
              Software & IA
            </Link>
            <Link
              href="/industria"
              className="px-8 py-4 text-white/60 hover:text-white rounded-full text-lg font-semibold transition-all text-center"
            >
              Aut. Industrial
            </Link>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden glow-blue">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/projects/robotic-arm-poster.jpg"
              className="w-full h-auto"
            >
              <source src={IMAGES.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm font-mono text-white/70">Digital Twin &bull; Isaac Sim &bull; ROS2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
