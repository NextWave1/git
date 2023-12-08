import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link href='/' className='block'>
			<Image
				src={logo}
				width={132}
				height={60}
				alt='СтройДомСтиль'
				draggable={false}
				className={styles.logo}
				priority
			/>
		</Link>
	)
}

export default Logo
