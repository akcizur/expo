import { Link } from "react-router-dom";
import { Mail, PenLine, Rss } from "lucide-react";
import { cn, neumorphic } from "@/lib/utils";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm space-y-3">
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-semibold"
            >
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground",
                  neumorphic.raisedSm,
                )}
              >
                <PenLine className="size-4" />
              </span>
              Quietly
            </Link>
            <p className="text-sm text-muted-foreground">
              A slow journal about mornings, making things by hand, and
              leaving room for the parts of life that don't fit in a
              schedule.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@quietly.blog"
              className={cn(
                "inline-flex cursor-pointer items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground transition-shadow hover:brightness-105",
                neumorphic.raisedSm,
              )}
            >
              <Mail className="size-4" />
              hello@quietly.blog
            </a>
            <span
              className={cn(
                "inline-flex cursor-default items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-muted-foreground",
                neumorphic.raisedSm,
              )}
            >
              <Rss className="size-4" />
              New posts weekly
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {year} Quietly. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="cursor-pointer hover:text-foreground"
            >
              About
            </Link>
            <Link to="/" className="cursor-pointer hover:text-foreground">
              Journal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
