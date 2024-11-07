import colors, { yellow } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        eyaj: "url('/src/assets/eyaj (3).webp')",
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        purpleE: "#552472",
        redE: "rgb(197,24,39,1)",
        yellowE: "rgb(238,170,23,1)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
