export const liVariants = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
	hidden: { opacity: 0, x: -50 },
}

export const navVariants = {
	hidden: {
		y: '-100%',
		transition: {
			duration: 0.5,
			delay: 0.3,
		},
	},
	show: {
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
}
