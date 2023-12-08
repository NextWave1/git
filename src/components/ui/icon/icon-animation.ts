export const iconVariants = {
	hidden: {
		scale: 0,
		delay: 1,
	},
	show: {
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
	hover: {
		scale: 1.2,
		transition: {
			delay: 0,
			duration: 0.3,
		},
	},
}

// variants={iconVariants}
// initial='hidden'
// animate='visible'
// whileHover='hover'
// whileFocus='hover'
