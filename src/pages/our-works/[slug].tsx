import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import OurWorksBySlug from '@/components/screens/our-works-by-slug/OurWorksBySlug'

import { ObjectService } from '@/services/object.service'

import Meta from '@/utils/meta/Meta'

const OurWorksBySlugPage: NextPage = () => {
	const { query } = useRouter()
	const { isLoading, data: object } = useQuery(
		[`get object ${query.slug}`],
		() => ObjectService.getBySlug(String(query.slug)),
		{
			enabled: !!query.slug,
		}
	)

	return (
		<Meta
			title={isLoading ? 'Проект' : object?.name || ''}
			description={isLoading ? 'Описание проекта' : object?.description}
			image={isLoading ? '/main.jpg' : 'object.images'}
		>
			<OurWorksBySlug isLoading={isLoading} object={object} />
		</Meta>
	)
}

export default OurWorksBySlugPage
