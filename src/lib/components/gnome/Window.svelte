<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, radii, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		window: {
			borderRadius: radii.lg,
			backgroundColor: colors.windowBg,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder,
			boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
			overflow: 'hidden',
			width: '100%'
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			gap: 8,
			paddingTop: 10,
			paddingBottom: 10,
			paddingLeft: 14,
			paddingRight: 14,
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',
			borderBottomColor: colors.windowBorder,
			backgroundColor: 'rgba(255,255,255,0.03)'
		},
		dots: {
			display: 'flex',
			gap: 6
		},
		dot: (c: string) => ({
			width: 12,
			height: 12,
			borderRadius: 9999,
			backgroundColor: c
		}),
		title: {
			flexGrow: 1,
			textAlign: 'center',
			fontSize: 13,
			fontWeight: 600,
			color: colors.textMuted,
			fontFamily: fonts.sans,
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		action: {
			borderStyle: 'none',
			backgroundColor: 'transparent',
			color: colors.textMuted,
			cursor: 'pointer',
			fontSize: 13,
			paddingTop: 2,
			paddingBottom: 2,
			paddingLeft: 6,
			paddingRight: 6,
			borderRadius: 6
		},
		body: {
			padding: 0
		},
		bodyInner: {
			padding: 0
		}
	});
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, children, id }: { title: string; children: Snippet; id?: string } = $props();

	let minimized = $state(false);
	let closed = $state(false);
</script>

{#if !closed}
	<section
		{...stylex.attrs(styles.window)}
		{id}
		aria-label={title}
		data-testid={`window-${id ?? title}`}
	>
		<div {...stylex.attrs(styles.header)}>
			<div {...stylex.attrs(styles.dots)} aria-hidden="true">
				<span {...stylex.attrs(styles.dot('#ff5f57'))}></span>
				<span {...stylex.attrs(styles.dot('#febc2e'))}></span>
				<span {...stylex.attrs(styles.dot('#28c840'))}></span>
			</div>
			<span {...stylex.attrs(styles.title)}>{title}</span>
			<button
				{...stylex.attrs(styles.action)}
				aria-label={minimized ? `Maximize ${title}` : `Minimize ${title}`}
				onclick={() => (minimized = !minimized)}
			>
				{minimized ? '▢' : '–'}
			</button>
			<button
				{...stylex.attrs(styles.action)}
				aria-label={`Close ${title}`}
				onclick={() => (closed = true)}
			>
				✕
			</button>
		</div>
		{#if !minimized}
			<div {...stylex.attrs(styles.body)}>
				{@render children()}
			</div>
		{/if}
	</section>
{/if}
