import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { articleMeta, getArticleMeta } from '../data/articles';

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((article) => articleMeta[article.id])
    .sort((a, b) => getArticleMeta(b.id).order - getArticleMeta(a.id).order);

  return rss({
    title: 'Zone Grise',
    description: 'Essais sur l’IA, la créativité, l’auteur et les endroits où les catégories simples cessent de fonctionner.',
    site: context.site,
    items: articles.map((article) => {
      const meta = getArticleMeta(article.id);
      return {
        title: meta.title,
        description: meta.description,
        link: `/articles/${article.id}`,
        categories: meta.tags,
      };
    }),
    customData: '<language>fr-fr</language>',
    trailingSlash: false,
  });
}
