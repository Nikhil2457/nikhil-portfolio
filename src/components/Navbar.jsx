// components/Navbar.jsx
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-bg/80 border-b border-gray-200 dark:border-white/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-5 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-accent">Nikhil</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-accent transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-accent transition">
            About
          </Link>
          <Link to="/experience" className="text-gray-800 dark:text-white hover:text-accent transition">
            Experience
          </Link>
          <Link to="/projects" className="text-gray-800 dark:text-white hover:text-accent transition">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-800 dark:text-white hover:text-accent transition">
            Contact
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-bg/95 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-800 dark:text-white hover:text-accent transition">
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-800 dark:text-white hover:text-accent transition">
              About
            </Link>
            <Link to="/experience" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-800 dark:text-white hover:text-accent transition">
              Experience
            </Link>
            <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-800 dark:text-white hover:text-accent transition">
              Projects
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-800 dark:text-white hover:text-accent transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}