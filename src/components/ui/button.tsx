import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 active:translate-y-px",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[3px_3px_8px_rgba(0,0,0,0.22),-3px_-3px_7px_rgba(255,255,255,0.07)] hover:brightness-110 active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.32),inset_-2px_-2px_5px_rgba(255,255,255,0.09)] dark:shadow-[3px_3px_9px_rgba(0,0,0,0.55),-3px_-3px_7px_rgba(255,255,255,0.04)]",
        destructive:
          "bg-destructive text-white shadow-[3px_3px_8px_rgba(0,0,0,0.22),-3px_-3px_7px_rgba(255,255,255,0.07)] hover:brightness-110 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "bg-background text-foreground shadow-[3px_3px_8px_rgba(0,0,0,0.1),-3px_-3px_8px_rgba(255,255,255,0.9)] hover:shadow-[4px_4px_9px_rgba(0,0,0,0.12),-4px_-4px_9px_rgba(255,255,255,0.95)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_9px_rgba(0,0,0,0.55),-3px_-3px_7px_rgba(255,255,255,0.04)] dark:hover:shadow-[4px_4px_10px_rgba(0,0,0,0.6),-3px_-3px_8px_rgba(255,255,255,0.045)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[3px_3px_8px_rgba(0,0,0,0.1),-3px_-3px_8px_rgba(255,255,255,0.9)] hover:shadow-[4px_4px_9px_rgba(0,0,0,0.12),-4px_-4px_9px_rgba(255,255,255,0.95)] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.14),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[3px_3px_9px_rgba(0,0,0,0.55),-3px_-3px_7px_rgba(255,255,255,0.04)] dark:hover:shadow-[4px_4px_10px_rgba(0,0,0,0.6),-3px_-3px_8px_rgba(255,255,255,0.045)]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.1),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.75)] dark:hover:shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.45),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.035)]",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-9 px-5 py-2 has-[>svg]:px-4",
        xs: "h-6 gap-1 px-3 text-xs has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-4 has-[>svg]:px-3.5",
        lg: "h-11 px-7 has-[>svg]:px-5",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
