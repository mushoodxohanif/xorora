import { withUniqueIndustryImages } from "./apply-industry-images";
import { seedIndustryCaseStudies } from "./industry-case-studies-data";
import type {
  CaseStudy,
  CaseStudyListItem,
  CaseStudyMetric,
  CaseStudySection,
} from "./types";

const FIXED_PUBLISHED_AT = new Date("2026-08-01T00:00:00.000Z");
const FIXED_CREATED_AT = new Date("2026-08-01T00:00:00.000Z");

const industryStudies = seedIndustryCaseStudies.map(withUniqueIndustryImages);

function toListItem(
  study: (typeof industryStudies)[number],
): CaseStudyListItem {
  return {
    id: `static-${study.slug}`,
    slug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    tags: study.tags,
    category: study.category,
    lead: study.lead,
    heroImage: study.heroImage,
    headerBg: study.headerBg,
    featured: study.featured,
    sortOrder: study.sortOrder,
    publishedAt: FIXED_PUBLISHED_AT,
    metaTitle: study.metaTitle,
    metrics: study.metrics.map((metric) => ({
      value: metric.value,
      label: metric.label,
    })),
  };
}

function toFullStudy(study: (typeof industryStudies)[number]): CaseStudy {
  const metrics: CaseStudyMetric[] = study.metrics.map((metric, index) => ({
    id: `static-${study.slug}-metric-${index}`,
    value: metric.value,
    label: metric.label,
    note: metric.note ?? null,
    sortOrder: index,
  }));

  const sections: CaseStudySection[] = study.sections.map((section, index) => ({
    id: `static-${study.slug}-section-${index}`,
    type: section.type,
    content: section.content,
    sortOrder: index,
  }));

  return {
    ...toListItem(study),
    heroUrl: study.heroUrl,
    status: "published",
    metaDescription: study.metaDescription,
    createdAt: FIXED_CREATED_AT,
    updatedAt: FIXED_CREATED_AT,
    metrics,
    sections,
  };
}

export function listStaticIndustryCaseStudies(): CaseStudyListItem[] {
  return industryStudies
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map(toListItem);
}

export function getStaticIndustryCaseStudyBySlug(
  slug: string,
): CaseStudy | null {
  const study = industryStudies.find((item) => item.slug === slug);
  return study ? toFullStudy(study) : null;
}

/** Prefer DB rows; fill any missing static industry studies. */
export function mergeCaseStudyListItems(
  dbStudies: CaseStudyListItem[],
): CaseStudyListItem[] {
  const bySlug = new Map(dbStudies.map((study) => [study.slug, study]));
  for (const study of listStaticIndustryCaseStudies()) {
    if (!bySlug.has(study.slug)) {
      bySlug.set(study.slug, study);
    }
  }
  return [...bySlug.values()].sort((a, b) => a.sortOrder - b.sortOrder);
}
