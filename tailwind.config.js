/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{jsx,tsx}",
    "./components/**/*.{jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-exo2)", "sans-serif"]
    },
    extend: {
      fontFamily:{
        orbitron: ["var(--font-orbitron)", "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}

