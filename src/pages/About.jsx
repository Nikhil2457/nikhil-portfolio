// src/pages/About.jsx
import { motion } from "framer-motion";

export default function About() {
  const skills = {
    Programming: ["Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "Bootstrap", "React.js"],
    Backend: ["Node.js", "Express"],
    Databases: ["MongoDB", "SQLite"],
    "Cloud & Deployment": ["AWS", "Vercel", "Render"],
    "Tools & Others": [
      "Git",
      "Power BI",
      "Data Structures & Algorithms",
      "AI/ML",
      "UI Design",
    ],
  };

  return (
    <section className="min-h-screen pt-20 md:pt-24 px-6 max-w-5xl mx-auto pb-20">
      {/* About Me + Resume */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-accent">Me</span>
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            I'm a passionate React developer focused on building pixel-perfect, responsive, and accessible web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Skilled in modern frontend technologies with a strong emphasis on clean code, performance, and great user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            My Resume
          </h2>
          <iframe
            src="/resume.pdf"
            className="w-full h-96 rounded-lg border border-gray-300 dark:border-white/20"
            title="Resume"
            loading="lazy"
          />
          <div className="mt-6 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-accent hover:bg-accent-hover text-black font-medium px-8 py-3 rounded-lg transition"
            >
              Download Resume ↓
            </a>
          </div>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="space-y-10 md:space-y-12">
          <div className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Industry Ready Certification in Full-Stack Development
                </h3>
                <p className="text-lg text-accent mt-1">Nxtwave Disruptive Technologies</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">
                Sep 2022 – Ongoing
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  B.Tech in Artificial Intelligence and Data Science (CSE-AI-DS)
                </h3>
                <p className="text-lg text-accent mt-1">
                  B.V. Raju Institute of Technology, Narsapur, Medak
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  2022 – 2026
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  CGPA: 7.9
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Intermediate (MPC)
                </h3>
                <p className="text-lg text-accent mt-1">Sri Chaitanya College, Hyderabad</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  2020 – 2022
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Percentage: 91.4%
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-card/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-accent">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}