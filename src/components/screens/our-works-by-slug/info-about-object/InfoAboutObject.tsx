import { FC } from 'react'

import { IObject } from '@/shared/types/object.types'

import { transformPrice } from '@/utils/price/transform-price'
import { transformTime } from '@/utils/transform-time.util'

import styles from './InfoAboutObject.module.scss'
import InfoItem from './info-item/InfoItem'

const InfoAboutObject: FC<{ object: IObject | undefined }> = ({ object }) => {
	return (
		<div className={styles.block}>
			<InfoItem
				title='время строительства'
				value={transformTime(object?.constructionTime)}
			/>
			<InfoItem title='бюджет' value={transformPrice(object?.budget)} />
			<InfoItem
				title='время проектирования'
				value={transformTime(object?.designTime)}
			/>
			<InfoItem title='площадь' value={`${object?.area} м²`} />
		</div>
	)
}

export default InfoAboutObject
