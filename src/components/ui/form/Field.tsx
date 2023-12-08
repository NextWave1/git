import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import styles from './Form.module.scss'
import { fieldAnimation } from './field.animation'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ span, error, type = 'text', textarea = false, ...rest },
		forwardRef: any
	) => {
		return (
			<motion.label className={styles.field} variants={fieldAnimation}>
				<span>{span}</span>
				{textarea ? (
					<textarea ref={forwardRef} {...rest} />
				) : (
					<input ref={forwardRef} type={type} {...rest} />
				)}

				{error && <span className={styles.error}>{error.message}</span>}
			</motion.label>
		)
	}
)

export default Field
