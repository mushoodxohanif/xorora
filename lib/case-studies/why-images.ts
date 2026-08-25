/**
 * Industry-relevant stock images for the "Why this matters" section.
 * Sourced from INDUSTRY_CASE_IMAGES so every asset stays unique sitewide.
 */

import { INDUSTRY_CASE_IMAGES } from "@/lib/case-studies/industry-images";

export const WHY_MATTERS_IMAGES: Record<string, { src: string; alt: string }> =
  Object.fromEntries(
    Object.entries(INDUSTRY_CASE_IMAGES).map(([slug, images]) => [
      slug,
      images.why,
    ]),
  );

export function whyMattersImage(
  slug: string,
): { src: string; alt: string } | null {
  return WHY_MATTERS_IMAGES[slug] ?? null;
}
