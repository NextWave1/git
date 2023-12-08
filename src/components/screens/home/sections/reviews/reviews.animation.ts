export const reviewsAnimation = {
	show: {
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.3,
		},
	},
	hidden: {},
}

export const reviewAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
}
