import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'
import PageBlock from '@/components/ui/page-block/PageBlock'
import Route from '@/components/ui/route/Route'
import SendRequest from '@/components/ui/send-request/SendRequest'

import { formatPhone } from '@/utils/format-phone.util'
import Meta from '@/utils/meta/Meta'

import { messengers, phoneNumber } from '@/config/communication.config'

import styles from './Contacts.module.scss'

const Contacts: FC = () => {
	return (
		<Meta
			title='Контакты'
			description='Можете связать с нами удобным для вас способом!'
		>
			<Route />
			<section className={styles.section}>
				<PageBlock title='Контакты' text=''>
					Работаем на рынке уже более 10 лет.
					<br />
					Большой опыт проведения работ, позволяет нам строить качественно и в
					рамках бюджета.
					<br />
					Мы всегда держим вас в курсе выполненных работ и этапов строительства.
					<br />
					Наши руководители имеют обширный опыт, а сотрудники знают, что
					качество - это залог доверительных отношений.
				</PageBlock>
				<div className={styles.contactsBlock}>
					<div className={styles.img}>
						<Image src='/Контакты.jpg' alt='Контакты' fill />
					</div>
					<div className={styles.contacts}>
						<Link href={`tel:+${phoneNumber}`}>{formatPhone(phoneNumber)}</Link>
						<div className={styles.links}>
							{messengers
								.slice()
								.reverse()
								.map(icon => (
									<Icon icon={icon} key={icon.name} className={styles.link} />
								))}
						</div>
					</div>
				</div>
			</section>
			<SendRequest />
		</Meta>
	)
}

export default Contacts
