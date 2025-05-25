import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex space-x-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="px-3 py-1 text-xs font-medium bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full capitalize">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};