import { ComponentChildren } from 'preact'
import { Signal } from '@preact/signals'

export default function Counter({
	children,
	count,
}: {
	children: ComponentChildren
	count: Signal<number>
}) {
	const add = () => count.value++
	const subtract = () => count.value--
	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	)
}
