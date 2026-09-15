<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts, radii } from '$lib/tokens.stylex';

	const styles = stylex.create({
		hero: {
			position: 'relative',
			overflow: 'hidden',
			borderRadius: radii.xl,
			padding: 32,
			paddingTop: 48,
			paddingBottom: 48,
			backgroundColor: colors.appBgElevated,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder
		},
		glow: {
			position: 'absolute',
			top: -120,
			right: -80,
			width: 420,
			height: 420,
			borderRadius: 9999,
			backgroundImage:
				'radial-gradient(circle, rgba(255,45,32,0.35), rgba(255,133,52,0.12) 60%, transparent 70%)',
			pointerEvents: 'none'
		},
		grid: {
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			opacity: 0.5,
			backgroundImage:
				'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
			backgroundSize: '44px 44px',
			maskImage: 'radial-gradient(ellipse 80% 90% at 20% 10%, black 30%, transparent 75%)',
			pointerEvents: 'none'
		},
		kicker: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: 8,
			fontSize: 13,
			fontWeight: 600,
			color: colors.textMuted,
			fontFamily: fonts.mono,
			textTransform: 'uppercase',
			letterSpacing: '0.12em',
			marginBottom: 16
		},
		pill: {
			paddingTop: 3,
			paddingBottom: 3,
			paddingLeft: 10,
			paddingRight: 10,
			borderRadius: 9999,
			color: '#fff',
			backgroundImage: 'linear-gradient(135deg, #ff2d20, #ff8534)',
			fontSize: 12
		},
		title: {
			position: 'relative',
			fontSize: 44,
			lineHeight: 1.05,
			fontWeight: 800,
			letterSpacing: '-0.03em',
			color: colors.textPrimary,
			fontFamily: fonts.sans,
			marginTop: 0,
			marginBottom: 16,
			maxWidth: '20ch'
		},
		gradientText: {
			backgroundImage: 'linear-gradient(135deg, #ff2d20 0%, #ff8534 100%)',
			WebkitBackgroundClip: 'text',
			backgroundClip: 'text',
			color: 'transparent'
		},
		sub: {
			position: 'relative',
			fontSize: 17,
			lineHeight: 1.6,
			color: colors.textMuted,
			fontFamily: fonts.sans,
			maxWidth: '52ch',
			marginTop: 0,
			marginBottom: 24
		},
		ctaRow: {
			position: 'relative',
			display: 'flex',
			flexWrap: 'wrap',
			gap: 12
		},
		ctaPrimary: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: 8,
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 10,
			backgroundImage: 'linear-gradient(135deg, #ff2d20, #ff8534)',
			color: '#fff',
			fontWeight: 700,
			fontSize: 15,
			fontFamily: fonts.sans,
			textDecoration: 'none',
			borderStyle: 'none',
			cursor: 'pointer'
		},
		ctaGhost: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: 8,
			paddingTop: 12,
			paddingBottom: 12,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 10,
			backgroundColor: colors.cardBg,
			color: colors.textPrimary,
			fontWeight: 600,
			fontSize: 15,
			fontFamily: fonts.sans,
			textDecoration: 'none',
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder
		},
		meta: {
			position: 'relative',
			display: 'flex',
			flexWrap: 'wrap',
			gap: 16,
			marginTop: 28,
			fontSize: 13,
			color: colors.textMuted,
			fontFamily: fonts.mono
		}
	});
</script>

<script lang="ts">
	import { profile } from '$lib/data';
	import ConnectorArt from '$lib/components/landing/ConnectorArt.svelte';
</script>

<div {...stylex.attrs(styles.hero)} id="top">
	<div {...stylex.attrs(styles.grid)} aria-hidden="true"></div>
	<ConnectorArt />
	<div {...stylex.attrs(styles.glow)} aria-hidden="true"></div>
	<span {...stylex.attrs(styles.kicker)}>
		<span {...stylex.attrs(styles.pill)}>v2.0</span>
		~/portfolio — dashboard edition
	</span>
	<h1 {...stylex.attrs(styles.title)}>
		Hey, I'm {profile.name}.
		<span {...stylex.attrs(styles.gradientText)}>I ship fast web apps.</span>
	</h1>
	<p {...stylex.attrs(styles.sub)}>
		{profile.tagline} This site runs like a tiny desktop: a GNOME top bar, a dock, windows for everything
		— with a Laravel-flavored hero up top.
	</p>
	<div {...stylex.attrs(styles.ctaRow)}>
		<a {...stylex.attrs(styles.ctaPrimary)} href="#projects">View projects →</a>
		<a {...stylex.attrs(styles.ctaGhost)} href="#terminal">Open terminal ❯_</a>
		<a {...stylex.attrs(styles.ctaGhost)} href="#contact">Contact</a>
	</div>
	<div {...stylex.attrs(styles.meta)}>
		<span>{profile.location}</span>
		<span>● {profile.availability}</span>
	</div>
</div>
