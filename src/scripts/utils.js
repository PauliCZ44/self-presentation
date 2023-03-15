export function debounce(cb, delay = 100) {
	let timeout

	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}
