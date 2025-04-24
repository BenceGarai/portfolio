"use client";
import JourneyCard from "./journey-card";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex p-40 min-h-screen items-center justify-center bg-background text-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-7xl mx-auto">
        <h1 className="font-bold text-5xl text-center mb-12">
          My <span className="text-secondary">Journey</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold pl-7">Experience</h3>
            </div>

            <div className="relative pl-7 border-l-3 border-secondary/30">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative pb-5 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute top-0 -left-10 w-5 h-5 bg-secondary rounded-full border-2 border-background" />

                  {/* Card component */}
                  <JourneyCard journey={exp} />
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-3xl font-bold pl-7">Education</h3>
            </div>

            <div className="relative pl-7 border-l-3 border-secondary/30">
              {education.map((edu) => (
                <div key={edu.title} className="relative pb-5 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute top-0 -left-10 w-5 h-5 bg-secondary rounded-full border-2 border-background" />

                  {/* Card component */}
                  <JourneyCard journey={edu} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
