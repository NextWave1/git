import { useQuery } from '@tanstack/react-query'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'
import Loading from '@/components/ui/loading/Loading'

import { ReviewService } from '@/services/review.service'

import { instagram } from '@/config/communication.config'

import styles from './Reviews.module.scss'
import { getReviewUrl } from './get-review-url.util'
import { reviewAnimation, reviewsAnimation } from './reviews.animation'

const Reviews: FC = () => {
	const { data: reviews, isLoading } = useQuery(['get reviews'], () =>
		ReviewService.getAll()
	)

	return (
		<section id='reviews'>
			<SubHeading title='отзывы' className={styles.title} />
			<AnimatePresence>
				{isLoading ? (
					<Loading />
				) : (
					<motion.div
						className={styles.reviews}
						variants={reviewsAnimation}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
					>
						{reviews?.map(review => (
							<motion.div
								className={styles.img}
								key={review}
								variants={reviewAnimation}
							>
								<Image src={getReviewUrl(review)} alt='Отзыв' fill />
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
			<div className={styles.link}>
				<Link href={instagram} target='_blank'>
					показать другие отзывы
				</Link>
			</div>
		</section>
	)
}

export default Reviews
