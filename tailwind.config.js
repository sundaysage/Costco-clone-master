/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#0074cc",
          550: "#0060a9",
          650: "#0073a6",
        },
      },
    },
  },
  plugins: [],
};
