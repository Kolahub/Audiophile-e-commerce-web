/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ["Manrope", 'sans-serif']
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      colors: {
        'orangePrimary': '#D87D4A',
        'orangeSecondary': '#fbaf85',
        'whitePrimary': '#F1F1F1',
        'whiteSecondary': '#FAFAFA',
        'whiteTertiary': '#FFFFFF',
        'blackPrimary': '#101010',
        'blackSecondary': '#000000',
      },
      backgroundPosition: {
        'top-custom': 'center -80px'
      },
    },
  },
  plugins: [],
}