import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'search-previews');

const variants = [
	{ suffix: '16x9', width: 1200, height: 675 },
	{ suffix: '4x3', width: 1200, height: 900 },
	{ suffix: '1x1', width: 1200, height: 1200 },
];

const previews = [
	{
		key: 'default',
		palette: ['#0f766e', '#2563eb', '#f59e0b', '#111827'],
		motif: 'system',
	},
	{
		key: 'agent-systems',
		palette: ['#155e75', '#7c3aed', '#14b8a6', '#0f172a'],
		motif: 'network',
	},
	{
		key: 'clusters',
		palette: ['#0369a1', '#16a34a', '#ca8a04', '#1f2937'],
		motif: 'graph',
	},
	{
		key: 'evaluation',
		palette: ['#0f766e', '#475569', '#f97316', '#111827'],
		motif: 'scorecard',
	},
	{
		key: 'image-prompts',
		palette: ['#be123c', '#7c3aed', '#0ea5e9', '#1f2937'],
		motif: 'frames',
	},
	{
		key: 'douyin-livestream-ui-screenshot',
		palette: ['#dc2626', '#7c3aed', '#06b6d4', '#111827'],
		motif: 'livestream-ui',
	},
	{
		key: 'market-signals',
		palette: ['#0891b2', '#dc2626', '#84cc16', '#111827'],
		motif: 'radar',
	},
	{
		key: 'models-and-apis',
		palette: ['#1d4ed8', '#059669', '#d97706', '#0f172a'],
		motif: 'lanes',
	},
	{
		key: 'prompt-library',
		palette: ['#4f46e5', '#0f766e', '#ea580c', '#111827'],
		motif: 'cards',
	},
	{
		key: 'prompts',
		palette: ['#9333ea', '#0284c7', '#65a30d', '#111827'],
		motif: 'radar-cards',
	},
	{
		key: 'tool-comparisons',
		palette: ['#2563eb', '#0d9488', '#f59e0b', '#111827'],
		motif: 'matrix',
	},
	{
		key: 'tooling',
		palette: ['#0f766e', '#334155', '#f97316', '#111827'],
		motif: 'control-panel',
	},
	{
		key: 'use-cases',
		palette: ['#059669', '#2563eb', '#eab308', '#111827'],
		motif: 'rollout',
	},
	{
		key: 'workflows',
		palette: ['#0e7490', '#7c3aed', '#f59e0b', '#111827'],
		motif: 'workflow',
	},
];

function rect({ x, y, width, height, fill, stroke = 'none', strokeWidth = 0, rx = 20, opacity = 1 }) {
	return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" opacity="${opacity}"/>`;
}

function circle({ cx, cy, r, fill, stroke = 'none', strokeWidth = 0, opacity = 1 }) {
	return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" opacity="${opacity}"/>`;
}

