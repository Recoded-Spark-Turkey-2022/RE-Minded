/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      backgroundImage: {
        backgroundOfContentA:
          'url(./ComponentFolders/HomePage/Images/Background.svg)',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '100%': '100%',
        16: '4rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
