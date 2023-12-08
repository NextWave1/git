import { FC } from 'react'

import Heading from '@/components/ui/headings/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './ErrorPages.module.scss'

const Page404: FC = () => {
	return (
		<Meta title='Страница не найдена'>
			<div className={styles.block}>
				<Heading title='404 - Страница не найдена' />
			</div>
		</Meta>
	)
}

export default Page404
