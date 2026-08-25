import {
  MappedCaseStudyCarousel,
} from "@/components/case-study/mapped-case-study-carousel";
import {
  INDUSTRY_CASE_STUDIES,
  SERVICE_CASE_STUDIES,
} from "@/lib/case-studies/page-placements";
import { listPublishedCaseStudiesBySlugs } from "@/lib/case-studies/queries";
import { toMappedSlides } from "@/lib/case-studies/to-mapped-slides";

interface RelatedCaseStudiesProps {
  industrySlug?: string;
  servicePath?: string;
  label?: string;
  title?: string;
  sub?: string;
}

export async function RelatedCaseStudies({
  industrySlug,
  servicePath,
  label,
  title,
  sub,
}: RelatedCaseStudiesProps) {
  const slugs = industrySlug
    ? (INDUSTRY_CASE_STUDIES[industrySlug] ?? [])
    : servicePath
      ? (SERVICE_CASE_STUDIES[servicePath] ?? [])
      : [];

  if (slugs.length === 0) {
    return null;
  }

  const studies = await listPublishedCaseStudiesBySlugs(slugs);
  if (studies.length === 0) {
    return null;
  }

  return (
    <MappedCaseStudyCarousel
      studies={toMappedSlides(studies)}
      label={label}
      title={title}
      sub={sub}
    />
  );
}
