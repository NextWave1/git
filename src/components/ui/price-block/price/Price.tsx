import { motion } from 'framer-motion'
import { FC } from 'react'

import { transformPrice } from '@/utils/price/transform-price'

import SmallHeading from '../../headings/SmallHeading'
import { priceAnimation } from '../prices.animation'
import { IPrice } from '../prices.interface'

import styles from './Price.module.scss'

const Price: FC<{ price: IPrice }> = ({ price }) => {
	return (
		<motion.div className={styles.block} variants={priceAnimation}>
			<span
				className={styles.time}
			>{`Срок строительства — ${price.time}`}</span>
			<div className={styles.info}>
				<SmallHeading title={price.name} />
				<div className={styles.text}>
					<span>от</span>
					<span className={styles.price}>{transformPrice(price.price)}</span>
					<span>за м²</span>
				</div>
			</div>
		</motion.div>
	)
}

export default Price
