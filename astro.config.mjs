// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import { siteMeta } from './src/utils/site-meta.mjs';

export default defineConfig({
	site: siteMeta.siteUrl,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: siteMeta.name,
			description: siteMeta.description,
			tagline: siteMeta.tagline,
			lastUpdated: true,
			social: [
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/oocxx_com',
				},
			],
			sidebar: [
				{
					label: 'Core Hubs',
					items: [
						{ label: 'Home', link: '/' },
						{ label: 'Topic Clusters', link: '/clusters/' },
						{ label: 'Market Signals', link: '/market-signals/' },
						{ label: 'Use Cases', link: '/use-cases/' },
						{ label: 'Agent Systems', link: '/agent-systems/' },
						{ label: 'Models and APIs', link: '/models-and-apis/' },
						{ label: 'Evaluation', link: '/evaluation/' },
						{ label: 'Workflows', link: '/workflows/' },
						{ label: 'Tool Comparisons', link: '/tool-comparisons/' },
						{ label: 'Tooling', link: '/tooling/' },
						{ label: 'Prompt Library', link: '/prompt-library/' },
						{ label: 'Image Prompt Patterns', link: '/image-prompts/' },
					],
				},
				{
					label: 'Site',
					collapsed: true,
					items: [
						'about',
						'contact',
						'editorial-desk',
						'review-desk',
						'privacy',
						'terms-of-use',
						'disclaimer',
						'editorial-policy',
						'advertising',
						'affiliate-disclosure',
					],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: siteMeta.faviconPath,
			credits: false,
			components: {
				Head: './src/components/Head.astro',
				PageSidebar: './src/components/PageSidebar.astro',
				Footer: './src/components/Footer.astro',
			},
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
