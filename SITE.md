# Site Zone Grise

Le site public est un projet Astro statique qui lit directement les articles Markdown présents dans `articles/publies/`.

## Principe

- `articles/publies/` reste la source du texte publié.
- `src/data/articles.ts` contient uniquement les métadonnées de présentation : résumé, ordre et tags.
- Les anciennes versions, recherches et pistes ne sont jamais exposées par le site.

## Design actif

`src/styles/current.css` est désormais **l’unique point d’entrée CSS chargé par le layout public**.

Les fichiers historiques (`v3.css`, `v4.css`, `v5.css`, etc.) restent conservés pour l’archive et la traçabilité du design. Les nouvelles corrections et évolutions doivent être ajoutées à `current.css`, après les imports historiques, au lieu de créer une nouvelle couche corrective dispersée.

Le responsive actif est durci pour les largeurs 360, 390, 430, tablette et desktop. Le hero mobile possède notamment son propre titre afin de ne pas dépendre des transformations du hero desktop.

## Images

Les PNG présents dans `public/images/` restent les **masters haute définition**.

Avant chaque build, `scripts/generate-responsive-images.mjs` génère automatiquement des variantes WebP en 480, 800, 1200 et 1448 px dans `public/images/generated/`.

Les pages utilisent ensuite `srcset` / `sizes` avec le PNG original en fallback. Le dossier `public/images/generated/` est volontairement ignoré par Git : il est reproductible à partir des masters.

Pour régénérer uniquement les images :

```bash
npm run images
```

## Développement local

Prérequis : Node.js 22.12 ou supérieur.

```bash
npm install
npm run dev
```

Compilation de production :

```bash
npm run build
```

Le site statique est généré dans `dist/`.

## Déploiement

Le projet est compatible avec un hébergement statique (Cloudflare Pages, Netlify, GitHub Pages, etc.).

Pour Cloudflare Pages :

- commande de build : `npm run build`
- dossier de sortie : `dist`
- version Node : 22.12 ou supérieure
- variable facultative `SITE_URL` : URL finale du site, par exemple `https://zonegrise.fr`

Tant qu’aucun domaine définitif n’est choisi, `astro.config.mjs` utilise sa configuration courante comme URL canonique par défaut.

## Ajouter un article

1. Valider une version finale dans `articles/publies/`.
2. Ajouter son titre, résumé, ordre, tags et image dans `src/data/articles.ts`.
3. Ajouter le master PNG dans `public/images/` si nécessaire.
4. Recompiler le site.

Aucune copie du corps de l’article n’est nécessaire.
