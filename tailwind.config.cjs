/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Ubuntu', 'sans-serif'],
            'serif': ['"Delicious Handrawn"', 'serif'],
            'nabla': ['Nabla', '"Delicious Handrawn"', 'sans-serif'],
            'caveat': ['Caveat', 'serif']
		},
        colors: {
            transparent: 'transparent',
            black: '#0a0a0a',
            white: colors.white,
            green: colors.emerald,
            yellow: colors.amber,
            grey: colors.slate,
            blue: colors.cyan,
            red: colors.pink
        }
	},
	plugins: [],
}