import cn from 'clsx'
import { FC } from 'react'

import styles from './Headings.module.scss'
import { IHeading } from './heading.interface'

const SubHeading: FC<IHeading> = ({ title, className }) => {
	return <h3 className={cn(styles.h3, className)}>{title}</h3>
}

export default SubHeading
