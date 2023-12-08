import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const primary = '#5FC5FF'

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx,scss}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx,scss}',
	],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			yellow: '#EEFB61',
			gray: {
				300: '#F6F6F6',
				500: '#E4E4E4',
				600: '#C0C0C0',
				700: '#808080',
				800: '#4A4A4A',
			},
		},
		extend: {
			spacing: {
				300: '300px',
				200: '200px',
				150: '150px',
				100: '100px',
				75: '75px',
				60: '60px',
				50: '50px',
				30: '30px',
				20: '20px',
				10: '10px',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }) => {
			addComponents({
				'.btn-primary': {
					display: 'block',
					width: 'fit-content',
					padding: '15px 30px',
					backgroundColor: primary,
					color: theme('colors.white'),
					textAlign: 'center',
					transition:
						'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
					'&:hover,&:focus': {
						backgroundColor: theme('colors.gray.700'),
					},
					'&:active': {
						backgroundColor: theme('colors.gray.800'),
					},
				},
				'.btn-white': {
					backgroundColor: colors.white,
					color: colors.black,

					'&:hover,&:focus': {
						backgroundColor: theme('colors.gray.500'),
					},
					'&:active': {
						backgroundColor: theme('colors.gray.800'),
						color: colors.white,
					},
				},
				'.blue-link': {
					position: 'relative',
					width: 'fit-content',
					color: primary,
					transition: 'color 0.2s ease-in-out',
					'&:hover,&:focus': {
						color: theme('colors.gray.700'),
					},
					'&:active': {
						color: theme('colors.gray.800'),
					},
				},
				'.link-underline': {
					'&::after': {
						content: '',
						position: 'absolute',
						left: '0',
						bottom: '-2px',
						width: '100%',
						height: '1px',
						backgroundColor: primary,
						transition: 'background-color 0.2s ease-in-out',
					},
					'&:hover,&:focus': {
						'&::after': {
							backgroundColor: theme('colors.gray.700'),
						},
					},
					'&:active': {
						'&::after': {
							backgroundColor: theme('colors.gray.800'),
						},
					},
				},
				'.blue-line-block': {
					position: 'relative',
					padding: '15px 0 15px 20px',
					'&::before': {
						content: '',
						position: 'absolute',
						left: '0',
						top: '0',
						width: '2px',
						height: '100%',
						backgroundColor: primary,
					},
				},
				'.blue-line-block-mobile': {
					padding: '10px 0 10px 10px',
				},
			}),
				addUtilities({
					'.flex-block': {
						display: 'flex',
						gap: '100px',
						'> div:first-child': {
							width: '50%',
							flexShrink: '0',
						},
					},
					'.flex-block-reverse': {
						'> div:first-child': {
							flexShrink: '1',
						},
						'> div:last-child': {
							width: '50%',
							flexShrink: '0',
						},
					},
					'.flex-block-tablet': {
						'> div:first-child': {
							flexBasis: '50%',
							flexShrink: 'unset',
						},
						'> div:last-child': {
							flexBasis: '50%',
							flexShrink: 'unset',
						},
					},
					'.flex-block-mobile': {
						'> div:first-child': {
							width: '100%',
							flexShrink: 'unset',
						},
						'> div:last-child': {
							width: '100%',
							flexShrink: 'unset',
						},
					},
					'.flex-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.btn-tablet': {
						width: 'calc(50% - 20px)',
					},
					'.btn-mobile': {
						width: 'calc(100% - 20px)',
					},
					'.wrapper': {
						width: '1200px',
						margin: '0 auto',
					},
					'.wrapper-adaptive': {
						width: 'auto',
						marginRight: '20px',
						marginLeft: '20px',
					},
					'.image-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
					'.H1': {
						width: '50%',
						fontSize: '64px',
						lineHeight: '77px',
						fontWeight: '700',
						textTransform: 'uppercase',
					},
					'.H1-mobile': {
						fontSize: '36px',
						lineHeight: '43px',
					},
					'.H2': {
						fontSize: '48px',
						lineHeight: '58px',
						fontWeight: '700',
						textTransform: 'uppercase',
					},
					'.H2-mobile': {
						fontSize: '28px',
						lineHeight: '34px',
					},
					'.H3': {
						fontSize: '36px',
						lineHeight: '43px',
						fontWeight: '500',
						textTransform: 'uppercase',
					},
					'.H3-mobile': {
						fontSize: '20px',
						lineHeight: '24px',
					},
					'.H4': {
						fontSize: '24px',
						lineHeight: '29px',
						fontWeight: '600',
					},
					'.H4-mobile': {
						fontSize: '18px',
						lineHeight: '22px',
					},

					'.T1': {
						fontSize: '40px',
						lineHeight: '40px',
						fontWeight: '700',
					},
					'.T1-mobile': {
						fontSize: '24px',
						lineHeight: '24px',
					},
					'.T2': {
						fontSize: '16px',
						lineHeight: '22px',
						fontWeight: '400',
					},
					'.T2-mobile': {
						fontSize: '14px',
						lineHeight: '20px',
					},
					'.T3': {
						fontSize: '16px',
						lineHeight: '22px',
						fontWeight: '600',
						letterSpacing: '0.07em',
					},
					'.T3-mobile': {
						fontSize: '14px',
						lineHeight: '20px',
					},
					'.T4': {
						fontSize: '14px',
						lineHeight: '14px',
						fontWeight: '500',
						textTransform: 'uppercase',
					},
					'.T4-mobile': {
						fontSize: '12px',
						lineHeight: '17px',
					},
					'.T5': {
						fontSize: '14px',
						lineHeight: '14px',
						fontWeight: '300',
					},
					'.T5-mobile': {
						fontSize: '12px',
						lineHeight: '12px',
					},
				})
		}),
	],
}
