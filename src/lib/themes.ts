import * as stylex from '@stylexjs/stylex';
import { colors } from '$lib/tokens.stylex';

export const lightTheme = stylex.createTheme(colors, {
	appBg: '#f5f5f4',
	appBgElevated: '#ffffff',
	shellBar: 'rgba(255, 255, 255, 0.85)',
	windowBg: '#fafafa',
	windowBorder: 'rgba(0, 0, 0, 0.1)',
	textPrimary: '#1c1c1e',
	textMuted: '#63636b',
	topBarText: '#1c1c1e',
	dockBg: 'rgba(255, 255, 255, 0.72)',
	cardBg: 'rgba(0, 0, 0, 0.03)',
	terminalBg: '#1c1c1e',
	codeBg: '#f0f0f2'
});

export const darkTheme = stylex.createTheme(colors, {});
