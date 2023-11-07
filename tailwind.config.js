/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1170px",
        sm: "480px",
        md: "768px",
        lg: "976px",
      },
      colors: {
        "bg-header-list": "#4D46FA",
        "white-rbga": "rgba(255,255,255, 0.5)",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      height: {
        "h-header": 80,
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
