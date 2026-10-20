<script lang="ts">
	import SectionHeading from './SectionHeading.svelte'
	import { faqs } from '$lib/content'
</script>

<div class="mx-auto max-w-3xl px-5 py-8 md:py-10">
	<SectionHeading
		no="04"
		label="Questions"
		title="Things you might ask."
		sub="Frequently(ish) asked. If yours isn't here, ask it on GitHub."
	/>

	<div class="mt-10 space-y-3">
			{#each faqs as faq}
				<details class="card group px-6 py-5">
					<summary class="flex cursor-pointer list-none items-center justify-between gap-4 select-none [&::-webkit-details-marker]:hidden">
						<span class="font-display text-[15px] font-semibold md:text-base">{faq.q}</span>
						<span class="grid size-7 shrink-0 place-items-center border border-line-strong text-muted transition-transform duration-300 group-open:rotate-45">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="size-3.5">
								<path d="M12 5v14M5 12h14" />
							</svg>
						</span>
					</summary>
					<p class="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
				</details>
			{/each}
	</div>
</div>
