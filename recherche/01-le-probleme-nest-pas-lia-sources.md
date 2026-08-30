# Recherche — 01 — Le problème n'est pas l'IA, c'est l'absence d'intention

> **Statut :** dossier documentaire initial — 30 août 2026.
>
> Objectif : vérifier les intuitions du premier article, identifier les affirmations solides, les limites à expliciter et les exemples capables de montrer la différence entre production automatisée et création assistée.

## Résumé de la recherche

La thèse de départ résiste plutôt bien à la recherche, à condition de la formuler précisément.

Les éléments disponibles permettent de soutenir quatre propositions :

1. la production massive de contenu faible en valeur n'a pas été inventée par l'IA ; les « content farms » étaient déjà un problème identifié publiquement par Google au début des années 2010 ;
2. l'IA générative a fortement abaissé le coût de cette production à grande échelle, et des indicateurs récents montrent une présence désormais importante de textes probablement générés ou substantiellement édités par IA sur le web ;
3. plusieurs grandes plateformes font elles-mêmes une distinction entre l'utilisation d'IA et le contenu générique, répétitif ou sans valeur ajoutée ;
4. la recherche expérimentale suggère une tension intéressante : l'assistance par IA peut améliorer la performance ou la créativité individuelle dans certaines tâches, tout en augmentant le risque d'homogénéisation collective.

Cela suggère une formulation plus robuste de notre thèse :

> **Le problème n'est pas simplement qu'une IA participe à la production. Le problème apparaît lorsque le système de production est optimisé pour retirer autant que possible l'intention, le jugement et la singularité humaine de chaque résultat.**

---

## 1. La logique des « content farms » précède largement l'IA générative

### Source principale : Google, 2011

En janvier 2011, Google écrivait déjà que l'attention s'était déplacée vers les **« content farms »**, définies comme des sites remplis de contenu superficiel ou de faible qualité, et expliquait travailler à mieux les combattre dans les résultats de recherche.

En février 2011, Google annonçait une modification majeure de son algorithme visant à réduire le classement de sites apportant peu de valeur, copiant du contenu ou étant simplement peu utiles. Cette mise à jour touchait alors 11,8 % des requêtes de façon perceptible.

En mai 2011, Google précisait que son système cherchait notamment à distinguer les pages « produites avec beaucoup de soin et d'attention aux détails » des pages plus superficielles.

### Ce que cela permet de dire

On peut raisonnablement soutenir que :

- le modèle « beaucoup de contenu peu coûteux pour capter du trafic » existait avant les modèles génératifs modernes ;
- le problème de contenus superficiels industrialisés était suffisamment important pour provoquer des modifications majeures des moteurs de recherche ;
- l'IA n'a donc pas inventé l'incitation économique à produire en volume.

### Ce que cela ne permet pas de dire

Cela ne prouve pas que les content farms de 2011 sont exactement équivalentes au « slop » génératif actuel. La technologie, le coût marginal et les formats concernés sont très différents.

### Sources

- Google, *Google search and search engine spam* (2011) : https://googleblog.blogspot.com/2011/01/google-search-and-search-engine-spam.html
- Google, *Finding more high-quality sites in search* (2011) : https://googleblog.blogspot.com/2011/02/finding-more-high-quality-sites-in.html
- Google Search Central, *More guidance on building high-quality sites* (2011) : https://developers.google.com/search/blog/2011/05/more-guidance-on-building-high-quality

---

## 2. L'IA a réellement changé l'échelle de la production

### Source forte et récente : Pew Research Center, août 2026

Pew Research Center a analysé près de **490 000 pages anglophones** issues de Common Crawl entre 2021 et juillet 2026 à l'aide du détecteur Open Pangram.

Dans l'échantillon de juillet 2026 :

- environ **10 % de l'ensemble des pages** montrent des signes importants d'écriture ou d'édition par IA ;
- lorsque Pew se limite aux pages publiées après le lancement de ChatGPT, des signes d'IA apparaissent dans **plus d'un tiers** d'entre elles ;
- la proportion est plus élevée sur les domaines `.com` que sur `.org`, `.edu` ou `.gov`.

Pew observe aussi une progression de certains traits linguistiques fréquemment associés aux textes de modèles — vocabulaire, ponctuation et structures de phrase — depuis 2023.

### Limite essentielle

Pew insiste lui-même sur le fait que les détecteurs d'IA **ne sont pas parfaits**. Ces résultats sont utiles à l'échelle de très grands corpus ; ils ne doivent pas servir à accuser un texte individuel d'avoir été généré par IA.

Le chiffre « plus d'un tiers » doit donc être présenté comme :

> « plus d'un tiers des pages récentes de l'échantillon de Pew présentent des signes significatifs d'écriture ou d'édition par IA »

