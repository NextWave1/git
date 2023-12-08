import { getObjectUrl } from '@/config/url.config'

interface IRoute {
	title: string
	link: string
}

const switchCase = (string: string): IRoute => {
	switch (string) {
		case 'our-works':
			return {
				title: 'Наши работы',
				link: '/our-works',
			}
		case 'contacts':
			return {
				title: 'Контакты',
				link: '/contacts',
			}
		case 'prices':
			return {
				title: 'Цены',
				link: '/prices',
			}
		default:
			return {
				title: 'Главная',
				link: '/',
			}
	}
}

export const createArray = (path: string, name?: string) => {
	const array: string[] = path.split('/')
	const newArray: IRoute[] = []

	array.forEach(string => {
		newArray.push(switchCase(string))
	})
	if (name) {
		newArray.pop()
		newArray.push({
			title: name,
			link: getObjectUrl(array[array.length - 1]),
		})
	}
	return newArray
}
