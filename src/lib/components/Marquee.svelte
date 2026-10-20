<script lang="ts">
	import { marqueeItems } from '$lib/content'
</script>

<div class="marquee overflow-hidden border-y border-line bg-surface/60 py-3.5 backdrop-blur-sm">
	<div class="marquee-track flex w-max" style="--marquee-duration: 42s">
		{#each [0, 1] as _half}
			<div class="flex items-center" aria-hidden={_half === 1}>
				{#each marqueeItems as item}
					<span class="flex items-center gap-2 whitespace-nowrap px-5 font-display text-xs font-semibold tracking-wider text-muted uppercase">
						<span class="size-1.5 shrink-0 bg-accent"></span>
						{item}
					</span>
				{/each}
			</div>
		{/each}
	</div>
</div>
