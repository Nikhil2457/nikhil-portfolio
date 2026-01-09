// pages/Contact.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // 1. Send message to you
      await emailjs.sendForm(
        "service_a8fb2bk",
        "template_2kb6oe9",           // Contact Us template (to you)
        form.current,
        "QHQVQi4dovVhaoTDD"
      );

      // 2. Send auto-reply to visitor
      await emailjs.sendForm(
        "service_a8fb2bk",
        "template_hsq5bv1",           // Auto-reply template (to visitor)
        form.current,
        "QHQVQi4dovVhaoTDD"
      );

      setStatus("success");
      form.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide status after 6 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="min-h-screen pt-20 md:pt-24 px-6 max-w-5xl mx-auto pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Get In <span className="text-accent">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, freelance work, or just having a chat about tech!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info with all details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Email */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-accent/20 rounded-xl flex-shrink-0">
              <Mail className="text-accent" size={28} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Email</p>
              <a
                href="mailto:nikhiljagatkari@gmail.com"
                className="text-xl text-gray-900 dark:text-white hover:text-accent transition"
              >
                nikhiljagatkari@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-accent/20 rounded-xl flex-shrink-0">
              <Phone className="text-accent" size={28} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Phone</p>
              <a
                href="tel:+917569382457"
                className="text-xl text-gray-900 dark:text-white hover:text-accent transition"
              >
                +91 75693 82457
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-accent/20 rounded-xl flex-shrink-0">
              <Linkedin className="text-accent" size={28} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">LinkedIn</p>
              <a
                href="https://linkedin.com/in/nikhil-jagatkari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-900 dark:text-white hover:text-accent transition"
              >
                linkedin.com/in/nikhil-jagatkari
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-accent/20 rounded-xl flex-shrink-0">
              <Github className="text-accent" size={28} />
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">GitHub</p>
              <a
                href="https://github.com/Nikhil2457"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-900 dark:text-white hover:text-accent transition"
              >
                github.com/Nikhil2457
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-card/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Send a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-white/20 rounded-lg focus:border-accent focus:outline-none transition text-gray-900 dark:text-white placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-white/20 rounded-lg focus:border-accent focus:outline-none transition text-gray-900 dark:text-white placeholder-gray-500"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-white/20 rounded-lg focus:border-accent focus:outline-none transition resize-none text-gray-900 dark:text-white placeholder-gray-500"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-accent hover:bg-accent-hover text-black font-medium py-4 rounded-lg transition flex items-center justify-center gap-3 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              <Send size={20} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mt-6 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 animate-fade-in">
              <CheckCircle size={20} />
              <p>Message sent successfully! Thank you ✉️</p>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 flex items-center justify-center gap-2 text-red-600 dark:text-red-400 animate-fade-in">
              <AlertCircle size={20} />
              <p>Something went wrong. Please try again later.</p>
            </div>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
            Your message will be sent directly to my inbox
          </p>
        </motion.div>
      </div>
    </section>
  );
}