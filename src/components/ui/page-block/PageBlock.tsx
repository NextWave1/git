import { FC, ReactNode } from 'react'

import Heading from '../headings/Heading'

import styles from './PageBlock.module.scss'

const PageBlock: FC<{
	title: string | undefined
	text: string | undefined
	children?: ReactNode
}> = ({ text, title, children }) => {
	return (
		<div className={styles.block}>
			<Heading title={title} />
			<p>
				{text}
				{children}
			</p>
		</div>
	)
}

export default PageBlock
