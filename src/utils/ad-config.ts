type Frontmatter = Record<string, unknown> | undefined;

type AdSlotPlan = {
	zone: string;
	headline: string;
	sizes: string[];
	audience?: string;
	note?: string;
};

type AdPlan = {
	summary: string;
	rail: AdSlotPlan[];
	footer: AdSlotPlan;
};

type AdProfile =
	| 'foundation'
	| 'policy'
	| 'team-scenario'
	| 'workflow'
	| 'tooling'
	| 'tool-comparison'
	| 'evaluation';

function inferProfile(routeId: string, frontmatter: Frontmatter): AdProfile {
	const explicit = frontmatter?.adProfile;
	if (typeof explicit === 'string') return explicit as AdProfile;
	if (routeId.startsWith('use-cases/')) return 'team-scenario';
	if (routeId.startsWith('workflows/')) return 'workflow';
	if (routeId.startsWith('tool-comparisons/')) return 'tool-comparison';
	if (routeId.startsWith('tooling/')) return 'tooling';
	if (routeId.startsWith('evaluation/')) return 'evaluation';
	if (
		routeId === 'about' ||
		routeId === 'contact' ||
		routeId === 'index' ||
		routeId.startsWith('models-and-apis/')
	)
		return 'foundation';
	return 'policy';
}

const plans: Record<AdProfile, AdPlan> = {
	foundation: {
		summary:
			'Foundation pages prioritize trust and site clarity, so the reserved commercial layout stays lighter and brand-safe.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Category sponsor or software brand feature',
				sizes: ['300x250', '300x300'],
				audience: 'Best fit for technical workflow, infrastructure, or platform brands.',
				note: 'Reserved for future placements on trust-building or orientation pages.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Newsletter, report, or partner mention',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for lower-pressure awareness inventory.',
				note: 'Secondary slot for a lighter commercial load.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Cross-site sponsor or ecosystem placement',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Suitable for broad brand awareness across reference traffic.',
			note: 'Designed to stay visually separate from editorial content.',
		},
	},
	policy: {
		summary:
			'Policy pages should remain low-pressure and disclosure-friendly, so reserved placements are positioned for transparency rather than conversion intensity.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Low-intensity brand presence',
				sizes: ['300x250', 'native card'],
				audience: 'Reserved for conservative placement on policy or disclosure pages.',
				note: 'Best used only if future monetization needs extend to trust pages.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Network-wide disclosure-safe placement',
			sizes: ['728x90', 'native strip'],
			audience: 'Only appropriate where clear disclosure remains easy to understand.',
		},
	},
	'team-scenario': {
		summary:
			'Team scenario pages carry strong commercial intent because readers are often mapping AI workflows to business teams and tooling decisions.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Workflow platform or implementation partner',
				sizes: ['300x250', '300x300'],
				audience: 'High fit for AI workflow software, services, or consulting offers.',
				note: 'Primary research-stage slot for team scenario pages.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Evaluation, analytics, or enablement tool',
				sizes: ['300x600', 'native card'],
				audience: 'Strong fit for products supporting rollout and review discipline.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Scenario-adjacent software comparison slot',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Suitable for comparison-aware traffic with implementation intent.',
		},
	},
	workflow: {
		summary:
			'Workflow pages are best reserved for operational tooling, orchestration platforms, and services tied to process design or change control.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Prompt workflow or orchestration sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Strong fit for orchestration products and implementation partners.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Ops stack or observability placement',
				sizes: ['300x600', 'native card'],
				audience: 'Good for products supporting operational oversight and traceability.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Workflow ecosystem placement',
			sizes: ['728x90', '970x90'],
			audience: 'Best for tools or services tied to execution maturity.',
		},
	},
	tooling: {
		summary:
			'Tooling pages naturally support higher-intent inventory because readers are already thinking about stack design, governance, and adoption.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Stack sponsor or platform highlight',
				sizes: ['300x250', '300x300'],
				audience: 'Best fit for prompt operations, observability, or collaboration tools.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Case study or implementation offer',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for deeper-consideration commercial inventory.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Tooling comparison placement',
			sizes: ['728x90', '970x90'],
			audience: 'Suitable for bottom-of-funnel reference traffic.',
		},
	},
	'tool-comparison': {
		summary:
			'Comparison pages usually carry the strongest monetization potential, so the placeholder layout assumes high-intent commercial inventory with careful disclosure.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Primary comparison sponsor',
				sizes: ['300x250', '300x300'],
				audience: 'Designed for brands targeting active evaluation traffic.',
				note: 'This slot should remain clearly separated from the comparison narrative.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Secondary shortlist placement',
				sizes: ['300x600', 'native card'],
				audience: 'Best for software buyers moving from research to shortlist formation.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Bottom-of-page partner slot',
			sizes: ['728x90', '970x90', 'native strip'],
			audience: 'Reserved for high-intent inventory once comparison traffic scales.',
		},
	},
	evaluation: {
		summary:
			'Evaluation pages work well for analytics, testing, regression, and observability products, but the commercial layout should stay disciplined and low-noise.',
		rail: [
			{
				zone: 'Right Rail A',
				headline: 'Testing or regression platform placement',
				sizes: ['300x250', '300x300'],
				audience: 'Best fit for evaluation, QA, or observability products.',
			},
			{
				zone: 'Right Rail B',
				headline: 'Human review or analytics support slot',
				sizes: ['300x600', 'native card'],
				audience: 'Useful for products that improve review discipline or evidence capture.',
			},
		],
		footer: {
			zone: 'Footer Band',
			headline: 'Measurement and reliability partner slot',
			sizes: ['728x90', '970x90'],
			audience: 'Reserved for readers already researching operational quality control.',
		},
	},
};

export function getAdPlan(routeId: string, frontmatter: Frontmatter): AdPlan {
	const profile = inferProfile(routeId, frontmatter);
	return plans[profile];
}
