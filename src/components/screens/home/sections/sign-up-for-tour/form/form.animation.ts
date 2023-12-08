import { Variants } from 'framer-motion'

export const bgVariants: Variants = {
	hidden: {
		filter: 'opacity(0)',
		transition: {
			when: 'afterChildren',
			duration: 0.3,
		},
	},
	show: {
		filter: 'opacity(1)',
		transition: {
			duration: 0.3,
			delayChildren: 0.3,
		},
	},
}

export const formVariants: Variants = {
	hidden: {
		opacity: 0,
		scale: 0.5,
		transition: {
			duration: 0.5,
		},
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
}
