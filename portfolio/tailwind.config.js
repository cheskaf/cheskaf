/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        amaranth: 'rgb(var(--color-amaranth) / <alpha-value>)', // amaranth red
        gwanda: 'rgb(var(--color-gwanda) / <alpha-value>)', // quinacridone magenta
        gwen: 'rgb(var(--color-gwen) / <alpha-value>)', // old rose
        melon: 'rgb(var(--color-melon) / <alpha-value>)', // melon
        melody: 'rgb(var(--color-melody) / <alpha-value>)', // pale dogwood
        cashew: 'rgb(var(--color-cashew) / <alpha-value>)', // champagne pink
        coffee: 'rgb(var(--color-coffee) / <alpha-value>)', // bistre
        acorn: 'rgb(var(--color-acorn) / <alpha-value>)', // chamoisee
        star: 'rgb(var(--color-star) / <alpha-value>)', // xanthous
      },
      fontFamily: {
        'sans': ['"Noto Sans"', 'sans-serif'],
        'miriam-libre': ['"Miriam Libre"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

