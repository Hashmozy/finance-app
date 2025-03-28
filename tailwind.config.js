/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1A",
        gray: "#242424",
        white: "#FCFCFC",
        tintColor: "#723FEB",
        blue: "#97E0F7",
      },
      fontFamily: {
        thin: ["Montserrat-Thin", "sans-serif"],
        light: ["Montserrat-Light", "sans-serif"],
        regular: ["Montserrat-Regular", "sans-serif"],
        medium: ["Montserrat-Medium", "sans-serif"],
        semibold: ["Montserrat-SemiBold", "sans-serif"],
        bold: ["Montserrat-Bold", "sans-serif"],
        extrabold: ["Montserrat-ExtraBold", "sans-serif"],
        italic: ["Montserrat-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
