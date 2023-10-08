/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        myOrange: "#FFB342",
        myBlue: "#1C2752",
        myGray: "#7E7E7E",
        myWhite: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
