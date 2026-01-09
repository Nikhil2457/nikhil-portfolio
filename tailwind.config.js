module.exports = {
  darkMode: 'class',  // ← THIS IS REQUIRED for manual toggle
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f172a",
        card: "#111827",
        accent: "#38bdf8",
        'accent-hover': "#0ea5e9",
      },
    },
  },
  plugins: [],
};