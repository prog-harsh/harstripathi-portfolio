/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeInRight: "fadeInRight 0.6s ease-in",
        fadeInDown: "fadeInDown 0.6s ease-in",
        shake: "shake 0.6s ease-in"
      },

      keyframes: (theme) => ({
        fadeInRight: {
          "0%": { opacity: 0.3,
            transform: "translate3d(-20px, 0, 0)",
          },
          "100%": { opacity: 1,
            transform: "translate3d(0, 0, 0)", 
          },
        },
        fadeInDown: {
          "0%": { opacity: 0.2,
            transform: "translate3d(0, -20px, 0)",
          },
          "100%": { opacity: 1,
            transform: "translate3d(0, 0, 0)", 
          },
        },
        shake: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        }
      }),
    },
    colors: {
      ...colors,
      "green-light": "#DEF7E5",
    },
    fontFamily: {
      Roboto: ['"Roboto"', "sans-serif"],
      Rancho: ['"Rancho"', "cursive"],
    },
  },
  plugins: [require("daisyui")],
};
