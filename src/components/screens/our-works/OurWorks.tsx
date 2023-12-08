import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FC } from 'react'

import PageBlock from '@/components/ui/page-block/PageBlock'
import Route from '@/components/ui/route/Route'
import SendRequest from '@/components/ui/send-request/SendRequest'

import Meta from '@/utils/meta/Meta'

import { instagram } from '@/config/communication.config'

import styles from './OurWorks.module.scss'

const DynamicObjects = dynamic(() => import('./objects/Objects'), {
	ssr: false,
})

const OurWorks: FC = () => {
	return (
		<Meta title='Наши работы' description='Список всех наших работ!'>
			<Route />
			<section className={styles.section}>
				<PageBlock
					title='Наши работы'
					text='Мы построим дом вашей мечты. Мы построим дом вашей мечты. Мы построим дом вашей мечты. Мы построим дом вашей мечты'
				/>
				<DynamicObjects />
				<Link href={instagram}>больше работ у нас в Instagram</Link>
			</section>
			<SendRequest />
		</Meta>
	)
}

export default OurWorks
