import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isNotEmpty = (value: string,length = 0) => {
  return value && value.trim().length > length;
};