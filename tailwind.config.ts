import { config } from "process";


const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				Poppins: ['Poppins', 'sans-serif'],
				Roboto: ['Roboto', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(200, 65%, 45%)', // Eastern Blue
					foreground: 'hsl(200, 100%, 95%)', // Glacier
				},
				secondary: {
					DEFAULT: 'hsl(0, 3%, 15%)', // #292525
					foreground: 'hsl(0, 0%, 93%)', // Green White
				},
				muted: {
					DEFAULT: 'hsl(200, 28%, 30%)',
					foreground: 'hsl(200, 100%, 95%)',
				},
				accent: {
					DEFAULT: 'hsl(200, 28%, 30%)', // Burnt Sienna
					foreground: 'hsl(30, 60%, 85%)', // Tacao
				},
				destructive: {
					DEFAULT: 'hsl(360, 68%, 44%)', // Red
					foreground: 'hsl(0, 100%, 95%)',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				scroll:
					"scroll var(--animation-duration, 70s) var(--animation-direction, forwards) linear infinite",
			},
			keyframes: {
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addBase, theme }: any) {
			let allColors = flattenColorPalette(theme('colors'));
			let newVars = Object.fromEntries(
				Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
			);

			addBase({
				':root': newVars,
			});
		},
	],
};

export default config