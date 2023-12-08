export const formatPhone = (phone: number) => {
	const number = phone.toString()

	return `${number.slice(0, 2)}-${number.slice(2, 4)}-${number.slice(4, 6)}`
}
