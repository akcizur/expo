import { cn, neumorphic } from "@/lib/utils";
import PostCard from "./_components/post-card";
import { getAllPosts } from "./_lib/posts";

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 max-w-2xl space-y-4">
        <span
          className={cn(
            "inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-secondary-foreground",
            neumorphic.inset,
          )}
        >
          A journal for slower living
        </span>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Stories about mornings, making, and paying attention.
        </h1>
        <p className="text-lg text-muted-foreground">
          Quietly is a small journal about slowing down: how we travel, work
          with our hands, and shape the rooms we live in.
        </p>
      </section>

      <div id="latest" className="space-y-10">
        <PostCard post={featured} featured />

        <div className="grid gap-6 sm:grid-cols-2">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
