"useClient";

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
    <div className="flex flex-col bg-background shadow-md shadow-secondary rounded-lg p-4 max-w-sm">
      <h2 className="text-xl font-bold mt-2 text-secondary">{title}</h2>
      <p className="text-primary mt-1">{description}</p>
      <div className="">
        <h3 className="mt-2">{tags}</h3>
      </div>
      <div className="flex justify-between mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary underline">
          View Project
        </a>
      </div>
    </div>
  );
}
