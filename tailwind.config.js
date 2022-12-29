/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily : {
        poppins:['Poppins']
      },
      screens:{
        sm:'320px',
        md:'640px'
      }
    },
  },
  plugins: [],
};
