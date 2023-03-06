import './SplitView.css'

function SplitView({ children }: any) {
	return (
		<>
			<div class="main-wrapper">
				<div class="main left">{children}</div>
			</div>
			<div class="divider">x</div>
			<div class="main-wrapper right">
				<div class="main right">{children}</div>
			</div>
		</>
	)
}

export default SplitView
