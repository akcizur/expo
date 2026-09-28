import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = 'akcizur', repo = 'expo'] = repository.split('/');
const explicitSite = process.env.SITE;
const explicitBase = process.env.BASE;
const isUserSite = repo === `${owner}.github.io`;
const isCustomDomain = Boolean(explicitSite && !explicitSite.includes('github.io'));

const site = explicitSite ?? `https://${owner}.github.io`;
const base = explicitBase ?? (isUserSite || isCustomDomain ? '/' : `/${repo}`);

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
