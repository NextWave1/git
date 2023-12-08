import { FC } from 'react'

import Icon from '@/components/ui/icon/Icon'
import Phone from '@/components/ui/phone/Phone'

import { messengers } from '@/config/communication.config'

import styles from './Contacts.module.scss'

const Contacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.messengers}>
				{messengers
					.slice()
					.reverse()
					.map(item => (
						<Icon icon={item} key={item.link} />
					))}
			</div>
			<Phone />
		</div>
	)
}

export default Contacts
