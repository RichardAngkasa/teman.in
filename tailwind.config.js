/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#373C3C",
        secondary: "#616666",
        accent: "#E8E8E8",
      },
      fontFamily: {
        Quicksand: "Quicksand",
        Yantra: "Yantramanav",
        TEST: ["TEST", "sans-serif"],
      },
    },
  },

  plugins: [],
};
