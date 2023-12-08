import { RefObject, useEffect } from 'react'

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	callback: () => void
) => {
	const handleClick = (e: Event) => {
		if (ref.current && e.target !== ref.current) {
			callback()
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		document.addEventListener('touchstart', handleClick)
		return () => {
			document.removeEventListener('mousedown', handleClick)
			document.removeEventListener('touchstart', handleClick)
		}
	}, [ref, callback])
}
