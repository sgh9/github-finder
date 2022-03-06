module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    darkTheme: "dark",
    themes: true,
  },
  plugins: [require('daisyui')],
}
