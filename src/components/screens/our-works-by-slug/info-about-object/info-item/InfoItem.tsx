import { FC } from 'react'

import styles from './InfoItem.module.scss'

const InfoItem: FC<{ title: string; value: string }> = ({ title, value }) => {
	return (
		<div className={styles.item}>
			<span>{title}</span>
			<span>{value}</span>
		</div>
	)
}

export default InfoItem
