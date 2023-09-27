import { createNoise3D } from 'simplex-noise'
import { debounce, throttle } from './utils'
import { CONFIG } from '../constants'

const { PI, cos, sin, abs } = Math
const TAU = 2 * PI

const rand = (n) => n * Math.random()
const randRange = (n) => n - rand(2 * n)
const fadeInOut = (t, m) => {
	let hm = 0.5 * m
	return abs(((t + hm) % m) - hm) / hm
}
const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2

const getParticleCount = () => {
	if (window.innerWidth < 768) {
		return 50
	}
	const scaled = 100 + parseInt(window.innerWidth * 0.05)
	return scaled > 150 ? 150 : scaled
}
let particleCount = getParticleCount()
const particlePropCount = 9
const particlePropsLength = particleCount * particlePropCount
const rangeY = window.innerHeight * 0.2
const baseTTL = 150
const rangeTTL = 150
const baseSpeed = 0.07
const rangeSpeed = 0.3
const baseRadius = 4
const rangeRadius = 3
let baseHue = CONFIG.baseHue - 10
const rangeHue = 110
const noiseSteps = 25
const xOff = 0.00225
const yOff = 0.005
const zOff = 0.00025
const backgroundColor = 'hsla(' + (baseHue + 30) + ',52%,10%,1)'

const circle = {
	x: 0,
	y: 0,
	radius: 150,
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
let noise3D
let particleProps
let gradient 

function setup() {
	if (noise3D === undefined) {
		noise3D = createNoise3D()
	}
	createCanvas()
	resize()
	initParticles()
	draw()

	const htmlElement = window.document.querySelector('html')
	baseHue = htmlElement.style.getPropertyValue('--baseHue')

	const styleObserver = new MutationObserver((mutations) => {
		const currentValue = mutations[0].target.style.getPropertyValue('--baseHue')

		if (currentValue !== baseHue) {
			baseHue = currentValue
			resize()
		}
	})

	styleObserver.observe(htmlElement, {
		attributes: true,
		attributeFilter: ['style'],
	})
}

function initParticles() {
	tick = 0
	particleProps = new Float32Array(particlePropsLength)

	let i
	for (i = 0; i < particlePropsLength; i += particlePropCount) {
		initParticle(i)
	}
}

function initParticle(i) {
	let x, y, vx, vy, life, ttl, speed, radius, hue

	x = rand(canvas.a.width)
	y = center[1] + randRange(canvas.a.height / 3)
	vx = 0
	vy = 0
	life = 0
	ttl = baseTTL + rand(rangeTTL)
	speed = baseSpeed + rand(rangeSpeed)
	radius = baseRadius + rand(rangeRadius)
	hue = baseHue + rand(rangeHue)

	particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
}

function drawParticles() {
	for (let i = 0; i < particlePropsLength; i += particlePropCount) {
		updateParticle(i)
	}
}

function updateParticle(i) {
	let i2 = 1 + i,
		i3 = 2 + i,
		i4 = 3 + i,
		i5 = 4 + i,
		i6 = 5 + i,
		i7 = 6 + i,
		i8 = 7 + i,
		i9 = 8 + i
	let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue

	x = particleProps[i]
	y = particleProps[i2]
	n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
	vx = lerp(particleProps[i3], cos(n), 1)
	vy = lerp(particleProps[i4], sin(n), 1)
	life = particleProps[i5]
	ttl = particleProps[i6]
	speed = particleProps[i7]
	x2 = x + vx * speed
	y2 = y + vy * speed
	radius = particleProps[i8]
	hue = particleProps[i9]

	drawParticle(x, y, x2, y2, life, ttl, radius, hue)

	life++

	particleProps[i] = x2
	particleProps[i2] = y2
	particleProps[i3] = vx
	particleProps[i4] = vy
	particleProps[i5] = life
	;(checkBounds(x, y) || life > ttl) && initParticle(i)
}

function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
	ctx.a.save()
	ctx.a.lineCap = 'round'
	ctx.a.lineWidth = radius
	ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
	ctx.a.beginPath()
	ctx.a.moveTo(x, y)
	ctx.a.lineTo(x2, y2)
	ctx.a.stroke()
	ctx.a.closePath()
	ctx.a.restore()
}

