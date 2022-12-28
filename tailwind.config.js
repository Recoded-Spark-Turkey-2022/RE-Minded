/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        poppins:['Poppins']
      },
      spacing: {
        128: '32rem'
      },
      fontSize:{
        large: '3rem',
        medium: '1.5rem',
        small: '1rem',
        xsmall: '0.6rem'
      },
      colors:{
        lightBlue: '#EAF8F9'
      },
      screens:{
        sm:'320px',
        md:'640px'
      }
    },
  },
  plugins: [],
};
