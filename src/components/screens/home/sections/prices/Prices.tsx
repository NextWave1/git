import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'
import PriceBlock from '@/components/ui/price-block/PriceBlock'

import styles from './Prices.module.scss'
import { imgAnimation } from './prices.animation'

const Prices: FC = () => {
	const title = 'Цена за м² и сроки строительства месяца'
	return (
		<section className={styles.section}>
			<div>
				<SubHeading title={title} />
				<PriceBlock />
			</div>
			<motion.div
				className={styles.img}
				variants={imgAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<Image
					src='/Цены за м2.jpeg'
					alt={title}
					fill
					className='image-bg'
					sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 500px'
				/>
			</motion.div>
		</section>
	)
}

export default Prices
