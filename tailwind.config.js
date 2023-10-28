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
        menuText: "#A0A09F",
      },
      letterSpacing: {
        widestx2: ".25em",
      },
      spacing: {
        pageFull: "58rem",
        120: "120%",
        87: "87%",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
