import mainImage from '/public/Главная.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import styles from './MainSection.module.scss'
import { buttonAnimation, titleAnimation } from './main-section.animation'

const MainSection: FC = () => {
	const title = 'Мы построим дом вашей мечты'

	return (
		<motion.div className={styles.wrapper}>
			<Image src={mainImage} alt={title} fill className='image-bg' priority />
			<section>
				<motion.h1 variants={titleAnimation} initial='hidden' animate='show'>
					{title}
				</motion.h1>
				<motion.button
					variants={buttonAnimation}
					initial='hidden'
					animate='show'
				>
					оставить заявку
				</motion.button>
			</section>
		</motion.div>
	)
}

export default MainSection
