<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts, radii } from '$lib/tokens.stylex';

	const styles = stylex.create({
		grid: {
			display: 'grid',
			gridTemplateColumns: {
				default: '1fr',
				'@media (min-width: 900px)': '1fr 1fr'
			},
			gap: 20,
			marginTop: 20
		},
		full: {
			gridColumn: '1 / -1'
		},
		pad: {
			padding: 20
		},
		statRow: {
			display: 'grid',
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: 12
		},
		stat: {
			padding: 14,
			borderRadius: radii.md,
			backgroundColor: colors.cardBg,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder
		},
		statValue: {
			fontSize: 22,
			fontWeight: 800,
			color: colors.textPrimary,
			fontFamily: fonts.sans
		},
		statLabel: {
			fontSize: 12.5,
			color: colors.textMuted,
			fontFamily: fonts.sans,
			marginTop: 4
		},
		proj: {
			paddingTop: 14,
			paddingBottom: 14,
			borderBottomWidth: 1,
			borderBottomStyle: 'solid',
			borderBottomColor: colors.windowBorder
		},
		projTitle: {
			fontSize: 16,
			fontWeight: 700,
			color: colors.textPrimary,
			fontFamily: fonts.sans,
			marginTop: 0,
			marginBottom: 6
		},
		projDesc: {
			fontSize: 14,
			lineHeight: 1.55,
			color: colors.textMuted,
			fontFamily: fonts.sans,
			marginTop: 0,
			marginBottom: 8
		},
		tags: {
			display: 'flex',
			flexWrap: 'wrap',
			gap: 6
		},
		tag: {
			fontSize: 12,
			fontFamily: fonts.mono,
			paddingTop: 3,
			paddingBottom: 3,
			paddingLeft: 8,
			paddingRight: 8,
			borderRadius: 9999,
			backgroundColor: colors.cardBg,
			borderWidth: 1,
			borderStyle: 'solid',
			borderColor: colors.windowBorder,
			color: colors.textMuted
		},
		skillGroup: {
			marginBottom: 14
		},
		skillName: {
			fontSize: 13,
			fontWeight: 700,
			color: colors.textPrimary,
			fontFamily: fonts.sans,
			marginTop: 0,
			marginBottom: 8,
			textTransform: 'uppercase',
			letterSpacing: '0.08em'
		},
		contactLine: {
			fontSize: 14.5,
			lineHeight: 1.7,
			color: colors.textMuted,
			fontFamily: fonts.sans,
			marginTop: 0,
			marginBottom: 12
		},
		link: {
			color: colors.accentOrange,
			textDecoration: 'none',
			fontWeight: 600
		}
	});
</script>

<script lang="ts">
	import { projects, skills, stats, profile } from '$lib/data';
	import Window from '$lib/components/gnome/Window.svelte';
	import TerminalWidget from '$lib/components/widgets/TerminalWidget.svelte';
</script>

<div {...stylex.attrs(styles.grid)}>
	<Window title="neofetch — stats" id="stats">
		<div {...stylex.attrs(styles.pad)}>
			<div {...stylex.attrs(styles.statRow)}>
				{#each stats as s (s.label)}
					<div {...stylex.attrs(styles.stat)}>
						<div {...stylex.attrs(styles.statValue)}>{s.value}</div>
						<div {...stylex.attrs(styles.statLabel)}>{s.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</Window>

	<Window title="gnome-terminal" id="terminal-window">
		<TerminalWidget />
	</Window>

	<div {...stylex.attrs(styles.full)}>
		<Window title="nautilus — ~/projects" id="projects">
			<div {...stylex.attrs(styles.pad)}>
				{#each projects as p (p.slug)}
					<article {...stylex.attrs(styles.proj)}>
						<h3 {...stylex.attrs(styles.projTitle)}>
							{p.title}
							<span {...stylex.attrs(styles.tag)} style="margin-left: 8px">
								{p.status}
							</span>
						</h3>
						<p {...stylex.attrs(styles.projDesc)}>{p.description}</p>
						<div {...stylex.attrs(styles.tags)}>
							{#each p.stack as t (t)}
								<span {...stylex.attrs(styles.tag)}>{t}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</Window>
	</div>

	<Window title="settings — skills" id="skills">
		<div {...stylex.attrs(styles.pad)}>
			{#each skills as g (g.group)}
				<div {...stylex.attrs(styles.skillGroup)}>
					<h4 {...stylex.attrs(styles.skillName)}>{g.group}</h4>
					<div {...stylex.attrs(styles.tags)}>
						{#each g.items as item (item)}
							<span {...stylex.attrs(styles.tag)}>{item}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</Window>

	<Window title="contact — {profile.handle}" id="contact">
		<div {...stylex.attrs(styles.pad)}>
			<p {...stylex.attrs(styles.contactLine)}>
				{profile.availability}. Best way to reach me is email or GitHub — I usually reply within a
				day.
			</p>
			<p {...stylex.attrs(styles.contactLine)}>
				<a {...stylex.attrs(styles.link)} href="https://github.com/HuntedRaven7">GitHub →</a>
			</p>
			<p {...stylex.attrs(styles.contactLine)}>
				<a {...stylex.attrs(styles.link)} href="https://robin.tarxz.zip">robin.tarxz.zip</a>
			</p>
		</div>
	</Window>
</div>
