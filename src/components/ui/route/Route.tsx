import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Route.module.scss'
import { createArray } from './create-array.util'

const Route: FC<{ name?: string }> = ({ name }) => {
	const { asPath } = useRouter()
	const links = createArray(asPath, name)
	return (
		<div className={styles.block}>
			{links.map((link, index) => (
				<span key={link.title}>
					<Link href={link.link}>{link.title}</Link>
					{index !== links.length - 1 ? ' — ' : ''}
				</span>
			))}
		</div>
	)
}

export default Route
