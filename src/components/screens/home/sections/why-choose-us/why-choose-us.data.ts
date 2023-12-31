interface IReason {
	title: string
	description: string
}

export interface IBlockReasons {
	reasons: IReason[]
	img: string
}

export const whyChooseUs: IBlockReasons[] = [
	{
		reasons: [
			{
				title: 'Точно в срок',
				description:
					'Мы строго придерживаемся установленных планов и сроков исполнения',
			},
			{
				title: 'Качество',
				description:
					'Мы даем гарантию на все выполненные нами работы и поставленные материалы',
			},
		],
		img: '/Почему выбирают нас 1.jpg',
	},
	{
		reasons: [
			{
				title: 'Профессионализм',
				description:
					'К работе допускаются только сотрудники имеющие соответствующую подготовку',
			},
			{
				title: 'Надежность',
				description:
					'Мы используем проверенные инструменты и сотрудничаем с надежными поставщиками',
			},
		],
		img: '/Почему выбирают нас 2.jpg',
	},
	{
		reasons: [
			{
				title: 'Еженедельная отчетность',
				description:
					'Еженедельно отправляем фото и видео по строительству вашего дома и отчеты по финансам',
			},
			{
				title: 'Гарантия по договору',
				description:
					'Предоставляем гарантию до 5 лет на все выполненные работы. ',
			},
		],
		img: '/Почему выбирают нас 3.jpg',
	},
]
