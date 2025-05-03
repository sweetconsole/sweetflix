/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    color: {
      primary: "#bc4749",
      green: {
        DEFAULT: "#6a994e",
        500: "#a7c957"
      },
      black: "#386641",
      white: "#f2e8cf",
      transparent: colors.transparent,
      red: colors.red["500"]
    },
    extend: {
      zIndex: {
        1: "1"
      }
    },
  },
  plugins: [],
}