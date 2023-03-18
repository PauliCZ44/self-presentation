export function debounce(cb, delay = 100) {
	let timeout

	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}

export function throttle(cb, delay = 100) {
	let wait = false
	let storedArgs = null

	function checkStoredArgs() {
		if (storedArgs == null) {
			wait = false
		} else {
			cb(...storedArgs)
			storedArgs = null
			setTimeout(checkStoredArgs, delay)
		}
	}

	return (...args) => {
		if (wait) {
			storedArgs = args
			return
		}

		cb(...args)
		wait = true
		setTimeout(checkStoredArgs, delay)
	}
}
