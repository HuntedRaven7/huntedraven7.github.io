<script lang="ts">
	import { site, heroPills, type PanelId } from '$lib/content'

	function openPanel(id: PanelId) {
		window.dispatchEvent(new CustomEvent('open-panel', { detail: id }))
	}

	function openComments() {
		window.dispatchEvent(new CustomEvent('open-comments'))
	}

	/* ── typed console ─────────────────────────────────────────── */
	type Line = { prompt: boolean; text: string }

	const script: Line[] = [
		{ prompt: true, text: 'whoami' },
		{ prompt: false, text: 'quinn — container nerd, rootless by design' },
		{ prompt: true, text: 'systemctl --user status side-projects.target' },
		{ prompt: false, text: '● active — always at least one in flight' },
		{ prompt: true, text: 'podman run --rm -it next-idea' },
		{ prompt: false, text: 'ok. whatever you need built, I got you.' }
	]

	let visible = $state<Line[]>([])
	let partial = $state('')
	let partialPrompt = $state(true)
	let booted = $state(false)

	$effect(() => {
		booted = true

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			visible = script
			partial = ''
			return
		}

		let timer: ReturnType<typeof setTimeout>
		let li = 0
		let ci = 0

		const tick = () => {
			const line = script[li]

			if (!line) {
				// hold, wipe, loop
				timer = setTimeout(() => {
					visible = []
					partial = ''
					li = 0
					ci = 0
					tick()
				}, 3000)
				return
			}

			if (ci === 0) partialPrompt = line.prompt

			if (ci <= line.text.length) {
				partial = line.text.slice(0, ci)
				ci++
				timer = setTimeout(tick, 28 + Math.random() * 42)
			} else {
				visible = [...visible, line].slice(-5)
				partial = ''
				li++
				ci = 0
				timer = setTimeout(tick, 560)
			}
		}

		tick()
		return () => clearTimeout(timer)
	})
</script>

<section
	id="top"
	class="relative overflow-hidden bg-cover bg-center px-5 pt-16 pb-16 md:pt-24 md:pb-24 lg:pl-72 lg:pr-24 xl:pl-80 xl:pr-32"
	style="background-image: url('/hero-bg.jpg')"
>
	<!-- theme-aware scrim so text stays readable over the photo -->
	<div
		class="absolute inset-0 pointer-events-none"
		style="background:
			linear-gradient(180deg,
				color-mix(in srgb, var(--bg) 92%, transparent) 0%,
				color-mix(in srgb, var(--bg) 58%, transparent) 42%,
				color-mix(in srgb, var(--bg) 72%, transparent) 80%,
				color-mix(in srgb, var(--bg) 96%, transparent) 100%)"
	></div>

	<div class="relative mx-auto max-w-3xl text-center">
		<span class="inline-flex items-center gap-2 border border-line-strong bg-surface px-2.5 py-1.5 font-mono text-[11px] text-muted">
			<span class="relative flex size-2">
				<span class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60"></span>
				<span class="relative inline-flex size-2 rounded-full bg-accent"></span>
			</span>
			{site.domain} <span class="text-ink">— online</span>
		</span>

		<h1 class="mt-7 font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl">
			Container nerd<span class="text-accent">.</span>
		</h1>

		<p class="mt-3 -rotate-1 font-hand text-2xl text-muted md:text-3xl">always chasing the next side project</p>

		<p class="mx-auto mt-6 max-w-xl leading-relaxed text-muted md:text-lg">
			I build open-source things for the Linux desktop — Podman quadlets, BuildStream pipelines, FreeDesktop SDK experiments.
			Whatever you need built, I've got you covered.
		</p>

		<!-- typed console -->
		<div class="card mx-auto mt-10 max-w-xl p-0 text-left">
			<div class="flex items-center justify-between border-b border-line px-4 py-2.5">
				<p class="truncate font-mono text-[11px] text-muted">quinn@quinn-tarxz:<span class="text-accent">~/how-i-work</span></p>
				<div class="flex gap-1.5" aria-hidden="true">
					<span class="size-2 border border-line-strong"></span>
					<span class="size-2 border border-line-strong"></span>
					<span class="size-2 bg-accent"></span>
				</div>
			</div>
			<div class="min-h-[10.5rem] px-4 py-3.5 font-mono text-[12px] leading-relaxed sm:text-[13px]">
				{#if booted}
					{#each visible as line}
						<p class="break-words whitespace-pre-wrap">
							{#if line.prompt}
								<span class="font-bold text-accent">$ </span><span>{line.text}</span>
							{:else}
								<span class="text-muted">→ </span><span class="text-muted">{line.text}</span>
							{/if}
						</p>
					{/each}
					<p class="break-words whitespace-pre-wrap">
						{#if partialPrompt}
							<span class="font-bold text-accent">$ </span>
						{:else}
							<span class="text-muted">→ </span>
						{/if}
						<span class="whitespace-pre-wrap">{partial}</span><span class="cursor-blink text-accent">▊</span>
					</p>
				{:else}
					<p class="text-muted">booting…</p>
				{/if}
			</div>
		</div>

		<div class="mt-9 flex flex-wrap items-center justify-center gap-3">
			<button type="button" onclick={() => openPanel('projects')} class="btn btn-primary">See the projects →</button>
			<button onclick={openComments} class="btn btn-ghost">Drop a comment</button>
			<a href={site.github} target="_blank" rel="noopener noreferrer" class="btn btn-ghost px-4" aria-label="GitHub profile">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4.5">
					<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
				</svg>
			</a>
		</div>

		<!-- mono readout: the stack, bracket style -->
		<div class="mt-11 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
			{#each heroPills as pill}
				<span class="font-mono text-[11px] text-muted">[{pill}]</span>
			{/each}
		</div>
	</div>
</section>
