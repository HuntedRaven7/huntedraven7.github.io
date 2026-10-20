<script lang="ts">
	import { site } from '$lib/content'

	let open = $state(false)
	let injected = false

	function show() {
		open = true
	}

	$effect(() => {
		const listener = () => (open = true)
		window.addEventListener('open-comments', listener)
		return () => window.removeEventListener('open-comments', listener)
	})

	$effect(() => {
		if (!open) return
		document.body.style.overflow = 'hidden'

		if (!injected) {
			injected = true
			const holder = document.getElementById('utterances-holder')
			if (holder) {
				const script = document.createElement('script')
				script.src = 'https://utteranc.es/client.js'
				script.setAttribute('data-repo', 'huntedraven7/huntedraven7.github.io')
				script.setAttribute('data-issue-term', 'title')
				script.setAttribute('data-theme', 'preferred-color-scheme')
				script.setAttribute('data-canonical', `${site.url}/`)
				script.setAttribute('crossorigin', 'anonymous')
				script.async = true
				holder.appendChild(script)
			}
		}

		return () => {
			document.body.style.overflow = ''
		}
	})
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

{#if open}
	<div
		role="presentation"
		class="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
		onclick={(e) => {
			if (e.target === e.currentTarget) open = false
		}}
	>
		<div class="card relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden">
			<div class="flex items-center justify-between border-b border-line px-6 py-4">
				<div>
					<h3 class="font-display text-lg font-bold">Comments</h3>
					<p class="text-xs text-muted">Backed by GitHub issues via utterances</p>
				</div>
				<button
					onclick={() => (open = false)}
					class="rounded-md border border-line px-4 py-1.5 text-xs font-medium text-muted transition hover:border-line-strong hover:text-ink"
				>
					Close ✕
				</button>
			</div>
			<div id="utterances-holder" class="utterances min-h-[400px] flex-1 overflow-y-auto p-4"></div>
		</div>
	</div>
{/if}
