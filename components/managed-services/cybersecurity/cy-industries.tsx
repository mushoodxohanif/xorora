import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Law Firms",
  "Private Equity",
  "Manufacturing",
  "Technology & Startups",
  "Entertainment",
  "Professional Services",
  "Non-Profits",
] as const;

export function CyIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Built for regulated work"
        title="Security shaped around your industry"
        sub="The threats, the data, and the rules differ by sector. We bring patterns proven in industries where a breach is not just expensive but existential."
        className="mb-12 max-w-[720px]"
      />
      <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
        {INDUSTRIES.map((name) => (
          <li
            key={name}
            className="rounded-(--r-md) border border-border bg-slate-50 px-5 py-3 font-sans font-semibold text-[15px] text-fg1 shadow-xs"
          >
            {name}
          </li>
        ))}
      </ul>
    </LightSection>
  );
}
