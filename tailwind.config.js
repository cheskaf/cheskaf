/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // v2
        chocnut: 'rgb(var(--color-chocnut) / <alpha-value>)', // chocnut
        frutos: 'rgb(var(--color-frutos) / <alpha-value>)', // frutos
        nips: 'rgb(var(--color-nips) / <alpha-value>)', // nips
        border: 'rgb(var(--color-border) / <alpha-value>)', // border
        
        lightbg: 'rgb(var(--color-light-bg) / <alpha-value>)', // light-bg
        lightbg2: 'rgb(var(--color-light-bg-2) / <alpha-value>)', // light-bg-2
        lightaccent: 'rgb(var(--color-light-accent) / <alpha-value>)', // light-accent
        lighttext: 'rgb(var(--color-light-text) / <alpha-value>)', // light-text
        lighttext2: 'rgb(var(--color-light-text-2) / <alpha-value>)', // light-text-2
        
        darkbg: 'rgb(var(--color-dark-bg) / <alpha-value>)', // dark-bg
        darkbg2: 'rgb(var(--color-dark-bg-2) / <alpha-value>)', // dark-bg-2
        darkaccent: 'rgb(var(--color-dark-accent) / <alpha-value>)', // dark-accent
        darktext: 'rgb(var(--color-dark-text) / <alpha-value>)', // dark-text
        darktext2: 'rgb(var(--color-dark-text-2) / <alpha-value>)', // dark-text-2
        
        // v1
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

