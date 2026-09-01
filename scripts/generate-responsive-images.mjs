import { access, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'public', 'images');
const outputDir = path.join(sourceDir, 'generated');

const sources = [
  'article-01-remplacer.png',
  'article-02-choisir.png',
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
