import { motion } from 'framer-motion'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'

import styles from './WhyChooseUs.module.scss'
import Block from './block/Block'
import { wrapperAnimation } from './why-choose-us.animation'
import { whyChooseUs } from './why-choose-us.data'

const WhyChooseUs: FC = () => {
	return (
		<section>
			<SubHeading title='почему выбирают нас' className={styles.title} />
			<motion.div
				className={styles.wrapper}
				variants={wrapperAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				{whyChooseUs.map(block => (
					<Block block={block} key={block.img} />
				))}
			</motion.div>
		</section>
	)
}

export default WhyChooseUs
