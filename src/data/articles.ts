export type ArticleMeta = {
  title: string;
  description: string;
  order: number;
  tags: string[];
  image?: string;
  imageAlt?: string;
  showDeck?: boolean;
};

export const articleMeta: Record<string, ArticleMeta> = {
  '01-le-probleme-nest-pas-lia': {
    title: 'Le problème n’est pas l’IA, c’est ce qu’on lui demande de remplacer',
    description:
      'Le même outil peut servir à retirer l’humain du processus ou, au contraire, à donner plus de portée à ce qu’il voulait déjà y mettre.',
    order: 1,
    tags: ['créativité', 'intention', 'IA'],
    image: 'images/article-01-remplacer.png',
    imageAlt: 'Collage éditorial autour d’un visage humain, entre fragments, matière et zones superposées.',
  },
  '02-quand-tout-devient-possible-choisir-devient-lart': {
    title: 'Quand tout devient possible, choisir devient l’art',
    description:
      'À mesure que produire devient facile, le goût, le refus et la capacité à décider ce qui mérite de rester prennent davantage de poids.',
    order: 2,
    tags: ['créativité', 'goût', 'choix'],
    image: 'images/article-02-choisir.png',
    imageAlt: 'Une main écrit dans un carnet au milieu de notes et de fragments éditoriaux.',
  },
  '03-lhumain-est-il-interchangeable': {
    title: 'L’humain est-il interchangeable ?',
    description:
      'Si l’on remplace la personne derrière l’outil, qu’est-ce qui change réellement dans les décisions, la trajectoire et la forme du projet ?',
    order: 3,
    tags: ['agence', 'substituabilité', 'auteur'],
    image: 'images/article-03-interchangeable.webp',
    imageAlt: 'Portrait éditorial fragmenté et superposé, traversé par des formes de papier et un demi-cercle orange.',
  },
  '04-lart-est-il-dans-les-composants-ou-dans-le-tout': {
    title: 'L’art est-il dans les composants ou dans le tout ?',
    description:
      'Si produire les briques devient plus facile, l’ambition peut se déplacer vers le tout : des œuvres plus vastes, plus vivantes et parfois impossibles à construire auparavant.',
    order: 4,
    tags: ['composition', 'complexité', 'possibilités'],
    image: 'images/article-04-composition.webp',
    imageAlt: 'Une personne assemble un grand collage éditorial de paysages, d’architectures et de fragments graphiques autour d’un cercle orange.',
    showDeck: false,
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