et non :

> « un tiers du web est écrit par IA ».

### Source

- Pew Research Center, *How Much of the Internet Is Written With AI?* (20 août 2026) : https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/

---

## 3. Un cas concret de contenu automatisé avec peu de supervision humaine

### NewsGuard

Au 23 juin 2026, NewsGuard indiquait avoir recensé **3 749 sites d'information et d'actualité générés par IA**, couvrant 16 langues, fonctionnant selon son analyse avec peu ou pas de supervision humaine.

NewsGuard décrit des sites publiant des dizaines ou parfois des centaines d'articles génériques et note que la publicité programmatique peut créer une incitation économique à multiplier ce type de sites.

### Usage dans l'article

Ce chiffre est utile comme **illustration documentée d'un phénomène**, pas comme mesure exhaustive de tous les sites générés par IA.

Le terme « 3 749 sites recensés par NewsGuard » est préférable à « il existe 3 749 sites ».

### Source

- NewsGuard, *AI Tracking Center* / version française (mise à jour 23 juin 2026) : https://www.newsguardtech.com/fr/special-reports/ia-centre-de-suivi/

---

## 4. Les plateformes elles-mêmes distinguent IA et production sans valeur ajoutée

C'est probablement l'un des éléments les plus puissants pour le premier article.

### Google Search

La documentation actuelle de Google dit explicitement que l'IA générative peut être **utile pour rechercher un sujet ou structurer un contenu original**.

En revanche, générer de nombreuses pages sans apporter de valeur peut relever de l'abus de contenu à grande échelle (*scaled content abuse*).

La distinction opérée par Google n'est donc pas :

> IA = mauvais contenu.

Elle est plutôt :

> génération massive sans valeur ajoutée = problème, quelle que soit la technologie.

Source : https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

### YouTube

La politique de monétisation actuelle de YouTube est encore plus proche de notre thèse.

YouTube précise que les contenus monétisés ne doivent pas être « mass-produced, generic, repetitive, or manipulative ». Parmi les exemples non monétisables figurent les contenus IA utilisant des modèles génériques donnant une impression de production de masse sans perspective originale du créateur.

Mais YouTube donne également comme exemples admissibles :

- utiliser l'IA pour visualiser un personnage et une narration uniques inventés par le créateur ;
- utiliser des outils créatifs pour assister une narration originale, par exemple en éditant un script ou en générant un arrière-plan.

Autrement dit, la plateforme ne traite pas « utilisation de l'IA » et « contenu inauthentique » comme des synonymes.

Source : https://support.google.com/youtube/answer/1311392

### Amazon KDP

Amazon distingue actuellement :

- **AI-generated** : le texte, l'image ou la traduction finale a été créé par un outil IA ;
- **AI-assisted** : l'auteur a créé le contenu et utilise l'IA pour corriger, affiner, vérifier ou brainstormer.

KDP exige la déclaration du premier cas mais pas du second.

Cette distinction n'est évidemment pas une définition philosophique de l'auteur, mais elle montre qu'un acteur majeur de l'édition considère déjà l'assistance et la génération comme deux catégories opérationnellement distinctes.

Source : https://kdp.amazon.com/en_US/help/topic/G200672390

### Exemple historique de réaction au volume

En septembre 2023, Amazon avait aussi réduit à trois par jour la limite de nouveaux titres KDP après des préoccupations liées à l'afflux de contenu supposé généré par IA.

Source secondaire : https://www.theguardian.com/books/2023/sep/20/amazon-restricts-authors-from-self-publishing-more-than-three-books-a-day-after-ai-concerns

---

## 5. L'IA peut améliorer une création individuelle tout en homogénéisant l'ensemble

### Étude : Doshi & Hauser, Science Advances, 2024

Dans une expérience contrôlée sur l'écriture de courtes histoires, des participants pouvaient recevoir des idées produites par un LLM.

Les histoires des participants assistés par IA ont été évaluées comme :

- plus créatives ;
- mieux écrites ;
- plus agréables à lire ;

avec des gains particulièrement importants chez les participants initialement les moins créatifs.

Mais les histoires produites avec assistance IA étaient aussi **plus similaires entre elles** que les histoires du groupe humain seul.

### Pourquoi cette étude est importante pour Zone Grise

Elle permet d'éviter deux caricatures :

- « l'IA détruit forcément la créativité » ;
- « l'IA ne peut qu'augmenter la créativité ».

Les deux phénomènes peuvent être vrais en même temps :

> un individu peut être aidé à produire un meilleur résultat tandis qu'une adoption massive du même outil peut réduire la diversité collective.

Cette tension peut devenir un thème récurrent du blog.

### Limite

