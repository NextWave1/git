import { motion } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'

import loading from '@/assets/loading.svg'

import { loadingAnimation } from './loading.animation'

const Loading: FC = () => {
	return (
		<motion.div
			className='flex justify-center'
			variants={loadingAnimation}
			initial='hidden'
			animate='show'
			exit='hidden'
		>
			<Image src={loading} alt='Загрузка...' />
		</motion.div>
	)
}

export default Loading
