import type { Industry } from "@/lib/industries/types";
import { RelatedCaseStudies } from "@/components/case-study/related-case-studies";
import { IndustryHero } from "./industry-hero";
import { IndustrySections } from "./industry-sections";

interface IndustryLayoutProps {
  industry: Industry;
}

export function IndustryLayout({ industry }: IndustryLayoutProps) {
  const sections = industry.sections.filter(
    (section) =>
      section.type !== "featured-case" && section.type !== "featured-cases",
  );

  return (
    <div className="bg-surface">
      <IndustryHero industry={industry} />
      <IndustrySections sections={sections} />
      <RelatedCaseStudies
        industrySlug={industry.slug}
        title={`${industry.name} case studies`}
        sub="Selected engagements for this industry — swipe through one study at a time."
      />
    </div>
  );
}
