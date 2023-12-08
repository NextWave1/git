import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC, forwardRef } from 'react'

import styles from './Icon.module.scss'
import { iconVariants } from './icon-animation'
import { IIcon } from './icon.interface'

const MotionLink = motion(Link)

const Icon = forwardRef<HTMLLinkElement, { icon: IIcon; className?: string }>(
	({ icon, className, ...rest }, ref: any) => {
		return (
			<MotionLink
				href={icon.link}
				ref={ref}
				target='_blank'
				{...rest}
				variants={iconVariants}
				initial='hidden'
				animate='show'
				whileHover='hover'
				whileFocus='hover'
			>
				<Image
					src={icon.icon}
					width={5}
					height={5}
					alt={icon.name}
					draggable={false}
					className={`${className} ${styles.img}`}
				/>
			</MotionLink>
		)
	}
)

export default Icon
