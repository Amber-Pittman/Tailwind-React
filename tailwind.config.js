const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      screens: {
        xs: '420px',
        sm: '500px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      extend: {
        fontFamily: {
          'comfortaa': ['Comfortaa', 'cursive'],
          'galada': ['Galada', 'cursive'],
          'montez': ['Montez', 'cursive'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          '10xl': '10rem',
          '12xl': '12rem',
          '14xl': '14rem',
          '16xl': '16rem',
          '18xl': '18rem',
        }
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
          dark: '#b30000',
        },
        aqua: {
          DEFAULT: '#00cccc',
          dark: '#00ebff',
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}