"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { X, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [slide, setSlide] = useState({ current: 0, prev: -1, direction: 0 });

  const images =
    project.images && project.images.length > 1
      ? project.images
      : [project.image];
  const isCarousel = images.length > 1;

  const goNext = () =>
    setSlide((s) => ({
      prev: s.current,
      current: (s.current + 1) % images.length,
      direction: 1,
    }));

  const goPrev = () =>
    setSlide((s) => ({
      prev: s.current,
      current: (s.current - 1 + images.length) % images.length,
      direction: -1,
    }));

  const goTo = (i: number) =>
    setSlide((s) =>
      i === s.current
        ? s
        : { prev: s.current, current: i, direction: i > s.current ? 1 : -1 }
    );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    // Lock scroll without layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    dialog.showModal();

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mounted, onClose, images.length]);

  if (!mounted) return null;

  const titleId = `modal-title-${project.slug}`;
  const descId = `modal-desc-${project.slug}`;

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-auto p-0 max-w-5xl w-[calc(100%-2rem)] bg-transparent outline-none"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* Custom backdrop for cross-browser blur */}
      <div
        className="fixed inset-0 -z-10 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-[#0a0a0b] border border-white/10 rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden modal-scale-in">
        {/* Image panel */}
        <div className="relative min-h-[220px] md:min-h-0 bg-black/20 overflow-hidden">
          {images.map((src, i) => {
            const isActive = i === slide.current;
            const isLeaving = i === slide.prev;

            let transform: string;
            let shouldAnimate: boolean;

            if (isActive) {
              transform = "translate-x-0";
              shouldAnimate = slide.direction !== 0;
            } else if (isLeaving) {
              transform = slide.direction === 1 ? "-translate-x-full" : "translate-x-full";
              shouldAnimate = true;
            } else {
              // Park offscreen on the incoming side (no animation)
              transform = "translate-x-full";
              shouldAnimate = false;
            }

            return (
              <Image
                key={src}
                src={src}
                alt={`${project.title} ${i + 1}`}
                fill
                className={[
                  "object-contain",
                  transform,
                  shouldAnimate
                    ? "transition-transform duration-400 ease-in-out motion-reduce:transition-none"
                    : "",
                  isActive || isLeaving ? "z-[1]" : "z-0",
                ].join(" ")}
              />
            );
          })}

          {isCarousel && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 transition-colors cursor-pointer"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="w-5 h-5 text-white/70" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 transition-colors cursor-pointer"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-5 h-5 text-white/70" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      i === slide.current ? "bg-blue-400" : "bg-white/30"
                    }`}
                    aria-label={`Ir a imagen ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content panel */}
        <div className="flex flex-col overflow-y-auto max-h-[60dvh] md:max-h-[80dvh]">
          <div className="p-6 md:p-8 flex-1">
            {/* Close button */}
            <button
              onClick={onClose}
              autoFocus
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 text-white/70" />
            </button>

            {/* Header */}
            <span className="text-xs font-mono text-blue-400">
              {project.subtitle}
            </span>
            <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-white mt-1 mb-3">
              {project.title}
            </h2>

            {/* Tags + duration */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.duration && (
                <span className="flex items-center gap-1 text-xs text-white/40">
                  <Clock className="w-3 h-3" />
                  {project.duration}
                </span>
              )}
            </div>

            {/* Description (always present) */}
            <p id={descId} className="text-white/60 mb-5">
              {project.description}
            </p>

            {/* Challenge */}
            {project.challenge && (
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Reto
                </h3>
                <p className="text-white/60 text-sm">{project.challenge}</p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-2">
                  Solucion
                </h3>
                <p className="text-white/60 text-sm">{project.solution}</p>
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div className="mb-5">
                <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
                  Resultados
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {project.results.map((r, i) => (
                    <div
                      key={i}
                      className="text-center p-3 bg-white/[0.03] rounded-lg border border-white/5"
                    >
                      <div className="text-lg md:text-xl font-bold gradient-text">
                        {r.value}
                      </div>
                      <div className="text-[11px] text-white/40 mt-1 leading-tight">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA footer */}
          <div className="p-6 md:px-8 md:pb-8 pt-0">
            <Link
              href="/contacto"
              className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Cotizar proyecto similar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </dialog>,
    document.body
  );
}
