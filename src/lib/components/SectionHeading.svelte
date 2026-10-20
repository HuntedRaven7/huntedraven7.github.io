<script lang="ts">
	let {
		no,
		label,
		title,
		sub = '',
		center = false
	}: {
		no: string
		label: string
		title: string
		sub?: string
		center?: boolean
	} = $props()
</script>

<div class={center ? 'text-center' : ''}>
	<div class="flex items-center gap-3 text-[11px] font-semibold tracking-[0.25em] text-muted uppercase" class:justify-center={center}>
		<span class="font-display font-bold text-accent">{no}</span>
		<span class="h-px w-10 bg-line-strong"></span>
		<span>{label}</span>
	</div>
	<h2 class="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
	{#if sub}
		<p class="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted" class:mx-auto={center}>{sub}</p>
	{/if}
</div>
