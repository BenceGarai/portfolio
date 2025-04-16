"useClient";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
      className="group flex flex-col bg-background border border-border rounded-lg p-6 max-w-sm hover:shadow-lg transition-all duration-300 hover:border-secondary">
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
          View Project
        </a>
      </div>
    </motion.div>
  );
}
