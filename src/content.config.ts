import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './articles/publies',
  }),
});

const articlesEn = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './articles/publies/en',
  }),
});

export const collections = { articles, articlesEn };
