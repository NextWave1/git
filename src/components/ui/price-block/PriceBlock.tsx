import { motion } from 'framer-motion'
import { FC } from 'react'

import styles from './PriceBlock.module.scss'
import Price from './price/Price'
import { priceBlockAnimation } from './prices.animation'
import { prices } from './prices.data'

const PriceBlock: FC = () => {
	return (
		<motion.div
			className={styles.prices}
			variants={priceBlockAnimation}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true }}
		>
			{prices.map(price => (
				<Price price={price} key={price.name} />
			))}
		</motion.div>
	)
}

export default PriceBlock
