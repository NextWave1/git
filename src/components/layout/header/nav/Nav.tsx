import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react'

import NavLink from '@/components/ui/nav-link/NavLink'

import { links } from '@/config/nav.config'

import styles from './Nav.module.scss'
import { liVariants, navVariants } from './nav.animation'

const Nav: FC = () => {
	return (
		<nav>
			<motion.ul
				className={styles.nav}
				variants={navVariants}
				initial='hidden'
				animate='show'
				exit='hidden'
			>
				{links.map(item => (
					<motion.li
						className='T3'
						key={item.link}
						variants={liVariants}
						initial='hidden'
						animate='visible'
						exit='hidden'
						whileHover={{ y: -5 }}
					>
						<NavLink link={item.link} text={item.text} key={item.link} />
					</motion.li>
				))}
			</motion.ul>
		</nav>
	)
}

export default Nav
