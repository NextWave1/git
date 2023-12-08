export const transformTime = (time: number | undefined) =>
	`${time} ${switchDays(String(time).slice(-1))}`

const switchDays = (number: string) => {
	switch (number) {
		case '1':
			return 'день'
		case '2':
		case '3':
		case '4':
			return 'дня'
		default:
			return 'дней'
	}
}
