import cn from 'clsx'
import { FC } from 'react'

import styles from './Headings.module.scss'
import { IHeading } from './heading.interface'

const SmallHeading: FC<IHeading> = ({ title, className }) => {
	return <h4 className={cn(styles.h4, className)}>{title}</h4>
}

export default SmallHeading
