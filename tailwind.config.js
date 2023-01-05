/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },


      colors: {
        Background: '#E5E5E5',
        Navbar: '#EAF8F9',
        Footer: '#FEE89E',
        Buttons: '#2DD3E3',
        BlackTexts: '#1A1A1A',
        SubTexts: '#718096',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },



    },
  },
  plugins: [],
};
