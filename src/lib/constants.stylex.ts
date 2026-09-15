import * as stylex from '@stylexjs/stylex';

export const breakpoints = stylex.defineConsts({
	mobile: '@media (max-width: 640px)',
	tablet: '@media (min-width: 641px) and (max-width: 1024px)',
	desktop: '@media (min-width: 1025px)'
});

export const zIndices = stylex.defineConsts({
	dock: '40',
	topBar: '50',
	window: '30',
	windowFocused: '35',
	overview: '60'
});
