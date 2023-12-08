import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'
import Loading from '@/components/ui/loading/Loading'
import Object from '@/components/ui/object/Object'

import { ObjectService } from '@/services/object.service'

import { objectsAnimation } from '../recent-objects/recent-objects.animation'

import styles from './ObjectRightNow.module.scss'

const ObjectRightNow: FC = () => {
	const { data: objectRightNow, isLoading } = useQuery(
		['get uncompleted objects'],
		() => ObjectService.getAllUncompleted()
	)

	return (
		<section>
			<SubHeading
				title='строящиеся объекты прямо сейчас'
				className={styles.title}
			/>
			<AnimatePresence>
				{isLoading ? (
					<Loading />
				) : (
					<motion.div
						className={styles.objects}
						variants={objectsAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{objectRightNow
							?.slice(0, 2)
							.map(object => (
								<Object object={object} key={object._id} label='подробнее' />
							))}{' '}
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}

export default ObjectRightNow
