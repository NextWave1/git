import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FC, useRef, useState } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'

import styles from './SignUpForTour.module.scss'
import Form from './form/Form'
import { infoAnimation } from './sign-up-for-tour.animation'

const SignUpForTour: FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	const DynamicArrow = dynamic(() => import('./arrow/Arrow'), {
		ssr: false,
	})

	return (
		<section>
			<SubHeading
				title='запись на экскурсию строящегося объекта'
				className={styles.title}
			/>
			<div className={styles.wrapper}>
				<DynamicArrow />
				<motion.div
					className={styles.info}
					variants={infoAnimation}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
				>
					<p>
						Вы можете посетить наши строящиеся объекты, пообщаться с прорабом и
						строителями, где будет возможность оценить качество строительства и
						материалов, увидеть все своими глазами
					</p>
					<button className={styles.btn} onClick={() => setOpen(true)}>
						подробнее
					</button>
				</motion.div>
			</div>
			<AnimatePresence>{open && <Form close={setOpen} />}</AnimatePresence>
		</section>
	)
}

export default SignUpForTour
