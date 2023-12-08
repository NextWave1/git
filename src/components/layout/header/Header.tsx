import { AnimatePresence, motion } from 'framer-motion'
import { FC, useEffect, useRef, useState } from 'react'

import Icon from '@/components/ui/icon/Icon'
import Logo from '@/components/ui/logo/Logo'
import Phone from '@/components/ui/phone/Phone'

import { useClickOutside } from '@/hooks/useClickOutside'

import { messengers } from '@/config/communication.config'

import styles from './Header.module.scss'
import Burger from './burger/Burger'
import { contactsVariants, contentVariants } from './header.animation'
import Nav from './nav/Nav'

const Header: FC = () => {
	const [burger, setBurger] = useState(false)
	const [content, setContent] = useState(false)
	const ref = useRef<HTMLDivElement>(null)
	const toggle = () => {
		setBurger(prev => !prev)
		if (window.innerWidth < 1000) setContent(prev => !prev)
	}
	const close = () => {
		if (window.innerWidth < 1600) setBurger(false)
		if (window.innerWidth < 1000) setContent(false)
	}
	useClickOutside(ref, () => {
		if (burger) setTimeout(() => close(), 100)
	})
	useEffect(() => {
		setBurger(window.innerWidth >= 1600)
		setContent(window.innerWidth >= 1000)
	}, [])

	return (
		<header>
			<div className={styles.header}>
				<Logo />
				<AnimatePresence>
					{content && (
						<motion.div
							className={styles.content}
							variants={contentVariants}
							initial='hidden'
							animate='show'
							exit='hidden'
							ref={ref}
						>
							{burger && <Nav />}
							<motion.div
								className={styles.contacts}
								variants={contactsVariants}
								initial='hidden'
								animate='show'
								exit='hidden'
							>
								{messengers.slice(0, 2).map(item => (
									<Icon icon={item} key={item.link} />
								))}
								<Phone />
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
				<Burger clickHandler={toggle} state={burger} />
			</div>
		</header>
	)
}

export default Header
