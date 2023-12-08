import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'

import styles from './OfferMonth.module.scss'
import Offer from './offer/Offer'
import { offerData } from './offer/offer.data'

const OfferMonth: FC = () => {
	return (
		<section id='events' className={styles.section}>
			<SubHeading title='предложение месяца' />
			<Offer offer={offerData} />
		</section>
	)
}

export default OfferMonth
