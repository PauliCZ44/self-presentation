export async function welcomeInConsole() {
	let css = 'font-size: 1.25rem;'
	const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
	async function logAndSleep(message, css, sleepTime = 1200) {
		console.log(message, css)
		await sleep(sleepTime)
	}
	await logAndSleep('%cHello there! 👋', css)
	await logAndSleep(
		'%cI am Pavel Šťastný, a Front-end developer ⚛ from Czech Republic.',
		'font-weight: bold; font-size: 1.33rem;'
	)
	await logAndSleep('%cYou can look at the source code of this website', css)
	await logAndSleep(
		'%cPage is made with astro framework. Some of the UI elements were inspired by Hyperplexed coepepens.',
		'font-size: 1.1rem;'
	)
	await logAndSleep('%cI hope you like it! 🤩', css)
	await logAndSleep(
		'%cFeel free to change baseHue variable at the html element to see changes',
		'color: hotpink; font-size: 1.5rem;'
	)
	await logAndSleep(
		'%cIf you want to contact me, you can find my contact details on the bottom of the page. 📧',
		css
	)
}
