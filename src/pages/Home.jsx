// pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-accent">Nikhil</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl"
        >
          React Developer | Building clean, performant, and user-focused web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
        >
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-block bg-accent hover:bg-accent-hover text-black font-medium px-8 py-4 rounded-lg transition transform hover:scale-105 text-center"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block border border-gray-400 dark:border-white/50 hover:border-accent px-8 py-4 rounded-lg transition text-gray-900 dark:text-white text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}