import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const assets = [
  { source: 'article-01', output: 'article-01-remplacer.avif', bytes: 23647 },
  { source: 'article-02', output: 'article-02-choisir.avif', bytes: 19054 },
  { source: 'about', output: 'about-atelier.avif', bytes: 21546 },
];

const root = process.cwd();
const outputDir = path.join(root, 'public', 'images');
await mkdir(outputDir, { recursive: true });

for (const asset of assets) {
  const chunkDir = path.join(root, 'src', 'image-data', asset.source);
  const names = (await readdir(chunkDir))
    .filter((name) => name.endsWith('.b64'))
    .sort();

  if (names.length === 0) {
    throw new Error(`${asset.output}: aucun fragment source trouvé`);
  }

  const parts = await Promise.all(
    names.map(async (name) => (await readFile(path.join(chunkDir, name), 'utf8')).replace(/\s+/g, '')),
  );

  const binary = Buffer.from(parts.join(''), 'base64');

  if (binary.byteLength !== asset.bytes) {
    throw new Error(
      `${asset.output}: ${binary.byteLength} octets reconstruits, ${asset.bytes} attendus`,
    );
  }

  if (binary.subarray(4, 12).toString('ascii') !== 'ftypavif') {
    throw new Error(`${asset.output}: signature AVIF invalide`);
  }

  await writeFile(path.join(outputDir, asset.output), binary);
  console.log(`✓ ${asset.output} (${binary.byteLength} octets)`);
}
