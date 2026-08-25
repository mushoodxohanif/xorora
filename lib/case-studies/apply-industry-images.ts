/**
 * Applies unique hero/overview images from INDUSTRY_CASE_IMAGES
 * onto industry case study seed data.
 */
import type { IndustrySeedCaseStudy } from "./industry-case-studies-data";
import { INDUSTRY_CASE_IMAGES } from "./industry-images";

export function withUniqueIndustryImages(
  study: IndustrySeedCaseStudy,
): IndustrySeedCaseStudy {
  const images = INDUSTRY_CASE_IMAGES[study.slug];
  if (!images) return study;

  const sections = study.sections.map((section) => {
    if (section.type !== "overview" || !section.content.image) {
      return section;
    }
    return {
      ...section,
      content: {
        ...section.content,
        image: {
          ...section.content.image,
          src: images.overview.src,
          alt: images.overview.alt,
        },
      },
    };
  });

  return {
    ...study,
    heroImage: images.hero.src,
    sections,
  };
}

export function withUniqueIndustryImageList(
  studies: IndustrySeedCaseStudy[],
): IndustrySeedCaseStudy[] {
  return studies.map(withUniqueIndustryImages);
}
