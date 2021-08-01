module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        card: '5px 6px 15px -4px #000000'
      },
      colors: {
        'neon-pink': '#ff3b94'
      },
      fontFamily: {
        Marker: ['Permanent Marker']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
