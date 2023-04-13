export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'sans-serief'],
      },
      gridTemplateColumns: {
        '250-auto': 'repeat(auto-fit, minmax(0, 250px))',
      },
    },
  },
  plugins: [],
}
