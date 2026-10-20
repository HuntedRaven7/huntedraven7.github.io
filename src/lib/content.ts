/**
 * All site content lives here — tweak copy, links, and data in one place.
 * Items marked TODO need a real link/value before going live.
 */

export const site = {
	name: 'Quinn',
	domain: 'quinn.tarxz.zip',
	url: 'https://quinn.tarxz.zip',
	github: 'https://github.com/huntedraven7',
	// TODO: confirm where the blog lives after the domain move
	blog: 'https://robin.tarxz.zip/blog/',
	// Lanyard presence (Discord) — user must be in the Lanyard server: lanyard.quinn? :)
	discordId: '523906270801952789'
}

export const heroPills = [
	'Podman',
	'BuildStream',
	'FreeDesktop SDK',
	'Linux Desktop',
	'Open Source'
]

export const marqueeItems = [
	'Podman',
	'BuildStream',
	'FreeDesktop SDK',
	'Linux Desktop',
	'Open Source',
	'Quadlets',
	'Flatpak',
	'GNOME',
	'Svelte',
	'Git',
	'Containers',
	'systemd'
]

export const stats = [
	{
		value: '300+',
		label: 'containers created and destroyed',
		note: 'podman ps -a | wc -l would disagree. Loudly.'
	},
	{
		value: '∞',
		label: 'side projects in flight',
		note: 'There is always at least one more.'
	},
	{
		value: '$0',
		label: 'spent on subscriptions',
		note: 'If you can self-host it, why rent it.'
	}
]

export const projects = [
	{
		title: 'Compass',
		blurb:
			'A fast, keyboard-first launcher for the Linux desktop. A hard fork of Vicinae with the engine and UI rewritten in Rust on Iced — no Qt, Wayland-first, and every extension sandboxed. I get to hack on it here and there.',
		tags: ['Rust', 'Wayland', 'Flatpak'],
		glyph: '🧭',
		from: '#ff5477',
		to: '#ffb066',
		href: 'https://github.com/tuna-os/compass'
	},
	{
		title: 'FreeDesktop SDK experiments',
		blurb:
			'Poking at the FreeDesktop SDK now and then — building Flatpaks with it and seeing how reproducible I can make the builds.',
		tags: ['BuildStream', 'Flatpak'],
		glyph: '🏗️',
		from: '#ff6a8a',
		to: '#9f7dff',
		href: '#' // TODO: real link when it has a home
	},
	{
		title: 'Bootc experiments',
		blurb:
			'Trying out bootc: my whole desktop as one container image that boots straight into the OS. Update it like any container, reboot, done.',
		tags: ['bootc', 'Podman'],
		glyph: '🥾',
		from: '#ff8fb0',
		to: '#ffd166',
		href: '#' // TODO: real link when it has a home
	}
]

export const faqs = [	{
		q: 'Podman or Docker?',
		a: 'Podman. Rootless by default, no central daemon babysitting my machine, and podman generates systemd units with one flag. My laptop stays boring — which is exactly the point.'
	},
	{
		q: "Why containers on the desktop?",
		a: "Because 'works on my machine' is a bug, not a feature. Containers let me isolate toolchains, snapshot experiments, and blow things up fearlessly without touching my actual system."
	},
	{
		q: "What's BuildStream?",
		a: "Apache BuildStream is a build orchestration tool: you describe your software in declarative elements, and it produces reproducible artifacts from source. I'm currently exploring it alongside the FreeDesktop SDK."
	},
	{
		q: 'Can I use what you build?',
		a: "Yes — it's all open source and lives on GitHub. Read it, fork it, break it, make it yours."
	},
	{
		q: 'How do I reach you?',
		a: 'GitHub issues are the fastest. There\u2019s also the RSS-fed blog, and I\u2019m on Discord — my live status is on this very page.'
	}
]

/* ─── About pop-outs ─────────────────────────────────────────────
 * Cards that pop out from the rail (click them in the left bar,
 * or from the mini-cards in the Who section).
 */
export const about = {
	who: 'Eager to learn everything I can about Linux containers — Podman and beyond. Currently exploring BuildStream by Apache, the FreeDesktop SDK, and always chasing the next side project.',
	passion:
		'Cloud-native design for the Linux desktop, optimized for performance and containerized workflows. I focus primarily on open source development.',
	exploring: ['BuildStream', 'FreeDesktop SDK', 'Podman', 'OSTree'],
	blog: 'New posts land in the feed the moment they ship. Subscribe so you never miss a post.'
}

export const aboutCards = [
	{ id: 'who', no: 'A', label: 'Who I am' },
	{ id: 'passion', no: 'B', label: 'Passion' },
	{ id: 'exploring', no: 'C', label: 'Exploring' },
	{ id: 'discord', no: 'D', label: 'Discord' },
	{ id: 'blog', no: 'E', label: 'Blog' }
] as const

export type AboutCardId = (typeof aboutCards)[number]['id']

/** Every panel that can swap into the deck below the hero */
export type PanelId = 'numbers' | 'projects' | 'faq' | 'contact' | AboutCardId
