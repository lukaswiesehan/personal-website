const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif']
    },
		fontWeight: {
      'normal': 400,
      'bold': 900
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cool-gray': colors.coolGray,
      'warm-gray': colors.warmGray,
      gray: colors.gray,
      teal: colors.teal
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
