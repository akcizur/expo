// Static sample content for the blog. Replace with database-backed content later.

export type Category = "Slow Living" | "Travel" | "Craft" | "Home";

export type Author = {
  name: string;
  role: string;
  avatar: string;
  bio: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  tags: string[];
  coverImage: string;
  date: string; // ISO 8601 UTC
  readTimeMinutes: number;
  author: Author;
  content: string[]; // paragraphs
};

export const AUTHORS: Record<string, Author> = {
  mara: {
    name: "Mara Lindqvist",
    role: "Founder & Editor",
    avatar:
      "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bio: "Mara writes about slowing down, making with your hands, and paying attention. She started this journal after a decade in fast-paced studios left her craving quieter work.",
  },
  theo: {
    name: "Theo Bergman",
    role: "Contributing Writer",
    avatar:
      "https://images.unsplash.com/photo-1667053508464-eb11b394df83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    bio: "Theo covers travel and place-making, always looking for the unhurried version of a story.",
  },
};

export const CATEGORIES: Category[] = ["Slow Living", "Travel", "Craft", "Home"];

export const POSTS: Post[] = [
  {
    slug: "the-case-for-a-slower-morning",
    title: "The case for a slower morning",
    excerpt:
      "What changed when I stopped checking my phone before my feet touched the floor, and started making one small ritual instead.",
    category: "Slow Living",
    tags: ["mornings", "habits", "rituals"],
    coverImage:
      "https://images.unsplash.com/photo-1518057111178-44a106bad636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-08-14T07:00:00Z",
    readTimeMinutes: 6,
    author: AUTHORS.mara,
    content: [
      "For years my mornings began the same way: eyes open, phone in hand, a scroll before I'd even sat up. It felt efficient. It was not restful.",
      "The shift started small. I moved my phone charger to the kitchen, out of arm's reach from bed. The first few mornings felt strange, almost itchy, like I was missing something. By the second week, I noticed I had ten extra minutes I didn't know what to do with.",
      "I filled them with almost nothing: making coffee slowly, standing by the window, writing three lines in a notebook. None of it was productive in the way we usually mean the word. All of it made the rest of the day feel less frantic.",
      "This isn't a prescription. Your version of a slow morning might be a walk, a stretch, silence. The point isn't the ritual itself, it's the gap it creates between waking and reacting.",
      "A year later, the habit still holds most days. Not because I have more willpower, but because the payoff, a morning that feels like mine before it belongs to everyone else, was too good to give up.",
    ],
  },
  {
    slug: "unlearning-busy",
    title: "Unlearning busy",
    excerpt:
      "Busy became a badge of honor. Here's what happened when I quietly stopped wearing it.",
    category: "Slow Living",
    tags: ["mindset", "rest"],
    coverImage:
      "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-07-02T09:30:00Z",
    readTimeMinutes: 5,
    author: AUTHORS.mara,
    content: [
      "Someone asks how you're doing and 'busy' comes out before you've thought about it. I said it for years, mostly on autopilot, sometimes with a strange kind of pride.",
      "Then I tracked a week honestly. Most of my 'busy' was low-value motion: refreshing inboxes, half-finished tasks, meetings that existed because other meetings existed.",
      "Cutting it wasn't about doing less work. It was about being honest about what counted as work at all.",
    ],
  },
  {
    slug: "notes-from-a-week-off-grid",
    title: "Notes from a week off-grid",
    excerpt:
      "No signal, no schedule, just a cabin in the hills. What I expected to miss, and what I didn't.",
    category: "Travel",
    tags: ["cabin", "disconnecting", "mountains"],
    coverImage:
      "https://images.unsplash.com/photo-1542662565-7e4b66bae529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-06-19T12:00:00Z",
    readTimeMinutes: 8,
    author: AUTHORS.theo,
    content: [
      "The drive up lost signal about forty minutes before the cabin. I felt the loss immediately, a small panic, like an amputation.",
      "By day two, that panic had turned into something closer to relief. Days organized themselves around light rather than notifications: wake with the sun, walk while it's cool, read while it's hot, cook as it sets.",
      "I expected to miss information. I missed people, briefly, and specifically, not the general noise of being reachable.",
      "Coming back, the hardest part wasn't the return to connectivity. It was noticing how much of my normal week is built around being available for things that could easily wait a day.",
    ],
  },
  {
    slug: "the-slow-road-through-the-alps",
    title: "The slow road through the Alps",
    excerpt:
      "Skipping the train for a rented bike and four days of switchbacks, wrong turns, and small villages.",
    category: "Travel",
    tags: ["cycling", "europe", "slow travel"],
    coverImage:
      "https://images.unsplash.com/photo-1568206222579-3d32da70596b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-05-11T10:15:00Z",
    readTimeMinutes: 7,
    author: AUTHORS.theo,
    content: [
      "Everyone told me to take the train between towns. It's faster, more reliable, and skips the climbs. I rented a bike anyway.",
      "The climbs were as brutal as promised. They were also the only reason I met the cheese maker outside Grindelwald, or found the bakery that only sells out of a side window at 7am.",
      "Slow travel isn't a virtue in itself. It's just a way of leaving room for the parts of a trip that don't show up in the itinerary.",
    ],
  },
  {
    slug: "learning-to-throw-a-bowl",
    title: "Learning to throw a bowl (and failing, a lot)",
    excerpt:
      "Six months of pottery classes, dozens of collapsed bowls, and the one lesson that finally stuck.",
    category: "Craft",
    tags: ["pottery", "beginners", "practice"],
    coverImage:
      "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-04-23T15:45:00Z",
    readTimeMinutes: 6,
    author: AUTHORS.mara,
    content: [
      "My first eleven bowls collapsed on the wheel. Not slightly off, not salvageable-with-effort collapsed. Total, clay-flying, start-over collapsed.",
      "My teacher kept saying the same sentence: 'You're fighting it.' I didn't understand what that meant until bowl number twelve, when I stopped trying to force the shape and instead just... let my hands follow what the clay was already doing.",
      "It's a strange thing to learn with your body instead of your head. No amount of watching tutorials replaced the hours of just failing, on purpose, in a room with wet hands.",
    ],
  },
  {
    slug: "the-pleasure-of-a-good-notebook",
    title: "The pleasure of a good notebook",
    excerpt:
      "On paper weight, binding, and why the right notebook makes you want to write in it.",
    category: "Craft",
    tags: ["writing", "stationery", "tools"],
    coverImage:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-03-30T08:00:00Z",
    readTimeMinutes: 4,
    author: AUTHORS.mara,
    content: [
      "I own too many notebooks. Most sit unused, their first pages blank, because something about them didn't invite writing.",
      "The ones I actually fill share a few things: paper that doesn't feel thin under a pen, a binding that lays flat, a cover plain enough that it disappears once you start.",
      "None of this makes the writing better. It just removes one more small excuse not to start.",
    ],
  },
  {
    slug: "a-home-with-less-in-it",
    title: "A home with less in it",
    excerpt:
      "What we kept, what we gave away, and why the empty corners feel like the best part of the apartment.",
    category: "Home",
    tags: ["minimalism", "apartment", "decluttering"],
    coverImage:
      "https://images.unsplash.com/photo-1511389026070-a14ae610a1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-03-05T11:20:00Z",
    readTimeMinutes: 5,
    author: AUTHORS.theo,
    content: [
      "We gave away roughly a third of what we owned before this move. Furniture, kitchen gadgets used twice a year, clothes that fit a version of us that no longer exists.",
      "What surprised me wasn't how little we missed any of it. It was how much calmer the remaining rooms felt, not because they were styled better, but because there was simply less demanding attention.",
      "An empty corner isn't unfinished. Sometimes it's just finished without clutter.",
    ],
  },
  {
    slug: "window-light-and-the-plants-that-love-it",
    title: "Window light, and the plants that love it",
    excerpt:
      "A small, honest guide to keeping plants alive in an apartment with exactly one good window.",
    category: "Home",
    tags: ["plants", "apartment", "light"],
    coverImage:
      "https://images.unsplash.com/photo-1588611695905-07b98e2ef4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    date: "2026-02-18T13:00:00Z",
    readTimeMinutes: 5,
    author: AUTHORS.theo,
    content: [
      "I killed four plants before admitting my apartment has exactly one spot with real light, and everything else is a compromise.",
      "Once I stopped fighting the room and started choosing plants for the light I actually have, rather than the light I wished I had, things finally started growing.",
      "It's a small lesson that keeps generalizing: work with the conditions you have, not the ones you planned for.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}
