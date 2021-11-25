const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
