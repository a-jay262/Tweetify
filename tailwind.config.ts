import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/**/*.js',
	],
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: '1px',
				'0': '0',
				'1': '1px',
				'2': '2px',
				'3': '3px',
				'4': '4px',
				'6': '6px',
				'8': '8px',
			},
			screens: {
				xd: '1000px',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
export default config;
