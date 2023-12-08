import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import SmallHeading from '@/components/ui/headings/SmallHeading'

import { IBlockReasons } from '../why-choose-us.data'

import styles from './Block.module.scss'
import {
	blockAnimation,
	imageAnimation,
	reasonAnimation,
	reasonsAnimation,
} from './block.animation'

const Block: FC<{ block: IBlockReasons }> = ({ block }) => {
	return (
		<motion.div
			className={styles.block}
			key={block.img}
			variants={blockAnimation}
		>
			<motion.div className={styles.reasons} variants={reasonsAnimation}>
				{block.reasons.map(reason => (
					<motion.div
						className={styles.reason}
						key={reason.title}
						variants={reasonAnimation}
					>
						<SmallHeading title={reason.title} />
						<p>{reason.description}</p>
					</motion.div>
				))}
			</motion.div>
			<motion.div className={styles.img} variants={imageAnimation}>
				<Image
					src={block.img}
					alt={block.reasons[0].title}
					fill
					sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 600px'
				/>
			</motion.div>
		</motion.div>
	)
}

export default Block
