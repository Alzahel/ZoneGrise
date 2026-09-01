import { withBase } from './paths';

export const RESPONSIVE_IMAGE_WIDTHS = [480, 800, 1200, 1448] as const;

export function getResponsiveImage(src?: string) {
  if (!src) return null;

  const filename = src.replace(/^\/+/, '').replace(/^images\//, '');
  const stem = filename.replace(/\.[^.]+$/, '');
  const isRasterMaster = /\.png$/i.test(filename);

  return {
    fallback: withBase(src),
    srcset: isRasterMaster
      ? RESPONSIVE_IMAGE_WIDTHS
          .map((width) => `${withBase(`images/generated/${stem}-${width}.webp`)} ${width}w`)
          .join(', ')
      : null,
  };
}
