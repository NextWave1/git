import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import arrowRight from '@/assets/images/arrow-right.svg'

import {
	arrowAnimation,
	arrowMobileAnimation,
} from '../sign-up-for-tour.animation'

import styles from './Arrow.module.scss'

const Arrow: FC = () => {
	return (
		<motion.div
			className={styles.arrowWrapper}
			variants={
				window.innerWidth >= 640 ? arrowAnimation : arrowMobileAnimation
			}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			<span className={styles.stick} />
			<div className={styles.arrow}>
				<Image src={arrowRight} alt='Стрелка вправо' fill draggable={false} />
			</div>
		</motion.div>
	)
}

export default Arrow
