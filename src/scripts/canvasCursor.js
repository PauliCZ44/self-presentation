import { debounce, throttle } from './utils'
import { CONFIG } from '../constants'
// const backgroundColor = 'hsla(267,52%,7%,1)'
const backgroundColor = 'hsla(' + CONFIG.baseHue + ',52%,10%,1)'

const circle = {
	x: 0,
	y: 0,
	radius: 200,
	tension: 0.1,
	friction: 0.45,
	springX: 0,
	springY: 0,
	velocityX: 0,
	velocityY: 0,
}

let container
let canvas
let ctx
let center
let tick

function setup() {
	createCanvas()
	resize()
	draw()
}

const lastMousePosition = { x: 0, y: 0 }

function createCanvas() {
	container = document.querySelector('.bg-cursor')
	canvas = {
		a: document.createElement('canvas'),
		b: document.createElement('canvas'),
	}
	canvas.b.style = `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	`
	container.appendChild(canvas.b)
	ctx = {
		a: canvas.a.getContext('2d', { alpha: false }),
		b: canvas.b.getContext('2d', { alpha: false }),
	}
	center = []

	function updateCircle(e) {
		const rect = canvas.b.getBoundingClientRect()
		circle.springX = e.clientX - rect.left
		circle.springY = e.clientY - rect.top
		lastMousePosition.y = e.clientY
	}

	window.addEventListener('pointermove', (e) => {
		// Get mouse position relative to canvas
		updateCircle(e)
	})

	window.addEventListener('pointerdown', (e) => {
		// Get mouse position relative to canvas
		updateCircle(e)
	})

	window.addEventListener('pointerup', (e) => {
		setTimeout(() => {
			updateCircle(e)
		}, 10)
	})
}

function resize() {
	const { innerWidth, innerHeight } = window
	canvas.a.width = innerWidth
	canvas.a.height = innerHeight

	ctx.a.drawImage(canvas.b, 0, 0)

	canvas.b.width = innerWidth
	canvas.b.height = innerHeight

	ctx.b.drawImage(canvas.a, 0, 0)
	center[0] = parseInt(0.5 * canvas.a.width)
	center[1] = parseInt(0.5 * canvas.a.height)
}

function renderGlow() {
	ctx.b.save()
	ctx.b.filter = 'blur(8px) brightness(200%)'
	ctx.b.globalCompositeOperation = 'lighter'
	ctx.b.drawImage(canvas.a, 0, 0)
	ctx.b.restore()

	ctx.b.save()
	ctx.b.filter = 'blur(4px) brightness(200%)'
	ctx.b.globalCompositeOperation = 'lighter'
	ctx.b.drawImage(canvas.a, 0, 0)
	ctx.b.restore()
}

function drawCursor() {
	// Calculate spring force
	let dx = circle.springX - circle.x
	let dy = circle.springY - circle.y
	let fx = dx * circle.tension
	let fy = dy * circle.tension

	// Apply spring force
	circle.velocityX += fx
	circle.velocityY += fy
	circle.velocityX *= circle.friction
	circle.velocityY *= circle.friction
	circle.x += circle.velocityX
	circle.y += circle.velocityY
	ctx.b.save()
	ctx.b.filter = 'blur(120px) brightness(150%) hue-rotate(33deg)'
	ctx.b.globalCompositeOperation = 'lighter'

	// Draw semi-transparent white circle at mouse position
	ctx.b.beginPath()
	ctx.b.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)

	const gradient = ctx.b.createLinearGradient(-15, -30, canvas.b.width, canvas.b.height)
	gradient.addColorStop(0, 'hsla(210, 100%, 50%, 0.15)')
	gradient.addColorStop(0.5, 'hsla(230, 100%, 50%, 0.15)')
	gradient.addColorStop(1, 'hsla(270, 100%, 50%, 0.15)')

	ctx.b.fillStyle = gradient
	ctx.b.fill()
	ctx.b.restore()
}

function draw() {
	tick++
	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height)
	ctx.b.fillStyle = backgroundColor
	ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height)
	renderGlow()
	drawCursor()

	window.requestAnimationFrame(draw)
}

window.addEventListener('load', setup)
window.addEventListener('resize', debounce(resize, 750))
