<script lang="ts">
	/**
	 *ASCII torus — luminance-mapped spinning donut, ported from
	 * a1k0n's canonical donut.c and made grid-size agnostic.
	 */
	let {
		cols = 44,
		rows = 14,
		fps = 20
	}: {
		cols?: number
		rows?: number
		fps?: number
	} = $props()

	const CHARS = '.,-~:;=!*#$@'

	function frame(A: number, B: number): string {
		const buffer = new Float64Array(cols * rows) // depth
		const shade = new Uint8Array(cols * rows) // char index
		const cosA = Math.cos(A)
		const sinA = Math.sin(A)
		const cosB = Math.cos(B)
		const sinB = Math.sin(B)
		const cx = cols / 2
		const cy = rows / 2
		const ampX = cols * 0.385
		const ampY = rows * 0.62

		for (let j = 0; j < 6.28; j += 0.07) {
			const d = Math.cos(j)
			const f = Math.sin(j)
			for (let i = 0; i < 6.28; i += 0.02) {
				const c = Math.sin(i)
				const l = Math.cos(i)
				const h = d + 2
				const D = 1 / (c * h * sinA + f * cosA + 5)
				const t = c * h * cosA - f * sinA
				const X = Math.floor(cx + ampX * D * (l * h * cosB - t * sinB))
				const Y = Math.floor(cy + ampY * D * (l * h * sinB + t * cosB))
				if (Y < 0 || Y >= rows || X < 0 || X >= cols) continue
				const N = Math.floor(8 * ((f * sinA - c * d * cosA) * cosB - c * d * sinA - f * cosA - l * cosB * sinB))
				if (N < 0) continue
				const p = Y * cols + X
				if (D > buffer[p]) {
					buffer[p] = D
					shade[p] = N
				}
			}
		}

		let out = ''
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x < cols; x++) {
				const p = y * cols + x
				out += buffer[p] ? CHARS[shade[p] % CHARS.length] : ' '
			}
			out += '\n'
		}
		return out
	}

	let art = $state(frame(0.8, 0.4))

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

		let A = 0.8
		let B = 0.4
		let last = 0
		let raf = 0

		const loop = (now: number) => {
			if (now - last >= 1000 / fps) {
				last = now
				A += 0.045
				B += 0.021
				art = frame(A, B)
			}
			raf = requestAnimationFrame(loop)
		}
		raf = requestAnimationFrame(loop)

		return () => cancelAnimationFrame(raf)
	})
</script>

<pre class="select-none font-mono text-[10px] leading-[1.18] text-accent max-sm:text-[8px]">{art}</pre>
