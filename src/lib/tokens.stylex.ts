import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
	appBg: '#0a0a0b',
	appBgElevated: '#111113',
	shellBar: 'rgba(10, 10, 11, 0.85)',
	windowBg: '#1c1c1e',
	windowBgLight: '#fafafa',
	windowBorder: 'rgba(255, 255, 255, 0.09)',
	windowBorderLight: 'rgba(0, 0, 0, 0.1)',
	textPrimary: '#f5f5f4',
	textPrimaryLight: '#1c1c1e',
	textMuted: '#a1a1aa',
	textMutedLight: '#63636b',
	accentRed: '#ff2d20',
	accentOrange: '#ff8534',
	accentGradientStart: '#ff2d20',
	accentGradientEnd: '#ff8534',
	topBarText: '#ffffff',
	dockBg: 'rgba(28, 28, 30, 0.72)',
	dockBgLight: 'rgba(255, 255, 255, 0.72)',
	cardBg: 'rgba(255, 255, 255, 0.04)',
	cardBgLight: 'rgba(0, 0, 0, 0.03)',
	success: '#30d158',
	warning: '#ffd60a',
	terminalBg: '#0c0c0d',
	terminalGreen: '#4ade80',
	codeBg: '#17171a'
});

export const spacing = stylex.defineVars({
	xs: '4px',
	sm: '8px',
	md: '16px',
	lg: '24px',
	xl: '32px',
	xxl: '48px'
});

export const radii = stylex.defineVars({
	sm: '6px',
	md: '10px',
	lg: '12px',
	xl: '16px',
	full: '9999px'
});

export const fonts = stylex.defineVars({
	sans: 'Inter, "Fira Sans", system-ui, -apple-system, sans-serif',
	mono: '"Fira Code", "Fira Mono", ui-monospace, monospace'
});
