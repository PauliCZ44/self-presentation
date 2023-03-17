/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
		},
	},
	plugins: [],
}
