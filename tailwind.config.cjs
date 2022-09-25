/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'slussen'
    },
    colors: {
      primary: "#FF98A2",
      white: "#EFEFEF",
      grey: "#B0B0B0",
      black: "#000000",
    },
  },
  plugins: [],
}