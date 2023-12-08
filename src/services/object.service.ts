import { axiosClassic } from 'api/interceptors'

import { IObject } from '@/shared/types/object.types'

import { getObjectsUrl } from '@/config/api.config'

export const ObjectService = {
	async getAll() {
		const { data } = await axiosClassic.get<IObject[]>(getObjectsUrl(''))
		return data
	},

	async getAllUncompleted() {
		const { data } = await axiosClassic.get<IObject[]>(
			getObjectsUrl('/uncompleted')
		)
		return data
	},

	async getBySlug(slug: string) {
		const { data } = await axiosClassic.get<IObject>(
			getObjectsUrl(`/by-slug/${slug}`)
		)
		return data
	},
}
