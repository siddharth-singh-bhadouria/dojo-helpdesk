/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom colors
      colors: {
        primary: "#5c6ac4",
        secondary: "#850774",
        success: "#16a34a",
        warning: "#facc15",
      },

      // Add custom fonts
      fontFamily: {
        serif: ["Times New Roman", "Georgia", "serif"],
        mono: ["Consolas", "Menlo", "monospace"],
      },

      // Add custom screen
      screens: {
        "2xl": "1000px",
      },
    },
  },
  plugins: [],
};
