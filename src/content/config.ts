// 1. Import utilities from `astro:content`
import { z, reference, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const artistCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        cover: image(),
        order: z.number().default(0),
        education: z.array(z.string()).optional(),
        techniques: z.array(z.string()).optional(),
        highlight: z.boolean().default(false),
    }),
});

const artworkCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        artist: reference('artist'),
        name: z.string().optional(),
        cover: image(),
        order: z.number().default(0),
        technique: z.string(),
        size: z.string().optional(),
        price: z.number().optional(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'artist': artistCollection,
    'artwork': artworkCollection
};
