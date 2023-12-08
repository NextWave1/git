export const transformPrice = (price: number | undefined) => {
	const priceString = String(price)

	if (priceString.length < 4) return `${price} ₽`
	else {
		let newPrice: string[] = []
		priceString
			.split('')
			.reverse()
			.forEach((value, index) => {
				newPrice.unshift(value)
				if ((index + 1) % 3 === 0) newPrice.unshift(' ')
			})
		return `${newPrice.join('')} ₽`
	}
}
