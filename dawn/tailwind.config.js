/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    screens: {
      xs: { max: '319px' }, // 0-319px arası için xs öneki
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      margin: {
        30: '7.5rem',
        6: '10rem',
      },
      colors: {
        customGray: '#666666',
      },
      width: {
        57: '16rem',
      },
      fontSize: {
        custom: '12.8px',
      },
      fontFamily: {
        sans: ['ITC Avant Garde Gothic Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
