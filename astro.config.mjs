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
					label: 'Reference Areas',
					items: [
						{
							label: 'Team Scenarios',
							autogenerate: { directory: 'use-cases' },
						},
						{
							label: 'Workflows',
							autogenerate: { directory: 'workflows' },
						},
						{
							label: 'Agent Systems',
							autogenerate: { directory: 'agent-systems' },
						},
						{
							label: 'Prompt Library',
							autogenerate: { directory: 'prompt-library' },
						},
						'image-prompt-patterns',
						{
							label: 'Models and APIs',
							autogenerate: { directory: 'models-and-apis' },
						},
						{
							label: 'Tooling',
							autogenerate: { directory: 'tooling' },
						},
						{
							label: 'Tool Comparisons',
							autogenerate: { directory: 'tool-comparisons' },
						},
						{
							label: 'Evaluation',
							autogenerate: { directory: 'evaluation' },
						},
					],
				},
				{
					label: 'Site',
					collapsed: true,
					items: [
						'about',
						'contact',
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
