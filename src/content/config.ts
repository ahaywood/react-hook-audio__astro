import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const faqCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    question: z.string(),
  }),
});

const docsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const gettingStartedCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'faqs': faqCollection,
  'docs': docsCollection,
  'getting-started': gettingStartedCollection
};