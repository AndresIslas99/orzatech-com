"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setSelectedProject(null);
  }, [pathname]);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={i * 60}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </ScrollReveal>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
