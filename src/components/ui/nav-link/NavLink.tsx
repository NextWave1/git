import Link from 'next/link'
import { FC } from 'react'

import styles from './NavLink.module.scss'
import { INavLink } from './nav-link.interface'

const NavLink: FC<INavLink> = ({ link, text }) => {
	return (
		<Link href={link} className={styles.link}>
			{text}
		</Link>
	)
}

export default NavLink
