/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
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
        sunny: 'rgb(var(--color-sunny) / <alpha-value>)', // sunglow
        rosy: 'rgb(var(--color-rosy) / <alpha-value>)', // cameo pink
        gradienta: 'rgb(var(--color-gradienta) / <alpha-value>)', // gradienta
        gradientb: 'rgb(var(--color-gradientb) / <alpha-value>)', // gradientb
        gradientc: 'rgb(var(--color-gradientc) / <alpha-value>)', // gradientc
        gradientd: 'rgb(var(--color-gradientd) / <alpha-value>)', // gradientd
      },
      fontFamily: {
        'sans': ['"Noto Sans"', 'sans-serif'],
        'miriam-libre': ['"Miriam Libre"', 'sans-serif'],
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

