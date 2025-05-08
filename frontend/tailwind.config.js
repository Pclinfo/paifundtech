/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'custom-md': '1030px', // Custom breakpoint
      'lg': '1250px',
      'xl': '1440px',
      '2xl': '1680px',
    },
    extend: {},
  },
  plugins: [],
}