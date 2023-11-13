/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"neutral-50": "#F9F9F9",
				"neutral-100": "#f4f4f4",
				"neutral-200": "#e4e4e4",
				"neutral-300": "#d3d3d3",
				"neutral-400": "#a2a2a2",
				"neutral-500": "#737373",
				"netural-600": "#525252",
				"netural-700": "#404040",
				"netural-800": "#262626",
				"netural-900": "#171717",
				"neutral-950": "#0a0a0a",
				"neutral-1000": "#000",
				"blue-default": "#1d9bf0",
				"blue-hover": "#1871ca",
				"blue-disabled": "#1e5d87",
				"blue-wash": "#75beef",
				"button-stroke": "#546a7a",
				stroke: "#FFFFFF3D",
				"searchbar-fill": "#212327",
				"card-fill": "#16181c",
				success: "#00be74",
				"red-error": "#8b141a",
			},

			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},

			width: {
				85: "334px",
				100: "442px",
				110: "598px",
			},

			height: {
				14.5: "58px",
			},

			boxShadow: {
				1: "0px 8px 16px 0px rgba(0, 0, 0, 0.25)",
			},

			lineHeight: {
				normal: "normal",
			},

			borderRadius: {
				"4xl": "30px",
				"5xl": "65px",
			},

			borderWidth: {
				1: "1px",
			},

			spacing: {
				23: "93px",
			},
		},
	},
	plugins: [],
};
