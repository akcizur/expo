import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export function sortPosts(posts: Post[]) {
  return [...posts]
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getRelatedPosts(post: Post, posts: Post[], limit = 3) {
  return sortPosts(posts)
    .filter((candidate) => candidate.id !== post.id && candidate.data.category === post.data.category)
    .slice(0, limit);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);
}

export function href(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return `${base}/`;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/\s+/g, '-');
}

export function uniqueValues(posts: Post[], key: 'category' | 'tags') {
  const values = posts.flatMap((post) => key === 'category' ? [post.data.category] : post.data.tags);
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}
