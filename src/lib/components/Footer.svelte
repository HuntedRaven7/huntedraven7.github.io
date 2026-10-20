<script lang="ts">
	import { site } from '$lib/content'

	const year = new Date().getFullYear()

	// asset / design credits — all open in new tabs
	const credits = [
		{ label: 'tarxz.zip', href: 'https://tarxz.zip/', note: 'for the subdomain' },
		{ label: 'wallhaven.cc', href: 'https://wallhaven.cc/w/ml93z1', note: 'for the background' },
		{ label: 'getartcraft.com', href: 'https://getartcraft.com/', note: 'design inspiration' },
		{ label: 'outcrowd.io', href: 'https://outcrowd.io/', note: 'design inspiration' },
		{ label: 'omp.sh', href: 'https://www.omp.sh/', note: 'menu inspo' }
	]
</script>

<footer>
	<div class="flex flex-col items-center justify-between gap-3 px-5 py-6 md:flex-row lg:px-24 xl:px-32">
		<p class="font-mono text-[11px] text-muted">© {year} {site.name} · {site.domain}</p>

		<p class="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-mono text-[11px] text-muted">
			{#each credits as c, i}
				{#if i > 0}<span aria-hidden="true">·</span>{/if}
				<span>
					{c.note}
					<a href={c.href} target="_blank" rel="noopener noreferrer" class="text-ink underline decoration-line-strong underline-offset-2 transition hover:text-accent hover:decoration-accent">
						{c.label}
					</a>
				</span>
			{/each}
			<span aria-hidden="true">·</span>
			<span class="font-hand text-base text-ink">thank you to Odd, sysadmin of the year :3</span>
		</p>
	</div>

	<div>
		<div class="flex flex-col items-center justify-center gap-1.5 px-5 py-5 text-center lg:px-24 xl:px-32">
			<p class="font-display text-[11px] font-semibold tracking-[0.25em] text-muted uppercase">special thanks</p>
			<p class="max-w-md text-sm text-muted">
				to <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer" class="font-semibold text-ink underline decoration-line-strong underline-offset-2 transition hover:text-accent hover:decoration-accent">Svelte</a>
				for the amazing tech that makes this site possible — and for making it a joy to build.
			</p>
		</div>
	</div>
</footer>
