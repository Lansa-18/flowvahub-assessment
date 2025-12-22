/** @type {import('tailwindcss').Config} */
export default {
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
        "primary-blue": "#eef2ff",
      },
    },
  },
  plugins: [],
};
