import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC } from 'react'

import PageBlock from '@/components/ui/page-block/PageBlock'
import Route from '@/components/ui/route/Route'
import SendRequest from '@/components/ui/send-request/SendRequest'

import Meta from '@/utils/meta/Meta'

import styles from './Prices.module.scss'

const DynamicPriceBlock = dynamic(
	() => import('@/components/ui/price-block/PriceBlock'),
	{
		ssr: false,
	}
)

const Prices: FC = () => {
	return (
		<Meta
			title='Цены'
			description='Мы предлагаем самые приятные цены на рынке!'
		>
			<Route />
			<section className={styles.section}>
				<PageBlock
					title='Цена за м² и сроки строительства'
					text='Мы построим дом вашей мечты. Мы построим дом вашей мечты. Мы построим дом вашей мечты. Мы построим дом вашей мечты'
				/>
				<div>
					<DynamicPriceBlock />
					<div className={styles.img}>
						<Image src='/Цены за м2.jpeg' alt='Цены' fill />
					</div>
				</div>
			</section>
			<SendRequest />
		</Meta>
	)
}

export default Prices
