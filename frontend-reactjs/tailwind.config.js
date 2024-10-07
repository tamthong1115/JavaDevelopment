/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { //class mo rong
      colors: {
        primary: "#4318FF",
        dark: "#1B2559",
        light: "#68769F",
      },
    },
  },
  plugins: [],
}

