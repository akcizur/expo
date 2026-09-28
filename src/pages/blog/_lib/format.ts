import { format } from "date-fns";

export function formatPostDate(iso: string): string {
  return format(new Date(iso), "MMM d, yyyy");
}
