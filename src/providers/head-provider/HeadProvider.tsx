import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import { accentColor, themeColor } from '@/config/constants.config'

import Favicons from './Favicons'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<Favicons />
				<meta name='theme-color' content={themeColor} />\
				<meta name='msapplication-navbutton-color' content={themeColor} />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content={themeColor}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
