module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        blogapp: 'url("./images/blogapp.png")',
        artgallery: 'url("./images/art-gallery.png")',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-dark': '#0f0f0e',
      },
    },
  },

  plugins: [],
};
