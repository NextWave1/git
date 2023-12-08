export const contentVariants = {
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

export const contactsVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0.5,
		},
	},
}
