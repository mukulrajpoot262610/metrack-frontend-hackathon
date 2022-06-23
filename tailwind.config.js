module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#fffefe",
        green: "#8dffa8",
        yellow: "#e1ff31",
      },
      fontSize: {
        "10xl": "32rem",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    themes: false,
  },
};
