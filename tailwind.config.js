const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {
      colors: {
        'theme': '#24ACB2',
      },
    },
    fontFamily: {
      'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `./dist/**/*.{html,js}`,
    "./nuxt.config.{js,ts}",
  ]
}
