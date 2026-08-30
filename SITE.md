# Site Zone Grise

Le site public est un projet Astro statique qui lit directement les articles Markdown présents dans `articles/publies/`.

## Principe

- `articles/publies/` reste la source du texte publié.
- `src/data/articles.ts` contient uniquement les métadonnées de présentation : résumé, ordre et tags.
- Les anciennes versions, recherches et pistes ne sont jamais exposées par le site.

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

Tant qu’aucun domaine définitif n’est choisi, `astro.config.mjs` utilise `https://zonegrise.pages.dev` comme URL canonique par défaut.

## Ajouter un article

1. Valider une version finale dans `articles/publies/`.
2. Ajouter son titre, résumé, ordre et tags dans `src/data/articles.ts`.
3. Recompiler le site.

Aucune copie du corps de l’article n’est nécessaire.
