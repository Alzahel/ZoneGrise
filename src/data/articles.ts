export type Locale = 'fr' | 'en';

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
    image: 'images/article-02-choisir-v3.avif',
    imageAlt: 'Des mains sélectionnent et écartent des fragments visuels dans un collage éditorial en noir, crème et orange.',
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
    image: 'images/article-04-composition.avif',
    imageAlt: 'Une personne assemble un grand collage éditorial de paysages, d’architectures et de fragments graphiques autour d’un cercle orange.',
    showDeck: false,
  },
};

export const articleMetaEn: Record<string, ArticleMeta> = {
  '01-the-problem-isnt-ai': {
    title: 'The Problem Isn’t AI, It’s What We Ask It to Replace',
    description:
      'The same tool can remove the human from the process or, on the contrary, give more reach to something they were already trying to express.',
    order: 1,
    tags: ['creativity', 'intention', 'AI'],
    image: 'images/article-01-remplacer.png',
    imageAlt: 'Editorial collage around a human face, layered with fragments, textures and overlapping shapes.',
  },
  '02-when-everything-becomes-possible-choosing-becomes-the-art': {
    title: 'When Everything Becomes Possible, Choosing Becomes the Art',
    description:
      'As producing becomes easier, taste, refusal and the ability to decide what deserves to remain carry more weight.',
    order: 2,
    tags: ['creativity', 'taste', 'choice'],
    image: 'images/article-02-choisir-v3.avif',
    imageAlt: 'Hands select and reject visual fragments in an editorial collage of black, cream and orange.',
  },
  '03-is-the-human-interchangeable': {
    title: 'Is the Human Interchangeable?',
    description:
      'If we replace the person behind the tool, what actually changes in the decisions, the trajectory and the shape of the project?',
    order: 3,
    tags: ['agency', 'substitutability', 'authorship'],
    image: 'images/article-03-interchangeable.webp',
    imageAlt: 'Fragmented editorial portrait layered with paper shapes and an orange half-circle.',
  },
  '04-is-art-in-the-parts-or-in-the-whole': {
    title: 'Is Art in the Parts or in the Whole?',
    description:
      'If the building blocks become easier to produce, ambition can shift toward the whole: larger, more alive and sometimes previously impossible works.',
    order: 4,
    tags: ['composition', 'complexity', 'possibility'],
    image: 'images/article-04-composition.avif',
    imageAlt: 'A person assembles a large editorial collage of landscapes, architecture and graphic fragments around an orange circle.',
    showDeck: false,
  },
};

export const articleTranslations: Record<string, string> = {
  '01-le-probleme-nest-pas-lia': '01-the-problem-isnt-ai',
  '02-quand-tout-devient-possible-choisir-devient-lart': '02-when-everything-becomes-possible-choosing-becomes-the-art',
  '03-lhumain-est-il-interchangeable': '03-is-the-human-interchangeable',
  '04-lart-est-il-dans-les-composants-ou-dans-le-tout': '04-is-art-in-the-parts-or-in-the-whole',
};

const articleTranslationsReverse = Object.fromEntries(
  Object.entries(articleTranslations).map(([fr, en]) => [en, fr]),
) as Record<string, string>;

export function getArticleMeta(id: string, locale: Locale = 'fr'): ArticleMeta {
  const collection = locale === 'en' ? articleMetaEn : articleMeta;
  return (
    collection[id] ?? {
      title: id,
      description: '',
      order: 999,
      tags: [],
    }
  );
}

export function getTranslatedArticleId(id: string, fromLocale: Locale): string | undefined {
  return fromLocale === 'fr' ? articleTranslations[id] : articleTranslationsReverse[id];
}
