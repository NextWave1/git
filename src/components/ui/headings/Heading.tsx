import { FC } from 'react'

import styles from './Headings.module.scss'
import { IHeading } from './heading.interface'

const Heading: FC<IHeading> = ({ title }) => {
	return <h2 className={styles.h2}>{title}</h2>
}

export default Heading
