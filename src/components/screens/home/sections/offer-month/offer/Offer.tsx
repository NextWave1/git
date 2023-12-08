import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IOfferMonth } from '../offer-month.interface'

import styles from './Offer.module.scss'
import { imgAnimation, textAnimation } from './offer.animation'

const Offer: FC<{ offer: IOfferMonth }> = ({ offer }) => {
	return (
		<div className={styles.offer}>
			<motion.div
				variants={imgAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
				className={styles.img}
			>
				<Image
					src={offer.image}
					alt='Предложение месяца'
					fill
					sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 600px'
				/>
			</motion.div>
			<motion.div
				className={styles.text}
				variants={textAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<p>{offer.text}</p>
				<Link href='/'>подробнее</Link>
			</motion.div>
		</div>
	)
}

export default Offer
