<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts, radii } from '$lib/tokens.stylex';

	const stack = ['SvelteKit', 'TypeScript', 'StyleX', 'Vite', 'Fedora', 'Neovim'];

	const styles = stylex.create({
		strip: {
			position: 'relative',
			marginTop: 20,
			borderRadius: radii.xl,
			backgroundColor: colors.appBgElevated,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder,
			overflow: 'hidden'
		},
		row: {
			display: 'flex',
			alignItems: 'stretch',
			flexDirection: {
				default: 'column',
				'@media (min-width: 900px)': 'row'
			}
		},
		labelCell: {
			display: 'flex',
			alignItems: 'center',
			flexShrink: 0,
			paddingTop: 20,
			paddingBottom: 20,
			paddingLeft: 24,
			paddingRight: 24,
			fontFamily: fonts.mono,
			fontSize: 12,
			fontWeight: 500,
			letterSpacing: '0.1em',
			color: colors.textMuted,
			borderBottomWidth: {
				default: 1,
				'@media (min-width: 900px)': 0
			},
			borderBottomStyle: 'solid',
			borderBottomColor: colors.windowBorder,
			borderRightWidth: {
				default: 0,
				'@media (min-width: 900px)': 1
			},
			borderRightStyle: 'solid',
			borderRightColor: colors.windowBorder
		},
		viewport: {
			display: 'flex',
			alignItems: 'stretch',
			flexGrow: 1,
			overflow: 'hidden',
			maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)'
		},
		track: {
			display: 'flex',
			alignItems: 'stretch',
			width: 'max-content',
			flexShrink: 0,
			animationName: stylex.keyframes({
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-50%)' }
			}),
			animationDuration: {
				default: '26s',
				'@media (prefers-reduced-motion: reduce)': '0s'
			},
			animationTimingFunction: 'linear',
			animationIterationCount: 'infinite',
			animationPlayState: {
				default: 'running',
				':hover': 'paused'
			}
		},
		cell: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: 0,
			paddingTop: 20,
			paddingBottom: 20,
			paddingLeft: 28,
			paddingRight: 28,
			fontFamily: fonts.sans,
			fontSize: 17,
			fontWeight: 800,
			letterSpacing: '-0.01em',
			color: colors.textPrimary,
			borderLeftWidth: 1,
			borderLeftStyle: 'solid',
			borderLeftColor: colors.windowBorder
		},
		cellGlyph: {
			color: colors.accentOrange,
			marginRight: 8,
			fontSize: 14
		},
		node: {
			position: 'absolute',
			width: 6,
			height: 6,
			backgroundColor: colors.accentRed,
			zIndex: 1
		},
		nodeTL: {
			top: -3,
			left: 120
		},
		nodeTR: {
			top: -3,
			right: 120
		},
		nodeBL: {
			bottom: -3,
			left: 120
		},
		nodeBR: {
			bottom: -3,
			right: 120
		}
	});
</script>

<section {...stylex.attrs(styles.strip)} aria-label="Powered by" data-testid="stack-strip">
	<span {...stylex.attrs(styles.node, styles.nodeTL)} aria-hidden="true"></span>
	<span {...stylex.attrs(styles.node, styles.nodeTR)} aria-hidden="true"></span>
	<span {...stylex.attrs(styles.node, styles.nodeBL)} aria-hidden="true"></span>
	<span {...stylex.attrs(styles.node, styles.nodeBR)} aria-hidden="true"></span>
	<div {...stylex.attrs(styles.row)}>
		<div {...stylex.attrs(styles.labelCell)}>
			<span>What powers<br />my curious mind</span>
		</div>
		<div {...stylex.attrs(styles.viewport)}>
			<div {...stylex.attrs(styles.track)}>
				{#each stack as tech (tech)}
					<div {...stylex.attrs(styles.cell)}>
						<span {...stylex.attrs(styles.cellGlyph)} aria-hidden="true">◆</span>
						{tech}
					</div>
				{/each}
				{#each stack as tech (`copy-${tech}`)}
					<div {...stylex.attrs(styles.cell)} aria-hidden="true">
						<span {...stylex.attrs(styles.cellGlyph)} aria-hidden="true">◆</span>
						{tech}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
