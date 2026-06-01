import { siteMeta } from './site-meta.mjs';

/**
 * @typedef {object} SearchPreviewImage
 * @property {string} path
 * @property {number} width
 * @property {number} height
 * @property {string} alt
 */

const ASPECT_IMAGE_KEYS = [
	{ field: 'image', width: 1200, height: 675 },
	{ field: 'image4x3', width: 1200, height: 900 },
	{ field: 'image1x1', width: 1200, height: 1200 },
];

function toSlug(value) {
	return String(value ?? '')
		.trim()
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');
}

function isRecord(value) {
	return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

/** @returns {SearchPreviewImage[]} */
function getFallbackImages() {
	return Array.isArray(siteMeta.richResultImages) && siteMeta.richResultImages.length
		? siteMeta.richResultImages
		: [
				{
					path: siteMeta.ogImagePath,
					width: 1200,
					height: 675,
					alt: siteMeta.ogImageAlt,
				},
			];
}

/** @returns {SearchPreviewImage[] | undefined} */
function normalizeImageSet(images) {
	if (!Array.isArray(images) || !images.length) return undefined;

	const normalized = [];

	for (const image of images) {
		if (!isRecord(image) || typeof image.path !== 'string') continue;
		normalized.push({
			path: image.path,
			width: Number(image.width) || 1200,
			height: Number(image.height) || 675,
			alt: typeof image.alt === 'string' && image.alt.trim() ? image.alt : siteMeta.ogImageAlt,
		});
	}

	return normalized.length ? normalized : undefined;
}

/** @returns {SearchPreviewImage[] | undefined} */
function buildFrontmatterImageSet(searchPreview) {
	if (!isRecord(searchPreview)) return undefined;

	const alt =
		typeof searchPreview.alt === 'string' && searchPreview.alt.trim()
			? searchPreview.alt
			: siteMeta.ogImageAlt;

	const images = [];

	for (const { field, width, height } of ASPECT_IMAGE_KEYS) {
		const path = searchPreview[field];
		if (typeof path !== 'string' || !path.trim()) continue;
		images.push({ path, width, height, alt });
	}

	return images.length ? images : undefined;
}

function getFirstPathSegment({ routeId, pathname }) {
	const rawPath = routeId || pathname || '';
	const normalized = rawPath
		.replace(/^\/+/, '')
		.replace(/\/+$/, '')
		.replace(/\/index$/, '');

	if (!normalized || normalized === 'index') return 'default';
	return normalized.split('/')[0] || 'default';
}

function getRouteKey({ routeId, pathname }) {
	const rawPath = routeId || pathname || '';
	const normalized = rawPath
		.replace(/^\/+/, '')
		.replace(/\/+$/, '')
		.replace(/\/index$/, '');

	if (!normalized || normalized === 'index') return 'default';
	return normalized;
}

function pickConfiguredSet(key) {
	if (!key) return undefined;

	const configured = siteMeta.richResultImageSets ?? {};
	const aliases = siteMeta.richResultImageAliases ?? {};
	const candidates = Array.from(
		new Set([key, toSlug(key), aliases[key], aliases[toSlug(key)]].filter(Boolean))
	);

	for (const candidate of candidates) {
		const images = normalizeImageSet(configured[candidate]);
		if (images?.length) return images;
	}

	return undefined;
}

/** @returns {SearchPreviewImage[]} */
export function getSearchPreviewImages({ routeId, pathname, data } = {}) {
	const frontmatterImages = buildFrontmatterImageSet(data?.searchPreview);
	if (frontmatterImages?.length) return frontmatterImages;

	const explicitKey =
		isRecord(data?.searchPreview) && typeof data.searchPreview.key === 'string'
			? data.searchPreview.key
			: undefined;
	const routeKey = getRouteKey({ routeId, pathname });
	const firstSegment = getFirstPathSegment({ routeId, pathname });
	const clusterCandidates = [data?.canonicalCluster, data?.contentCluster];
	const candidates =
		firstSegment === 'clusters'
			? [explicitKey, routeKey, ...clusterCandidates, firstSegment, 'default']
			: [explicitKey, routeKey, firstSegment, ...clusterCandidates, 'default'];

	for (const candidate of candidates) {
		const images = pickConfiguredSet(candidate);
		if (images?.length) return images;
	}

	return getFallbackImages();
}

export function getImageMimeType(pathOrUrl) {
	const pathname = (() => {
		try {
			return new URL(pathOrUrl).pathname;
		} catch {
			return String(pathOrUrl ?? '');
		}
	})();

	const extension = pathname.split('.').pop()?.toLowerCase();

	if (extension === 'svg') return 'image/svg+xml';
	if (extension === 'webp') return 'image/webp';
	if (extension === 'avif') return 'image/avif';
	if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg';
	if (extension === 'png') return 'image/png';
	if (extension === 'gif') return 'image/gif';
	return 'image/png';
}
