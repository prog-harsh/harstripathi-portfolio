/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors:{
      ...colors,
      "green-light": "#DEF7E5"
    },
    fontFamily: {
      "Roboto": ['"Roboto"', 'sans-serif'],
      "Rancho": ['"Rancho"', 'cursive']
    }
  },
  plugins: [require("daisyui")],
}

