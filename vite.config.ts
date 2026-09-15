import { defineConfig } from 'vitest/config';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import stylex from '@stylexjs/unplugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				fallback: '404.html'
			})
		}),
		{
			...stylex.vite({
				useCSSLayers: true,
				aliases: {
					$lib: path.join(dirname, './src/lib'),
					'$lib/*': path.join(dirname, './src/lib/*')
				},
				unstable_moduleResolution: {
					type: 'commonJS',
					rootDir: dirname
				}
			}),
			enforce: undefined
		}
	],
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
