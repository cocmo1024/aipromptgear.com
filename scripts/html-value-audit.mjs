import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const minimumWords = Number(process.env.HTML_VALUE_MIN_WORDS ?? 800);
const ignoredPaths = new Set(['/404/']);
const visibleSearchFirstPatterns = [
	/built to capture/i,
	/high-value traffic/i,
	/search traffic/i,
	/primary query/i,
	/search intent/i,
	/durable search/i,
	/keyword-only/i,
];

function walkIndexPages(directory, pages = []) {
	for (const entry of readdirSync(directory, { withFileTypes: true })) {
		const fullPath = path.join(directory, entry.name);
		if (entry.isDirectory()) {
			walkIndexPages(fullPath, pages);
		} else if (entry.name === 'index.html') {
			pages.push(fullPath);
		}
	}
	return pages;
}

function htmlToText(html) {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, ' ')
		.replace(/<style[\s\S]*?<\/style>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&[^;]+;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function matchContent(html, pattern) {
	return html.match(pattern)?.[1] ?? '';
}

function pageUrl(filePath) {
	const relativeDirectory = path.relative(distDir, path.dirname(filePath)).replaceAll(path.sep, '/');
	return `/${relativeDirectory ? `${relativeDirectory}/` : ''}`;
}

if (!existsSync(distDir)) {
	console.error('HTML value audit requires a built dist directory. Run npm run build first.');
	process.exit(1);
}

const pages = walkIndexPages(distDir)
	.map((filePath) => {
		const html = readFileSync(filePath, 'utf8');
		const text = htmlToText(html);
		const words = text ? text.split(/\s+/).length : 0;
		const url = pageUrl(filePath);
		return {
			url,
			text,
			words,
			title: matchContent(html, /<title>([^<]+)<\/title>/i),
			description: matchContent(html, /<meta name="description" content="([^"]+)"/i),
			robots: matchContent(html, /<meta name="robots" content="([^"]+)"/i),
			hasCanonical: /<link rel="canonical" href="[^"]+"/i.test(html),
			hasJsonLd: /<script type="application\/ld\+json"/i.test(html),
			hasOgImage: /<meta property="og:image" content="[^"]+"/i.test(html),
			hasFooter:
				html.includes('Editorial and commercial transparency') ||
				html.includes('Original AI workflow references'),
		};
	})
	.filter((page) => !ignoredPaths.has(page.url))
	.sort((a, b) => a.words - b.words);

const thinPages = pages.filter((page) => page.words < minimumWords);
const missingSignals = pages.filter(
	(page) => !page.title || !page.description || !page.hasCanonical || !page.hasJsonLd || !page.hasOgImage || !page.hasFooter
);
const visibleSearchFirstHits = pages.flatMap((page) =>
	visibleSearchFirstPatterns
		.filter((pattern) => pattern.test(page.url) || pattern.test(page.title) || pattern.test(page.text))
		.map((pattern) => ({ page, pattern }))
);

console.log(`HTML value audit scanned ${pages.length} built pages.`);
console.log(`Minimum visible word threshold: ${minimumWords}`);

if (thinPages.length > 0) {
	console.log('\nThin built pages:');
	for (const page of thinPages.slice(0, 40)) {
		console.log(`- ${page.words} words | ${page.url} | ${page.title || 'Untitled'} | ${page.robots || 'no robots meta'}`);
	}
}

if (missingSignals.length > 0) {
	console.log('\nPages missing trust/search signals:');
	for (const page of missingSignals.slice(0, 40)) {
		const missing = [
			!page.title && 'title',
			!page.description && 'description',
			!page.hasCanonical && 'canonical',
			!page.hasJsonLd && 'json-ld',
			!page.hasOgImage && 'og:image',
			!page.hasFooter && 'footer',
		].filter(Boolean);
		console.log(`- ${page.url} | missing ${missing.join(', ')}`);
	}
}

if (visibleSearchFirstHits.length > 0) {
	console.log('\nPages with visible search-first phrasing:');
	for (const hit of visibleSearchFirstHits.slice(0, 40)) {
		console.log(`- ${hit.page.url} | matched ${hit.pattern}`);
	}
}

const shortest = pages.slice(0, 20).map((page) => `${page.words} ${page.url}`);
console.log('\nShortest built pages:');
console.log(shortest.join('\n'));

if (thinPages.length > 0 || missingSignals.length > 0 || visibleSearchFirstHits.length > 0) {
	process.exit(1);
}

console.log('\nHTML value audit passed.');
