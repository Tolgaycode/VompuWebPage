/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        headerColor: "#515BB8",
        homeColor: "#5661C6",
        textBlack: "#1B1B1E",
      },
      letterSpacing: {
        widestx2: ".25em",
      },
      spacing: {
        pageFull: "56rem",
      },
    },
  },
  plugins: [],
};
