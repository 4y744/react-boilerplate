import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines the ```clsx``` and ```twMerge``` utilities.
 * @param classes The classes you want to merge.
 * @returns The merged classes.
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
