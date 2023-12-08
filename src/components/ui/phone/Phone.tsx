import Link from 'next/link'
import { FC } from 'react'

import { formatPhone } from '@/utils/format-phone.util'

import { phoneNumber } from '@/config/communication.config'

import styles from './Phone.module.scss'

const Phone: FC = () => {
	return (
		<Link href={`tel:+${phoneNumber}`} className={styles.phone}>
			{formatPhone(phoneNumber)}
		</Link>
	)
}

export default Phone
