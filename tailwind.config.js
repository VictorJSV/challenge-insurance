/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['"Lato"', 'sans-serif'],
    },
    /* screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }, */
    screens: {
      'sm': '402px',
      'md': '1168px',
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem', '3.563rem'], //40px
      },
      colors: {
        'neutral-100': '#F1F1F1',
        'neutral-200': '#676767',
        'neutral-300': '#7A7A7A',
        'neutral-500': '#161616',
        'E6': '#E6E6E6',
        'F9':'#F9F9F9',
        'EF': '#EFEFEF',
        'red-500': '#D01443',
        'muted': '#BDBDBD',
        'yellow-500': '#F3CD03'
      },
      boxShadow: {
        'header-band': 'inset 0px 9px 6px -4px rgba(208, 20, 67, 0.14)',
        'header-band-grey': 'inset 0px 9px 6px -4px rgba(60, 60, 60, 0.14)',
        'header-arrow': 'inset -4px 6px 4px 0px rgba(208, 20, 67, 0.14)',
      }
    },
  },
  plugins: [],
}
