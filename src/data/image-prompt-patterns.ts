export type ImagePromptCategory = 'portraits' | 'posters-illustration' | 'character-design' | 'ui-social-mockups' | 'comparison-community';

export type ImagePromptEntry = {
	slug: string;
	title: string;
	category: ImagePromptCategory;
	categoryLabel: string;
	sourceUrl: string;
	sourceAuthor: string;
	sourceLabel: string;
	sourceRepoUrl: string;
	sourceRepoReadmeUrl: string;
	license: string;
	searchKeyword: string;
	description: string;
	summary: string;
	bestFor: string;
	whyItWorks: string;
	adaptedPrompt: string;
	controls: string[];
	failureModes: string[];
	tags: string[];
	relatedSlugs: string[];
};

export const imagePromptCategories = [
  {
    "slug": "portraits",
    "label": "Portraits & Photography",
    "description": "Reusable portrait and photography prompt patterns for cinematic lighting, believable skin texture, realistic props, and controlled camera behavior.",
    "count": 7
  },
  {
    "slug": "posters-illustration",
    "label": "Posters & Illustration",
    "description": "Prompt patterns for city posters, travel art, maps, lettering, and illustration systems that need stronger composition and typography discipline.",
    "count": 8
  },
  {
    "slug": "character-design",
    "label": "Character Design",
    "description": "Prompt patterns for reference sheets, character cards, anime conversions, and design boards that need consistent identity across views.",
    "count": 5
  },
  {
    "slug": "ui-social-mockups",
    "label": "UI & Social Mockups",
    "description": "Prompt patterns for interface mockups, screenshots, fake feeds, handwritten notes, and phone-camera captures that must look plausibly captured.",
    "count": 7
  },
  {
    "slug": "comparison-community",
    "label": "Comparison & Community",
    "description": "Prompt patterns focused on model comparison, reference-directed editing, text rendering tests, and community-style benchmark experiments.",
    "count": 20
  }
] as const;

