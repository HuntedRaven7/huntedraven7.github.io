---
import getRssResponse from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

const CONTENT_BASE = 'https://files.obsidianos.xyz/~robin/blog/content';

async function fetchText(url: string): Promise<string> {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
	return res.text();
}

function extractMarkdownFiles(html: string): string[] {
	const regex = /<a href="([^"]+\.md)"/g;
	const files: string[] = [];
	let match;
	while ((match = regex.exec(html)) !== null) {
		const href = match[1];
		const name = href.split('/').pop() || href;
		if (name.endsWith('.md')) {
			files.push(name);
		}
	}
	return files;
}

export async function GET() {
	const EXCLUDED = new Set(['home', 'sidebar', 'top', 'gallery-intro', 'graph']);
	try {
		const indexHtml = await fetchText(CONTENT_BASE);
		const files = extractMarkdownFiles(indexHtml)
			.filter((f) => !EXCLUDED.has(f.replace('.md', '')));

		const items = await Promise.all(
			files.map(async (f) => {
				const slug = f.replace('.md', '');
				const content = await fetchText(`${CONTENT_BASE}/${f}`);
				const titleMatch = content.match(/^#\s+(.+)$/m);
				const title = titleMatch ? titleMatch[1].trim() : slug;
				const description = content.slice(0, 200).replace(/[#*_`]/g, '').trim();
				return {
					title,
					description,
					link: `https://robin.tarxz.zip/blog/${slug}`,
					pubDate: new Date().toISOString(),
				};
			})
		);

		return getRssResponse({
			title: SITE_TITLE,
			description: SITE_DESCRIPTION,
			site: 'https://robin.tarxz.zip',
			items,
		});
	} catch (e) {
		console.error('Failed to generate RSS:', e);
		return new Response('Failed to generate RSS', { status: 500 });
	}
}
