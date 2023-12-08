import { FC } from 'react'

import NavLink from '@/components/ui/nav-link/NavLink'

import { links } from '@/config/nav.config'

import styles from './Nav.module.scss'

const Nav: FC = () => {
	return (
		<nav>
			<ul className={styles.nav}>
				{links.map(item => (
					<li className='T3' key={item.link}>
						<NavLink link={item.link} text={item.text} key={item.link} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
