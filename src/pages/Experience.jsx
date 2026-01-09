// src/pages/Experience.jsx
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "InnovKaro Solution LLP",
    companyWebsite: "https://innov-karo.vercel.app/", // ← Added your link here!
    role: "Web Developer Intern (Remote)",
    duration: "Sep 2025 – Dec 2025",
    location: "Bangalore, Karnataka",
    certificateLink: "https://drive.google.com/file/d/19z08JjZEHWlygoYvTcCt7KDMcEUONMT9/view", // Replace with real link when available
    achievements: [
      "Developed and deployed responsive web pages improving load time and user engagement.",
      "Collaborated on frontend modules using Next.js and optimized UI/UX for performance.",
      "Integrated backend REST APIs with frontend components ensuring smooth data flow.",
    ],
  },
  // Add more experiences here in the future
];

export default function Experience() {
  return (
    <section className="min-h-screen pt-20 md:pt-24 px-6 max-w-5xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Work <span className="text-accent">Experience</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
          My professional journey and internships where I applied React skills in real-world projects.
        </p>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {exp.role}
                </h2>
                <div className="flex items-center gap-3 mt-1">
                  <p className="text-xl text-accent">{exp.company}</p>
                  {exp.companyWebsite && (
                    <a
                      href={exp.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-gray-400 hover:text-accent transition flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Website
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-3 md:mt-0 text-right">
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.duration}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.location}
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {exp.achievements.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {exp.certificateLink && exp.certificateLink !== "#" && (
              <div className="mt-8">
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
                >
                  View Certificate →
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
        More exciting opportunities coming soon...
      </div>
    </section>
  );
}