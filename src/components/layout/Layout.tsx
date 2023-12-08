import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
