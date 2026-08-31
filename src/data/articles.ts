export type ArticleMeta = {
  title: string;
  description: string;
  order: number;
  tags: string[];
  image?: string;
  imageAlt?: string;
};

export const articleMeta: Record<string, ArticleMeta> = {
  '01-le-probleme-nest-pas-lia': {
    title: 'Le problème n’est pas l’IA, c’est ce qu’on lui demande de remplacer',
    description:
      'Le même outil peut servir à retirer l’humain du processus ou, au contraire, à donner plus de portée à ce qu’il voulait déjà y mettre.',
    order: 1,
    tags: ['créativité', 'intention', 'IA'],
    image: 'images/article-01-remplacer-v2.jpg',
    imageAlt: 'Collage éditorial autour d’un visage humain, entre fragments, matière et zones superposées.',
  },
  '02-quand-tout-devient-possible-choisir-devient-lart': {
    title: 'Quand tout devient possible, choisir devient l’art',
    description:
      'À mesure que produire devient facile, le goût, le refus et la capacité à décider ce qui mérite de rester prennent davantage de poids.',
    order: 2,
    tags: ['créativité', 'goût', 'choix'],
    image: 'images/article-02-choisir-v2.jpg',
    imageAlt: 'Une main écrit dans un carnet au milieu de notes et de fragments éditoriaux.',
  },
};

export function getArticleMeta(id: string): ArticleMeta {
  return (
    articleMeta[id] ?? {
      title: id,
      description: '',
      order: 999,
      tags: [],
    }
  );
}
