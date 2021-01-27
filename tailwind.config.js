module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["Barlow Semi Condensed"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
