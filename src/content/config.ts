import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
  // Type-check frontmatter using a schema
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
})
// const projects = defineCollection({
//   type: 'data',
//   schema: z.object({
//     title: z.string(),
//     date: z
//       .string()
//       .or(z.date())
//       .transform((val) => new Date(val)),
//     updatedDate: z
//       .string()
//       .optional()
//       .transform((str) => (str ? new Date(str) : undefined)),
//     summary: z.string(),
//     images: z.array(
//       z.object({
//         title: z.string(),
//         url: z.string()
//       })
//         .optional()
//     ).optional()
//   })
// })

export const collections = { blog, projects };
