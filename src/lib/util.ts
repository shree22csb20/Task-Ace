import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// Removed incorrect import

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
