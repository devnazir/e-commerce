module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif']
    },
    extend: {
      textColor: {
        'lightblue-500': '#40BFFF',
        'lightblue-200': '#BCDDFE',
        'red-custom': '#FF4858',
        'black-custom': '#373737',
      },
      backgroundColor: {
        'lightblue-500': '#40BFFF',
        'lightblue-200': '#BCDDFE',
        'red-custom': '#FF4858',
        'black-custom': '#373737',
      },
      backgroundImage: () => ({
        'banner': "url('/image/banner.png')",
        'banner-shoes': "url('/image/banner-2.png')",
        'logo': "url('/icons/favicon.png')",
        'cart': "url('/icons/Cart.png')",
        'profile': "url('/icons/profile.png')"
      }),
      screens: {
        'xs': { 'max': '450px' }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
