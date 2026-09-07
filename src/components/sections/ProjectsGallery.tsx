import { PROJECTS } from '../../data/content';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function ProjectsGallery() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50" id="projects-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED WORK"
          heading="Spaces designed to inspire."
          description="A showcase of our finest projects across residential, commercial, and interior design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
