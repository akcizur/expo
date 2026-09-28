import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn, neumorphic } from "@/lib/utils";
import { formatPostDate } from "../_lib/format";
import type { Post } from "../_lib/posts";

type PostCardProps = {
  post: Post;
  featured?: boolean;
};

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <Link
      to={`/journal/${post.slug}`}
      className={cn(
        "group flex cursor-pointer flex-col overflow-hidden rounded-3xl bg-card transition-shadow hover:brightness-[1.02]",
        neumorphic.raised,
      )}
    >
      <div
        className={
          featured
            ? "aspect-[16/9] overflow-hidden sm:aspect-[21/9]"
            : "aspect-[4/3] overflow-hidden"
        }
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="rounded-full">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {formatPostDate(post.date)}
          </span>
        </div>
        <h3
          className={
            featured
              ? "text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
              : "text-balance text-lg font-semibold tracking-tight"
          }
        >
          {post.title}
        </h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="size-6 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-foreground">
            {post.author.name}
          </span>
          <span className="text-xs text-muted-foreground">
            &middot; {post.readTimeMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
