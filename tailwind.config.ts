import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#e9d0ff",
        "secondary-purple": "#9013fe",
        "tertiary-purple": "#f3eefb",
        "primary-white": "#f9fafb",
        "primary-gray": "#e2e8f0",
        "secondary-gray": "#cbd5e0",
        "tertiary-gray": "#d1d5db",
        "primary-blue": "#eef2ff",
      },
      backgroundImage: {
        "purple-blue-gradient": "linear-gradient(135deg, #9013fe, #70d6ff)",
        "purple-red-gradient": "linear-gradient(45deg,#9013fe,#ff8687)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
