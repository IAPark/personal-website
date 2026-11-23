import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const resume = defineCollection({
	loader: glob({ base: './src/content/resume', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			email: z.string(),
			phone: z.string(),
			phoneDisplay: z.string(),
			photo: image(),
			photoAlt: z.string(),
			languages: z.array(z.object({ name: z.string(), rating: z.number().min(0).max(5) })),
			frameworks: z.array(z.object({ name: z.string(), rating: z.number().min(0).max(5) })),
			experience: z.array(
				z.object({
					start: z.string(),
					end: z.string().nullable().optional(),
					company: z.string(),
					role: z.string(),
					technologies: z.array(z.string()).optional(),
					bullets: z.array(z.string()).optional(),
					description: z.string().optional(),
				}),
			),
			education: z.array(
				z.object({
					start: z.string(),
					end: z.string(),
					school: z.string(),
					degree: z.string(),
					description: z.string(),
				}),
			),
			socials: z.object({
				github: z.string(),
				linkedin: z.string(),
				bluesky: z.string(),
				resume: z.string(),
			}),
		}),
});

const paperResume = defineCollection({
	loader: glob({ base: './src/content/paper-resume', pattern: '**/*.{md,mdx}' }),
	// PDF-specific wording only; contact info is read from the `resume` collection.
	schema: z.object({
		location: z.string(),
		experience: z.array(
			z.object({
				organization: z.string(),
				role: z.string(),
				dates: z.string(),
				bullets: z.array(
					z.object({
						text: z.string(),
						subBullets: z.array(z.string()).optional(),
					}),
				),
			}),
		),
		education: z.object({
			school: z.string(),
			degree: z.string(),
			dates: z.string(),
		}),
		skills: z.array(z.object({ label: z.string(), items: z.string() })),
	}),
});

export const collections = { blog, resume, paperResume };
