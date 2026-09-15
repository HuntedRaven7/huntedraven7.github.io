<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		bar: {
			position: 'sticky',
			top: 0,
			zIndex: 50,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 40,
			paddingLeft: 16,
			paddingRight: 12,
			backgroundColor: colors.shellBar,
			backdropFilter: 'blur(16px)',
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',
			borderBottomColor: colors.windowBorder,
			color: colors.topBarText,
			fontFamily: fonts.sans,
			fontSize: 13,
			userSelect: 'none'
		},
		left: {
			display: 'flex',
			alignItems: 'center',
			gap: 12
		},
		activities: {
			display: 'flex',
			alignItems: 'center',
			gap: 8,
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 9999,
			backgroundColor: {
				default: 'transparent',
				':hover': 'rgba(255,255,255,0.12)'
			},
			color: 'inherit',
			borderStyle: 'none',
			cursor: 'pointer',
			fontSize: 13,
			fontWeight: 600,
			textDecoration: 'none'
		},
		dot: {
			width: 8,
			height: 8,
			borderRadius: 9999,
			backgroundImage: 'linear-gradient(135deg, #ff2d20, #ff8534)'
		},
		right: {
			display: 'flex',
			alignItems: 'center',
			gap: 4
		},
		clock: {
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 9999,
			color: 'inherit',
			whiteSpace: 'nowrap'
		},
		themeBtn: {
			display: 'flex',
			alignItems: 'center',
			gap: 6,
			paddingTop: 4,
			paddingBottom: 4,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 9999,
			backgroundColor: {
				default: 'transparent',
				':hover': 'rgba(255,255,255,0.12)'
			},
			borderStyle: 'none',
			color: 'inherit',
			cursor: 'pointer',
			fontSize: 13
		}
	});
</script>

<script lang="ts">
	let { theme, onToggleTheme }: { theme: 'dark' | 'light'; onToggleTheme: () => void } = $props();

	let now = $state(new Date());
	$effect(() => {
		const id = setInterval(() => (now = new Date()), 10000);
		return () => clearInterval(id);
	});

	let clock = $derived(
		now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) +
			' ' +
			now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
	);
</script>

<header {...stylex.attrs(styles.bar)}>
	<div {...stylex.attrs(styles.left)}>
		<a {...stylex.attrs(styles.activities)} href="#top" aria-label="Activities overview">
			<span {...stylex.attrs(styles.dot)}></span>
			Activities
		</a>
	</div>
	<div {...stylex.attrs(styles.right)}>
		<span {...stylex.attrs(styles.clock)} data-testid="topbar-clock">{clock}</span>
		<button
			{...stylex.attrs(styles.themeBtn)}
			onclick={onToggleTheme}
			data-testid="theme-toggle"
			aria-label="Toggle light and dark theme"
		>
			{theme === 'dark' ? '☾ Dark' : '☀ Light'}
		</button>
	</div>
</header>
