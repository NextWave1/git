import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import InputMask from 'react-input-mask'

import styles from './Form.module.scss'
import { fieldAnimation } from './field.animation'
import { IField } from './form.interface'

const PhoneInput = forwardRef<HTMLInputElement, IField>(
	({ span, error, type = 'text', ...rest }, forwardRef: any) => {
		return (
			<motion.label className={styles.field} variants={fieldAnimation}>
				<span>{span}</span>
				<InputMask
					mask={'+7 (999) 999-99-99'}
					ref={forwardRef}
					type={type}
					{...rest}
				/>
				{error && <span className={styles.error}>{error.message}</span>}
			</motion.label>
		)
	}
)

export default PhoneInput
