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
				'Practical reference material for prompt systems, agent workflows, model operations, and evaluation.',
			tagline: 'Prompt systems, agent workflows, and model operations explained with production discipline.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/cocmo1024/aipromptgear.com',
				},
			],
			sidebar: [
				{
					label: 'Core Areas',
					items: ['workflows', 'models-and-apis', 'tooling', 'evaluation'],
				},
				{
					label: 'Site',
					collapsed: true,
					items: ['about', 'contact', 'privacy', 'disclaimer'],
				},
			],
			customCss: ['./src/styles/global.css'],
			pagefind: true,
			favicon: '/favicon.svg',
			credits: false,
		}),
		sitemap(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
