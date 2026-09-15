<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors } from '$lib/tokens.stylex';

	const styles = stylex.create({
		dock: {
			position: 'fixed',
			left: 12,
			top: '50%',
			transform: 'translateY(-50%)',
			zIndex: 40,
			display: {
				default: 'flex',
				'@media (max-width: 640px)': 'none'
			},
			flexDirection: 'column',
			gap: 6,
			padding: 8,
			borderRadius: 18,
			backgroundColor: colors.dockBg,
			backdropFilter: 'blur(20px)',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder
		},
		item: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: 44,
			height: 44,
			borderRadius: 12,
			color: colors.textPrimary,
			textDecoration: 'none',
			fontSize: 18,
			backgroundColor: {
				default: 'transparent',
				':hover': 'rgba(255,255,255,0.12)'
			},
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: 'transparent'
		},
		itemActive: {
			backgroundColor: 'rgba(255,255,255,0.14)',
			borderColor: 'rgba(255,255,255,0.16)'
		},
		mobileBar: {
			position: 'fixed',
			left: 12,
			right: 12,
			bottom: 12,
			zIndex: 40,
			display: {
				default: 'none',
				'@media (max-width: 640px)': 'flex'
			},
			justifyContent: 'space-around',
			padding: 8,
			borderRadius: 18,
			backgroundColor: colors.dockBg,
			backdropFilter: 'blur(20px)',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder
		}
	});
</script>

<script lang="ts">
	import { dockApps } from '$lib/data';

	let { active = 'hero' }: { active?: string } = $props();
</script>

<nav {...stylex.attrs(styles.dock)} aria-label="App dock">
	{#each dockApps as app (app.id)}
		<a
			{...stylex.attrs(styles.item, active === app.id && styles.itemActive)}
			href={app.href}
			title={app.label}
			aria-label={app.label}
			aria-current={active === app.id ? 'true' : undefined}
		>
			{app.icon}
		</a>
	{/each}
</nav>

<nav {...stylex.attrs(styles.mobileBar)} aria-label="App dock mobile">
	{#each dockApps as app (app.id)}
		<a
			{...stylex.attrs(styles.item, active === app.id && styles.itemActive)}
			href={app.href}
			title={app.label}
			aria-label={app.label}
		>
			{app.icon}
		</a>
	{/each}
</nav>
