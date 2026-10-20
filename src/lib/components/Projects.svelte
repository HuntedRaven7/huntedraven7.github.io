<script lang="ts">
	import SectionHeading from './SectionHeading.svelte'
	import { projects } from '$lib/content'
</script>

<div class="px-5 py-8 md:px-8 md:py-10">
	<SectionHeading
		no="03"
		label="Projects"
		title="Things I've containerized."
		sub="A sampling of what the terminal is usually open for. Tags included, receipts pending."
	/>

		<div class="mt-12 grid gap-5 md:grid-cols-2">
			{#each projects as p}
				<a href={p.href} target="_blank" rel="noopener noreferrer" class="card card-lift group overflow-hidden">
					<div
						class="relative flex h-44 items-center justify-center overflow-hidden md:h-52"
						style={`background: linear-gradient(135deg, ${p.from}, ${p.to})`}
					>
						<div
							class="absolute inset-0 opacity-40"
							style="background-image: radial-gradient(rgba(255,255,255,.35) 1px, transparent 1px); background-size: 18px 18px"
						></div>
						<span
							class="relative -rotate-6 text-6xl drop-shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-0"
						>
							{p.glyph}
						</span>
						{#if p.href === '#'}
							<span class="absolute top-3 left-3 rounded-sm border border-white/50 bg-black/30 px-2.5 py-1 font-display text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
								WIP
							</span>
						{/if}
					</div>
					<div class="p-6">
						<div class="flex flex-wrap gap-2">
							{#each p.tags as tag}
								<span class="chip text-[11px] tracking-wider text-muted uppercase">{tag}</span>
							{/each}
						</div>
						<h3 class="mt-4 font-display text-xl font-semibold">{p.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
						<span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
							View project
							<span aria-hidden="true" class="inline-block transition-transform group-hover:translate-x-1">→</span>
						</span>
					</div>
				</a>
			{/each}
	</div>
</div>
