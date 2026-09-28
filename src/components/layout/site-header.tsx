import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, PenLine } from "lucide-react";
import { cn, neumorphic } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Journal", to: "/" },
  { label: "About", to: "/about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight"
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

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-shadow",
                  isActive
                    ? cn("bg-secondary text-secondary-foreground", neumorphic.pressed)
                    : "hover:text-foreground",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link to="/#latest">Read latest</Link>
          </Button>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xs">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 px-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "cursor-pointer rounded-full px-4 py-3 text-base font-medium text-muted-foreground transition-shadow",
                    isActive
                      ? cn(
                          "bg-secondary text-secondary-foreground",
                          neumorphic.pressed,
                        )
                      : "hover:text-foreground",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
