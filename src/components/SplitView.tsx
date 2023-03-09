import './SplitView.css'
import { useEffect } from 'preact/hooks'

function SplitView({ children }: any) {
	useEffect(() => {
		window.addEventListener('click', (e) => {
			console.log(e)
			window.document.body.style.setProperty('--splitter', e.clientX + 'px')
		})
		return () => {
			// Optional: Any cleanup code
		}
	}, [])
	return (
		<>
			<main class="main">{children}</main>
			<div class="divider">x</div>
		</>
	)
}

export default SplitView
