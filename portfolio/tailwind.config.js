/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'gwen': '#CE8383',
        'gwanda': '#8C3F51',
        'acorn': '#90735E',
        'cashew': '#fee7dc',
        'accent': '#D81F4C',
      },
    },
  },
  plugins: [],
}

