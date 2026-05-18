import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const docsDir = path.join(root, 'src', 'content', 'docs');

const sitePages = new Set([
	'about.mdx',
	'contact.mdx',
	'privacy.mdx',
	'terms-of-use.mdx',
	'disclaimer.mdx',
	'editorial-policy.mdx',
	'advertising.mdx',
	'affiliate-disclosure.mdx',
	'editorial-desk.mdx',
	'review-desk.mdx',
]);

function walk(dir) {
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) return walk(fullPath);
		return entry.isFile() && entry.name.endsWith('.mdx') ? [fullPath] : [];
	});
}

function parseFrontmatter(text) {
	const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return match ? match[1] : '';
}

function field(frontmatter, name) {
	const match = frontmatter.match(new RegExp(`^${name}:\\s*(.+?)\\s*$`, 'm'));
	return match ? match[1].replace(/^['"]|['"]$/g, '').trim() : '';
}

function bodyText(text) {
	return text
		.replace(/^---\r?\n[\s\S]*?\r?\n---/, '')
		.replace(/^import\s+.+$/gm, '')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\{[^}]+\}/g, ' ');
}

function wordCount(text) {
	return (bodyText(text).match(/\b[A-Za-z0-9][A-Za-z0-9'-]*\b/g) ?? []).length;
}

function routeFromRel(rel) {
	const route = rel.replace(/^src\/content\/docs\//, '').replace(/\.mdx$/, '');
	if (route === 'index') return '/';
	return `/${route.replace(/\/index$/, '')}/`;
}

function hasYamlList(frontmatter, name) {
	return new RegExp(`^${name}:\\s*$`, 'm').test(frontmatter);
}

function countBody(pattern, body) {
	return (body.match(pattern) ?? []).length;
}

function scorePage(page) {
	let score = 100;
	const reasons = [];

	if (page.isContentPage && page.words < 650) {
		score -= 28;
		reasons.push(`thin body (${page.words} words)`);
	}
	if (page.isContentPage && page.h2Count < 3) {
		score -= 10;
		reasons.push(`few sections (${page.h2Count} h2)`);
	}
	if (page.isContentPage && page.tableRows < 3) {
		score -= 8;
		reasons.push(`few decision tables (${page.tableRows} table rows)`);
	}
	if (page.isContentPage && page.internalLinks < 3) {
		score -= 12;
		reasons.push(`weak internal pathing (${page.internalLinks} internal links)`);
	}
	if (page.isContentPage && !page.hasKeyQuestions) {
		score -= 6;
		reasons.push('missing keyQuestions');
	}
	if (page.isContentPage && !page.hasNotFor) {
		score -= 6;
		reasons.push('missing notFor');
	}
	if (page.isContentPage && !page.hasUpdateTriggers) {
		score -= 6;
		reasons.push('missing updateTriggers');
	}
	if (page.problemSolved.length < 70) {
		score -= 6;
		reasons.push('weak problemSolved');
	}
	if (page.readerTakeaway.length < 70) {
		score -= 6;
		reasons.push('weak readerTakeaway');
	}

	return { score: Math.max(0, score), reasons };
}

const pages = [];

for (const file of walk(docsDir)) {
	const rel = path.relative(root, file).replaceAll(path.sep, '/');
	const text = fs.readFileSync(file, 'utf8');
	const frontmatter = parseFrontmatter(text);
	const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---/, '');
	const pageType = field(frontmatter, 'pageType');
	const lifecycle = field(frontmatter, 'lifecycle');
	const isHub = rel.endsWith('/index.mdx') || rel === 'src/content/docs/index.mdx' || pageType === 'hub' || lifecycle === 'hub';
	const isSitePage = sitePages.has(path.basename(file));
	const page = {
		rel,
		route: routeFromRel(rel),
		title: field(frontmatter, 'title'),
		cluster: field(frontmatter, 'contentCluster') || 'uncategorized',
		pageType,
		words: wordCount(text),
		h2Count: countBody(/^##\s+/gm, body),
		tableRows: countBody(/^\|.+\|$/gm, body),
		internalLinks:
			countBody(/\[[^\]]+\]\((?!https?:|mailto:|#)[^)]+\)/g, body) + countBody(/href="\//g, body),
		hasKeyQuestions: hasYamlList(frontmatter, 'keyQuestions'),
		hasNotFor: hasYamlList(frontmatter, 'notFor'),
		hasUpdateTriggers: hasYamlList(frontmatter, 'updateTriggers'),
		problemSolved: field(frontmatter, 'problemSolved'),
		readerTakeaway: field(frontmatter, 'readerTakeaway'),
		isHub,
		isSitePage,
	};
	page.isContentPage = !page.isHub && !page.isSitePage;
	Object.assign(page, scorePage(page));
	pages.push(page);
}

const contentPages = pages.filter((page) => page.isContentPage);
const weakPages = contentPages.filter((page) => page.score < 70);
const thinPages = contentPages.filter((page) => page.words < 650);
const clusterStats = new Map();

for (const page of contentPages) {
	const stats = clusterStats.get(page.cluster) ?? { pages: 0, thin: 0, totalWords: 0, weak: 0 };
	stats.pages += 1;
	stats.totalWords += page.words;
	if (page.words < 650) stats.thin += 1;
	if (page.score < 70) stats.weak += 1;
	clusterStats.set(page.cluster, stats);
}

console.log(`Content-value audit scanned ${pages.length} MDX pages.`);
console.log(`Reference/content pages: ${contentPages.length}`);
console.log(`Weak pages below score 70: ${weakPages.length}`);
console.log(`Thin pages below 650 words: ${thinPages.length}`);

console.log('\nWeakest pages:');
for (const page of [...contentPages].sort((a, b) => a.score - b.score || a.words - b.words).slice(0, 30)) {
	console.log(
		`- ${page.score}/100 ${page.route} | ${page.words} words | ${page.title} | ${page.reasons.join('; ')}`
	);
}

console.log('\nCluster summary:');
for (const [cluster, stats] of [...clusterStats.entries()].sort((a, b) => b[1].weak - a[1].weak)) {
	console.log(
		`- ${cluster}: ${stats.pages} pages, ${stats.weak} weak, ${stats.thin} thin, avg ${Math.round(
			stats.totalWords / stats.pages
		)} words`
	);
}
