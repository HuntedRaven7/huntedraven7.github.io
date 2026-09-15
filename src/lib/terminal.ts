import { projects, profile, skills } from '$lib/data';

export function runTerminalCommand(raw: string): string {
	const [cmd, ...args] = raw.trim().split(/\s+/);
	switch ((cmd ?? '').toLowerCase()) {
		case '':
			return '';
		case 'help':
			return 'commands: help · whoami · projects · skills · open <slug> · theme <light|dark> · clear';
		case 'whoami':
			return `${profile.name} ${profile.handle} — ${profile.role}. ${profile.tagline}`;
		case 'projects':
			return projects.map((p) => `${p.slug} — ${p.title} [${p.status}]`).join('\n');
		case 'skills':
			return skills.map((g) => `${g.group}: ${g.items.join(', ')}`).join('\n');
		case 'open': {
			const slug = (args[0] ?? '').toLowerCase();
			const found = projects.find((p) => p.slug === slug);
			return found
				? `${found.title}\n${found.description}\nstack: ${found.stack.join(', ')}`
				: `unknown project "${args[0] ?? ''}". try: ${projects.map((p) => p.slug).join(', ')}`;
		}
		case 'theme':
			return 'THEME:' + (args[0] ?? '');
		default:
			return `command not found: ${cmd}. type "help".`;
	}
}
