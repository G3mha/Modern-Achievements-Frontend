/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        "primary": "#BFFF84",
        "secondary": "#FF1F6E",
        "tertiary": "#BCB6FF",
      }
    },
  },
  plugins: [],
}