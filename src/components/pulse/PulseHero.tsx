"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  pulseHeroBadge,
  pulseHeroTitle,
  pulseHeroDescription,
  pulseHeroMetrics,
  pulseHeroChatUser,
  pulseHeroChatAI,
} from "@/data/pulse";

const metricPositions = [
  "top-0 right-0 lg:-top-2 lg:-right-5",
  "bottom-10 left-0 lg:bottom-10 lg:-left-8",
  "top-1/3 right-0 lg:top-1/3 lg:-right-9",
];

const colorMap = {
  blue: "bg-blue-600/15",
  cyan: "bg-cyan-400/15",
  green: "bg-green-500/15",
} as const;

export default function PulseHero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const base = "transition-all duration-1000";
  const show = loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0b] via-[#0f1729] to-[#0a0a0b]" />

      {/* Floating orbs */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] animate-[pulse-orb-float_12s_ease-in-out_infinite]" />
      <div className="absolute -bottom-12 left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-400/5 blur-[100px] animate-[pulse-orb-float_12s_ease-in-out_infinite_-4s]" />
      <div className="absolute top-[40%] right-[30%] w-[250px] h-[250px] rounded-full bg-blue-600/8 blur-[100px] animate-[pulse-orb-float_12s_ease-in-out_infinite_-8s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text side */}
        <div>
          <div className={`${base} ${show} inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/30 rounded-full px-4 py-1.5 text-xs text-blue-400 font-medium mb-7`}>
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            {pulseHeroBadge}
          </div>

          <h1 className={`${base} delay-100 ${show} text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-6`}>
            {pulseHeroTitle.line1}
            <br />
            <span className="gradient-text">{pulseHeroTitle.highlight}</span>
            <br />
            {pulseHeroTitle.line3}
          </h1>

          <p className={`${base} delay-200 ${show} text-lg text-white/60 leading-relaxed max-w-lg mb-10 font-light`}>
            {pulseHeroDescription}
          </p>

          <div className={`${base} delay-300 ${show} flex flex-col sm:flex-row gap-4`}>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-3.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              Solicitar Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2.5 border border-white/10 text-white px-7 py-3.5 rounded-lg font-medium hover:border-blue-600 hover:bg-blue-600/5 transition-all duration-300"
            >
              Cómo Funciona
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>

        {/* Kiosk mockup */}
        <div className={`${base} delay-500 ${show} relative max-w-md mx-auto w-full`}>
          {/* Floating metrics */}
          {pulseHeroMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`absolute ${metricPositions[i]} hidden lg:flex items-center gap-2 bg-[#141416] border border-white/[0.06] rounded-xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-20 animate-[pulse-float_6s_ease-in-out_infinite] text-xs`}
              style={{ animationDelay: `${-i * 2}s` }}
            >
              <div className={`w-7 h-7 rounded-lg ${colorMap[m.color]} flex items-center justify-center`}>
                {m.icon}
              </div>
              <div>
                <div className="font-bold text-sm text-white">{m.value}</div>
                <div className="text-white/40 font-mono text-[0.65rem]">{m.label}</div>
              </div>
            </div>
          ))}

          {/* Kiosk frame */}
          <div className="relative bg-[#141416] border border-white/[0.06] rounded-2xl p-6 shadow-[0_0_60px_rgba(37,99,235,0.15)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

            {/* Header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-lg">
                🤖
              </div>
              <div>
                <h4 className="text-sm font-semibold">ORZA Pulse Assistant</h4>
                <p className="text-[0.7rem] text-white/40 font-mono">v2.4 · En línea</p>
              </div>
            </div>

            {/* Chat bubbles */}
            <div className="flex flex-col gap-3">
              <div className="self-end max-w-[85%] bg-blue-600/12 border border-blue-600/30 rounded-xl px-4 py-3 text-sm leading-relaxed text-blue-400">
                {pulseHeroChatUser}
              </div>
              <div className="self-start max-w-[85%] bg-[#111113] border border-white/[0.06] rounded-xl px-4 py-3 text-sm leading-relaxed text-white/60">
                {pulseHeroChatAI.text}
                <br /><br />
                {pulseHeroChatAI.highlights.map((h) => (
                  <span key={h} className="block text-cyan-400 font-medium font-mono text-[0.78rem]">
                    {h}
                  </span>
                ))}
                <br />
                {pulseHeroChatAI.note} Tenemos{" "}
                <strong className="text-green-400">{pulseHeroChatAI.stock}</strong> en stock.
                <div className="mt-2 inline-flex items-center gap-1 bg-cyan-400/10 border border-cyan-400/20 rounded px-2 py-0.5 font-mono text-[0.68rem] text-cyan-400">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5l-7 7L3 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  {pulseHeroChatAI.validation}
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-4 flex gap-2 items-center">
              <div className="flex-1 bg-[#0a0a0b] border border-white/[0.06] rounded-xl px-3.5 py-2.5 text-white/40 text-[0.78rem]">
                Describe tu requerimiento o habla...
              </div>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v0a3 3 0 013 3v3a3 3 0 01-6 0V4a3 3 0 013-3zM13 7a5 5 0 01-10 0M8 13v2m-2 0h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="absolute inset-[-3px] rounded-[13px] border-[1.5px] border-blue-600/40 animate-[pulse-dot_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
