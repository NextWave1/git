import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { ObjectService } from '@/services/object.service'

import styles from './Objects.module.scss'
import Object from './object/Object'

const Objects: FC = () => {
	const { data: objects, isLoading } = useQuery(['get objects'], () =>
		ObjectService.getAll()
	)
	return (
		<div className={styles.objects}>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				objects
					?.slice(0, 4)
					.map(object => <Object key={object._id} object={object} />)
			)}
		</div>
	)
}

export default Objects
