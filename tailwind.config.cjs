/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      // 'sans': ['Ubuntu', 'sans-serif'],
      // 'serif': ['"Delicious Handrawn"', 'serif'],
      // 'nabla': ['Nabla', '"Delicious Handrawn"', 'sans-serif'],
      // 'caveat': ['Caveat', 'serif']
      'nf-symbols': ['Symbols Nerd Font'],
      'belanosima': ['belanosima', 'serif']
    },
    colors: {
      transparent: 'transparent',
      black: '#0e0d11'
    },
    extend: {
      spacing: {
        "unset": "unset",
      },
      maxWidth: {
        "unset": "unset",
      },
      width: {
        "unset": "unset",
      },
    }
  },
  plugins: [
    require('tailwind-dracula')()
  ],
}
