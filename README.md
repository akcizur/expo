# Quietly — Astro + Vite Blog Template

A static editorial blog template based on the visual language and sample content of [`akcizur/expo`](https://github.com/akcizur/expo), reimplemented with Astro build-time content collections instead of the original React Router runtime.

## Included

- Astro 7 + Vite
- Markdown posts in `src/content/blog/`
- Typed content schema
- Responsive editorial/neumorphic UI inspired by the source repository
- Light/dark theme switch
- Journal archive + category filtering
- Article pages + related stories
- Category and tag archive pages
- RSS + sitemap
- SEO / Open Graph / Twitter metadata
- GitHub Pages Actions workflow
- Automatic `site` / `base` detection from `GITHUB_REPOSITORY`

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Add a post

Create `src/content/blog/my-new-post.md` with frontmatter matching the schema. The filename becomes the article slug: `/journal/my-new-post/`.

## GitHub Pages

Push to `main`, then in **Settings → Pages** choose **GitHub Actions** as the source. The included workflow uses the official Astro GitHub Action and the Pages deployment action.

Project repository `https://github.com/owner/my-blog` becomes `https://owner.github.io/my-blog/`.
A user/organization repository `owner.github.io` uses `/` as the base.

Set `SITE=https://example.com` and `BASE=/` for a custom domain, and place the domain in `public/CNAME` when needed.