function line({ x1, y1, x2, y2, stroke, strokeWidth = 8, opacity = 1, dash = '' }) {
	return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" opacity="${opacity}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function pathLine({ d, stroke, strokeWidth = 8, opacity = 1, dash = '' }) {
	return `<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

function drawGrid(width, height) {
	const step = Math.max(72, Math.round(width / 12));
	const lines = [];

	for (let x = step; x < width; x += step) {
		lines.push(line({ x1: x, y1: 0, x2: x, y2: height, stroke: '#cbd5e1', strokeWidth: 2, opacity: 0.35 }));
	}

	for (let y = step; y < height; y += step) {
		lines.push(line({ x1: 0, y1: y, x2: width, y2: y, stroke: '#cbd5e1', strokeWidth: 2, opacity: 0.35 }));
	}

	return lines.join('');
}

function drawSystem(width, height, [a, b, c, ink]) {
	const cx = width * 0.5;
	const cy = height * 0.5;
	const radius = Math.min(width, height) * 0.18;
	return [
		pathLine({ d: `M ${width * 0.18} ${height * 0.28} C ${width * 0.34} ${height * 0.18}, ${width * 0.42} ${height * 0.38}, ${cx} ${cy}`, stroke: a, strokeWidth: 12 }),
		pathLine({ d: `M ${width * 0.2} ${height * 0.72} C ${width * 0.36} ${height * 0.82}, ${width * 0.42} ${height * 0.62}, ${cx} ${cy}`, stroke: b, strokeWidth: 12 }),
		pathLine({ d: `M ${width * 0.82} ${height * 0.32} C ${width * 0.64} ${height * 0.18}, ${width * 0.58} ${height * 0.38}, ${cx} ${cy}`, stroke: c, strokeWidth: 12 }),
		pathLine({ d: `M ${width * 0.8} ${height * 0.72} C ${width * 0.64} ${height * 0.82}, ${width * 0.58} ${height * 0.62}, ${cx} ${cy}`, stroke: ink, strokeWidth: 12, opacity: 0.78 }),
		circle({ cx, cy, r: radius, fill: '#ffffff', stroke: ink, strokeWidth: 10 }),
		circle({ cx, cy, r: radius * 0.42, fill: a, opacity: 0.92 }),
		...[
			[0.18, 0.28, a],
			[0.2, 0.72, b],
			[0.82, 0.32, c],
			[0.8, 0.72, ink],
		].map(([x, y, fill]) => circle({ cx: width * x, cy: height * y, r: radius * 0.36, fill: '#ffffff', stroke: fill, strokeWidth: 8 })),
	].join('');
}

function drawNetwork(width, height, [a, b, c, ink]) {
	const nodes = [
		[0.2, 0.28, a],
		[0.34, 0.7, b],
		[0.5, 0.42, ink],
		[0.66, 0.22, c],
		[0.78, 0.68, a],
	];
	return [
		...nodes.slice(0, -1).map((node, index) =>
			line({
				x1: width * node[0],
				y1: height * node[1],
				x2: width * nodes[index + 1][0],
				y2: height * nodes[index + 1][1],
				stroke: '#64748b',
				strokeWidth: 7,
				opacity: 0.45,
			})
		),
		line({ x1: width * 0.2, y1: height * 0.28, x2: width * 0.78, y2: height * 0.68, stroke: c, strokeWidth: 7, opacity: 0.55, dash: '18 18' }),
		...nodes.map(([x, y, fill], index) =>
			[
				circle({ cx: width * x, cy: height * y, r: Math.min(width, height) * 0.08, fill: '#ffffff', stroke: fill, strokeWidth: 8 }),
				circle({ cx: width * x, cy: height * y, r: Math.min(width, height) * (index === 2 ? 0.036 : 0.025), fill }),
			].join('')
		),
	].join('');
}

function drawGraph(width, height, palette) {
	return drawNetwork(width, height, palette) +
		[
			pathLine({ d: `M ${width * 0.28} ${height * 0.48} Q ${width * 0.5} ${height * 0.16} ${width * 0.72} ${height * 0.48}`, stroke: palette[1], strokeWidth: 6, opacity: 0.5 }),
			pathLine({ d: `M ${width * 0.28} ${height * 0.48} Q ${width * 0.5} ${height * 0.86} ${width * 0.72} ${height * 0.48}`, stroke: palette[2], strokeWidth: 6, opacity: 0.5 }),
		].join('');
}

function drawScorecard(width, height, [a, b, c, ink]) {
	const cardW = width * 0.62;
	const cardH = height * 0.58;
	const x = (width - cardW) / 2;
	const y = height * 0.2;
	const rows = Array.from({ length: 5 }, (_, index) => y + cardH * (0.18 + index * 0.15));
	return [
		rect({ x, y, width: cardW, height: cardH, fill: '#ffffff', stroke: '#cbd5e1', strokeWidth: 4, rx: 28 }),
		rect({ x: x + 38, y: y + 34, width: cardW * 0.42, height: 20, fill: ink, rx: 10, opacity: 0.85 }),
		rect({ x: x + cardW - 190, y: y + 30, width: 118, height: 28, fill: a, rx: 14, opacity: 0.9 }),
		...rows.map((rowY, index) =>
			[
				circle({ cx: x + 54, cy: rowY, r: 15, fill: index % 2 ? c : a, opacity: 0.9 }),
				rect({ x: x + 88, y: rowY - 12, width: cardW * (0.42 + index * 0.05), height: 18, fill: '#94a3b8', rx: 9, opacity: 0.65 }),
				rect({ x: x + cardW - 180, y: rowY - 11, width: 92, height: 18, fill: index > 2 ? c : b, rx: 9, opacity: 0.75 }),
			].join('')
		),
	].join('');
}

function drawFrames(width, height, [a, b, c, ink]) {
	const frameW = width * 0.24;
	const frameH = height * 0.45;
	const y = height * 0.28;
	return [0.18, 0.38, 0.58].map((xRatio, index) => {
		const x = width * xRatio;
		const fill = [a, b, c][index];
		return [
			rect({ x, y: y + index * 18, width: frameW, height: frameH, fill: '#ffffff', stroke: fill, strokeWidth: 8, rx: 28 }),
			circle({ cx: x + frameW * 0.32, cy: y + frameH * 0.34 + index * 18, r: frameW * 0.13, fill, opacity: 0.85 }),
			pathLine({ d: `M ${x + frameW * 0.18} ${y + frameH * 0.76 + index * 18} L ${x + frameW * 0.44} ${y + frameH * 0.52 + index * 18} L ${x + frameW * 0.7} ${y + frameH * 0.74 + index * 18}`, stroke: ink, strokeWidth: 9, opacity: 0.68 }),
		].join('');
	}).join('');
}

function drawLivestreamUi(width, height, [a, b, c, ink]) {
	const phoneW = Math.min(width * 0.28, height * 0.42);
	const phoneH = phoneW * 1.75;
	const phoneX = width * 0.36;
	const phoneY = height * 0.16;
	const sideX = width * 0.62;
	const rowY = [0.28, 0.4, 0.52, 0.64].map((ratio) => height * ratio);
	return [
		rect({ x: phoneX, y: phoneY, width: phoneW, height: phoneH, fill: '#111827', stroke: ink, strokeWidth: 6, rx: 42 }),
		rect({ x: phoneX + 18, y: phoneY + 22, width: phoneW - 36, height: phoneH - 44, fill: '#f8fafc', rx: 30 }),
		rect({ x: phoneX + 34, y: phoneY + 44, width: phoneW - 68, height: phoneH * 0.48, fill: '#fee2e2', rx: 22 }),
		circle({ cx: phoneX + phoneW * 0.5, cy: phoneY + phoneH * 0.28, r: phoneW * 0.13, fill: '#ffffff', stroke: a, strokeWidth: 7 }),
		pathLine({ d: `M ${phoneX + phoneW * 0.3} ${phoneY + phoneH * 0.42} C ${phoneX + phoneW * 0.42} ${phoneY + phoneH * 0.35}, ${phoneX + phoneW * 0.58} ${phoneY + phoneH * 0.35}, ${phoneX + phoneW * 0.7} ${phoneY + phoneH * 0.42}`, stroke: a, strokeWidth: 8, opacity: 0.72 }),
		rect({ x: phoneX + 34, y: phoneY + phoneH * 0.58, width: phoneW - 68, height: 24, fill: b, rx: 12, opacity: 0.82 }),
		rect({ x: phoneX + 34, y: phoneY + phoneH * 0.66, width: phoneW * 0.52, height: 18, fill: '#94a3b8', rx: 9, opacity: 0.7 }),
		rect({ x: phoneX + 34, y: phoneY + phoneH * 0.73, width: phoneW * 0.62, height: 18, fill: '#94a3b8', rx: 9, opacity: 0.55 }),
		rect({ x: phoneX + 34, y: phoneY + phoneH * 0.82, width: phoneW - 68, height: 36, fill: '#e0f2fe', stroke: c, strokeWidth: 4, rx: 18 }),
		circle({ cx: phoneX + phoneW - 54, cy: phoneY + phoneH * 0.82, r: 20, fill: a, opacity: 0.9 }),
		circle({ cx: phoneX + phoneW - 54, cy: phoneY + phoneH * 0.9, r: 20, fill: b, opacity: 0.9 }),
		rect({ x: width * 0.13, y: height * 0.25, width: width * 0.18, height: height * 0.13, fill: '#ffffff', stroke: a, strokeWidth: 6, rx: 22 }),
		rect({ x: width * 0.15, y: height * 0.29, width: width * 0.12, height: 16, fill: a, rx: 8, opacity: 0.78 }),
		rect({ x: width * 0.15, y: height * 0.34, width: width * 0.1, height: 12, fill: '#94a3b8', rx: 6, opacity: 0.55 }),
		...rowY.map((y, index) =>
			[
				circle({ cx: sideX, cy: y, r: 18, fill: [a, b, c, ink][index], opacity: 0.86 }),
				rect({ x: sideX + 36, y: y - 10, width: width * (0.18 - index * 0.018), height: 18, fill: '#94a3b8', rx: 9, opacity: 0.62 }),
			].join('')
		),
		pathLine({ d: `M ${width * 0.18} ${height * 0.73} C ${width * 0.3} ${height * 0.64}, ${width * 0.34} ${height * 0.84}, ${width * 0.47} ${height * 0.75}`, stroke: c, strokeWidth: 10, opacity: 0.58 }),
	].join('');
}

function drawRadar(width, height, [a, b, c, ink]) {
	const cx = width * 0.5;
	const cy = height * 0.52;
	const r = Math.min(width, height) * 0.31;
	return [
		[0.32, 0.62, 0.88].map((scale) => circle({ cx, cy, r: r * scale, fill: 'none', stroke: '#94a3b8', strokeWidth: 5, opacity: 0.55 })).join(''),
		line({ x1: cx - r, y1: cy, x2: cx + r, y2: cy, stroke: '#94a3b8', strokeWidth: 4, opacity: 0.45 }),
		line({ x1: cx, y1: cy - r, x2: cx, y2: cy + r, stroke: '#94a3b8', strokeWidth: 4, opacity: 0.45 }),
		pathLine({ d: `M ${cx} ${cy} L ${cx + r * 0.72} ${cy - r * 0.38}`, stroke: a, strokeWidth: 12 }),
		circle({ cx: cx + r * 0.72, cy: cy - r * 0.38, r: 23, fill: a }),
		circle({ cx: cx - r * 0.36, cy: cy + r * 0.44, r: 20, fill: b }),
		circle({ cx: cx + r * 0.2, cy: cy + r * 0.72, r: 20, fill: c }),
		circle({ cx, cy, r: 18, fill: ink }),
	].join('');
}

function drawLanes(width, height, [a, b, c, ink]) {
	const startX = width * 0.16;
	const endX = width * 0.84;
	const ys = [0.3, 0.48, 0.66].map((ratio) => height * ratio);
	return ys.map((y, index) => {
		const color = [a, b, c][index];
		return [
			line({ x1: startX, y1: y, x2: endX, y2: y, stroke: color, strokeWidth: 14, opacity: 0.78 }),
			circle({ cx: startX, cy: y, r: 34, fill: '#ffffff', stroke: color, strokeWidth: 8 }),
			circle({ cx: width * (0.4 + index * 0.08), cy: y, r: 25, fill: '#ffffff', stroke: ink, strokeWidth: 6 }),
			circle({ cx: endX, cy: y, r: 34, fill: color, opacity: 0.9 }),
		].join('');
	}).join('');
}

function drawCards(width, height, [a, b, c, ink]) {
	const cardW = width * 0.19;
	const cardH = height * 0.26;
	const xs = [0.18, 0.4, 0.62];
	const ys = [0.28, 0.55];
	return ys.flatMap((yr, row) =>
		xs.map((xr, col) => {
			const fill = [a, b, c, ink][(row + col) % 4];
			const x = width * xr;
			const y = height * yr;
			return [
				rect({ x, y, width: cardW, height: cardH, fill: '#ffffff', stroke: fill, strokeWidth: 6, rx: 24 }),
				rect({ x: x + 24, y: y + 28, width: cardW * 0.54, height: 16, fill, rx: 8, opacity: 0.85 }),
				rect({ x: x + 24, y: y + 66, width: cardW * 0.72, height: 12, fill: '#94a3b8', rx: 6, opacity: 0.58 }),
				rect({ x: x + 24, y: y + 94, width: cardW * 0.48, height: 12, fill: '#94a3b8', rx: 6, opacity: 0.45 }),
			].join('');
		})
	).join('');
}

function drawRadarCards(width, height, palette) {
	return drawRadar(width, height, palette) +
		[
			rect({ x: width * 0.12, y: height * 0.18, width: width * 0.2, height: height * 0.16, fill: '#ffffff', stroke: palette[0], strokeWidth: 5, rx: 20, opacity: 0.95 }),
			rect({ x: width * 0.68, y: height * 0.68, width: width * 0.2, height: height * 0.16, fill: '#ffffff', stroke: palette[1], strokeWidth: 5, rx: 20, opacity: 0.95 }),
		].join('');
}

function drawMatrix(width, height, [a, b, c, ink]) {
	const x = width * 0.18;
	const y = height * 0.22;
	const w = width * 0.64;
	const h = height * 0.58;
	const rows = 4;
	const cols = 3;
	const parts = [rect({ x, y, width: w, height: h, fill: '#ffffff', stroke: ink, strokeWidth: 6, rx: 28, opacity: 0.96 })];
	for (let col = 1; col < cols; col += 1) parts.push(line({ x1: x + (w / cols) * col, y1: y, x2: x + (w / cols) * col, y2: y + h, stroke: '#cbd5e1', strokeWidth: 4 }));
	for (let row = 1; row < rows; row += 1) parts.push(line({ x1: x, y1: y + (h / rows) * row, x2: x + w, y2: y + (h / rows) * row, stroke: '#cbd5e1', strokeWidth: 4 }));
	for (let row = 0; row < rows; row += 1) {
		for (let col = 0; col < cols; col += 1) {
			parts.push(circle({ cx: x + (w / cols) * (col + 0.5), cy: y + (h / rows) * (row + 0.5), r: 16, fill: [a, b, c][(row + col) % 3], opacity: 0.84 }));
		}
	}
	return parts.join('');
}

function drawControlPanel(width, height, [a, b, c, ink]) {
	const x = width * 0.18;
	const y = height * 0.2;
	const w = width * 0.64;
	const h = height * 0.62;
	const rows = [0.28, 0.42, 0.56, 0.7].map((ratio) => height * ratio);
	return [
		rect({ x, y, width: w, height: h, fill: '#ffffff', stroke: '#cbd5e1', strokeWidth: 5, rx: 30 }),
		...rows.map((rowY, index) =>
			[
				rect({ x: x + 52, y: rowY - 9, width: w * 0.58, height: 18, fill: '#cbd5e1', rx: 9 }),
				circle({ cx: x + w * (0.32 + index * 0.09), cy: rowY, r: 26, fill: [a, b, c, ink][index], opacity: 0.9 }),
			].join('')
		),
		rect({ x: x + w - 170, y: y + 48, width: 92, height: 92, fill: a, rx: 24, opacity: 0.92 }),
		rect({ x: x + w - 170, y: y + 174, width: 92, height: 92, fill: c, rx: 24, opacity: 0.78 }),
	].join('');
}

function drawRollout(width, height, [a, b, c, ink]) {
	const laneY = [0.28, 0.5, 0.72].map((ratio) => height * ratio);
	return laneY.map((y, index) => {
		const color = [a, b, c][index];
		return [
			rect({ x: width * 0.14, y: y - 40, width: width * 0.18, height: 80, fill: '#ffffff', stroke: color, strokeWidth: 6, rx: 22 }),
			line({ x1: width * 0.33, y1: y, x2: width * 0.68, y2: y, stroke: color, strokeWidth: 10, opacity: 0.72 }),
			rect({ x: width * 0.7, y: y - 40, width: width * 0.16, height: 80, fill: color, rx: 22, opacity: 0.86 }),
		].join('');
	}).join('') + circle({ cx: width * 0.5, cy: height * 0.5, r: Math.min(width, height) * 0.08, fill: '#ffffff', stroke: ink, strokeWidth: 8 });
}

function drawWorkflow(width, height, [a, b, c, ink]) {
	const steps = [
		[0.18, 0.34, a],
		[0.38, 0.34, b],
		[0.58, 0.58, c],
		[0.78, 0.58, ink],
	];
	return [
		pathLine({ d: `M ${width * 0.26} ${height * 0.34} H ${width * 0.38} Q ${width * 0.5} ${height * 0.34} ${width * 0.5} ${height * 0.46} Q ${width * 0.5} ${height * 0.58} ${width * 0.58} ${height * 0.58} H ${width * 0.78}`, stroke: '#64748b', strokeWidth: 10, opacity: 0.48 }),
		...steps.map(([xr, yr, fill]) =>
			rect({ x: width * xr - 62, y: height * yr - 44, width: 124, height: 88, fill: '#ffffff', stroke: fill, strokeWidth: 7, rx: 24 })
		),
	].join('');
}

const motifDrawers = {
	system: drawSystem,
	network: drawNetwork,
	graph: drawGraph,
	scorecard: drawScorecard,
	frames: drawFrames,
	'livestream-ui': drawLivestreamUi,
	radar: drawRadar,
	lanes: drawLanes,
	cards: drawCards,
	'radar-cards': drawRadarCards,
	matrix: drawMatrix,
	'control-panel': drawControlPanel,
	rollout: drawRollout,
	workflow: drawWorkflow,
};

function makeSvg({ width, height, palette, motif }) {
	const drawer = motifDrawers[motif] ?? drawSystem;
	const [a, b, c, ink] = palette;
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">
	<rect width="${width}" height="${height}" fill="#f8fafc"/>
	${drawGrid(width, height)}
	<path d="M ${width * 0.03} ${height * 0.18} C ${width * 0.28} ${height * 0.02}, ${width * 0.74} ${height * 0.04}, ${width * 0.97} ${height * 0.2}" fill="none" stroke="${a}" stroke-width="${Math.max(width, height) * 0.035}" opacity="0.1"/>
	<path d="M ${width * 0.04} ${height * 0.82} C ${width * 0.32} ${height * 0.98}, ${width * 0.72} ${height * 0.92}, ${width * 0.96} ${height * 0.78}" fill="none" stroke="${b}" stroke-width="${Math.max(width, height) * 0.035}" opacity="0.1"/>
	${rect({ x: width * 0.08, y: height * 0.1, width: width * 0.84, height: height * 0.8, fill: '#ffffff', stroke: '#e2e8f0', strokeWidth: 4, rx: Math.min(width, height) * 0.045, opacity: 0.72 })}
	${drawer(width, height, [a, b, c, ink])}
	${circle({ cx: width * 0.9, cy: height * 0.13, r: Math.min(width, height) * 0.026, fill: c, opacity: 0.9 })}
	${circle({ cx: width * 0.1, cy: height * 0.87, r: Math.min(width, height) * 0.022, fill: a, opacity: 0.86 })}
</svg>`;
}

await fs.mkdir(outputDir, { recursive: true });

for (const preview of previews) {
	for (const variant of variants) {
		const svg = makeSvg({
			width: variant.width,
			height: variant.height,
			palette: preview.palette,
			motif: preview.motif,
		});
		const target = path.join(outputDir, `${preview.key}-${variant.suffix}.webp`);

		await sharp(Buffer.from(svg))
			.webp({
				quality: 82,
				effort: 6,
				smartSubsample: true,
			})
			.toFile(target);
	}
}

console.log(`Generated ${previews.length * variants.length} search preview images in ${outputDir}`);
