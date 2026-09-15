export type Project = {
	slug: string;
	title: string;
	description: string;
	stack: string[];
	stars?: string;
	status: 'active' | 'archived' | 'wip';
	link?: string;
};

export const profile = {
	name: 'Robin',
	handle: '@huntedraven7',
	role: 'Full-stack developer',
	tagline: 'I build fast, usable web apps — Svelte, TypeScript, Linux-flavored everything.',
	location: 'Germany · UTC+1',
	availability: 'Open to freelance & collabs'
};

export const projects: Project[] = [
	{
		slug: 'dashboard-portfolio',
		title: 'GNOME Dashboard Portfolio',
		description:
			'This site — SvelteKit + StyleX dashboard with a GNOME shell, Laravel-style hero, and a real terminal widget.',
		stack: ['SvelteKit', 'StyleX', 'TypeScript'],
		status: 'wip'
	},
	{
		slug: 'rss-reader',
		title: 'RSS Reader Revamp',
		description:
			'Minimal RSS reader with pop-out articles, offline cache, and keyboard-first navigation.',
		stack: ['Svelte', 'IndexedDB', 'Vite'],
		status: 'active'
	},
	{
		slug: 'lanyard-card',
		title: 'Lanyard 3D Card',
		description: 'Interactive 3D lanyard / ID card hero element with physics-based sway.',
		stack: ['Svelte', 'Threlte', 'Three.js'],
		status: 'archived'
	},
	{
		slug: 'dotfiles',
		title: 'Dotfiles & Homelab',
		description: 'GNOME + Neovim + Fedora Atomic setup, backups, and a tiny homelab.',
		stack: ['Bash', 'Linux', 'Neovim'],
		status: 'active'
	}
];

export const skills: { group: string; items: string[] }[] = [
	{ group: 'Frontend', items: ['SvelteKit', 'TypeScript', 'StyleX', 'CSS', 'Threlte'] },
	{ group: 'Backend', items: ['Node.js', 'Postgres', 'REST', 'Drizzle'] },
	{ group: 'Ops / Linux', items: ['Fedora', 'GNOME', 'Docker', 'GitHub Actions', 'Nginx'] }
];

export const stats = [
	{ label: 'Years building', value: '5+' },
	{ label: 'Projects shipped', value: '20+' },
	{ label: 'Favorite editor', value: 'Neovim' },
	{ label: 'Daily driver', value: 'Fedora' }
];

export const dockApps = [
	{ id: 'hero', label: 'Overview', icon: '◈', href: '#top' },
	{ id: 'projects', label: 'Projects', icon: '▦', href: '#projects' },
	{ id: 'skills', label: 'Skills', icon: '✦', href: '#skills' },
	{ id: 'terminal', label: 'Terminal', icon: '❯_', href: '#terminal' },
	{ id: 'contact', label: 'Contact', icon: '✉', href: '#contact' }
];
