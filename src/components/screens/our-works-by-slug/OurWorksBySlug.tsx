import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import PageBlock from '@/components/ui/page-block/PageBlock'
import Route from '@/components/ui/route/Route'
import SendRequest from '@/components/ui/send-request/SendRequest'

import { IObject } from '@/shared/types/object.types'

import { instagram } from '@/config/communication.config'
import { getImageUrl } from '@/config/url.config'

import styles from './OurWorksBySlug.module.scss'
import InfoAboutObject from './info-about-object/InfoAboutObject'

const OurWorksBySlug: FC<{
	isLoading: boolean
	object: IObject | undefined
}> = ({ isLoading, object }) => {
	return (
		<>
			<Route name={object?.name} />
			<section className={styles.section}>
				<PageBlock
					title={isLoading ? 'Название проекта' : object?.name}
					text={object?.description}
				/>
				<div className={styles.info}>
					<InfoAboutObject object={object} />
				</div>
				<div className={styles.photo}>
					<Image
						src={getImageUrl(object ? object?.images[0] : '')}
						alt={isLoading ? 'Картинка' : object?.name || ''}
						fill
					/>
				</div>
				<Link href={instagram}>больше работ у нас в Instagram</Link>
			</section>
			<SendRequest />
		</>
	)
}

export default OurWorksBySlug
