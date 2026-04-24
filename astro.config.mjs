// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://philipolivier.com',
  // TODO: remove `base` once philipolivier.com is pointed at GitHub Pages and the
  // custom domain is configured in repo Settings → Pages. Without it the site
  // serves at the root of the domain and this line will break all paths.
  base: '/personal-website',
  output: 'static',
});
