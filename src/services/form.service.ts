import { axiosClassic } from 'api/interceptors'

import { IObject } from '@/shared/types/object.types'

import { getObjectsUrl } from '@/config/api.config'

export const FormService = {
	async getAll() {
		const { data } = await axiosClassic.get<IObject[]>(getObjectsUrl(''))
		return data
	},
}
