/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundSize: {
				'100_auto': '100% auto',
			},
			colors: {
				'turquoise': '#51ebd4',
				'daffodil': '#fcfe38',
				'black': '#0D0F0A',
				'white': '#ffffff',
				'balticSea': '#3e3d3d',
			},
			padding: {
				'mobilePadding': '25px',
			},
			maxWidth: {
				'pageWidth': '1300px'
			}
		},
		fontFamily: {
			barlow: 'Barlow',
			contrail: 'Contrail One',
			geo: 'Geo',
			dank: 'monospace'
		}
	},
	plugins: [],
}
