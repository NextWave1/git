import cn from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { forwardRef, useState } from 'react'

import checkMarkBlue from '@/assets/images/check-mark-blue.svg'
import checkMarkWhite from '@/assets/images/check-mark-white.svg'

import stylesError from '../Form.module.scss'
import { fieldAnimation } from '../field.animation'
import { ICheckBox } from '../form.interface'

import styles from './Checkbox.module.scss'

const Checkbox = forwardRef<HTMLInputElement, ICheckBox>(
	({ span, error, valueCheckbox, whiteMark = false, ...rest }, forwardRef) => {
		const [isChecked, setIsChecked] = useState(valueCheckbox)
		return (
			<motion.div className={styles.wrapper} variants={fieldAnimation}>
				<label>
					<div className={styles.input}>
						<input
							type='checkbox'
							ref={forwardRef}
							{...rest}
							onClick={() => setIsChecked(prev => !prev)}
						/>
						<Image
							src={whiteMark ? checkMarkWhite : checkMarkBlue}
							alt='check'
							className={cn({
								[styles.checked]: isChecked,
							})}
						/>
					</div>
				</label>
				<p className={styles.text}>
					{span}
					<Link href='/'> пользовательского соглашения</Link>
				</p>

				{error && <span className={stylesError.error}>{error.message}</span>}
			</motion.div>
		)
	}
)

export default Checkbox
