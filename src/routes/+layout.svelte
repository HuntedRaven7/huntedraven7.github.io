<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		shell: {
			minHeight: '100vh',
			backgroundColor: colors.appBg,
			color: colors.textPrimary,
			fontFamily: fonts.sans
		},
		body: {
			maxWidth: 1080,
			marginLeft: 'auto',
			marginRight: 'auto',
			paddingLeft: 16,
			paddingRight: 16,
			paddingTop: 24,
			paddingBottom: 96,
			marginTop: 0
		}
	});
</script>

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import TopBar from '$lib/components/gnome/TopBar.svelte';
	import Dock from '$lib/components/gnome/Dock.svelte';
	import { lightTheme } from '$lib/themes';
	import { useTheme } from '$lib/theme.svelte';

	if (import.meta.env.DEV) {
		$effect(() => {
			// @ts-expect-error - virtual module provided by StyleX in dev
			import('virtual:stylex:runtime');
		});
	}

	let { children } = $props();
	const themeStore = useTheme();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	{#if import.meta.env.DEV}
		<link rel="stylesheet" href="/virtual:stylex.css" />
	{/if}
</svelte:head>

<div {...stylex.attrs(themeStore.value === 'light' && lightTheme, styles.shell)}>
	<TopBar theme={themeStore.value} onToggleTheme={() => themeStore.toggle()} />
	<Dock />
	<main {...stylex.attrs(styles.body)}>
		{@render children()}
	</main>
</div>
