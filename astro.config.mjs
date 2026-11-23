// @ts-check

import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://iapark.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: unified({
			rehypePlugins: [
				[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
			],
		}),
	},
	fonts: [
		{
			name: 'Roboto Slab',
			cssVariable: '--font-roboto-slab',
			provider: fontProviders.google(),
			weights: [400, 700],
			styles: ['normal'],
		},
	],
});
