import type { TailwindConfig } from '@react-email/tailwind'

export default {
	corePlugins: [
		'backgroundColor',
		'backgroundImage',
		'backgroundPosition',
		'backgroundRepeat',
		'backgroundSize',
		'borderCollapse',
		'borderColor',
		'borderRadius',
		'borderStyle',
		'borderWidth',
		'boxShadow',
		'boxShadowColor',
		'clear',
		'display',
		'float',
		'fontFamily',
		'fontSize',
		'fontStyle',
		'fontWeight',
		'height',
		'letterSpacing',
		'lineHeight',
		'listStylePosition',
		'listStyleType',
		'margin',
		'maxHeight',
		'maxWidth',
		'minHeight',
		'minWidth',
		'overflow',
		'padding',
		'tableLayout',
		'textAlign',
		'textColor',
		'textIndent',
		'textTransform',
		'verticalAlign',
		'width'
	],
	theme: {
		screens: [],
		colors: {
			white: '#ffffff',
			black: '#1d1d1b',
			gray: {
				100: '#0f151c',
				200: '#131a23',
				300: '#21272f',
				400: '#383f48',
				500: '#6b727a',
				600: '#a7aeb6',
				700: '#d9dde1',
				800: '#ebeff3',
				900: '#f4f7fa'
			},
			green: {
				600: '#00a88e',
				300: '#29ccb1',
				200: '#3de8ca',
				100: '#9dffef',
				50: '#effffc'
			},
			cyan: {
				600: '#33bbff',
				300: '#7bd3ff',
				200: '#9ddeff',
				100: '#bbe9ff',
				50: '#effaff'
			},
			blue: {
				600: '#3355ff',
				300: '#7392ff',
				200: '#93adff',
				100: '#b4c9ff',
				50: '#e5f1ff'
			},
			violet: {
				600: '#7633ff',
				300: '#a87cff',
				200: '#be9dff',
				100: '#d4beff',
				50: '#fe4fff'
			},
			purple: {
				600: '#dd33ff',
				300: '#e97cff',
				200: '#ef9dff',
				100: '#f4beff',
				50: '#fcefff'
			},
			pink: {
				600: '#ff33bb',
				300: '#ff7cd4',
				200: '#ff9dde',
				100: '#ffbee9',
				50: '#ffeffa'
			},
			red: {
				600: '#ff3355',
				300: '#ff7c92',
				200: '#ff9dad',
				100: '#ffbec9',
				50: '#ffeff1'
			},
			orange: {
				600: '#ff7033',
				300: '#ffa87c',
				200: '#ffbe9d',
				100: '#ffd4be',
				50: '#fff4ef'
			},
			yellow: {
				600: '#ffd633',
				300: '#fee87c',
				200: '#ffef9d',
				100: '#fff4be',
				50: '#fff7e5'
			},
			lime: {
				600: '#bbff33',
				300: '#d4ff7c',
				200: '#deff9d',
				100: '#e9ffbe',
				50: '#faffef'
			},
			neon: {
				600: '#55ff33',
				300: '#92ff7c',
				200: '#adff9d',
				100: '#c9ffbe',
				50: '#f1ffef'
			},
			mint: {
				600: '#4dff88',
				300: '#8dffb3',
				200: '#aaffc6',
				100: '#c6ffd9',
				50: '#f1fff6'
			}
		},
		fontFamily: {
			arial: 'Arial',
			tahoma: 'Tahoma'
		},
		fontWeight: {
			normal: 'normal',
			bold: 'bold'
		},
		fontSize: {
			'xs': ['10px', '12px'],
			'sm': ['12px', '16px'],
			'base': ['14px', '18px'],
			'md': ['16px', '20px'],
			'lg': ['18px', '21px'],
			'xl': ['21px', '24px'],
			'2xl': ['24px', '27px'],
			'3xl': ['32px', '36px']
		},
		spacing: {
			0: '0px',
			1: '4px',
			2: '8px',
			3: '12px',
			4: '16px',
			5: '20px',
			6: '24px',
			7: '28px',
			8: '32px',
			9: '36px',
			10: '40px',
			11: '44px',
			12: '48px',
			13: '52px',
			14: '56px',
			15: '60px',
			16: '64px'
		}
	},
	plugins: [
		function ({ addUtilities }) {
			const newUtilities = {
				'.mso-line-height-exactly': {
					msoLineHeightRule: 'exactly'
				},
				'.mso-hide-all': {
					msoHide: 'all'
				},
				'.underline': {
					textDecoration: 'underline'
				},
				'.no-underline': {
					textDecoration: 'none'
				},
				'.line-through': {
					textDecoration: 'line-through'
				}
			}

			addUtilities(newUtilities)
		}
	]
} satisfies TailwindConfig
