import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://zonegrise.pages.dev',
  base: process.env.BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
