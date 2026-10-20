<script lang="ts">
	import SectionHeading from './SectionHeading.svelte'
	import { stats } from '$lib/content'
</script>

<div class="px-5 py-8 md:px-8 md:py-10">
	<SectionHeading
		no="02"
		label="Numbers"
		title="Numbers I'm fond of."
		sub="A completely unscientific dashboard of my life in open source. Rounded up where convenient."
	/>
	<div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
		{#each stats as stat}
			<div class="card card-lift p-6 md:p-7">
				<div class="font-display text-4xl font-bold tracking-tight md:text-5xl">{stat.value}</div>
				<div class="mt-3 text-sm font-medium">{stat.label}</div>
				<p class="mt-1.5 text-[13px] leading-relaxed text-muted">{stat.note}</p>
			</div>
		{/each}
	</div>
</div>
