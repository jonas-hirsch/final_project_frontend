module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      'default': '4px',
      'round': '18px'
    },
    textColor: {
      'primary': '#f4f4f4',
      'secondary': '#393939',
      'body': '#6f6f6f',
      'danger': '#750e13',
      'l-danger': '#ba1b23',
      'warning': '#f1c21b',
      'l-warning': '#DAAE0E',
      'l-success': '#24a148',
      'success': '#198038',
      'link': '#0353e9',
      'l-light': '#78a9ff',
      'white': '#f4f4f4',
      'w-hover': '#fff'
      
    },
    backgroundColor: {
      'primary': '#0353e9',
      'p-light': '#78a9ff',
      'p-hover': '#002d9c',
      'secondary': '#525252',
      's-hover': '#393939',
      'danger': '#ba1b23',
      'd-hover': '#750e13',
      'warning': '#F1C21B',
      'war-hover': '#DAAE0E',
      'success': '#24a148',
      'sc-hover': '#198038',
      'disabled': '#e0e0e0',
      'white': '#f4f4f4',
      'w-hover': '#fff',
      'body': '#ece4db',
      'footer-1': '#78a9ff',
      'footer-2': '#a6c8ff'
    },
    fontSize: {
      '6xl': '48px',
      '5xl': '32px',
      '4xl': '28px',
      '3xl': '24px',
      '2xl': '20px',
      'xl': '18px',
      'md': '16px',
      'base': '14px',
      'xs': '12px',
    },
    fontFamily: {
      'base': ['IBM Plex Sans', 'sans-serif']
    },
    fontWeight: {
      'light': 300,
      'normal': 400,
      'semibold': 600,
      'bold': 700,
    },
    ringColor: {
      'primary': '#0353e9',
      'secondary': '#525252',
      'danger': '#ba1b23',
      'success': '#24a148',
    },
    borderColor: {
      'primary': '#002d9c',
      'secondary': '#393939',
      'light': '#e0e0e0',
      'danger': '#750e13',
      'success': '#198038',
      'warning': '#DAAE0E',
      'link': '#0353e9',

    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
      opacity: ['disabled'],
      boxShadow: ['active', 'hover'],
      backgroundImage: ['hover', 'focus'],
      resize: ['hover', 'focus'],
      textColor: ['active', 'hover', 'visited'],
      display: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      ringColor: ['active', 'hover', 'visited'],
      borderColor: ['active', 'hover', 'visited', 'focus'],
    },
  },
  plugins: [],
}