L'étude porte sur des micro-histoires dans un cadre expérimental. Il serait excessif d'en déduire directement des conclusions sur un roman, un film ou un jeu vidéo complexe.

### Source

- Anil R. Doshi & Oliver P. Hauser, *Generative AI enhances individual creativity but reduces the collective diversity of novel content*, Science Advances 10, 2024 : https://doi.org/10.1126/sciadv.adn5290

---

## 6. L'IA comme amplificateur de compétences : éléments empiriques

Ces sources ne sont probablement pas nécessaires dans le premier article, mais elles seront utiles pour les articles sur l'IA comme *enabler*.

### Noy & Zhang, Science, 2023

Expérience sur 453 professionnels réalisant des tâches de rédaction professionnelle : accès à ChatGPT associé à une réduction moyenne de **40 % du temps** nécessaire et une augmentation de **18 % de la qualité évaluée**. Les participants les moins performants au départ bénéficiaient davantage de l'outil.

Source : https://www.science.org/doi/10.1126/science.adh2586

### Brynjolfsson, Li & Raymond, QJE / NBER

Étude de 5 179 agents de support : l'assistant génératif augmente la productivité de 14 % en moyenne, avec des gains beaucoup plus importants chez les employés novices et moins performants. Les auteurs trouvent des indices suggérant que l'outil diffuse les pratiques des travailleurs plus expérimentés.

Source : https://www.nber.org/papers/w31161

### Contrepoint important

Il ne faut pas généraliser l'idée « l'IA aide toujours davantage les novices » à tous les domaines. Une étude publiée dans *Science* en 2026 sur plus de 30 millions de contributions de code rapporte au contraire que les développeurs expérimentés semblent mieux convertir l'IA en gains de productivité et d'innovation que les développeurs débutants.

Ce contraste mérite un article propre : **l'IA démocratise-t-elle réellement la compétence, ou amplifie-t-elle parfois surtout ceux qui savent déjà juger ce qu'elle produit ?**

Source : https://doi.org/10.1126/science.adz9311

---

## 7. Deux exemples de création où l'IA ne remplace manifestement pas toute la direction humaine

### Holly Herndon — PROTO / Spawn

Pour l'album *PROTO* (2019), Holly Herndon, Mat Dryhurst et leurs collaborateurs ont développé et entraîné un réseau neuronal vocal appelé Spawn sur leurs propres voix et celles d'un ensemble.

Le processus décrit est itératif : compositions humaines, enregistrements, transformations, réponses du modèle, nouvelles interprétations humaines. Herndon présente l'IA comme un membre de l'ensemble ou un interprète plutôt que comme un compositeur autonome chargé de produire l'œuvre à sa place.

C'est un cas particulièrement intéressant parce que la technologie fait partie du langage même de l'œuvre, tout en restant intégrée à une direction artistique identifiable.

Sources :

- NVIDIA AI Art Gallery : https://www.nvidia.com/en-us/research/ai-art-gallery/artists/holly-herndon/
- Interview FADER : https://www.thefader.com/2019/05/21/holly-herndon-proto-ai-spawn-interview/
- Interview Stereogum : https://stereogum.com/2041686/holly-herndon-proto-interview/interviews

### Refik Anadol — Unsupervised

Pour *Unsupervised* au MoMA, Refik Anadol et son studio ont développé un système utilisant les données publiques de plus de 200 ans de collection du musée, avec des modèles et logiciels personnalisés, afin de générer une installation évolutive en temps réel.

Le MoMA classe aujourd'hui l'œuvre dans sa collection comme une œuvre de Refik Anadol, avec pour médium matériel et logiciel personnalisés ainsi qu'un algorithme génératif avec IA.

Ce cas ne « prouve » pas qu'une œuvre IA est artistiquement légitime. Il montre en revanche qu'un processus génératif complexe peut être inscrit dans une pratique artistique où le choix du corpus, la conception du système, le dispositif spatial et l'intention globale sont explicitement attribués à un artiste et à son studio.

Sources :

- MoMA : https://www.moma.org/calendar/exhibitions/5535
- MoMA Magazine : https://www.moma.org/magazine/articles/821
- Collection MoMA : https://www.moma.org/collection/works/442077

---

## 8. Stardew Valley : très bon exemple, mais à employer avec précision

Eric Barone est un excellent exemple pour parler du coût personnel potentiel d'un projet solo ambitieux.

Dans une interview publiée par Game Developer en mars 2016, Barone indique avoir travaillé environ **10 heures par jour, tous les jours**, pendant le développement, soit environ 70 heures par semaine sur quatre ans. Il raconte également avoir connu des périodes où il voulait arrêter complètement.

