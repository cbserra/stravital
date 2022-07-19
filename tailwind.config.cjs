/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        1: colors.rose[200],
        2: colors.rose[300],
        3: colors.rose[400],
        4: colors.rose[500],
        5: colors.rose[600],
        6: colors.rose[700]
      },
      secondary: {
        1: colors.orange[200],
        2: colors.orange[300],
        3: colors.orange[400],
        4: colors.orange[500],
        5: colors.orange[600],
        6: colors.orange[700]
      },
      main: {
        1: colors.white,
        2: colors.neutral[50],
        3: colors.neutral[200],
        4: colors.neutral[500],
        5: colors.neutral[600],
        6: colors.neutral[700],
        7: colors.neutral[800],
        8: colors.neutral[900]
      },
      transparent: colors.transparent
    },
    fontFamily: {
      primary: ['Inter', ...fontFamily.sans]
    }
  },
  plugins: []
}
