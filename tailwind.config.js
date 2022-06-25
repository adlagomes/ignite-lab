/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)'
      },
      fontFamily: {
        sans: "Anek Latin, sans-serif",
      },
      colors: {
        green: {
          300: "#A4FC6E",
        },
        purple: {
          200: "#947FD0",
          500: "#735BB8",
          600: "#5336A5",
          700: "#384D7B",
        },
        orange: {
          500: "#FCA311",
        },
        red: {
          500: "#DA242E",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
};
