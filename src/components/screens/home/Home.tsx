import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import SendRequest from '@/components/ui/send-request/SendRequest'

import Meta from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import Estimate from './sections/estimate/Estimate'
import MainSection from './sections/main-section/MainSection'
import ObjectRightNow from './sections/object-right-now/ObjectRightNow'
import OfferMonth from './sections/offer-month/OfferMonth'
import Prices from './sections/prices/Prices'
import RecentObjects from './sections/recent-objects/RecentObjects'
import Reviews from './sections/reviews/Reviews'
import SignUpForTour from './sections/sign-up-for-tour/SignUpForTour'
import Stages from './sections/stages/Stages'
import WhyChooseUs from './sections/why-choose-us/WhyChooseUs'

const Home: FC = () => {
	return (
		<Meta title='Главная' description='Мы построим дом вашей мечты'>
			<div className={styles.main}>
				<MainSection />
				<OfferMonth />
				<Prices />
				<Stages />
				<Estimate />
				<RecentObjects />
				<ObjectRightNow />
				<SignUpForTour />
				<WhyChooseUs />
				<Reviews />
				<SendRequest />
			</div>
		</Meta>
	)
}

export default Home
