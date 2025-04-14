import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border rounded-lg p-6 hover:shadow-lg transition">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="mt-4 flex gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
