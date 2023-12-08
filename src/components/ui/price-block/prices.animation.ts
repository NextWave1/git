export const priceBlockAnimation = {
	hidden: {},
	show: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.4,
		},
	},
}

export const priceAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}
