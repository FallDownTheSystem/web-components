const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
// Loading all the tailwind colors, rather than just the defaults
let colors = require('tailwindcss/colors');

// Depricated but still included. Deleted to get rid of the warning from Tailwind.
delete colors.lightBlue;

module.exports = {
	purge: ['./index.html', './vite.config.ts', './src/**/*.{js,vue,ts}', './lib/MyFoo.ce.vue'],
	darkMode: 'class', // or 'media' or 'class'
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				...colors,
				primary: colors.amber,
			},
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		plugin(function ({ addVariant, e, postcss }) {
			addVariant('firefox', ({ container, separator }) => {
				const isFirefoxRule = postcss.atRule({
					name: '-moz-document',
					params: 'url-prefix()',
				});
				isFirefoxRule.append(container.nodes);
				container.append(isFirefoxRule);
				isFirefoxRule.walkRules(rule => {
					rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
				});
			});
		}),
	],
};
