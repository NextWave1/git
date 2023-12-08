import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'

import styles from './Estimate.module.scss'
import { imgAnimation, paragraphAnimation } from './estimate.animation'
import Form from './form/Form'

const Estimate: FC = () => {
	const title = 'У вас уже есть проект или смета?'

	return (
		<section className={styles.section}>
			<div className={styles.info}>
				<SubHeading title={title} />
				<motion.p
					variants={paragraphAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					Или понравился проект на другом сайте, но не устроила цена. Прикрепите
					готовый документ или ссылку на проект и мы рассчитаем его стоимость.
					Возможно, мы предложим более низкую цену.
				</motion.p>
			</div>
			<motion.div
				className={styles.img}
				variants={imgAnimation}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true }}
			>
				<Image
					src={'/У вас уже есть проект или смета.jpg'}
					alt={title}
					fill
					sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 500px'
				/>
			</motion.div>
			<Form />
		</section>
	)
}

export default Estimate
