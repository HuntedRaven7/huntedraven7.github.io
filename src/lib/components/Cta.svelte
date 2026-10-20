<script lang="ts">
	import { site } from '$lib/content'
</script>

<div class="px-5 py-8 md:px-8 md:py-10">
	<div class="card relative overflow-hidden px-6 py-14 text-center md:py-20">
		<div
			class="pointer-events-none absolute inset-0"
			style="background: radial-gradient(600px 300px at 50% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)"
		></div>
		<div class="relative">
			<p class="font-hand text-2xl text-accent md:text-3xl">got a wild idea?</p>
			<h2 class="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">Let's build something.</h2>
			<p class="mx-auto mt-4 max-w-lg text-muted md:text-lg">
				Containers, pipelines, desktop apps — open source is a team sport. Bring your idea, I'll bring the terminal.
			</p>
			<div class="mt-9 flex flex-wrap justify-center gap-3">
				<a class="btn btn-accent" href={site.github} target="_blank" rel="noopener noreferrer">Star me on GitHub ★</a>
				<a class="btn btn-ghost" href={site.blog} target="_blank" rel="noopener noreferrer">Read the blog</a>
			</div>
		</div>
	</div>
</div>
