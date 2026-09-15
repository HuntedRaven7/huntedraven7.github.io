import { describe, it, expect } from 'vitest';
import { runTerminalCommand } from '$lib/terminal';

describe('runTerminalCommand', () => {
	it('shows help', () => {
		expect(runTerminalCommand('help')).toContain('whoami');
	});

	it('answers whoami', () => {
		expect(runTerminalCommand('whoami')).toContain('Robin');
	});

	it('lists projects', () => {
		const out = runTerminalCommand('projects');
		expect(out).toContain('dashboard-portfolio');
		expect(out).toContain('rss-reader');
	});

	it('opens a project by slug', () => {
		expect(runTerminalCommand('open rss-reader')).toContain('RSS');
	});

	it('handles unknown project', () => {
		expect(runTerminalCommand('open nope')).toContain('unknown project');
	});

	it('handles unknown command', () => {
		expect(runTerminalCommand('sudo make sandwich')).toContain('command not found');
	});

	it('passes theme through', () => {
		expect(runTerminalCommand('theme light')).toBe('THEME:light');
	});
});
