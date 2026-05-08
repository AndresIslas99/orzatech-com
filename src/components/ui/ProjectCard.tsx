"use client";

import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300">
          <span className="text-white/0 group-hover:text-white text-sm font-medium tracking-wide transition-all duration-300">
            Ver proyecto
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-mono text-blue-400">{project.subtitle}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
        <p className="text-white/50 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
