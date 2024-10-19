/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#0a192f",
        light: "#e3e3e8",
        accent: "#64ffda",
      },
      textColor: {
        light: "#e3e3e8",
        dark: "#0a192f",
        accent: "#64ffda",
      },
    },
  },
  plugins: [],
};
