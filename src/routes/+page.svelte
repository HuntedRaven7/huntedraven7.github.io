<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte'
	import Hero from '$lib/components/Hero.svelte'
	import Marquee from '$lib/components/Marquee.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import PopoutLayer from '$lib/components/PopoutLayer.svelte'
	import CommentsModal from '$lib/components/CommentsModal.svelte'
	import { site } from '$lib/content'
</script>

<svelte:head>
	<title>Quinn — container nerd</title>
	<meta name="description" content="Quinn builds open-source tools for the Linux desktop — Podman, BuildStream, FreeDesktop SDK and beyond." />
	<link rel="canonical" href={`${site.url}/`} />
	<meta property="og:title" content="Quinn — container nerd" />
	<meta property="og:description" content="Open-source tooling for the Linux desktop. Containers, pipelines, and side projects." />
	<meta property="og:url" content={`${site.url}/`} />
	<meta property="og:type" content="website" />
</svelte:head>

<Sidebar />

<main>
	<Hero />
	<Marquee />
	<Footer />
</main>

<PopoutLayer />
<CommentsModal />