export const imagePromptEntries: ImagePromptEntry[] = [
  {
    "slug": "convenience-store-neon-portrait",
    "title": "Convenience Store Neon Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/BubbleBrain/status/2045167461147042202",
    "sourceAuthor": "BubbleBrain",
    "sourceLabel": "Convenience Store Neon Portrait by @BubbleBrain",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "convenience store neon portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"Convenience Store Neon Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Convenience Store Neon Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic late-night mixed fluorescent and neon portrait photography. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "cinematic-minimal-portrait",
      "japanese-onsen-ryokan-portrait",
      "35mm-flash-editorial-portrait",
      "mirror-selfie-bedroom-portrait"
    ]
  },
  {
    "slug": "cinematic-minimal-portrait",
    "title": "Cinematic Minimal Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/iam_miharbi/status/2045151354679665101",
    "sourceAuthor": "iam_miharbi",
    "sourceLabel": "Cinematic Minimal Portrait by @iam_miharbi",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "cinematic minimal portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"Cinematic Minimal Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Cinematic Minimal Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic minimal silhouette portrait design with one dominant gradient light field. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "japanese-onsen-ryokan-portrait",
      "35mm-flash-editorial-portrait",
      "mirror-selfie-bedroom-portrait"
    ]
  },
  {
    "slug": "japanese-onsen-ryokan-portrait",
    "title": "Japanese Onsen Ryokan Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/BubbleBrain/status/2045092449803284923",
    "sourceAuthor": "BubbleBrain",
    "sourceLabel": "Japanese Onsen Ryokan Portrait by @BubbleBrain",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "japanese onsen ryokan portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"Japanese Onsen Ryokan Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Japanese Onsen Ryokan Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic warm ryokan portrait photography with gentle practical light and cultural texture. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "cinematic-minimal-portrait",
      "35mm-flash-editorial-portrait",
      "mirror-selfie-bedroom-portrait"
    ]
  },
  {
    "slug": "35mm-flash-editorial-portrait",
    "title": "35mm Flash Editorial Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/BubbleBrain/status/2045052982728016131",
    "sourceAuthor": "BubbleBrain",
    "sourceLabel": "35mm Flash Editorial Portrait by @BubbleBrain",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "35mm flash editorial portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"35mm Flash Editorial Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"35mm Flash Editorial Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic direct-flash editorial fashion portrait work. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "cinematic-minimal-portrait",
      "japanese-onsen-ryokan-portrait",
      "mirror-selfie-bedroom-portrait"
    ]
  },
  {
    "slug": "mirror-selfie-bedroom-portrait",
    "title": "Mirror Selfie Bedroom Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/Shinning1010/status/2045002808903020962",
    "sourceAuthor": "Shinning1010",
    "sourceLabel": "Mirror Selfie Bedroom Portrait by @Shinning1010",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "mirror selfie bedroom portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"Mirror Selfie Bedroom Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Mirror Selfie Bedroom Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic bedroom mirror-selfie realism with natural-window light. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "cinematic-minimal-portrait",
      "japanese-onsen-ryokan-portrait",
      "35mm-flash-editorial-portrait"
    ]
  },
  {
    "slug": "luxury-glam-beauty-portrait",
    "title": "Luxury Glam Beauty Portrait",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/patrickassale/status/2044581766309060765",
    "sourceAuthor": "patrickassale",
    "sourceLabel": "Luxury Glam Beauty Portrait by @patrickassale",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "luxury glam beauty portrait prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"Luxury Glam Beauty Portrait\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Luxury Glam Beauty Portrait\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic beauty-ad portrait work with luxury glam styling. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "cinematic-minimal-portrait",
      "japanese-onsen-ryokan-portrait",
      "35mm-flash-editorial-portrait"
    ]
  },
  {
    "slug": "9-16-cosplayer-portrait-screenshot",
    "title": "9:16 Cosplayer Portrait Screenshot",
    "category": "portraits",
    "categoryLabel": "Portraits & Photography",
    "sourceUrl": "https://x.com/Zoulinshen/status/2045082518089810073",
    "sourceAuthor": "Zoulinshen",
    "sourceLabel": "9:16 Cosplayer Portrait Screenshot by @Zoulinshen",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "9:16 cosplayer portrait screenshot prompt",
    "description": "A reusable portraits & photography prompt pattern adapted from the source case \"9:16 Cosplayer Portrait Screenshot\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"9:16 Cosplayer Portrait Screenshot\" into a reusable portraits & photography pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Photoreal portrait work, editorial fashion studies, cinematic lighting tests, selfie realism, and creator-grade image briefs.",
    "whyItWorks": "Portrait prompts work best when they specify one coherent lighting recipe, one believable lens choice, a restrained styling brief, and enough environmental anchors to keep the image from looking synthetic.",
    "adaptedPrompt": "Create a photorealistic vertical cosplay portrait screenshots that preserve costume detail. Use one dominant light recipe, a believable lens choice, and a scene that feels captured rather than composited.\n\nSubject brief: {{subject_identity_and_styling}}\nEnvironment anchors: {{specific_location_details}}\nCamera and crop: {{lens_distance_and_aspect_ratio}}\nLighting: {{dominant_light_source_and_color_spill}}\nPose and expression: {{pose_body_language_and_expression}}\nWardrobe and props: {{wardrobe_props_and_surface_details}}\n\nQuality rules:\n- preserve pores, flyaway hair, fabric folds, and realistic reflections\n- keep skin natural instead of airbrushed\n- avoid extra fingers, melted jewelry, floating props, or fake bokeh halos\n- remove watermarks and stray text unless text is part of the creative goal",
    "controls": [
      "subject identity and styling",
      "lens and camera distance",
      "lighting recipe and color spill",
      "pose and body language",
      "wardrobe and props",
      "aspect ratio and crop"
    ],
    "failureModes": [
      "stacking too many beauty adjectives until the subject turns plastic",
      "mixing conflicting light sources without one dominant source",
      "vague environments that make the portrait feel composited",
      "overusing negative prompts instead of writing a cleaner main prompt"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "portrait prompts",
      "photorealism"
    ],
    "relatedSlugs": [
      "convenience-store-neon-portrait",
      "cinematic-minimal-portrait",
      "japanese-onsen-ryokan-portrait",
      "35mm-flash-editorial-portrait"
    ]
  },
  {
    "slug": "boston-spring-2026-city-poster",
    "title": "Boston Spring 2026 City Poster",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/BubbleBrain/status/2045358053831172358",
    "sourceAuthor": "BubbleBrain",
    "sourceLabel": "Boston Spring 2026 City Poster by @BubbleBrain",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "boston spring 2026 city poster prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Boston Spring 2026 City Poster\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Boston Spring 2026 City Poster\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a city poster design built around one sweeping river-shaped composition. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster",
      "2026-spring-guangzhou-city-poster"
    ]
  },
  {
    "slug": "vintage-amalfi-travel-poster",
    "title": "Vintage Amalfi Travel Poster",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/WolfRiccardo/status/2044562722491121718",
    "sourceAuthor": "WolfRiccardo",
    "sourceLabel": "Vintage Amalfi Travel Poster by @WolfRiccardo",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "vintage amalfi travel poster prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Vintage Amalfi Travel Poster\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Vintage Amalfi Travel Poster\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a retro travel poster illustration with print texture and coastal hierarchy. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster",
      "2026-spring-guangzhou-city-poster"
    ]
  },
  {
    "slug": "chengdu-food-map-illustration",
    "title": "Chengdu Food Map Illustration",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/Panda20230902/status/2045396918965285111",
    "sourceAuthor": "Panda20230902",
    "sourceLabel": "Chengdu Food Map Illustration by @Panda20230902",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "chengdu food map illustration prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Chengdu Food Map Illustration\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Chengdu Food Map Illustration\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a hand-drawn city food map illustration with labeled points of interest. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chinese-minimalist-s-shaped-poster",
      "2026-spring-guangzhou-city-poster"
    ]
  },
  {
    "slug": "chinese-minimalist-s-shaped-poster",
    "title": "Chinese Minimalist S-Shaped Poster",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/liyue_ai/status/2045368305079447853",
    "sourceAuthor": "liyue_ai",
    "sourceLabel": "Chinese Minimalist S-Shaped Poster by @liyue_ai",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "chinese minimalist s-shaped poster prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Chinese Minimalist S-Shaped Poster\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Chinese Minimalist S-Shaped Poster\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a minimalist S-curve poster composition with calligraphic flow. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "2026-spring-guangzhou-city-poster"
    ]
  },
  {
    "slug": "2026-spring-guangzhou-city-poster",
    "title": "2026 Spring Guangzhou City Poster",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/liyue_ai/status/2045332620352119274",
    "sourceAuthor": "liyue_ai",
    "sourceLabel": "2026 Spring Guangzhou City Poster by @liyue_ai",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "2026 spring guangzhou city poster prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"2026 Spring Guangzhou City Poster\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"2026 Spring Guangzhou City Poster\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a seasonal city-poster design with restrained typography and atmospheric landmarks. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster"
    ]
  },
  {
    "slug": "doodle-sketch-ai-builder",
    "title": "Doodle Sketch AI Builder",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/blanplan/status/2045190582453350748",
    "sourceAuthor": "blanplan",
    "sourceLabel": "Doodle Sketch AI Builder by @blanplan",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "doodle sketch ai builder prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Doodle Sketch AI Builder\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Doodle Sketch AI Builder\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a doodle-sketch builder visuals that still read as deliberate composition. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster"
    ]
  },
  {
    "slug": "futuristic-mandala-illustration",
    "title": "Futuristic Mandala Illustration",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/4WEB1/status/2045390207072256179",
    "sourceAuthor": "4WEB1",
    "sourceLabel": "Futuristic Mandala Illustration by @4WEB1",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "futuristic mandala illustration prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Futuristic Mandala Illustration\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Futuristic Mandala Illustration\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a symmetrical futuristic mandala illustration with controlled detail density. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster"
    ]
  },
  {
    "slug": "super-famicom-poster-style",
    "title": "Super Famicom Poster Style",
    "category": "posters-illustration",
    "categoryLabel": "Posters & Illustration",
    "sourceUrl": "https://x.com/lilimliliychan/status/2045114760937804187",
    "sourceAuthor": "lilimliliychan",
    "sourceLabel": "Super Famicom Poster Style by @lilimliliychan",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "super famicom poster style prompt",
    "description": "A reusable posters & illustration prompt pattern adapted from the source case \"Super Famicom Poster Style\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Super Famicom Poster Style\" into a reusable posters & illustration pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Travel posters, city campaigns, print-style illustration, concept art mood boards, calligraphy experiments, and stylized map graphics.",
    "whyItWorks": "Poster prompts hold together when they have one dominant visual gesture, one disciplined palette, and a clear plan for where text belongs instead of treating typography as an afterthought.",
    "adaptedPrompt": "Design a retro game-poster art with era-specific texture and typography restraint. Build the image around one clear compositional gesture, a limited but intentional palette, and typography that has a defined home instead of being bolted on late.\n\nHero subject: {{hero_subject_or_landmark}}\nComposition rule: {{dominant_shape_negative_space_or_camera_angle}}\nPalette: {{two_to_four_anchor_colors}}\nTexture and finish: {{print_texture_paper_grain_or_brushwork}}\nTypography brief: {{headline_subline_and_placement}}\nOutput format: {{poster_ratio_or_print_size}}\n\nQuality rules:\n- keep the layout legible at thumbnail and poster size\n- avoid cluttering the center with too many landmarks or icons\n- keep style references coherent instead of mixing unrelated eras\n- only ask for dense readable text if text rendering is central to the goal",
    "controls": [
      "hero subject and scene",
      "composition and negative space",
      "palette and texture",
      "typography placement",
      "print or illustration finish",
      "poster ratio"
    ],
    "failureModes": [
      "asking for too many landmarks with no hierarchy",
      "leaving text rendering vague when the page needs readable type",
      "mixing incompatible art directions in one shot",
      "using generic style words instead of naming the layout behavior"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "poster prompts",
      "illustration prompts"
    ],
    "relatedSlugs": [
      "boston-spring-2026-city-poster",
      "vintage-amalfi-travel-poster",
      "chengdu-food-map-illustration",
      "chinese-minimalist-s-shaped-poster"
    ]
  },
  {
    "slug": "anime-snapshot-conversion",
    "title": "Anime Snapshot Conversion",
    "category": "character-design",
    "categoryLabel": "Character Design",
    "sourceUrl": "https://x.com/Thereallo1026/status/2044241997163311569",
    "sourceAuthor": "Thereallo1026",
    "sourceLabel": "Anime Snapshot Conversion by @Thereallo1026",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "anime snapshot conversion prompt",
    "description": "A reusable character design prompt pattern adapted from the source case \"Anime Snapshot Conversion\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Anime Snapshot Conversion\" into a reusable character design pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Character sheets, anime stylization, game-art reference boards, concept packets, expression lineups, and prop breakdowns.",
    "whyItWorks": "Character prompts become reusable only when they define viewpoint coverage, sheet layout, expression variation, costume breakdown, and label hierarchy, not just the character aesthetic.",
    "adaptedPrompt": "Create a anime-style conversion that still feels like a captured frame. Treat this as a structured design sheet, not a single beauty render.\n\nCore character concept: {{character_identity_and_genre}}\nArt direction: {{style_reference_and_rendering_finish}}\nSheet layout: {{front_side_back_detail_panels}}\nExpression set: {{expression_variations}}\nCostume and prop callouts: {{closeup_details_and_labels}}\nColor and annotation plan: {{palette_notes_and_text_density}}\n\nQuality rules:\n- keep the face, silhouette, and costume consistent across panels\n- reserve space for labels and detail callouts\n- avoid mixing too many franchise references in one prompt\n- specify the number of views when you need a true reference sheet",
    "controls": [
      "style reference and genre",
      "sheet layout and panels",
      "turnaround views",
      "expression set",
      "costume and prop callouts",
      "label and annotation density"
    ],
    "failureModes": [
      "asking for a reference sheet without specifying views",
      "mixing too many franchises or art styles",
      "forgetting prop and costume closeups",
      "treating layout notes as optional when the page is supposed to read like a design board"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "character design prompts",
      "reference sheets"
    ],
    "relatedSlugs": [
      "persona5-character-reference-card",
      "gal-game-character-introduction-page",
      "chibi-character-reference-sheet",
      "official-character-sheet-jp"
    ]
  },
  {
    "slug": "persona5-character-reference-card",
    "title": "Persona5 Character Reference Card",
    "category": "character-design",
    "categoryLabel": "Character Design",
    "sourceUrl": "https://x.com/iamrednightS/status/2045075682837836265",
    "sourceAuthor": "iamrednightS",
    "sourceLabel": "Persona5 Character Reference Card by @iamrednightS",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "persona5 character reference card prompt",
    "description": "A reusable character design prompt pattern adapted from the source case \"Persona5 Character Reference Card\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Persona5 Character Reference Card\" into a reusable character design pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Character sheets, anime stylization, game-art reference boards, concept packets, expression lineups, and prop breakdowns.",
    "whyItWorks": "Character prompts become reusable only when they define viewpoint coverage, sheet layout, expression variation, costume breakdown, and label hierarchy, not just the character aesthetic.",
    "adaptedPrompt": "Create a stylized character card with franchise-inspired layout discipline. Treat this as a structured design sheet, not a single beauty render.\n\nCore character concept: {{character_identity_and_genre}}\nArt direction: {{style_reference_and_rendering_finish}}\nSheet layout: {{front_side_back_detail_panels}}\nExpression set: {{expression_variations}}\nCostume and prop callouts: {{closeup_details_and_labels}}\nColor and annotation plan: {{palette_notes_and_text_density}}\n\nQuality rules:\n- keep the face, silhouette, and costume consistent across panels\n- reserve space for labels and detail callouts\n- avoid mixing too many franchise references in one prompt\n- specify the number of views when you need a true reference sheet",
    "controls": [
      "style reference and genre",
      "sheet layout and panels",
      "turnaround views",
      "expression set",
      "costume and prop callouts",
      "label and annotation density"
    ],
    "failureModes": [
      "asking for a reference sheet without specifying views",
      "mixing too many franchises or art styles",
      "forgetting prop and costume closeups",
      "treating layout notes as optional when the page is supposed to read like a design board"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "character design prompts",
      "reference sheets"
    ],
    "relatedSlugs": [
      "anime-snapshot-conversion",
      "gal-game-character-introduction-page",
      "chibi-character-reference-sheet",
      "official-character-sheet-jp"
    ]
  },
  {
    "slug": "gal-game-character-introduction-page",
    "title": "Gal Game Character Introduction Page",
    "category": "character-design",
    "categoryLabel": "Character Design",
    "sourceUrl": "https://x.com/09lyco/status/2045281845391323175",
    "sourceAuthor": "09lyco",
    "sourceLabel": "Gal Game Character Introduction Page by @09lyco",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gal game character introduction page prompt",
    "description": "A reusable character design prompt pattern adapted from the source case \"Gal Game Character Introduction Page\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Gal Game Character Introduction Page\" into a reusable character design pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Character sheets, anime stylization, game-art reference boards, concept packets, expression lineups, and prop breakdowns.",
    "whyItWorks": "Character prompts become reusable only when they define viewpoint coverage, sheet layout, expression variation, costume breakdown, and label hierarchy, not just the character aesthetic.",
    "adaptedPrompt": "Create a character-introduction pages that feel like game UI instead of generic art sheets. Treat this as a structured design sheet, not a single beauty render.\n\nCore character concept: {{character_identity_and_genre}}\nArt direction: {{style_reference_and_rendering_finish}}\nSheet layout: {{front_side_back_detail_panels}}\nExpression set: {{expression_variations}}\nCostume and prop callouts: {{closeup_details_and_labels}}\nColor and annotation plan: {{palette_notes_and_text_density}}\n\nQuality rules:\n- keep the face, silhouette, and costume consistent across panels\n- reserve space for labels and detail callouts\n- avoid mixing too many franchise references in one prompt\n- specify the number of views when you need a true reference sheet",
    "controls": [
      "style reference and genre",
      "sheet layout and panels",
      "turnaround views",
      "expression set",
      "costume and prop callouts",
      "label and annotation density"
    ],
    "failureModes": [
      "asking for a reference sheet without specifying views",
      "mixing too many franchises or art styles",
      "forgetting prop and costume closeups",
      "treating layout notes as optional when the page is supposed to read like a design board"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "character design prompts",
      "reference sheets"
    ],
    "relatedSlugs": [
      "anime-snapshot-conversion",
      "persona5-character-reference-card",
      "chibi-character-reference-sheet",
      "official-character-sheet-jp"
    ]
  },
  {
    "slug": "chibi-character-reference-sheet",
    "title": "Chibi Character Reference Sheet",
    "category": "character-design",
    "categoryLabel": "Character Design",
    "sourceUrl": "https://x.com/tsubaki_ew/status/2045259289993048284",
    "sourceAuthor": "tsubaki_ew",
    "sourceLabel": "Chibi Character Reference Sheet by @tsubaki_ew",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "chibi character reference sheet prompt",
    "description": "A reusable character design prompt pattern adapted from the source case \"Chibi Character Reference Sheet\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Chibi Character Reference Sheet\" into a reusable character design pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Character sheets, anime stylization, game-art reference boards, concept packets, expression lineups, and prop breakdowns.",
    "whyItWorks": "Character prompts become reusable only when they define viewpoint coverage, sheet layout, expression variation, costume breakdown, and label hierarchy, not just the character aesthetic.",
    "adaptedPrompt": "Create a compact chibi reference sheets with readable turnarounds and accessories. Treat this as a structured design sheet, not a single beauty render.\n\nCore character concept: {{character_identity_and_genre}}\nArt direction: {{style_reference_and_rendering_finish}}\nSheet layout: {{front_side_back_detail_panels}}\nExpression set: {{expression_variations}}\nCostume and prop callouts: {{closeup_details_and_labels}}\nColor and annotation plan: {{palette_notes_and_text_density}}\n\nQuality rules:\n- keep the face, silhouette, and costume consistent across panels\n- reserve space for labels and detail callouts\n- avoid mixing too many franchise references in one prompt\n- specify the number of views when you need a true reference sheet",
    "controls": [
      "style reference and genre",
      "sheet layout and panels",
      "turnaround views",
      "expression set",
      "costume and prop callouts",
      "label and annotation density"
    ],
    "failureModes": [
      "asking for a reference sheet without specifying views",
      "mixing too many franchises or art styles",
      "forgetting prop and costume closeups",
      "treating layout notes as optional when the page is supposed to read like a design board"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "character design prompts",
      "reference sheets"
    ],
    "relatedSlugs": [
      "anime-snapshot-conversion",
      "persona5-character-reference-card",
      "gal-game-character-introduction-page",
      "official-character-sheet-jp"
    ]
  },
  {
    "slug": "official-character-sheet-jp",
    "title": "Official Character Sheet (JP)",
    "category": "character-design",
    "categoryLabel": "Character Design",
    "sourceUrl": "https://x.com/Toshi_nyaruo_AI/status/2045025277538107420",
    "sourceAuthor": "Toshi_nyaruo_AI",
    "sourceLabel": "Official Character Sheet (JP) by @Toshi_nyaruo_AI",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "official character sheet prompt",
    "description": "A reusable character design prompt pattern adapted from the source case \"Official Character Sheet (JP)\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Official Character Sheet (JP)\" into a reusable character design pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "Character sheets, anime stylization, game-art reference boards, concept packets, expression lineups, and prop breakdowns.",
    "whyItWorks": "Character prompts become reusable only when they define viewpoint coverage, sheet layout, expression variation, costume breakdown, and label hierarchy, not just the character aesthetic.",
    "adaptedPrompt": "Create a studio-style character sheet layout with disciplined annotation zones. Treat this as a structured design sheet, not a single beauty render.\n\nCore character concept: {{character_identity_and_genre}}\nArt direction: {{style_reference_and_rendering_finish}}\nSheet layout: {{front_side_back_detail_panels}}\nExpression set: {{expression_variations}}\nCostume and prop callouts: {{closeup_details_and_labels}}\nColor and annotation plan: {{palette_notes_and_text_density}}\n\nQuality rules:\n- keep the face, silhouette, and costume consistent across panels\n- reserve space for labels and detail callouts\n- avoid mixing too many franchise references in one prompt\n- specify the number of views when you need a true reference sheet",
    "controls": [
      "style reference and genre",
      "sheet layout and panels",
      "turnaround views",
      "expression set",
      "costume and prop callouts",
      "label and annotation density"
    ],
    "failureModes": [
      "asking for a reference sheet without specifying views",
      "mixing too many franchises or art styles",
      "forgetting prop and costume closeups",
      "treating layout notes as optional when the page is supposed to read like a design board"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "character design prompts",
      "reference sheets"
    ],
    "relatedSlugs": [
      "anime-snapshot-conversion",
      "persona5-character-reference-card",
      "gal-game-character-introduction-page",
      "chibi-character-reference-sheet"
    ]
  },
  {
    "slug": "one-prompt-ui-design-generation",
    "title": "One-Prompt UI Design Generation",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/austinit/status/2044968740782272596",
    "sourceAuthor": "austinit",
    "sourceLabel": "One-Prompt UI Design Generation by @austinit",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "one-prompt ui design generation prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"One-Prompt UI Design Generation\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"One-Prompt UI Design Generation\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a single-brief UI generation with stronger hierarchy and product realism. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "amateur-iphone-keynote-snapshot",
      "handwritten-notebook-photo",
      "song-dynasty-social-media-feed",
      "multi-platform-content-screenshots"
    ]
  },
  {
    "slug": "amateur-iphone-keynote-snapshot",
    "title": "Amateur iPhone Keynote Snapshot",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/patrickassale/status/2044687244368441742",
    "sourceAuthor": "patrickassale",
    "sourceLabel": "Amateur iPhone Keynote Snapshot by @patrickassale",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "amateur iphone keynote snapshot prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"Amateur iPhone Keynote Snapshot\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Amateur iPhone Keynote Snapshot\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a crowd-shot event photography that looks like a real phone capture. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "handwritten-notebook-photo",
      "song-dynasty-social-media-feed",
      "multi-platform-content-screenshots"
    ]
  },
  {
    "slug": "handwritten-notebook-photo",
    "title": "Handwritten Notebook Photo",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/patrickassale/status/2044569086013718958",
    "sourceAuthor": "patrickassale",
    "sourceLabel": "Handwritten Notebook Photo by @patrickassale",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "handwritten notebook photo prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"Handwritten Notebook Photo\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Handwritten Notebook Photo\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a realistic notebook photography with handwriting, cross-outs, and daylight texture. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "amateur-iphone-keynote-snapshot",
      "song-dynasty-social-media-feed",
      "multi-platform-content-screenshots"
    ]
  },
  {
    "slug": "song-dynasty-social-media-feed",
    "title": "Song Dynasty Social Media Feed",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/Panda20230902/status/2045385588065313057",
    "sourceAuthor": "Panda20230902",
    "sourceLabel": "Song Dynasty Social Media Feed by @Panda20230902",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "song dynasty social media feed prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"Song Dynasty Social Media Feed\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Song Dynasty Social Media Feed\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a historical social-feed mockups with consistent platform chrome. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "amateur-iphone-keynote-snapshot",
      "handwritten-notebook-photo",
      "multi-platform-content-screenshots"
    ]
  },
  {
    "slug": "multi-platform-content-screenshots",
    "title": "Multi-Platform Content Screenshots",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/MrLarus/status/2045373105041007013",
    "sourceAuthor": "MrLarus",
    "sourceLabel": "Multi-Platform Content Screenshots by @MrLarus",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "multi-platform content screenshots prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"Multi-Platform Content Screenshots\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Multi-Platform Content Screenshots\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a multi-platform creator screenshot sets with per-platform behavior differences. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "amateur-iphone-keynote-snapshot",
      "handwritten-notebook-photo",
      "song-dynasty-social-media-feed"
    ]
  },
  {
    "slug": "liu-yifei-douyin-livestream-screenshot",
    "title": "Liu Yifei Douyin Livestream Screenshot",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/alanblogsooo/status/2044784762594918516",
    "sourceAuthor": "alanblogsooo",
    "sourceLabel": "Liu Yifei Douyin Livestream Screenshot by @alanblogsooo",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "liu yifei douyin livestream screenshot prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"Liu Yifei Douyin Livestream Screenshot\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Liu Yifei Douyin Livestream Screenshot\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a celebrity-style livestream screenshot composition with platform realism. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use",
      "This source idea touches branded interfaces, public figures, or platform mimicry. Keep licensing, impersonation, and trademark constraints in scope before commercial use."
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "amateur-iphone-keynote-snapshot",
      "handwritten-notebook-photo",
      "song-dynasty-social-media-feed"
    ]
  },
  {
    "slug": "king-taejo-yi-seong-gye-s-x-page",
    "title": "King Taejo Yi Seong-gye's X Page",
    "category": "ui-social-mockups",
    "categoryLabel": "UI & Social Mockups",
    "sourceUrl": "https://x.com/SKA_Neotype/status/2044637900978217334",
    "sourceAuthor": "SKA_Neotype",
    "sourceLabel": "King Taejo Yi Seong-gye's X Page by @SKA_Neotype",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "king taejo yi seong-gyes x page prompt",
    "description": "A reusable ui & social mockups prompt pattern adapted from the source case \"King Taejo Yi Seong-gye's X Page\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"King Taejo Yi Seong-gye's X Page\" into a reusable ui & social mockups pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "UI concept frames, social screenshots, keynote photos, notebook pages, feed mockups, and creator-content thumbnails.",
    "whyItWorks": "UI and screenshot prompts work when they treat platform chrome, text density, camera artifacts, and device framing as first-class prompt ingredients.",
    "adaptedPrompt": "Generate a historical-figure social profile mockups with strong feed hierarchy. The result should look like a captured product or social artifact, not a clean design board.\n\nPlatform or device: {{platform_device_and_screen_ratio}}\nPrimary scene: {{screen_content_or_mockup_goal}}\nCapture style: {{camera_angle_reflections_noise_or_compression}}\nUI chrome: {{status_bar_buttons_notifications_comments}}\nText behavior: {{what_text_must_be_readable_and_what_can_be_abstracted}}\nVisual finish: {{lighting_surface_and_background_context}}\n\nQuality rules:\n- match platform conventions before adding decorative detail\n- keep text amount realistic for the renderer\n- include mild imperfections when the image should feel photographed\n- check trademark, likeness, and impersonation boundaries before commercial use",
    "controls": [
      "platform or device frame",
      "screen density and text blocks",
      "camera angle and artifact level",
      "ambient light and reflections",
      "notification chrome or status bar",
      "brand and likeness boundaries"
    ],
    "failureModes": [
      "mockups that look like generic Figma boards instead of captured screens",
      "perfectly clean screenshots when a camera-photo look was intended",
      "too much text for the renderer to keep stable",
      "brand or celebrity references with no boundary note for commercial use",
      "This source idea touches branded interfaces, public figures, or platform mimicry. Keep licensing, impersonation, and trademark constraints in scope before commercial use."
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "ui mockup prompts",
      "screenshot prompts"
    ],
    "relatedSlugs": [
      "one-prompt-ui-design-generation",
      "amateur-iphone-keynote-snapshot",
      "handwritten-notebook-photo",
      "song-dynasty-social-media-feed"
    ]
  },
  {
    "slug": "model-comparison-gpt-image-2-vs-nano-banana-2",
    "title": "Model Comparison: GPT Image 2 vs Nano Banana 2",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/desds1678/status/2045144798454280411",
    "sourceAuthor": "desds1678",
    "sourceLabel": "Model Comparison: GPT Image 2 vs Nano Banana 2 by @desds1678",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt image 2 vs nano banana 2 prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Model Comparison: GPT Image 2 vs Nano Banana 2\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Model Comparison: GPT Image 2 vs Nano Banana 2\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for side-by-side model comparison boards with fixed subject variables.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase",
      "wooden-bookshelf-prompt-test"
    ]
  },
  {
    "slug": "direct-on-reference-frame-directing",
    "title": "Direct-on-Reference Frame Directing",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/samifox_ai/status/2044898023159853100",
    "sourceAuthor": "samifox_ai",
    "sourceLabel": "Direct-on-Reference Frame Directing by @samifox_ai",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "direct-on-reference frame directing prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Direct-on-Reference Frame Directing\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Direct-on-Reference Frame Directing\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Use a reference-led image brief to direct reference-frame directing with arrows, notes, and preserved geometry.\n\nReference asset: {{reference_image_or_frame}}\nElements that must stay fixed: {{composition_subject_wardrobe_geometry}}\nDirected changes: {{camera_move_action_pose_expression_or_prop_changes}}\nAnnotation style: {{arrows_notes_boxes_or_overlays}}\nOutput ratio: {{aspect_ratio}}\n\nQuality rules:\n- state exactly what must remain unchanged\n- avoid broad style changes that rewrite the whole frame\n- keep edit instructions concrete enough to verify",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase",
      "wooden-bookshelf-prompt-test"
    ]
  },
  {
    "slug": "reference-frame-scene-direction",
    "title": "Reference Frame Scene Direction",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/HuliJason/status/2044894209673490495",
    "sourceAuthor": "HuliJason",
    "sourceLabel": "Reference Frame Scene Direction by @HuliJason",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "reference frame scene direction prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Reference Frame Scene Direction\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Reference Frame Scene Direction\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Use a reference-led image brief to direct reference-image scene direction where edits stay anchored to the frame.\n\nReference asset: {{reference_image_or_frame}}\nElements that must stay fixed: {{composition_subject_wardrobe_geometry}}\nDirected changes: {{camera_move_action_pose_expression_or_prop_changes}}\nAnnotation style: {{arrows_notes_boxes_or_overlays}}\nOutput ratio: {{aspect_ratio}}\n\nQuality rules:\n- state exactly what must remain unchanged\n- avoid broad style changes that rewrite the whole frame\n- keep edit instructions concrete enough to verify",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "gpt-image-2-launch-showcase",
      "wooden-bookshelf-prompt-test"
    ]
  },
  {
    "slug": "gpt-image-2-launch-showcase",
    "title": "GPT-Image-2 Launch Showcase",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/MikelEcheve/status/2044703635024621703",
    "sourceAuthor": "MikelEcheve",
    "sourceLabel": "GPT-Image-2 Launch Showcase by @MikelEcheve",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt-image-2 launch showcase prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"GPT-Image-2 Launch Showcase\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"GPT-Image-2 Launch Showcase\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for launch showcase boards demonstrating multiple capabilities in one visual set.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "wooden-bookshelf-prompt-test"
    ]
  },
  {
    "slug": "wooden-bookshelf-prompt-test",
    "title": "Wooden Bookshelf Prompt Test",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/chetaslua/status/2044331451077013749",
    "sourceAuthor": "chetaslua",
    "sourceLabel": "Wooden Bookshelf Prompt Test by @chetaslua",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "wooden bookshelf prompt test prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Wooden Bookshelf Prompt Test\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Wooden Bookshelf Prompt Test\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a benchmark image for object-counting and spatial-reasoning prompt tests.\n\nScene: {{room_style_and_camera_view}}\nPrimary constraint: {{explicit_object_count_or_spatial_rule}}\nSecondary constraints: {{materials_spacing_and_order}}\nEvaluation labels: {{what_reviewers_should_check}}\nOutput board: {{single_image_or_multi_panel_comparison}}\n\nQuality rules:\n- repeat the counting or placement rule clearly once\n- do not bury the main constraint inside style fluff\n- design the scene so the count can be visually audited quickly",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "gpt-image-2-vs-nano-banana-2-showcase",
    "title": "GPT Image 2 vs Nano Banana 2 Showcase",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/zerolu_eth/status/2044981771641798862",
    "sourceAuthor": "zerolu_eth",
    "sourceLabel": "GPT Image 2 vs Nano Banana 2 Showcase by @zerolu_eth",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt image 2 vs nano banana 2 showcase prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"GPT Image 2 vs Nano Banana 2 Showcase\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"GPT Image 2 vs Nano Banana 2 Showcase\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for model comparison showcase boards for matched prompt tests.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "arena-first-impression-test",
    "title": "Arena First-Impression Test",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/Cheney_NehcOal/status/2044249215635976677",
    "sourceAuthor": "Cheney_NehcOal",
    "sourceLabel": "Arena First-Impression Test by @Cheney_NehcOal",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "arena first-impression test prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Arena First-Impression Test\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Arena First-Impression Test\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for first-impression arena boards that compare visual outputs under fixed conditions.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "prompt-swap-bald-photo-test",
    "title": "Prompt Swap Bald Photo Test",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/cnzoecomeback/status/2045316010635608428",
    "sourceAuthor": "cnzoecomeback",
    "sourceLabel": "Prompt Swap Bald Photo Test by @cnzoecomeback",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "prompt swap bald photo test prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Prompt Swap Bald Photo Test\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Prompt Swap Bald Photo Test\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for prompt-swap testing on the same source image to isolate prompt effects.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "gpt-image-2-detail-showcase",
    "title": "GPT-Image-2 Detail Showcase",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/liyue_ai/status/2045000106919997637",
    "sourceAuthor": "liyue_ai",
    "sourceLabel": "GPT-Image-2 Detail Showcase by @liyue_ai",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt-image-2 detail showcase prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"GPT-Image-2 Detail Showcase\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"GPT-Image-2 Detail Showcase\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for detail-oriented capability showcase boards for close inspection.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "gpt-vs-banana-blind-comparison",
    "title": "GPT vs Banana Blind Comparison",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/linxiaobei888/status/2044947911495336262",
    "sourceAuthor": "linxiaobei888",
    "sourceLabel": "GPT vs Banana Blind Comparison by @linxiaobei888",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt vs banana blind comparison prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"GPT vs Banana Blind Comparison\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"GPT vs Banana Blind Comparison\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for blind model comparison boards with consistent evaluation labels.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "gpt-image-2-vs-nano-banana-2-layout-test",
    "title": "GPT-Image-2 vs Nano Banana 2 Layout Test",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2045379349399101707",
    "sourceAuthor": "old_pgmrs_will",
    "sourceLabel": "GPT-Image-2 vs Nano Banana 2 Layout Test by @old_pgmrs_will",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "gpt-image-2 vs nano banana 2 layout test prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"GPT-Image-2 vs Nano Banana 2 Layout Test\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"GPT-Image-2 vs Nano Banana 2 Layout Test\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for layout stability testing across image models.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "iterative-prompt-tuning-tips",
    "title": "Iterative Prompt Tuning Tips",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/kotsu_kotsu_san/status/2045377402466107398",
    "sourceAuthor": "kotsu_kotsu_san",
    "sourceLabel": "Iterative Prompt Tuning Tips by @kotsu_kotsu_san",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "iterative prompt tuning tips prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Iterative Prompt Tuning Tips\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Iterative Prompt Tuning Tips\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Design a prompt-refinement board for iterative refinement loops that show how one prompt evolves into a stable result.\n\nStarting brief: {{first_prompt_attempt}}\nRevision goals: {{what_should_improve_each_round}}\nPanel layout: {{v1_v2_v3_or_more}}\nEvaluation notes: {{what_changed_and_why}}\nFinal prompt slot: {{stable_final_version}}\n\nQuality rules:\n- change one major variable at a time\n- annotate why each revision exists\n- keep the final panel obviously stronger than the baseline",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "copilot-prompt-share-jp-en",
    "title": "Copilot Prompt Share (JP/EN)",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/samayousakadaru/status/2045077212328816737",
    "sourceAuthor": "samayousakadaru",
    "sourceLabel": "Copilot Prompt Share (JP/EN) by @samayousakadaru",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "copilot prompt share prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Copilot Prompt Share (JP/EN)\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Copilot Prompt Share (JP/EN)\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for bilingual prompt handoff sheets for teams that share reusable image prompts.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "image-generation-agent-via-claude-code",
    "title": "Image Generation Agent via Claude Code",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2044808935228715118",
    "sourceAuthor": "old_pgmrs_will",
    "sourceLabel": "Image Generation Agent via Claude Code by @old_pgmrs_will",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "image generation agent via claude code prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Image Generation Agent via Claude Code\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Image Generation Agent via Claude Code\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a workflow board for agent-designed image workflows that turn a task spec into reusable generation steps.\n\nUser goal: {{image_generation_task}}\nAgent steps: {{planning_reference_gathering_prompt_drafting_and_render_loop}}\nArtifacts: {{prompt_version_notes_and_outputs}}\nHuman checkpoints: {{where_review_or_approval_happens}}\nBoard layout: {{flowchart_console_panel_or_task_board}}\n\nQuality rules:\n- show the workflow, not just the final image\n- keep each step auditable\n- make the handoff between agent and human explicit",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "a-b-test-signed-output",
    "title": "A/B Test Signed Output",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/saskr_13/status/2044744396932079934",
    "sourceAuthor": "saskr_13",
    "sourceLabel": "A/B Test Signed Output by @saskr_13",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "a/b test signed output prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"A/B Test Signed Output\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"A/B Test Signed Output\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create an A/B experiment board for A/B test boards with signatures, labels, and analyst notes.\n\nVersion A brief: {{version_a_goal}}\nVersion B brief: {{version_b_goal}}\nShared constants: {{subject_layout_palette_or_reference}}\nSignoff area: {{decision_notes_signatures_metrics}}\nSuccess labels: {{what_the_team_is_deciding}}\n\nQuality rules:\n- make the tested variable obvious\n- hold everything else as steady as possible\n- leave room for reviewer comments and final selection",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "duct-tape-1-text-rendering-showcase",
    "title": "duct-tape-1 Text Rendering Showcase",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/kawai_design/status/2044739028420079840",
    "sourceAuthor": "kawai_design",
    "sourceLabel": "duct-tape-1 Text Rendering Showcase by @kawai_design",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "duct-tape-1 text rendering showcase prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"duct-tape-1 Text Rendering Showcase\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"duct-tape-1 Text Rendering Showcase\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a stress-test board for text-rendering stress tests for labels, packaging, and poster typography.\n\nTarget text: {{headline_labels_or_packaging_copy}}\nDesign style: {{brand_or_visual_style}}\nTest panels: {{short_text_long_text_curved_text_small_text}}\nEvaluation notes: {{spacing_legibility_and_spelling_checks}}\n\nQuality rules:\n- keep text samples short enough to evaluate clearly\n- show multiple text scenarios, not just one easy case\n- separate typography testing from broader style experimentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "character-setting-material-organizer",
    "title": "Character Setting Material Organizer",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/otohitoyuuki/status/2044579818667487394",
    "sourceAuthor": "otohitoyuuki",
    "sourceLabel": "Character Setting Material Organizer by @otohitoyuuki",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "character setting material organizer prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Character Setting Material Organizer\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Character Setting Material Organizer\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for character-material organizer sheets that keep assets, references, and callouts aligned.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "mai-image-2-vs-gpt-vs-nano-banana-pro",
    "title": "MAI-Image-2 vs GPT vs Nano Banana Pro",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/old_pgmrs_will/status/2044356515751231527",
    "sourceAuthor": "old_pgmrs_will",
    "sourceLabel": "MAI-Image-2 vs GPT vs Nano Banana Pro by @old_pgmrs_will",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "mai-image-2 vs gpt vs nano banana pro prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"MAI-Image-2 vs GPT vs Nano Banana Pro\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"MAI-Image-2 vs GPT vs Nano Banana Pro\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for multi-model benchmark boards across three competing image systems.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "whiteboard-drawing-showcase",
    "title": "Whiteboard Drawing Showcase",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/jrpj2010/status/2044817134761767306",
    "sourceAuthor": "jrpj2010",
    "sourceLabel": "Whiteboard Drawing Showcase by @jrpj2010",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "whiteboard drawing showcase prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"Whiteboard Drawing Showcase\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"Whiteboard Drawing Showcase\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for whiteboard-drawing scenes that preserve marker texture and messy realism.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  },
  {
    "slug": "seedance-2-0-gpt-image-2-combo",
    "title": "SeeDance 2.0 + GPT-Image-2 Combo",
    "category": "comparison-community",
    "categoryLabel": "Comparison & Community",
    "sourceUrl": "https://x.com/CEs7J0Mfn8x37k5/status/2044386564491632823",
    "sourceAuthor": "CEs7J0Mfn8x37k5",
    "sourceLabel": "SeeDance 2.0 + GPT-Image-2 Combo by @CEs7J0Mfn8x37k5",
    "sourceRepoUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts",
    "sourceRepoReadmeUrl": "https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/blob/main/README_zh-CN.md",
    "license": "CC BY 4.0 attribution-required source inspiration",
    "searchKeyword": "seedance 2.0 + gpt-image-2 combo prompt pattern",
    "description": "A reusable comparison & community prompt pattern adapted from the source case \"SeeDance 2.0 + GPT-Image-2 Combo\", expanded with a stronger template, variable controls, failure modes, and attribution.",
    "summary": "This page turns the source case \"SeeDance 2.0 + GPT-Image-2 Combo\" into a reusable comparison & community pattern that can be adapted without copying the original prompt verbatim.",
    "bestFor": "A/B testing, reference-frame direction, model bake-offs, prompt refinement studies, and showcase boards built for evaluation rather than one-off art.",
    "whyItWorks": "Comparison prompts create value when they hold all variables steady except the one being tested, preserve labels and layout, and explain the evaluation axes directly inside the brief.",
    "adaptedPrompt": "Create a comparison or showcase board for multi-model pipeline boards that combine motion planning and image rendering.\n\nEvaluation target: {{what_is_being_tested}}\nShared constants: {{prompt_reference_layout_or_subject}}\nVariable under test: {{model_edit_strategy_or_rendering_goal}}\nPanel labels: {{captions_scores_or_legends}}\nBoard format: {{side_by_side_grid_or_showcase_strip}}\n\nQuality rules:\n- keep the comparison fair and readable\n- identify one main variable per board\n- label panels clearly so the result is usable in discussion or documentation",
    "controls": [
      "evaluation target",
      "fixed variables",
      "comparison layout",
      "labels or captions",
      "reference image handling",
      "success criteria"
    ],
    "failureModes": [
      "changing multiple variables between comparison panels",
      "forgetting labels, legends, or captions",
      "showcase boards with no evaluation axis",
      "reference edits that do not specify what must stay fixed"
    ],
    "tags": [
      "image prompts",
      "gpt-image-2",
      "prompt patterns",
      "model comparison prompts",
      "benchmark prompts"
    ],
    "relatedSlugs": [
      "model-comparison-gpt-image-2-vs-nano-banana-2",
      "direct-on-reference-frame-directing",
      "reference-frame-scene-direction",
      "gpt-image-2-launch-showcase"
    ]
  }
];

export const imagePromptEntryMap = new Map(imagePromptEntries.map((entry) => [entry.slug, entry]));

export function getImagePromptBySlug(slug: string) {
	return imagePromptEntryMap.get(slug);
}

export function getImagePromptsByCategory(category: ImagePromptCategory) {
	return imagePromptEntries.filter((entry) => entry.category === category);
}
