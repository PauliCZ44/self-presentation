/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				'primary-opacity-10': 'hsl(var(--primary-hsl) / 10%)',
				'primary-opacity-25': 'hsl(var(--primary-hsl) / 20%)',
				'primary-opacity-50': 'hsl(var(--primary-hsl) / 50%)',
				'primary-opacity-66': 'hsl(var(--primary-hsl) / 66%)',
				'primary-opacity-75': 'hsl(var(--primary-hsl) / 70%)',
				'primary-opacity-90': 'hsl(var(--primary-hsl) / 90%)',
			},
		},
		fontFamily: {
			sans: ['"Fira Sans"', ...defaultTheme.fontFamily.sans],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono],
		},
	},
	plugins: [],
}
