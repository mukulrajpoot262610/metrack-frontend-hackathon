module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#fffefe',
        green: '#8dffa8',
        yellow: '#e1ff31'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}