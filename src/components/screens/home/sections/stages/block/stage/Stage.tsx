import { motion } from 'framer-motion'
import { FC } from 'react'

import SmallHeading from '@/components/ui/headings/SmallHeading'

import { IStage } from '@/shared/types/stage.types'

import styles from './Stage.module.scss'
import { stageVariants } from './stage.animation'

const Stage: FC<{ stage: IStage }> = ({ stage }) => {
	return (
		<motion.div className={styles.stage} variants={stageVariants}>
			<SmallHeading title={stage.title} />
			<p>{stage.description}</p>
		</motion.div>
	)
}

export default Stage
