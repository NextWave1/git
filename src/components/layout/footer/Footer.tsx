import { FC } from 'react'

import Logo from '@/components/ui/logo/Logo'

import styles from './Footer.module.scss'
import Contacts from './contacts/Contacts'
import DopInfo from './dop-info/DopInfo'
import Nav from './nav/Nav'

const Footer: FC = () => {
	return (
		<footer>
			<div className={styles.content}>
				<div>
					<Logo />
					<Nav />
				</div>
				<Contacts />
			</div>
			<DopInfo />
		</footer>
	)
}

export default Footer
