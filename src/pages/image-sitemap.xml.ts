import { getCollection } from 'astro:content';
import { imagePromptCategories, imagePromptEntries } from '../data/image-prompt-patterns';
import { promptRadarEntries } from '../data/prompt-radar';
import { getSearchPreviewImages } from '../utils/search-preview-images.mjs';
import { siteMeta } from '../utils/site-meta.mjs';

export const prerender = true;

const NOINDEX_DOC_IDS = new Set([
	'advertising',
	'affiliate-disclosure',
	'disclaimer',
	'privacy',
	'terms-of-use',
]);

type ImageSitemapEntry = {
	url: string;
	images: Array<{
		path: string;
		alt?: string;
	}>;
};

function escapeXml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

function toPublicUrl(id: string) {
	if (id === 'index') return `${siteMeta.siteUrl}/`;
	const normalized = id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
	return `${siteMeta.siteUrl}/${normalized}/`;
}

function toAbsoluteUrl(pathname: string) {
	return new URL(pathname, `${siteMeta.siteUrl}/`).toString();
}

function imageEntryToXml(image: ImageSitemapEntry['images'][number]) {
	const loc = escapeXml(toAbsoluteUrl(image.path));
	const caption = image.alt ? `<image:caption>${escapeXml(image.alt)}</image:caption>` : '';
	return `<image:image><image:loc>${loc}</image:loc>${caption}</image:image>`;
}

function pageEntryToXml(entry: ImageSitemapEntry) {
	return `<url><loc>${escapeXml(entry.url)}</loc>${entry.images.map(imageEntryToXml).join('')}</url>`;
}

export async function GET() {
	const docs = await getCollection('docs');
	const entries: ImageSitemapEntry[] = docs
		.filter((entry) => entry.id !== '404' && !NOINDEX_DOC_IDS.has(entry.id))
		.map((entry) => ({
			url: toPublicUrl(entry.id),
			images: getSearchPreviewImages({
				routeId: entry.id,
				data: entry.data,
			}),
		}));

	entries.push({
		url: `${siteMeta.siteUrl}/prompts/`,
		images: getSearchPreviewImages({ pathname: '/prompts/' }),
	});

	for (const entry of promptRadarEntries) {
		entries.push({
			url: `${siteMeta.siteUrl}/prompts/${entry.slug}/`,
			images: getSearchPreviewImages({ pathname: '/prompts/' }),
		});
	}

	entries.push({
		url: `${siteMeta.siteUrl}/image-prompts/`,
		images: getSearchPreviewImages({ pathname: '/image-prompts/' }),
	});

	for (const category of imagePromptCategories) {
		entries.push({
			url: `${siteMeta.siteUrl}/image-prompts/category/${category.slug}/`,
			images: getSearchPreviewImages({ pathname: '/image-prompts/' }),
		});
	}

	for (const entry of imagePromptEntries) {
		entries.push({
			url: `${siteMeta.siteUrl}/image-prompts/case/${entry.slug}/`,
			images: getSearchPreviewImages({ pathname: '/image-prompts/' }),
		});
	}

	const uniqueEntries = Array.from(
		new Map(entries.map((entry) => [entry.url, entry])).values()
	).sort((left, right) => left.url.localeCompare(right.url));

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${uniqueEntries.map(pageEntryToXml).join('')}</urlset>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
}
