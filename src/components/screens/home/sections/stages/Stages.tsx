import { FC } from 'react'

import SubHeading from '@/components/ui/headings/SubHeading'

import styles from './Stages.module.scss'
import Block from './block/Block'
import { stages } from './stages.data'

const Stages: FC = () => {
	return (
		<section className={styles.wrapper}>
			<SubHeading title='Этапы строительства дома вашей мечты' />
			<div>
				<Block image='/Этапы строительства 1.jpg' stages={stages.slice(0, 2)} />
				<Block image='/Этапы строительства 2.jpg' stages={stages.slice(2, 5)} />
			</div>
		</section>
	)
}

export default Stages
