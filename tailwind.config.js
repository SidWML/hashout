const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      'heading-violet': '#081D34',
      'indigo-light': '#c4e0fd',
  
    },

    extend: {
      transitionProperty: {
        height: 'height',
        hidden: 'hidden',
        block: 'block',
      },
      boxShadow: {
        'custom': '0 9px 20px 14px rgba(0, 0, 0, .13)',
      },
      fontFamily: {
        montserrat: ['montserrat', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins'],
        // rosario: ['Rosario'],
        roboto: ['Roboto'],
      },
    },
  },
  plugins: [],
};
