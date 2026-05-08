"use client";

import { useEffect, useRef } from "react";

// Singleton IntersectionObserver — lazy-init to avoid SSR crash
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
            observer!.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
  }
  return observer;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, delay, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const obs = getObserver();
    obs.observe(el);

    return () => {
      obs.unobserve(el);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`scroll-reveal${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
