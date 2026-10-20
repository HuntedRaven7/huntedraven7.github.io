<script lang="ts">
	import { site, aboutCards, type PanelId } from '$lib/content'

	const panels: { id: PanelId; no: string; label: string }[] = [
		{ id: 'who', no: '01', label: 'Who' },
		{ id: 'numbers', no: '02', label: 'Numbers' },
		{ id: 'projects', no: '03', label: 'Projects' },
		{ id: 'faq', no: '04', label: 'Questions' },
		{ id: 'contact', no: '05', label: 'Contact' }
	]

	let active = $state<PanelId>('who')

	function openPanel(id: PanelId) {
		window.dispatchEvent(new CustomEvent('open-panel', { detail: id }))
	}

	$effect(() => {
		const onOpen = (e: Event) => {
			active = (e as CustomEvent<PanelId>).detail
		}
		window.addEventListener('open-panel', onOpen)
		return () => window.removeEventListener('open-panel', onOpen)
	})

	function goHome() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		openPanel('who')
	}

	let dark = $state(false)

	$effect(() => {
		dark = document.documentElement.classList.contains('dark')
	})

	function toggleTheme() {
		const next = !dark
		dark = next
		document.documentElement.classList.toggle('dark', next)
		try {
			localStorage.setItem('theme', next ? 'dark' : 'light')
		} catch {
			/* noop */
		}
	}

	function openComments() {
		window.dispatchEvent(new CustomEvent('open-comments'))
	}
</script>

<!-- Desktop: floating pill rail -->
<aside class="fixed top-1/2 left-5 z-40 hidden w-60 -translate-y-1/2 flex-col rounded-lg border border-line-strong bg-surface shadow-[6px_6px_0_0_var(--shadow-color)] lg:flex">
	<div>
		<button type="button" onclick={goHome} class="flex w-full items-center gap-3 border-b border-line px-4 py-4 text-left">
			<span class="grid size-9 place-items-center bg-accent font-display text-base font-bold text-accent-ink shadow-[3px_3px_0_0_var(--shadow-color)]">Q</span>
			<span class="min-w-0">
				<span class="block font-display text-sm font-bold tracking-tight">{site.name}<span class="text-accent">.</span></span>
				<span class="block truncate text-[11px] text-muted">{site.domain}</span>
			</span>
		</button>

		<nav class="p-2.5" aria-label="Sections">
			{#each panels as s}
				<button
					type="button"
					onclick={() => openPanel(s.id)}
					class={`flex w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm transition ${active === s.id ? 'border-line-strong bg-surface-2 font-medium text-ink' : 'border-transparent text-muted hover:bg-surface-2/60 hover:text-ink'}`}
					aria-current={active === s.id ? 'true' : undefined}
				>
					<span class={`font-display text-[10px] font-bold ${active === s.id ? 'text-accent' : 'text-muted'}`}>{s.no}</span>
					<span>{s.label}</span>
					{#if active === s.id}
						<span class="ml-auto size-1.5 bg-accent"></span>
					{/if}
				</button>
				{#if s.id === 'who'}
					<div class="mt-1 mb-2 ml-8 space-y-0.5 border-l border-line pl-3">
						{#each aboutCards.filter((c) => c.id !== 'who') as c}
							<button
								type="button"
								onclick={() => openPanel(c.id)}
								class="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] text-muted transition hover:bg-surface-2/60 hover:text-ink"
							>
								<span class="font-display text-[10px] font-bold text-accent">{c.no}</span>
								<span class="truncate">{c.label}</span>
							</button>
						{/each}
					</div>
				{/if}
			{/each}
		</nav>
	</div>

	<div class="space-y-2 border-t border-line p-3">
		<button type="button" onclick={openComments} class="btn btn-ghost w-full">Comments</button>
		<div class="flex gap-2">
			<a href={site.github} target="_blank" rel="noopener noreferrer" class="btn btn-primary flex-1">GitHub</a>
			<button
				type="button"
				onclick={toggleTheme}
				aria-label="Toggle color theme"
				class="grid size-[42px] shrink-0 place-items-center rounded-md border border-line-strong bg-surface text-muted transition hover:text-ink"
			>
				{#if dark}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="size-4">
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
					</svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				{/if}
			</button>
		</div>
	</div>
</aside>

<!-- Mobile: sticky top bar with horizontally scrollable section buttons -->
<header class="sticky top-0 z-40 flex items-center gap-2 border-b border-line bg-bg px-4 py-2.5 lg:hidden">
	<button type="button" onclick={goHome} aria-label="Back to top" class="grid size-8 shrink-0 place-items-center bg-accent font-display text-sm font-bold text-accent-ink shadow-[2px_2px_0_0_var(--shadow-color)]">Q</button>

	<nav class="flex flex-1 items-center gap-1 overflow-x-auto" aria-label="Sections">
		{#each panels as s}
			<button
				type="button"
				onclick={() => openPanel(s.id)}
				class={`flex items-center gap-1.5 whitespace-nowrap rounded-md border px-2 py-1 font-display text-[11px] font-semibold transition ${active === s.id ? 'border-line-strong bg-surface-2 text-ink' : 'border-transparent text-muted'}`}
			>
				<span class={active === s.id ? 'text-accent' : ''}>{s.no}</span>
				<span class="uppercase">{s.label}</span>
			</button>
		{/each}
	</nav>

	<button
		type="button"
		onclick={toggleTheme}
		aria-label="Toggle color theme"
		class="grid size-8 shrink-0 place-items-center rounded-md border border-line-strong bg-surface text-muted transition hover:text-ink"
	>
		{#if dark}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="size-3.5">
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
			</svg>
		{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5">
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
			</svg>
		{/if}
	</button>
</header>
