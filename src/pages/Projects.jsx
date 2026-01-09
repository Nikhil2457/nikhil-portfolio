// pages/Projects.jsx
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="min-h-screen pt-24 px-6 md:px-10 max-w-7xl mx-auto pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-accent">Projects</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Here are some of the projects I've built. Each one challenged me to grow as a developer while solving real-world problems with clean, efficient code.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Optional: Empty State (if no projects) */}
      {projects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">More projects coming soon... 🚀</p>
        </div>
      )}
    </section>
  );
}