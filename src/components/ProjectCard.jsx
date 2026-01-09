// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  if (!project) {
    return (
      <motion.div
        className="bg-red-500/10 dark:bg-red-900/20 rounded-2xl border border-red-500/50 p-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p className="text-red-400">Error: Project data missing</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-2xl 
                 border border-gray-200 dark:border-white/10 
                 hover:border-accent/50 dark:hover:border-accent/50 
                 hover:shadow-2xl hover:shadow-accent/20 
                 transition-all duration-500 flex flex-col h-full"
    >
      {/* Project Preview Area */}
      <div className="bg-gray-100 dark:bg-gray-800/50 border-b border-gray-200 dark:border-white/10 rounded-t-2xl h-48 flex items-center justify-center">
       
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
    
      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title || "Untitled Project"}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
          {project.description || "No description available."}
        </p>

        <p className="text-accent font-medium mb-6">
          {project.tech || "Tech stack not specified"}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mt-auto">
          <Link
            to={`/projects/${project.id}`}
            className="text-accent hover:underline font-medium flex items-center gap-1"
          >
            View Details →
          </Link>

          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent flex items-center gap-1 transition"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}

          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-accent flex items-center gap-1 transition"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}