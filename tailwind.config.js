/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./kjn.ac.th/**/*.{html,js}"],
  theme: {
    screens: {
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
  },
    extend: {
    },
  },
  plugins: [],
}

