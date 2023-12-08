import { axiosClassic } from 'api/interceptors'

import { getReviewsUrl } from '@/config/api.config'

export const ReviewService = {
	async getAll() {
		const { data } = await axiosClassic.get<string[]>(getReviewsUrl(''))
		return data
	},
}
