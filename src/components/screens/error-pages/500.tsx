import { FC } from 'react'

import Heading from '@/components/ui/headings/Heading'

import Meta from '@/utils/meta/Meta'

import styles from './ErrorPages.module.scss'

const Page500: FC = () => {
	return (
		<Meta title='Страница не найдена'>
			<div className={styles.block}>
				<Heading title='500 - Произошла ошибка на стороне сервера' />
			</div>
		</Meta>
	)
}
export default Page500
