// pages/ProjectDetails.jsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-400">Project not found 😔</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24 px-6 max-w-5xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition mb-8"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Hero */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-400 mb-3">Built with</h3>
          <p className="text-accent text-lg font-medium">{project.tech}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 mb-16">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-black font-medium px-8 py-4 rounded-lg transition transform hover:scale-105"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-accent hover:text-accent px-8 py-4 rounded-lg transition"
            >
              <Github size={20} />
              View Code
            </a>
          )}
        </div>

        {/* Placeholder for Screenshots / Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/50 border border-white/10 rounded-2xl h-64 flex items-center justify-center">
            <img src={project.ss1} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="bg-card/50 border border-white/10 rounded-2xl h-64 flex items-center justify-center">
            <img src={project.ss2} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Optional: Add Features, Challenges, Learnings */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                User authentication with JWT
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                Responsive design across devices
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">•</span>
                REST API integration
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">What I Learned</h3>
            <p className="text-gray-300 leading-relaxed">
              Deepened understanding of state management, secure authentication flows, and optimizing performance in React applications.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}