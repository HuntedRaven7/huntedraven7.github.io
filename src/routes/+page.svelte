<script lang="ts">
	import Hero from '$lib/components/landing/Hero.svelte';
	import StackStrip from '$lib/components/landing/StackStrip.svelte';
	import Dashboard from '$lib/components/widgets/Dashboard.svelte';
</script>

<svelte:head>
	<title>Robin — Dashboard Portfolio</title>
	<meta
		name="description"
		content="Dashboard-style portfolio: GNOME desktop meets Laravel hero. Projects, skills, terminal, contact."
	/>
</svelte:head>

<Hero />
<StackStrip />
<Dashboard />
