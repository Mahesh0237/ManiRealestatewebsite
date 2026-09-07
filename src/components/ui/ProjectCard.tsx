import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image w-full h-full object-cover"
        loading="lazy"
      />
      <div className="project-card-overlay absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/40 to-transparent flex flex-col justify-end p-6">
        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-primary)] mb-2">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
          View Project
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
