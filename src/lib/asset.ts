// Static-export GitHub Pages preview only: next/image with `unoptimized: true`
// renders a plain <img src> and does not auto-prepend `basePath`, so public/
// asset paths need it added by hand. Not needed on the real app (main branch),
// which serves from the domain root.
const BASE_PATH = "/can-website";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
