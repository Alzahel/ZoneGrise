const rawBase = import.meta.env.BASE_URL || '/';

export const BASE_PATH = rawBase === '/'
  ? '/'
  : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export function withBase(path = '') {
  return `${BASE_PATH}${String(path).replace(/^\/+/, '')}`;
}

export function stripBase(pathname: string) {
  if (BASE_PATH === '/') return pathname;

  const root = BASE_PATH.slice(0, -1);
  if (pathname === root || pathname === BASE_PATH) return '/';
  if (pathname.startsWith(BASE_PATH)) return `/${pathname.slice(BASE_PATH.length)}`;
  return pathname;
}
