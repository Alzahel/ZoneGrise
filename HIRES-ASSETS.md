# Images haute définition — Zone Grise

Cette branche attend quatre PNG 4:3 en **1448 × 1086 px**, copiés tels quels dans `public/images/`.

Aucun redimensionnement ni réencodage n’est nécessaire : le CSS affiche les images à leur ratio natif, sans filtre de contraste/saturation et sans zoom au survol.

| Fichier cible | Usage | Taille attendue | SHA-256 de l’original |
| --- | --- | ---: | --- |
| `public/images/zone-grise-cover.png` | aperçu social / couverture de marque | 3 414 598 octets | `ca815f6aefd7ed82a172476e91054f152861e0ca473c918372b97e14ba8433f7` |
| `public/images/article-02-choisir.png` | essai 02 — main qui écrit | 3 135 983 octets | `6d77bacd03f86f60cf2a9b2da499df8f35b6ceb6487e377abad2e07ff21369f7` |
| `public/images/about-atelier.png` | page À propos — bureau / moodboard | 3 136 351 octets | `0156643ae9a882f9a76e4e37374ba9504442c4202003e93dc5589fe3939a7a64` |
| `public/images/article-01-remplacer.png` | essai 01 — portrait / collage | 3 693 708 octets | `1fcd7a0ff7152793a7fd38f55ec5c42ff23a98a3db7fe4ba63677bb029e5a405` |

## Pourquoi l’ancienne intégration paraît pixellisée

Les JPEG actuellement dans le dépôt ne pèsent qu’environ 5 à 15 Ko. En plus, `v8-images.css` les forçait dans un ratio panoramique d’environ 1.56:1, appliquait des filtres et un léger zoom au survol. Les nouvelles planches sont en 4:3 et contiennent du texte, de la texture et des détails fins : elles doivent rester entières.

## Vérification

Après ajout des quatre fichiers, lancer :

```bash
npm install
npm run build
```

Puis vérifier l’accueil, `/a-propos`, les cartes d’articles et les deux pages d’essai sur desktop et mobile.
