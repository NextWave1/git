import cn from 'clsx'
import { FC, RefObject } from 'react'

import styles from './Burger.module.scss'

const Burger: FC<{
	clickHandler: () => void
	state: boolean
}> = ({ clickHandler, state }) => {
	return (
		<button
			className={cn(styles.burger, {
				[styles.open]: state,
			})}
			onClick={() => clickHandler()}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export default Burger
