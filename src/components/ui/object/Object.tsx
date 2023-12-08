import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IObject } from '@/shared/types/object.types'

import { getImageUrl, getObjectUrl } from '@/config/url.config'

import SmallHeading from '../headings/SmallHeading'

import styles from './Object.module.scss'
import { objectAnimation } from './object.animation'

const Object: FC<{ object: IObject; label: string }> = ({ object, label }) => {
	return (
		<motion.div className={styles.object} variants={objectAnimation}>
			<div className={styles.img}>
				<Image src={getImageUrl(object.images[0])} alt={object.name} fill />
			</div>
			<SmallHeading title={object.name} />
			<p>{object.description}</p>
			<Link href={getObjectUrl(object.slug)}>{label}</Link>
		</motion.div>
	)
}

export default Object
