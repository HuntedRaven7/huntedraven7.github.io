<script lang="ts" module>
	import * as stylex from '@stylexjs/stylex';
	import { colors, fonts } from '$lib/tokens.stylex';

	const styles = stylex.create({
		term: {
			backgroundColor: colors.terminalBg,
			color: '#e4e4e7',
			fontFamily: fonts.mono,
			fontSize: 13.5,
			lineHeight: 1.6,
			padding: 18,
			minHeight: 260,
			maxHeight: 340,
			overflowY: 'auto'
		},
		line: {
			whiteSpace: 'pre-wrap',
			wordBreak: 'break-word',
			marginTop: 0,
			marginBottom: 4
		},
		prompt: {
			color: colors.terminalGreen,
			fontWeight: 600
		},
		form: {
			display: 'flex',
			alignItems: 'center',
			gap: 8,
			marginTop: 8
		},
		input: {
			flexGrow: 1,
			backgroundColor: 'transparent',
			borderStyle: 'none',
			outlineStyle: 'none',
			color: '#e4e4e7',
			fontFamily: fonts.mono,
			fontSize: 13.5
		}
	});
</script>

<script lang="ts">
	import { runTerminalCommand } from '$lib/terminal';
	import { useTheme } from '$lib/theme.svelte';

	const themeStore = useTheme();

	type Line = { input?: string; output: string };
	let lines = $state<Line[]>([
		{ output: 'gnome-portfolio — type "help" to start. try: whoami · projects · open rss-reader' }
	]);
	let value = $state('');
	let scrollEl: HTMLDivElement | undefined = $state(undefined);

	function submit(e: SubmitEvent) {
		e.preventDefault();
		const input = value;
		value = '';
		if (input.trim() === 'clear') {
			lines = [];
			return;
		}
		const out = runTerminalCommand(input);
		if (out.startsWith('THEME:')) {
			const t = out.slice(6).toLowerCase();
			if (t === 'light' || t === 'dark') {
				themeStore.set(t);
				lines = [...lines, { input, output: `theme → ${t}` }];
			} else {
				lines = [...lines, { input, output: 'usage: theme <light|dark>' }];
			}
		} else {
			lines = [...lines, { input, output: out }];
		}
		queueMicrotask(() => scrollEl?.scrollTo({ top: scrollEl.scrollHeight }));
	}
</script>

<div {...stylex.attrs(styles.term)} id="terminal" data-testid="terminal">
	<div bind:this={scrollEl} {...stylex.attrs(styles.term)}>
		{#each lines as l (l.input ?? l.output)}
			{#if l.input !== undefined}
				<p {...stylex.attrs(styles.line)}>
					<span {...stylex.attrs(styles.prompt)}>robin@gnome:~$</span>
					{l.input}
				</p>
			{/if}
			{#if l.output}
				<p {...stylex.attrs(styles.line)}>{l.output}</p>
			{/if}
		{/each}
		<form {...stylex.attrs(styles.form)} onsubmit={submit}>
			<span {...stylex.attrs(styles.prompt)} aria-hidden="true">robin@gnome:~$</span>
			<input
				{...stylex.attrs(styles.input)}
				bind:value
				aria-label="Terminal input"
				placeholder="type help"
				autocomplete="off"
				spellcheck={false}
				data-testid="terminal-input"
			/>
		</form>
	</div>
</div>
