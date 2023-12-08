import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IObject } from '@/shared/types/object.types'

import { getImageUrl, getObjectUrl } from '@/config/url.config'

import styles from './Object.module.scss'

const DynamicSubHeading = dynamic(
	() => import('@/components/ui/headings/SubHeading'),
	{
		ssr: false,
	}
)

const Object: FC<{ object: IObject }> = ({ object }) => {
	return (
		<div className={styles.object}>
			<div className={styles.photo}>
				<Image src={getImageUrl(object.images[0])} alt={object.name} fill />
			</div>
			<div className={styles.info}>
				<div>
					<DynamicSubHeading title={object.name} />
					<p>{object.description}</p>
				</div>
				<Link href={getObjectUrl(object.slug)}>смотреть</Link>
			</div>
		</div>
	)
}

export default Object
