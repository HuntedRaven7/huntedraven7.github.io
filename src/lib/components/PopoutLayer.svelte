<script lang="ts">
	import Stats from './Stats.svelte'
	import Projects from './Projects.svelte'
	import Faq from './Faq.svelte'
	import Cta from './Cta.svelte'
	import DiscordCard from './DiscordCard.svelte'
	import { about, aboutCards, site, type AboutCardId, type PanelId } from '$lib/content'

	/** Floating pop-outs — one at a time, toggled from the rail */
	let current = $state<PanelId | null>(null)

	$effect(() => {
		const onOpen = (e: Event) => {
			const id = (e as CustomEvent<PanelId>).detail
			current = current === id ? null : id
		}
		window.addEventListener('open-panel', onOpen)
		return () => window.removeEventListener('open-panel', onOpen)
	})

	$effect(() => {
		if (!current) return
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = ''
		}
	})

	const detail = $derived(aboutCards.find((c) => c.id === (current as AboutCardId)))

	function close() {
		current = null
	}
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (current = null)} />

{#if current}
	<!-- click-away catcher -->
	<button type="button" class="fixed inset-0 z-40 cursor-default" tabindex="-1" aria-label="Close popout" onclick={close}></button>

	<!-- mobile: bottom sheet · desktop: panel beside the rail -->
	<div
		role="dialog"
		aria-modal="true"
		aria-label={detail ? detail.label : String(current)}
		class="card popout-in fixed inset-x-3 bottom-3 z-50 max-h-[80vh] overflow-y-auto sm:top-1/2 sm:bottom-auto sm:left-[17.5rem] sm:w-[32rem] sm:-translate-y-1/2"
	>
		<div class="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
			<p class="font-mono text-[11px] text-muted">
				{#if detail}{detail.no}/{detail.label}{:else}.net/{String(current)}{/if}
			</p>
			<button
				onclick={close}
				aria-label="Close popout"
				class="grid size-7 place-items-center rounded-md border border-line text-muted transition hover:border-line-strong hover:text-ink"
			>
				✕
			</button>
		</div>

		{#key current}
			<div class="panel-in">
				{#if current === 'who'}
					<div class="p-5 md:p-6">
						<div class="flex gap-4">
							<img src="/pfp.png" alt="Profile portrait" class="size-20 shrink-0 border-2 border-line object-cover" />
							<p class="text-sm leading-relaxed text-muted">{about.who}</p>
						</div>
					</div>
				{:else if current === 'passion'}
					<div class="p-5 md:p-6">
						<p class="text-sm leading-relaxed text-muted">{about.passion}</p>
					</div>
				{:else if current === 'exploring'}
					<div class="p-5 md:p-6">
						<div class="flex flex-wrap gap-2">
							{#each about.exploring as tag}
								<span class="chip">{tag}</span>
							{/each}
						</div>
					</div>
				{:else if current === 'discord'}
					<div class="p-5 md:p-6">
						<DiscordCard />
					</div>
				{:else if current === 'blog'}
					<div class="p-5 md:p-6">
						<p class="text-sm leading-relaxed text-muted">{about.blog}</p>
						<a href={site.blog} target="_blank" rel="noopener noreferrer" class="btn btn-ghost mt-5">Subscribe to the feed →</a>
					</div>
				{:else if current === 'numbers'}
					<Stats />
				{:else if current === 'projects'}
					<Projects />
				{:else if current === 'faq'}
					<Faq />
				{:else if current === 'contact'}
					<Cta />
				{/if}
			</div>
		{/key}
	</div>
{/if}
