import type { Project } from "../data/projects";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const { title, description, stack, demo, code, image } = project;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Демо
            </a>
          )}
          {code && (
            <a 
              href={code} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
              Код
            </a>
          )}
        </div>
      </div>
    </div>
  );
};