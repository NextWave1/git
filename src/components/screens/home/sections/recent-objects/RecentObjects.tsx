import { useQuery } from '@tanstack/react-query'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'
import Loading from '@/components/ui/loading/Loading'
import Object from '@/components/ui/object/Object'

import { ObjectService } from '@/services/object.service'

import { instagram } from '@/config/communication.config'

import styles from './RecentObjects.module.scss'
import { objectsAnimation } from './recent-objects.animation'

const RecentObjects: FC = () => {
	const { data: recentObjects, isLoading } = useQuery(
		['get recent objects'],
		() => ObjectService.getAll()
	)

	return (
		<section className={styles.section}>
			<SubHeading title='недавние объекты' />
			<AnimatePresence>
				{isLoading ? (
					<div className={styles.loading}>
						<Loading />
					</div>
				) : (
					<motion.div
						className={styles.objects}
						variants={objectsAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{recentObjects
							?.slice(0, 4)
							.map(object => (
								<Object key={object._id} object={object} label='смотреть' />
							))}
					</motion.div>
				)}
			</AnimatePresence>

			<Link href={instagram} target='_blank'>
				больше работ у нас в Instagram
			</Link>
		</section>
	)
}

export default RecentObjects
