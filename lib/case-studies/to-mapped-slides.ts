import type { CaseStudyListItem } from "@/lib/case-studies/types";

export interface MappedCaseStudySlide {
  slug: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  frameTitle?: string;
  frameUrl?: string;
  stats: Array<{ value: string; label: string }>;
}

export function toMappedSlides(
  items: CaseStudyListItem[],
): MappedCaseStudySlide[] {
  return items.map((study) => ({
    slug: study.slug,
    tag: study.tags.slice(0, 3).join(" · ") || study.subtitle,
    title: study.title.replace(/\.$/, ""),
    description: study.lead,
    image: study.heroImage,
    imageAlt: `${study.title} case study`,
    frameTitle: study.tags[0] ?? "Case study",
    frameUrl: "app.xorora.com",
    stats: study.metrics.slice(0, 3),
  }));
}
