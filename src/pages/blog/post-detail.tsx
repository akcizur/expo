import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, neumorphic } from "@/lib/utils";
import NotFound from "@/pages/NotFound";
import PostCard from "./_components/post-card";
import { formatPostDate } from "./_lib/format";
import { getPostBySlug, getRelatedPosts } from "./_lib/posts";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <article className="pb-16">
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
        <Button asChild variant="secondary" size="sm">
          <Link to="/">
            <ArrowLeft className="size-4" />
            Back to journal
          </Link>
        </Button>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="rounded-full">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {formatPostDate(post.date)}
            </span>
            <span className="text-sm text-muted-foreground">
              &middot; {post.readTimeMinutes} min read
            </span>
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground">{post.excerpt}</p>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="size-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-foreground">
                {post.author.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
        <div
          className={cn(
            "aspect-[16/9] overflow-hidden rounded-3xl sm:aspect-[21/9]",
            neumorphic.raised,
          )}
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="size-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl px-4 sm:px-6">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
                neumorphic.inset,
              )}
            >
              #{tag}
            </span>
          ))}
        </div>

        <div
          className={cn(
            "mt-10 flex items-center gap-4 rounded-3xl bg-card p-6",
            neumorphic.raised,
          )}
        >
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-foreground">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            More from {post.category}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <PostCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
