import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border-none px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[2px_2px_5px_rgba(0,0,0,0.22),-1.5px_-1.5px_5px_rgba(255,255,255,0.06)] dark:shadow-[2px_2px_6px_rgba(0,0,0,0.5),-1.5px_-1.5px_5px_rgba(255,255,255,0.03)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.13),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.85)] dark:shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.45),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.035)]",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 [a&]:hover:brightness-110",
        outline:
          "bg-background text-foreground shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.09),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.8)] dark:shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.4),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.035)]",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
