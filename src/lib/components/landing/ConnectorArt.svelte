<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		art: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			right: 0,
			width: '62%',
			overflow: 'hidden',
			pointerEvents: 'none',
			color: colors.textMuted,
			maskImage: 'linear-gradient(100deg, transparent 5%, black 50%)',
			display: {
				default: 'block',
				'@media (max-width: 640px)': 'none'
			}
		},
		svg: {
			position: 'absolute',
			top: 0,
			right: 0,
			width: '100%',
			height: '100%'
		},
		pill: {
			position: 'absolute',
			display: 'inline-flex',
			alignItems: 'center',
			gap: 6,
			fontFamily: fonts.mono,
			fontSize: 11.5,
			fontWeight: 500,
			color: colors.textMuted,
			backgroundColor: colors.appBgElevated,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder,
			borderRadius: 9999,
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
			whiteSpace: 'nowrap'
		},
		pill1: {
			top: '16%',
			right: '29%'
		},
		pill2: {
			top: '33%',
			right: '10%'
		},
		pill3: {
			top: '52%',
			right: '25%'
		},
		dot: (c: string) => ({
			width: 7,
			height: 7,
			borderRadius: 9999,
			backgroundColor: c
		})
	});
</script>

<div {...stylex.attrs(styles.art)} aria-hidden="true" data-testid="connector-art">
	<svg
		{...stylex.attrs(styles.svg)}
		viewBox="0 0 600 360"
		preserveAspectRatio="xMaxYMin slice"
		fill="none"
	>
		<defs>
			<pattern id="hr-iso" width="48" height="28" patternUnits="userSpaceOnUse">
				<path d="M24 0 L48 14 L24 28 L0 14 Z" stroke="currentColor" stroke-opacity="0.16" />
			</pattern>
		</defs>
		<rect x="0" y="0" width="600" height="360" fill="url(#hr-iso)" />
		<!-- diagonal connector lines, bottom-left -> top-right -->
		<path d="M-20 390 L430 -20" stroke="#ff2d20" stroke-width="1.6" />
		<path d="M80 390 L530 -20" stroke="#4f7cff" stroke-width="1.6" />
		<path d="M180 390 L630 -20" stroke="#ff8534" stroke-width="1.6" />
		<!-- ring nodes along the lines -->
		<circle cx="308" cy="118" r="11" fill="#1c1c1e" stroke="#ff2d20" stroke-width="2" />
		<circle cx="308" cy="118" r="3.5" fill="#ff2d20" />
		<circle cx="392" cy="88" r="11" fill="#1c1c1e" stroke="#4f7cff" stroke-width="2" />
		<circle cx="392" cy="88" r="3.5" fill="#4f7cff" />
		<circle cx="356" cy="196" r="9" fill="#1c1c1e" stroke="#ff8534" stroke-width="2" />
		<circle cx="356" cy="196" r="3" fill="#ff8534" />
		<circle cx="238" cy="196" r="7" fill="#1c1c1e" stroke="#4f7cff" stroke-width="2" />
		<circle cx="470" cy="150" r="7" fill="#1c1c1e" stroke="#ff2d20" stroke-width="2" />
	</svg>
	<span {...stylex.attrs(styles.pill, styles.pill1)}>
		<span {...stylex.attrs(styles.dot('#4f7cff'))}></span>
		skills.sveltekit
	</span>
	<span {...stylex.attrs(styles.pill, styles.pill2)}>
		<span {...stylex.attrs(styles.dot('#ff2d20'))}></span>
		projects.portfolio
	</span>
	<span {...stylex.attrs(styles.pill, styles.pill3)}>
		<span {...stylex.attrs(styles.dot('#ff8534'))}></span>
		terminal.gnome
	</span>
</div>
