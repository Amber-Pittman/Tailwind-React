module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#fff',
        dark: '#f2f2f2',
      },
      red: '#cc0000',
      },
      aqua: {
        DEFAULT: '#00cccc',
        dark: '#009999',
      },
    },
    ringWidth: {
      'DEFAULT': '2px',
      '5': '5px',
      '10': '10px'
    },
  variants: {
    extend: {},
  },
  plugins: [],
}
