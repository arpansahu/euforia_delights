/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DFA5A5",
        secondary: "#A56ADF",
        dark: "#444444"
      },
      fontFamily: {
        script: ["Great Vibes", "cursive"],
        sans: ["Open Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
