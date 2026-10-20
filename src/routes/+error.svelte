<script lang="ts">
	import { page } from '$app/state'
	import { site } from '$lib/content'
</script>

<svelte:head>
	<title>{page.status} — {site.domain}</title>
</svelte:head>

<section class="grid min-h-svh place-items-center px-5 text-center">
	<div>
		<p class="font-hand text-3xl text-accent">welp.</p>
		<h1 class="mt-2 font-display text-7xl font-bold tracking-tight">{page.status}</h1>
		<p class="mx-auto mt-3 max-w-sm text-muted">
			This page wandered off. One minute it was here, the next it was garbage-collected.
		</p>
		<a href="/" class="btn btn-primary mt-8">Back to safety</a>
	</div>
</section>