Il explique avoir créé lui-même le code, les graphismes et les autres composantes du jeu afin de donner vie à une vision cohérente.

### Ce que le cas permet d'illustrer

- un créateur seul peut effectivement produire une œuvre extrêmement ambitieuse ;
- cela peut demander un investissement personnel hors norme ;
- citer uniquement les réussites extraordinaires comme preuve que « n'importe qui peut tout apprendre et tout faire seul » masque le coût de ces réussites.

### Ce qu'il ne faut pas affirmer sans données supplémentaires

Nous n'avons pas trouvé de données permettant de répondre sérieusement à :

> « Combien de créateurs tentent une aventure comparable et échouent sans s'en relever ? »

L'idée du biais du survivant est intellectuellement pertinente, mais ce passage doit rester une **question** ou une intuition, pas devenir un chiffre inventé.

Source : https://www.gamedeveloper.com/business/the-4-years-of-self-imposed-crunch-that-went-into-i-stardew-valley-i-

---

## 9. Affirmations utilisables avec un bon niveau de confiance

### Forte

> La production industrielle de contenu superficiel existait avant l'IA générative.

Google utilisait publiquement le terme « content farms » en 2011.

### Forte, avec formulation précise

> Les textes présentant des signes d'usage de l'IA occupent désormais une place importante parmi les pages récemment publiées sur le web anglophone.

Toujours préciser qu'il s'agit de détection statistique et citer la méthodologie de Pew.

### Forte

> Google et YouTube ne considèrent pas l'usage de l'IA comme automatiquement problématique ; leurs politiques se concentrent notamment sur la valeur ajoutée, l'originalité et la production répétitive ou de masse.

### Forte

> Une assistance IA peut améliorer certains résultats individuels tout en augmentant le risque d'homogénéisation collective.

Appuyé expérimentalement dans le cadre limité de l'étude Doshi & Hauser.

### Moyenne

> L'impression de « même voix » ou de contenu interchangeable est en partie liée à des convergences statistiques dans les sorties des modèles.

Pew et les études sur la diversité soutiennent l'idée, mais il faut éviter de prétendre qu'elles expliquent à elles seules toute la monotonie du contenu IA.

### À garder comme hypothèse philosophique

> L'absence de saveur vient principalement de l'absence d'implication humaine.

C'est une excellente thèse d'article, mais ce n'est pas un fait empirique démontré dans cette généralité. Il faut l'argumenter, pas la présenter comme une mesure scientifique.

---

## 10. Formulations à éviter

### « La majorité du contenu IA est du contenu de mauvaise qualité »

Nous n'avons pas de mesure fiable permettant d'établir cette proportion.

Préférer :

> « Une partie extrêmement visible de l'usage actuel de l'IA est constituée de contenus produits en masse avec peu de supervision humaine. »

### « L'IA permet toujours aux débutants de rattraper les experts »

Faux comme règle générale. Les effets varient fortement selon le domaine et la manière d'utiliser l'outil.

### « On peut reconnaître facilement un texte IA »

Non. Les détecteurs sont imparfaits et la frontière entre texte humain, assisté et généré est de plus en plus difficile à tracer.

### « Les plateformes sont contre le contenu IA »

Trop simpliste. Google, YouTube et Amazon ont des politiques beaucoup plus nuancées.

### « Stardew Valley prouve qu'un projet solo est presque impossible sans IA »

Non. Il prouve précisément qu'un projet gigantesque est possible seul — mais également qu'une telle réussite peut reposer sur un engagement exceptionnel.

---

## 11. Conséquence pour le premier article

Le premier article gagnerait à construire son argument autour d'un contraste documenté :

1. **2011 :** Google combat déjà les content farms. Le problème « quantité contre valeur » existe avant l'IA.
2. **2026 :** Pew mesure une forte progression des signes d'écriture assistée/générée par IA sur les pages récentes ; NewsGuard documente des milliers de sites automatisés avec peu de supervision humaine.
3. **Les plateformes réagissent :** Google et YouTube ne bannissent pas l'IA en tant que telle ; ils ciblent surtout la production massive, répétitive ou sans valeur ajoutée.
4. **Le point de bascule :** le même outil peut aussi intervenir dans un processus fortement dirigé par un humain — Holly Herndon et Refik Anadol permettent de le montrer concrètement.
5. **La nuance scientifique :** l'IA peut améliorer un résultat individuel et simultanément réduire la diversité collective. Le risque de banalisation est donc réel sans rendre toute utilisation créative illégitime.

La conclusion naturelle devient alors :

> **Ce qui mérite d'être combattu n'est peut-être pas la présence de la machine, mais la disparition de l'intention.**

Ce n'est pas encore une réponse complète à la question de l'auteur. C'est le point de départ du reste de Zone Grise.
