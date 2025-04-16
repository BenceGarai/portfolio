import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl text-center mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
