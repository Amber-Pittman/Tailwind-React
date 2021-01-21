const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        fontFamily: {
          'comfortaa': ['Comfortaa', 'cursive'],
          'galada': ['Galada', 'cursive'],
          'montez': ['Montez', 'cursive'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          DEFAULT: '#fff',
          dark: '#f2f2f2'
        },
        red: {
          DEFAULT: '#cc0000',
          dark: 'red-800',
        },
        aqua: {
          DEFAULT: '#00cccc',
          dark: '#00ebff',
        },
        gold: {
          light: '#ffbf00',
          DEFAULT: '#e6b319',
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}