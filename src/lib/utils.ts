import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Shared neumorphic soft-shadow recipes (black & white theme).
// Both light and dark variants are baked in so every surface stays
// readable regardless of the end user's OS appearance.
// Shadows are kept short and tight for a crisp, premium feel.
export const neumorphic = {
  raised:
    "shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.9)] dark:shadow-[4px_4px_11px_rgba(0,0,0,0.6),-3px_-3px_9px_rgba(255,255,255,0.04)]",
  raisedSm:
    "shadow-[2px_2px_5px_rgba(0,0,0,0.1),-2px_-2px_5px_rgba(255,255,255,0.9)] dark:shadow-[2px_2px_6px_rgba(0,0,0,0.55),-2px_-2px_6px_rgba(255,255,255,0.035)]",
  pressed:
    "shadow-[inset_2px_2px_5px_rgba(0,0,0,0.16),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] dark:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.6),inset_-2px_-2px_5px_rgba(255,255,255,0.045)]",
  inset:
    "shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.13),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.85)] dark:shadow-[inset_1.5px_1.5px_4px_rgba(0,0,0,0.5),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.035)]",
} as const;
