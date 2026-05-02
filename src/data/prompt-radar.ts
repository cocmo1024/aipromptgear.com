export type PromptRadarMedia = 'image' | 'video' | 'webpage' | 'workflow';

export type PromptRadarEntry = {
	slug: string;
	title: string;
	rank: number;
	updatedAt: string;
	media: PromptRadarMedia;
	model: string;
	heat: 'rising' | 'hot' | 'evergreen';
	sourceLabel: string;
	sourceUrl: string;
	signalSummary: string;
	primaryKeyword: string;
	searchIntent: string;
	useCase: string;
	prompt: string;
	variables: string[];
	whyItWorks: string;
	qualityChecks: string[];
	failureModes: string[];
	relatedLinks: Array<{
		label: string;
		href: string;
	}>;
};

export const promptRadarLastUpdated = '2026-05-02';

export const promptRadarMethod = [
	'Track public prompt-library and creator-community signals where prompts are being copied, remixed, benchmarked, or reused.',
	'Rebuild each prompt as an original operating template with source attribution, variables, quality checks, and failure modes.',
	'Favor patterns that can produce durable search demand: image editing, video storyboards, web generation, model comparisons, and prompt evaluation.',
	'Do not republish creator prompts verbatim. The value is the adapted template, explanation, and reuse boundary.',
] as const;

