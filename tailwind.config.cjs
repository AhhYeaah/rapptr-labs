/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rapptr-black': '#0b131c',
        'rapptr-blue': '#3ec7f4'
      }
    },
  },
  plugins: [],
}
