import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import styles from './Block.module.scss'
import { imgVariants, stagesVariants } from './block.animation'
import { IBlock } from './block.interface'
import Stage from './stage/Stage'

const Block: FC<IBlock> = ({ image, stages }) => {
	return (
		<div className={styles.block}>
			<motion.div
				className={styles.img}
				initial='hidden'
				whileInView='show'
				variants={imgVariants}
				viewport={{ once: true }}
			>
				<Image
					src={image}
					alt={stages[0].title}
					fill
					sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 600px'
				/>
			</motion.div>
			<motion.div
				className={styles.stages}
				initial='hidden'
				whileInView='show'
				variants={stagesVariants}
				viewport={{ once: true }}
			>
				{stages.map(stage => (
					<Stage stage={stage} key={stage.title} />
				))}
			</motion.div>
		</div>
	)
}

export default Block
