import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				referenceType: z
					.enum([
						'home',
						'foundation',
						'policy',
						'team-scenario',
						'workflow',
						'tooling',
						'tool-comparison',
						'evaluation',
						'comparison',
					])
					.optional(),
				adProfile: z
					.enum([
						'foundation',
						'policy',
						'team-scenario',
						'workflow',
						'tooling',
						'tool-comparison',
						'evaluation',
					])
					.optional(),
				commercialIntent: z.enum(['low', 'medium', 'high']).optional(),
				reviewCadence: z.string().optional(),
			}),
		}),
	}),
};
