import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const INDUSTRIES = [
  "Contractors",
  "Electricians",
  "Fire Protection",
  "Flooring Companies",
  "Home Builders",
  "Home Service Franchises",
  "Garage Door Companies",
  "HVAC Companies",
  "Landscapers",
  "Moving Companies",
  "Painting Companies",
  "Pest Control Companies",
  "Plumbers",
  "Remodelers",
  "Restoration Companies",
  "Roofers",
  "Solar Companies",
  "Storage Companies",
  "Window & Door Companies",
] as const;

export function LocalSeoIndustries() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Who we serve"
        title="Industries we serve"
        sub="We deliver local SEO across service-based and multi-location businesses, including but not limited to:"
        className="mb-10 max-w-[720px]"
      />
      <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
        {INDUSTRIES.map((name) => (
          <li
            key={name}
            className="rounded-(--r-md) border border-border bg-surface px-3.5 py-2 font-sans font-medium text-[14px] text-fg1"
          >
            {name}
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
