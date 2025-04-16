"use client";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-4xl text-center mb-12">Projects</h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, y: -20 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
