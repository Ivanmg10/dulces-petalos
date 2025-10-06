/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {},
      fontWeight: {},
      boxShadow: {
        "article-card-5": "0px 4px 4px rgba(12, 12, 13, 0.05)",
        "article-card-10": "0px 4px 4px rgba(12, 12, 13, 0.10)",
      },
    },
  },
  plugins: [],
};
