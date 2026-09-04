import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'public', 'images');
const outputDir = path.join(sourceDir, 'generated');
const assetDir = path.join(root, 'assets');

async function restoreBase64Asset(prefix, outputFilename) {
  const parts = (await readdir(assetDir))
    .filter((name) => name.startsWith(`${prefix}.part`) && name.endsWith('.b64'))
    .sort();

  if (!parts.length) {
    throw new Error(`Aucun fragment Base64 trouvé pour ${prefix}`);
  }

  const base64 = (
    await Promise.all(parts.map((filename) => readFile(path.join(assetDir, filename), 'utf8')))
  )
    .map((part) => part.trim())
    .join('');

  await writeFile(
    path.join(sourceDir, outputFilename),
    Buffer.from(base64, 'base64'),
  );
}

await restoreBase64Asset('article-03-selected', 'article-03-interchangeable.webp');
await restoreBase64Asset('article-02-choisir-v3', 'article-02-choisir-v3.avif');
await restoreBase64Asset('article-04-composition', 'article-04-composition.avif');

const sources = [
  'article-01-remplacer.png',
  'article-02-choisir-v3.avif',
  'article-03-interchangeable.webp',
  'article-04-composition.avif',
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
