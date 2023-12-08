import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'

import SubHeading from '../headings/SubHeading'

import styles from './SendRequest.module.scss'
import Form from './form/Form'

const DynamicSubHeading = dynamic(() => import('../headings/SubHeading'), {
	ssr: false,
})

const DynamicForm = dynamic(() => import('./form/Form'), {
	ssr: false,
})

const SendRequest: FC = () => {
	return (
		<div className={styles.block}>
			<section className={styles.body}>
				<div>
					<DynamicSubHeading title='отправить заявку' />
					<p>
						Работаем для вас! Благодаря богатому опыту в строительном бизнесе,
						мы создали уникальный сервис для наших клиентов. Мы работаем по
						принципу «единого окна», где вы можете получить весь спектр услуг,
						связанный со строительством дома под ключ в Калининграде и области!
					</p>
				</div>
				<div className={styles.img}>
					<Image
						src='/Заявка.png'
						alt='отправить заявку'
						fill
						sizes='(max-width: 639px) 100vw, (max-width: 1599px) 50vw, 500px'
					/>
				</div>
				<DynamicForm />
			</section>
		</div>
	)
}

export default SendRequest