function checkBounds(x, y) {
	return x > canvas.a.width || x < 0 || y > canvas.a.height || y < 0
}

const lastMousePosition = { x: 0, y: 0 }

function createCanvas() {
	container = document.querySelector('.content--canvas')
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

	gradient = ctx.b.createLinearGradient(0, 0, canvas.b.width, canvas.b.height)
	gradient.addColorStop(0, `hsla(${baseHue || 0}, 100%, 50%, 0.25)`)
	gradient.addColorStop(0.5, `hsla(${baseHue || 0 + 30}, 100%, 50%, 0.3)`)
	gradient.addColorStop(1, `hsla(${baseHue || 0 + 60}, 100%, 50%, 0.25)`)

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

	// function updateCircleSpringY(event) {
	// 	circle.springY = lastMousePosition.y + event.target.scrollTop - window.innerHeight
	// }

	// document.body.addEventListener('scroll', throttle(updateCircleSpringY, 20))
}

const lastSize = { width: 0, height: 0 }
function resize() {
	const { width, height } = document.getElementById('home').getBoundingClientRect()
	// round to avoid unnecessary resize
	const current = {
		width: Math.ceil(width),
		height: Math.ceil(height),
	}
	// Avoid esize when size is the same or changed less than a pixel
	if (lastSize.width === current.width && lastSize.height === current.height) return
	lastSize.width = current.width
	lastSize.height = current.height
	// const res = document.getElementById('resizer')
	// const logger = document.getElementById('logger')
	// res.textContent = parseInt(res.textContent) + 1
	// get width and height of an elemetn with id "home"
	// logger.textContent = `width: ${current.width}, height: ${current.height}, resizing ${resizing}`

	particleCount = getParticleCount()
	canvas.a.width = current.width
	canvas.a.height = current.height

	ctx.a.drawImage(canvas.b, 0, 0)

	canvas.b.width = current.width
	canvas.b.height = current.height

	ctx.b.drawImage(canvas.a, 0, 0)
	center[0] = parseInt(0.5 * canvas.a.width)
	center[1] = parseInt(0.5 * canvas.a.height)

	gradient = ctx.b.createLinearGradient(0, 0, canvas.b.width, canvas.b.height)
	gradient.addColorStop(0, `hsla(${baseHue || 0}, 100%, 50%, 0.25)`)
	gradient.addColorStop(0.5, `hsla(${baseHue || 0 + 30}, 100%, 50%, 0.3)`)
	gradient.addColorStop(1, `hsla(${baseHue || 0 + 60}, 100%, 50%, 0.25)`)

	initParticles()
}

function renderGlow() {
	ctx.b.save()
	ctx.b.filter = 'blur(8px) brightness(200%)'
	ctx.b.globalCompositeOperation = 'lighter'
	ctx.b.drawImage(canvas.a, 0, 0)
	ctx.b.restore()

	// ctx.b.save()
	// ctx.b.filter = 'blur(4px) brightness(200%)'
	// ctx.b.globalCompositeOperation = 'lighter'
	// ctx.b.drawImage(canvas.a, 0, 0)
	// ctx.b.restore()
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
	ctx.b.filter = 'blur(150px) brightness(250%) hue-rotate(33deg)'
	ctx.b.globalCompositeOperation = 'lighter'

	// Draw semi-transparent white circle at mouse position
	ctx.b.beginPath()
	ctx.b.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)



	ctx.b.fillStyle = gradient
	ctx.b.fill()
	ctx.b.restore()
}

function renderToScreen() {
	ctx.b.save()
	ctx.b.globalCompositeOperation = 'lighter'
	ctx.b.drawImage(canvas.a, 0, 0)
	ctx.b.restore()
}

var updateId,
    previousDelta = 0,
    fpsLimit = 30;

function draw(currentDelta) {
	updateId = window.requestAnimationFrame(draw)
	var delta = currentDelta - previousDelta;

    if (fpsLimit && delta < 1000 / fpsLimit) {
        return;
    }

	tick++
	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height)
	ctx.b.fillStyle = backgroundColor
	ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height)
	drawParticles()
	renderGlow()
	renderToScreen()
	drawCursor()

	previousDelta = currentDelta;
}

window.addEventListener('load', setup)
window.addEventListener('resize', debounce(resize, 750))
