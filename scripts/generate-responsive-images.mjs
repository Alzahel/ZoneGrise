import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'public', 'images');
const outputDir = path.join(sourceDir, 'generated');
const assetDir = path.join(root, 'assets');

const article03Parts = [
  'article-03-selected.part01.b64',
  'article-03-selected.part02.b64',
  'article-03-selected.part03.b64',
  'article-03-selected.part04.b64',
  'article-03-selected.part05.b64',
  'article-03-selected.part06.b64',
];

const article03Base64 = (
  await Promise.all(
    article03Parts.map((filename) => readFile(path.join(assetDir, filename), 'utf8')),
  )
).map((part) => part.trim()).join('');

await writeFile(
  path.join(sourceDir, 'article-03-interchangeable.webp'),
  Buffer.from(article03Base64, 'base64'),
);

const sources = [
  'article-01-remplacer.png',
  'article-02-choisir.png',
  'article-03-interchangeable.webp',
  'about-atelier.png',
  'zone-grise-brand.png',
];

const widths = [480, 800, 1200, 1448];

await mkdir(outputDir, { recursive: true });

for (const filename of sources) {
  const source = path.join(sourceDir, filename);

  try {
    await access(source);
  } catch {
    throw new Error(`Image master introuvable : ${source}`);
  }

  const stem = path.parse(filename).name;
  const metadata = await sharp(source).metadata();
  const sourceWidth = metadata.width ?? 1448;

  for (const requestedWidth of widths) {
    const width = Math.min(requestedWidth, sourceWidth);
    const output = path.join(outputDir, `${stem}-${requestedWidth}.webp`);

    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5, smartSubsample: true })
      .toFile(output);
  }
}

console.log(`Images responsives générées dans ${path.relative(root, outputDir)}`);
