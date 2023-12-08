import Link from 'next/link'
import { FC } from 'react'

import styles from './DopInfo.module.scss'

const DopInfo: FC = () => {
	return (
		<div className={styles.dopInfo}>
			<div>
				<Link href='/' className={styles.link}>
					Пользовательское соглашение
				</Link>
				<span>
					Сайт разработан студией{' '}
					<Link href='/' className={styles.link}>
						NextWave IT Group
					</Link>
				</span>
			</div>
		</div>
	)
}

export default DopInfo
