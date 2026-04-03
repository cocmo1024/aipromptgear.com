// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://aipromptgear.com',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'AI Prompt Gear',
			description:
				'Reference system for production prompting, agent workflows, model routing, team operations, and evaluation.',
			tagline: 'Production prompting, agent operations, and model decisions organized for reusable systems instead of one-off hacks.',
			lastUpdated: true,
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cocmo1024/aipromptgear.com',
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
			favicon: '/favicon.svg',
			credits: false,
			components: {
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
