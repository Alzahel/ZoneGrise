import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './articles/publies',
  }),
});

export const collections = { articles };