export const promptRadarEntries: PromptRadarEntry[] = [
	{
		slug: 'bad-ms-paint-redraw-prompt',
		title: 'Purposefully Bad MS Paint Redraw Prompt',
		rank: 1,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'The low-skill redraw format is spreading because it gives image models a clear anti-polish target: rough lines, clumsy fills, visible mistakes, and intentionally awkward composition.',
		primaryKeyword: 'bad MS Paint redraw prompt',
		searchIntent: 'Copy a prompt that turns a reference image into a deliberately crude MS Paint-style redraw.',
		useCase:
			'Meme assets, social posts, creator experiments, prompt stress tests, and brand-safe joke visuals where charm comes from controlled imperfection.',
		prompt: `Redraw the provided reference image as if it were recreated quickly in an old version of Microsoft Paint by someone with very limited drawing skill.

Keep the main subject, pose, rough composition, and recognizable objects from the reference, but convert everything into intentionally awkward low-resolution digital drawing.

Style rules:
- use shaky mouse-drawn outlines
- use flat bucket-fill colors with small unfilled gaps
- make the proportions a little wrong but still recognizable
- preserve the main colors and object positions from the reference
- add a few clumsy details that look hand-drawn, not AI-polished
- avoid realistic lighting, perfect gradients, cinematic rendering, or professional illustration

Output goal:
A funny, deliberately bad MS Paint-style redraw that feels human, rough, and oddly charming rather than broken or abstract.`,
		variables: [
			'reference image',
			'degree of ugliness',
			'main subject preservation',
			'color fidelity',
			'background simplification',
		],
		whyItWorks:
			'Most image prompts over-optimize for beauty. This one defines the negative aesthetic directly and tells the model what must stay recognizable, which keeps the joke legible.',
		qualityChecks: [
			'The output should look intentionally amateur, not corrupted.',
			'The main subject should remain easy to identify.',
			'The model should not add polished lighting or professional illustration texture.',
		],
		failureModes: [
			'The model makes a clean cartoon instead of an ugly Paint redraw.',
			'The reference composition disappears.',
			'The image becomes abstract noise instead of funny low-skill drawing.',
		],
		relatedLinks: [
			{ label: 'Image prompt archive', href: '/image-prompts/' },
			{ label: 'Prompt comparison workflow', href: '/tooling/prompt-comparison-tool-for-production-prompt-changes/' },
		],
	},
	{
		slug: '2d-floor-plan-to-3d-real-estate-render',
		title: '2D Floor Plan to 3D Real Estate Render Prompt',
		rank: 2,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Floor-plan conversion prompts are commercially useful because they turn a flat layout into a sales-ready visualization without needing a full 3D modeling workflow.',
		primaryKeyword: '2d floor plan to 3d render prompt',
		searchIntent: 'Generate a copyable prompt for converting a 2D floor plan into a realistic 3D real estate render.',
		useCase:
			'Real estate listings, renovation concepts, interior planning, property marketing, and early client visualization.',
		prompt: `Convert the provided 2D floor plan into a clean 3D isometric real estate render.

Preserve the room layout, wall positions, door openings, windows, and approximate proportions from the source plan. Do not invent extra rooms or remove structural boundaries.

Rendering direction:
- show the apartment or house from a slightly elevated isometric angle
- use realistic but neutral materials: light wood floors, white or warm walls, simple cabinetry, clean bathroom surfaces
- add furniture only where it clarifies room function
- keep the design staged but not overcrowded
- make circulation paths readable
- use soft daylight and realistic shadows
- keep labels out of the image unless explicitly requested

If a room purpose is unclear, infer conservatively from size and position, and keep the furniture minimal.

Output goal:
A polished 3D real estate concept render that remains faithful to the original 2D floor plan.`,
		variables: [
			'floor plan image',
			'interior style',
			'furniture density',
			'camera angle',
			'material palette',
		],
		whyItWorks:
			'The prompt separates structural fidelity from decorative freedom. That matters because the valuable part is not a pretty room; it is a believable visualization of the actual plan.',
		qualityChecks: [
			'Room count should match the plan.',
			'Doors and windows should not move arbitrarily.',
			'Furniture should clarify use, not hide layout errors.',
		],
		failureModes: [
			'The model creates a beautiful interior that ignores the plan.',
			'Walls become decorative partitions instead of structure.',
			'Furniture blocks circulation and makes the layout unreadable.',
		],
		relatedLinks: [
			{ label: 'Image prompt patterns', href: '/image-prompts/' },
			{ label: 'Evaluation scorecards', href: '/evaluation/what-should-an-agent-eval-scorecard-actually-measure/' },
		],
	},
	{
		slug: 'fashion-design-from-product-inspiration',
		title: 'Fashion Design From Product Inspiration Prompt',
		rank: 3,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Product-to-fashion prompts travel well because they turn an object, brand palette, or material cue into a wearable concept with clear visual lineage.',
		primaryKeyword: 'fashion design from product inspiration prompt',
		searchIntent: 'Create fashion concepts inspired by a product photo, packaging design, color palette, or material system.',
		useCase:
			'Concept boards, campaign ideation, fashion moodboards, product collaborations, and creative direction.',
		prompt: `Design a fashion look inspired by the provided product or object reference.

Translate the reference into clothing design, not a costume copy. Preserve the strongest visual cues: color palette, material texture, silhouette logic, pattern rhythm, hardware details, and brand mood.

Output direction:
- create one full-body editorial fashion look on a model
- make the inspiration visible but not literal
- include fabric choices and surface details that echo the reference
- keep the styling coherent from head to toe
- use a clean runway, studio, or campaign-photo setting
- avoid logos unless the reference explicitly requires brand marks
- avoid turning the product into a prop glued onto clothing

Reference interpretation:
{{describe_product_shape_material_palette_and_mood}}

Output goal:
A credible fashion concept that a designer could use as a moodboard direction, with clear lineage from the original product reference.`,
		variables: [
			'product reference',
			'fashion category',
			'material translation',
			'model styling',
			'campaign setting',
		],
		whyItWorks:
			'The prompt tells the model to translate design language rather than copy surface features. That usually produces a stronger, less gimmicky fashion result.',
		qualityChecks: [
			'The source object should be visible through palette, silhouette, or material cues.',
			'The outfit should be wearable or at least fashion-editorial credible.',
			'The result should avoid accidental logo misuse.',
		],
		failureModes: [
			'The product is pasted onto the garment literally.',
			'The look loses all connection to the reference.',
			'The model generates generic runway fashion with no material logic.',
		],
		relatedLinks: [
			{ label: 'Image prompt archive', href: '/image-prompts/' },
			{ label: 'Prompt release review', href: '/tooling/prompt-comparison-tool-for-production-prompt-changes/' },
		],
	},
	{
		slug: 'candid-convenience-store-cashier',
		title: 'Candid Convenience Store Cashier Prompt',
		rank: 4,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Candid worker portraits keep appearing because they combine environmental storytelling, low-key realism, and strong lighting constraints.',
		primaryKeyword: 'candid convenience store cashier prompt',
		searchIntent: 'Generate a realistic candid convenience-store cashier scene with believable retail details.',
		useCase:
			'Editorial portraits, local business visuals, social realism scenes, brand storytelling, and street-photography prompt tests.',
		prompt: `Create a candid documentary-style photo of a convenience store cashier during a quiet late-night shift.

Scene requirements:
- the cashier stands behind the counter in a small convenience store
- shelves, packaged snacks, receipt printer, scanner, counter clutter, and drink coolers should feel specific and lived-in
- lighting comes from fluorescent ceiling panels, cooler glow, and small practical lights
- the subject should look natural, not posed like a model
- preserve imperfect real-world details: reflections, plastic packaging, small signs, worn counter edges
- use a 35mm or 50mm documentary photo feel
- keep the image respectful and grounded

Mood:
Quiet, ordinary, slightly cinematic, with enough environmental detail that the store feels real.

Avoid:
Overly glamorous styling, fake neon overload, extra fingers, illegible brand clutter, and artificial film grain that hides bad details.`,
		variables: [
			'store type',
			'subject age and styling',
			'time of day',
			'camera lens',
			'lighting mix',
			'mood',
		],
		whyItWorks:
			'The prompt anchors realism through physical retail objects and mundane lighting, which helps prevent generic AI portrait gloss.',
		qualityChecks: [
			'Counter and shelf objects should look plausible.',
			'The subject should not look like a fashion shoot unless requested.',
			'Lighting should come from believable store sources.',
		],
		failureModes: [
			'The scene becomes a neon cyberpunk store.',
			'Retail objects melt into unreadable clutter.',
			'The cashier looks too posed or airbrushed.',
		],
		relatedLinks: [
			{ label: 'Convenience store neon portrait pattern', href: '/image-prompts/case/convenience-store-neon-portrait/' },
			{ label: 'Image prompt archive', href: '/image-prompts/' },
		],
	},
	{
		slug: 'japanese-google-fonts-infographic',
		title: 'Japanese Google Fonts Infographic Prompt',
		rank: 5,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'rising',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Typography infographic prompts are attractive because they test text rendering, layout hierarchy, and design taste in one output.',
		primaryKeyword: 'Japanese Google Fonts infographic prompt',
		searchIntent: 'Create an infographic-style prompt for comparing Japanese typefaces or font pairings.',
		useCase:
			'Design education, social posts, typography explainers, font comparison visuals, and prompt-based layout tests.',
		prompt: `Create a clean Japanese typography infographic comparing several font styles in a polished editorial layout.

Content structure:
- headline area with a short Japanese title
- 4 to 6 font sample panels
- each panel should show a font mood label, a short sample phrase, and one practical use case
- include small notes about readability, warmth, formality, and display suitability
- use a restrained grid with generous spacing
- make the design feel like a professional design reference card

Visual direction:
- modern Japanese editorial design
- soft neutral background
- precise alignment
- clear hierarchy
- accent color used sparingly

Quality rules:
- keep all text short and legible
- avoid filling the poster with fake paragraphs
- do not invent actual font licensing claims
- if exact font names are uncertain, label them as style categories instead of factual font recommendations`,
		variables: [
			'font categories',
			'language sample',
			'layout grid',
			'color palette',
			'number of panels',
			'design audience',
		],
		whyItWorks:
			'The prompt limits text length and asks for style categories when exact font facts are uncertain, reducing the chance of unreadable or misleading typography output.',
		qualityChecks: [
			'Text samples should be short enough for the model to render.',
			'The grid should be readable at social-preview size.',
			'Claims about specific fonts should not be overconfident.',
		],
		failureModes: [
			'The model creates long unreadable pseudo-Japanese text.',
			'The layout becomes a generic poster with no comparison structure.',
			'The output makes false claims about real font availability.',
		],
		relatedLinks: [
			{ label: 'Text rendering showcase', href: '/image-prompts/case/duct-tape-1-text-rendering-showcase/' },
			{ label: 'Image prompt archive', href: '/image-prompts/' },
		],
	},
	{
		slug: 'grwm-gym-video-sequence',
		title: 'GRWM Gym Edition Video Sequence Prompt',
		rank: 6,
		updatedAt: promptRadarLastUpdated,
		media: 'video',
		model: 'Seedance 2.0',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'GRWM video prompts work because they break lifestyle content into short repeatable beats: prep, outfit, transition, arrival, action, and payoff.',
		primaryKeyword: 'GRWM gym video prompt',
		searchIntent: 'Generate a short-form video prompt for a get-ready-with-me gym sequence.',
		useCase:
			'Creator reels, fitness brand concepts, short-form video storyboards, and lifestyle campaign ideation.',
		prompt: `Create a short vertical GRWM gym video sequence with six clear shots.

Format:
- vertical 9:16
- fast but readable pacing
- handheld creator-style camera language
- realistic transitions, not overproduced VFX

Shot list:
1. morning bag-prep close-up: shoes, towel, water bottle, headphones
2. outfit mirror check with natural room light
3. quick macro shot of tying shoes or adjusting watch
4. transition leaving home or entering the gym
5. one focused workout moment with controlled motion
6. final post-workout confidence shot with calm breathing

Style:
Clean fitness creator content, natural skin texture, believable gym lighting, grounded motion, no impossible camera movement.

Avoid:
Floating equipment, warped hands, unreadable brand text, extreme beauty filter, and chaotic cuts that hide the sequence.`,
		variables: [
			'creator style',
			'gym type',
			'workout movement',
			'wardrobe',
			'transition style',
			'video length',
		],
		whyItWorks:
			'Video models need temporal structure. A shot list gives the model a sequence to follow and keeps the output from becoming a single vague lifestyle montage.',
		qualityChecks: [
			'Each shot should have a clear role in the sequence.',
			'Motion should be plausible for a phone-style creator video.',
			'The workout moment should not hide anatomy mistakes with excessive speed.',
		],
		failureModes: [
			'The model turns the prompt into a generic gym montage.',
			'Camera motion becomes physically impossible.',
			'Hands, straps, shoes, or equipment warp between shots.',
		],
		relatedLinks: [
			{ label: 'Prompt radar', href: '/prompts/' },
			{ label: 'Model routing decisions', href: '/models-and-apis/model-routing/' },
		],
	},
	{
		slug: 'luxury-perfume-cinematic-commercial',
		title: 'Luxury Perfume Cinematic Commercial Prompt',
		rank: 7,
		updatedAt: promptRadarLastUpdated,
		media: 'video',
		model: 'Seedance 2.0',
		heat: 'hot',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Product-commercial prompts keep attracting traffic because they have obvious business value and clear visual constraints.',
		primaryKeyword: 'luxury perfume commercial prompt',
		searchIntent: 'Create a cinematic product video prompt for a luxury perfume bottle.',
		useCase:
			'Product advertising concepts, ecommerce hero videos, agency moodboards, and brand campaign testing.',
		prompt: `Create a cinematic luxury perfume commercial for a single perfume bottle.

Video structure:
1. macro opening on glass edge and cap texture
2. slow reveal of the bottle on a reflective surface
3. controlled mist, fabric, water ripple, or flower petal movement
4. hero shot with brand-like lighting but no invented logo
5. final packshot with elegant negative space

Visual direction:
- premium studio lighting
- shallow depth of field
- precise reflections
- restrained color palette
- slow camera movement
- tactile material details: glass, metal, liquid, paper box, fabric

Rules:
- keep the product shape consistent across shots
- do not add unreadable fake brand text
- do not overwhelm the bottle with effects
- make the commercial feel expensive through restraint, not visual noise`,
		variables: [
			'bottle shape',
			'color palette',
			'surface material',
			'scent mood',
			'hero prop',
			'camera movement',
		],
		whyItWorks:
			'Luxury product prompts fail when they chase too many effects. This template keeps the product consistent and uses restraint as the premium signal.',
		qualityChecks: [
			'The bottle should remain the same object across shots.',
			'Reflections should enhance the product, not hide it.',
			'Fake logos or unreadable text should be avoided.',
		],
		failureModes: [
			'The bottle changes shape every shot.',
			'Effects overpower the product.',
			'The ad looks like a generic VFX demo instead of a product commercial.',
		],
		relatedLinks: [
			{ label: 'Image prompt archive', href: '/image-prompts/' },
			{ label: 'AI cost decisions', href: '/clusters/ai-cost-and-compute/' },
		],
	},
	{
		slug: 'cinematic-soccer-storyboard',
		title: 'Cinematic Soccer Storyboard Prompt',
		rank: 8,
		updatedAt: promptRadarLastUpdated,
		media: 'video',
		model: 'Seedance 2.0',
		heat: 'rising',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Sports storyboard prompts combine motion, emotion, crowd energy, and camera grammar, which makes them good tests for video-generation control.',
		primaryKeyword: 'cinematic soccer storyboard prompt',
		searchIntent: 'Generate a cinematic soccer video storyboard prompt with shot-by-shot direction.',
		useCase:
			'Sports edits, campaign concepts, team announcements, athlete videos, and motion-prompt benchmarking.',
		prompt: `Create a cinematic soccer short video storyboard with five shots.

Shot sequence:
1. low-angle close-up of boots stepping onto wet grass under stadium lights
2. medium shot of the player controlling the ball while the crowd blurs in the background
3. tracking shot as the player accelerates past a defender
4. slow-motion strike moment with turf particles and focused body mechanics
5. reaction shot: net movement, teammates turning, stadium light flare, controlled celebration

Camera and mood:
- dramatic but realistic sports broadcast language
- believable body motion
- sharp lighting contrast
- rain or mist only if it supports the scene
- keep jerseys and signage generic unless real branding is provided

Avoid:
Impossible leg motion, duplicate balls, warped nets, fake team logos, and overcut action that hides continuity errors.`,
		variables: [
			'player profile',
			'stadium mood',
			'weather',
			'action moment',
			'camera pacing',
			'celebration level',
		],
		whyItWorks:
			'The prompt constrains motion through a storyboard. That gives video systems a path from setup to payoff instead of asking for a vague highlight reel.',
		qualityChecks: [
			'There should be one ball and consistent player motion.',
			'The shot sequence should be understandable without captions.',
			'Crowd and signage should not dominate the action.',
		],
		failureModes: [
			'The player body mechanics become impossible.',
			'The model creates multiple balls or broken nets.',
			'The video cuts too fast to evaluate continuity.',
		],
		relatedLinks: [
			{ label: 'Prompt radar', href: '/prompts/' },
			{ label: 'Agent eval scorecards', href: '/evaluation/what-should-an-agent-eval-scorecard-actually-measure/' },
		],
	},
	{
		slug: 'handheld-yoga-vinyasa-video',
		title: 'Handheld Yoga Vinyasa Flow Video Prompt',
		rank: 9,
		updatedAt: promptRadarLastUpdated,
		media: 'video',
		model: 'Seedance 2.0',
		heat: 'rising',
		sourceLabel: 'YouMind hot prompt list, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Yoga prompts are strong motion-control tests because small body-position errors are visible and the mood depends on smooth continuity.',
		primaryKeyword: 'yoga vinyasa video prompt',
		searchIntent: 'Create a calm handheld yoga video prompt with continuous movement and realistic body alignment.',
		useCase:
			'Wellness creator content, studio marketing, video-model motion tests, and calm lifestyle campaigns.',
		prompt: `Create a calm handheld vertical video of a short yoga vinyasa flow.

Sequence:
1. seated breath moment on the mat
2. slow transition into tabletop
3. controlled downward dog
4. step forward into low lunge
5. gentle rise into warrior pose
6. final relaxed standing breath

Visual direction:
- warm natural light
- quiet studio or home environment
- stable handheld camera with subtle human movement
- realistic body alignment and transitions
- soft fabric texture and mat detail
- no extreme flexibility unless explicitly requested

Rules:
- keep limbs anatomically plausible
- preserve continuity of mat position and room layout
- make the pacing calm enough to follow
- avoid jump cuts that hide broken transitions`,
		variables: [
			'yoga level',
			'studio setting',
			'lighting',
			'camera distance',
			'sequence length',
			'mood',
		],
		whyItWorks:
			'The sequence defines movement checkpoints. That makes it easier to evaluate continuity and prevents the output from collapsing into random wellness imagery.',
		qualityChecks: [
			'Body alignment should remain plausible.',
			'The camera should feel handheld but not chaotic.',
			'Transitions should be slow enough to inspect.',
		],
		failureModes: [
			'Extra limbs or impossible poses appear during transitions.',
			'The mat or room changes position between shots.',
			'The model hides movement errors with too many cuts.',
		],
		relatedLinks: [
			{ label: 'Prompt radar', href: '/prompts/' },
			{ label: 'Production evaluation', href: '/evaluation/how-do-you-evaluate-ai-agents-in-production/' },
		],
	},
	{
		slug: 'webpage-from-product-brief',
		title: 'Webpage From Product Brief Prompt',
		rank: 10,
		updatedAt: promptRadarLastUpdated,
		media: 'webpage',
		model: 'Gemini 3 Pro',
		heat: 'evergreen',
		sourceLabel: 'YouMind prompt categories, checked May 2, 2026',
		sourceUrl: 'https://youmind.com/prompts',
		signalSummary:
			'Webpage-generation prompts are durable because users want the prompt to produce a usable layout, copy hierarchy, and conversion path, not just a visual mockup.',
		primaryKeyword: 'AI webpage prompt from product brief',
		searchIntent: 'Generate a landing page or webpage mockup prompt from a product brief.',
		useCase:
			'Landing page concepts, SaaS positioning pages, product launches, internal prototypes, and marketing experiments.',
		prompt: `Create a single-page product landing page from the brief below.

Product brief:
{{product_name}}
{{target_user}}
{{main_problem}}
{{primary_outcome}}
{{proof_points}}
{{pricing_or_cta_context}}

Page requirements:
- clear hero section with one primary promise and one CTA
- problem section that names the buyer pain directly
- product workflow or feature section with 3 to 5 concrete capabilities
- proof section with credible evidence placeholders, not fake logos
- use-case section for the top buyer scenario
- FAQ section that handles objections
- final CTA

Design direction:
- modern but not generic
- strong typographic hierarchy
- responsive layout
- accessible contrast
- no fake customer logos, fabricated metrics, or unsupported claims

Output:
Return the complete page copy, section structure, and visual direction. If generating code, keep it semantic and responsive.`,
		variables: [
			'product name',
			'target user',
			'buyer pain',
			'proof points',
			'CTA',
			'design style',
		],
		whyItWorks:
			'The prompt forces marketing structure before visual polish. That prevents attractive but empty landing pages that do not explain the product.',
		qualityChecks: [
			'The hero should make a specific promise.',
			'Proof should not be fabricated.',
			'The page should have a clear conversion path.',
		],
		failureModes: [
			'The output becomes a generic SaaS page.',
			'The model invents customers or performance claims.',
			'The layout looks good but does not answer buyer objections.',
		],
		relatedLinks: [
			{ label: 'Prompt library', href: '/prompt-library/' },
			{ label: 'Structured output schema review', href: '/prompt-library/#structured-output-schema-review' },
		],
	},
	{
		slug: 'text-rendering-stress-test-prompt',
		title: 'Text Rendering Stress Test Prompt',
		rank: 11,
		updatedAt: promptRadarLastUpdated,
		media: 'image',
		model: 'GPT Image 2',
		heat: 'evergreen',
		sourceLabel: 'AIPromptGear image prompt archive',
		sourceUrl: '/image-prompts/case/duct-tape-1-text-rendering-showcase/',
		signalSummary:
			'Text rendering tests remain useful because every new image model gets judged on labels, posters, packaging, UI mockups, and small typography.',
		primaryKeyword: 'AI image text rendering test prompt',
		searchIntent: 'Stress-test whether an image model can render short text accurately across layouts.',
		useCase:
			'Model comparisons, packaging tests, poster prompts, UI screenshot prompts, and image-generation QA.',
		prompt: `Create a text-rendering stress-test board for an image generation model.

Use exactly this target text:
{{target_text}}

Create four panels:
1. large poster headline
2. small product label
3. curved sticker text
4. UI button or app card

Rules:
- keep the target text short
- render the same exact text in every panel
- label each panel clearly
- use a clean comparison-board layout
- avoid adding unrelated words
- make spelling accuracy more important than decorative complexity

Output goal:
A clear board that shows whether the model can preserve exact text across multiple realistic design contexts.`,
		variables: [
			'target text',
			'panel count',
			'design contexts',
			'layout style',
			'evaluation labels',
		],
		whyItWorks:
			'Text accuracy needs controlled tests. Using the same phrase across contexts reveals whether failures come from size, curvature, or UI-like rendering.',
		qualityChecks: [
			'Every panel should contain the exact target text.',
			'Panel labels should be readable.',
			'Decorative style should not hide spelling errors.',
		],
		failureModes: [
			'The model paraphrases the target text.',
			'Small labels become illegible.',
			'The board changes too many variables at once.',
		],
		relatedLinks: [
			{ label: 'Full text rendering pattern', href: '/image-prompts/case/duct-tape-1-text-rendering-showcase/' },
			{ label: 'Trace grading', href: '/evaluation/trace-grading-for-tool-using-ai-agents/' },
		],
	},
	{
		slug: 'model-bakeoff-comparison-board',
		title: 'Model Bakeoff Comparison Board Prompt',
		rank: 12,
		updatedAt: promptRadarLastUpdated,
		media: 'workflow',
		model: 'Any multimodal model',
		heat: 'evergreen',
		sourceLabel: 'AIPromptGear model comparison archive',
		sourceUrl: '/image-prompts/category/comparison-community/',
		signalSummary:
			'Model-comparison prompts drive durable search because creators constantly compare new image and video systems with the same prompt.',
		primaryKeyword: 'AI model comparison board prompt',
		searchIntent: 'Create a prompt for a fair side-by-side comparison board across multiple image or video models.',
		useCase:
			'Model selection, creator tests, benchmark posts, prompt tuning, and visual QA reviews.',
		prompt: `Create a model bakeoff comparison board for the same creative task across multiple AI systems.

Comparison setup:
- task: {{creative_task}}
- models or versions: {{model_names}}
- shared prompt constants: {{shared_prompt}}
- variable under test: {{what_changes_between_models}}
- success criteria: {{evaluation_criteria}}

Board requirements:
- one panel per model
- identical labels and panel sizes
- same subject, prompt, seed/reference conditions where possible
- a short notes area for strengths and failures
- no winner badge unless evaluation evidence is included

Evaluation axes:
- prompt adherence
- visual quality
- text accuracy if applicable
- identity or reference preservation if applicable
- composition and layout
- artifacts or failure modes

Output goal:
A comparison artifact that makes the tradeoffs visible instead of turning the test into a vague popularity contest.`,
		variables: [
			'creative task',
			'model list',
			'shared prompt',
			'tested variable',
			'score criteria',
			'panel layout',
		],
		whyItWorks:
			'Good model comparisons need fixed variables. This template makes the comparison auditable, which is more valuable than a collage with no method.',
		qualityChecks: [
			'Every panel should be generated from equivalent conditions.',
			'The board should show failure notes, not only attractive outputs.',
			'The tested variable should be explicit.',
		],
		failureModes: [
			'Changing prompts between models makes the test unfair.',
			'The board declares a winner without criteria.',
			'Panel labels or outputs are too small to evaluate.',
		],
		relatedLinks: [
			{ label: 'Comparison prompt patterns', href: '/image-prompts/category/comparison-community/' },
			{ label: 'AI evaluation cluster', href: '/clusters/evalops/' },
		],
	},
];

export const promptRadarEntryMap = new Map(promptRadarEntries.map((entry) => [entry.slug, entry]));

export function getPromptRadarEntry(slug: string) {
	return promptRadarEntryMap.get(slug);
}

export function getPromptRadarByMedia(media: PromptRadarMedia) {
	return promptRadarEntries.filter((entry) => entry.media === media);
}
