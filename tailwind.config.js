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
      /* backgroundImage: {
        'aqua-lemon': 'linear-gradient(to right, #00F4E2, #00FF7F)',
      },
      fontSize: {
        xxs: ['0.625rem', '1rem'],
        xs: ['0.75rem', '1.25rem'],
        sm: ['0.875rem', '1rem'],
        base: ['1rem', '1.25rem'],
        lg: ['1.125rem', '1.25rem'],
        '2.5xl': ['1.75rem', '2.25rem'],
        '3.5xl': ['2rem', '2.5rem'],
        '4.5xl': ['2.5rem', '3rem'],
      }, */
      colors: {
        'neutral-100': '#F1F1F1',
        'neutral-200': '#676767',
        'neutral-300': '#7A7A7A',
        'neutral-500': '#161616',
        'red-500': '#D01443'
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
