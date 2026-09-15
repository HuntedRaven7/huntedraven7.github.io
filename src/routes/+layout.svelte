<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		shell: {
			position: 'relative',
			minHeight: '100vh',
			backgroundColor: colors.appBg,
			color: colors.textPrimary,
			fontFamily: fonts.sans,
			overflowX: 'hidden'
		},
		bgPhoto: {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: 0,
			backgroundImage: "url('/images/hero-nebula.jpg')",
			backgroundSize: 'cover',
			backgroundPosition: 'center top',
			opacity: 0.45,
			filter: 'blur(6px) saturate(1.25)',
			transform: 'scale(1.06)',
			maskImage: 'radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 80%)',
			pointerEvents: 'none'
		},
		bgVeil: {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: 0,
			backgroundColor: colors.appBg,
			opacity: 0.78,
			pointerEvents: 'none'
		},
		body: {
			position: 'relative',
			zIndex: 1,
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
	<div {...stylex.attrs(styles.bgPhoto)} aria-hidden="true" data-testid="site-bg"></div>
	<div {...stylex.attrs(styles.bgVeil)} aria-hidden="true"></div>
	<TopBar theme={themeStore.value} onToggleTheme={() => themeStore.toggle()} />
	<Dock />
	<main {...stylex.attrs(styles.body)}>
		{@render children()}
	</main>
</div>
