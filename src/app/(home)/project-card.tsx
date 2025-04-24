"useClient";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
  imageAlt: string;
}

interface ProjectProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectProps) {
  const { title, description, tags, link, imageUrl, imageAlt } = project;
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="group flex flex-col max-w-sm shadow-xl p-4 rounded-xl bg-foreground">
      <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
        <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
      </div>
      <h2 className="text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
        {title}
      </h2>
      <p className="text-primary mb-4 line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-secondary text-background text-sm font-semibold px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline">
          View Project ↗
        </a>
      </div>
    </motion.div>
  );
}
