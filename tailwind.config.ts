import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "big-desktop": { max: "87.499em" }, // 1400px
        laptop: { max: "80em" }, // 1280px
        "tab-land": { max: "74.999em" }, // 1200px
        "custom-1050": { max: "65.624em" }, // 1050px
        "tab-port": { max: "61.999em" }, // 992px
        "custom-915": { max: "57.187em" }, // 915px
        "custom-850": { max: "53.124em" }, // 850px
        "land-phone": { max: "47.999em" }, // 768px
        "custom-680": { max: "42.499em" }, // 680px
        "custom-640": { max: "40em" }, // 640px
        phone: { max: "35.999em" }, // 576px
        "custom-540": { max: "33.749em" }, // 540px
        "custom-390": { max: "24.374em" }, // 390px
      },

      colors: {
        "primary-purple": "#e9d0ff",
        "secondary-purple": "#9013fe",
        "tertiary-purple": "#f3eefb",
        "purple-bg1": "#fcf4fc",
        "purple-bg2": "#f4e7ff",
        "purple-bg3": "#faf5ff",
        "purple-bg4": "#E9D4FF",
        "purple-text": "#6D28D9",
        "purple-text2": "#A78BFA",
        "primary-white": "#f9fafb",
        "secondary-white": "#EDE9FE",
        "primary-gray": "#e2e8f0",
        "tertiary-white": "#e9ecef",
        "accent-white": "#d1d5db",
        "secondary-gray": "#cbd5e0",
        "tertiary-gray": "#d1d5db",
        "accent-gray": "#6c757d",
        "primary-blue": "#eef2ff",
        "facebook-blue": "rgb(24, 119, 242)",
        "secondary-black": "#111827",
        "primary-red": "#FF8687",
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
