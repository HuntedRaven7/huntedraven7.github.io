let theme = $state<'dark' | 'light'>('dark');
let initialized = false;

export function useTheme() {
	if (!initialized && typeof window !== 'undefined') {
		try {
			const saved = localStorage.getItem('hr-theme');
			if (saved === 'light' || saved === 'dark') theme = saved;
		} catch {
			// storage unavailable - keep default
		}
		initialized = true;
	}

	function apply(t: 'dark' | 'light') {
		theme = t;
		try {
			localStorage.setItem('hr-theme', t);
			document.documentElement.dataset.theme = t;
		} catch {
			// storage unavailable - theme still applies in memory
		}
	}

	return {
		get value() {
			return theme;
		},
		toggle() {
			apply(theme === 'dark' ? 'light' : 'dark');
		},
		set(t: 'dark' | 'light') {
			apply(t);
		}
	};
}
