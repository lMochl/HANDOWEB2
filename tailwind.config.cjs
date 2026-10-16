/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a2e56",
        deep: "#0c3a6b",
        teal: "#3d869c",
        muted: "#5a6b82",
        pale: "#f0f4f8",
        line: "#dde4ee",
      },
      fontFamily: {
        serif: ["Source Serif Pro", "Georgia", "serif"],
        sans: ["Manrope", "sans-serif"],
        display: ["Source Serif Pro", "Georgia", "serif"],
        body: ["Manrope", "sans-serif"],
        ui: ["Inter", "sans-serif"],
        editorial: ["DM Serif Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
