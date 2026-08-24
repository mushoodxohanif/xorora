import { ArrowUpRight } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  SITE_EMAIL,
  SITE_EMAIL_HREF,
  SITE_PHONES,
} from "@/lib/contact";
import { buttonClassName } from "@/lib/button-styles";

const CRITERIA = [
  "All Amazon Standard Identification Numbers (ASINs) in your catalog must have a published A+ Brand Story.",
  'You need a minimum of 15 A+ Content project submissions in "Approved" status within the last 12 months.',
] as const;

export function ApcPremium() {
  return (
    <LightSection bg="var(--indigo-50)">
      <SectionHead
        title="Amazon Premium A+ Content eligibility"
        sub="Amazon A++ or Premium A+ Content is an invite-only feature reserved for industry giants such as luxury brands and globally recognized tech products. Premium A+ offers both enhanced and exclusive capabilities, taking your Amazon branding and marketing efforts further."
        className="ind-reveal mb-8 max-w-[820px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <ul className="ind-reveal m-0 mb-8 flex list-none flex-col gap-3 p-0">
        {CRITERIA.map((item) => (
          <li
            key={item}
            className="rounded-(--r-lg) border border-border bg-surface px-4 py-3.5 font-sans text-[15px] text-fg2 leading-snug"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="ind-reveal rounded-(--r-xl) border border-border bg-surface p-[clamp(22px,2.5vw,32px)]">
        <p className="m-0 mb-3 font-sans font-semibold text-[17px] text-fg1">
          Need help navigating the ABR program?
        </p>
        <p className="m-0 mb-5 font-sans text-[15px] text-fg2 leading-relaxed">
          Reach out with any questions — we&apos;ll help you understand Brand
          Registry enrollment and what A+ / Premium A+ unlocks for your catalog.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={SITE_EMAIL_HREF}
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Email {SITE_EMAIL}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={SITE_PHONES[0].href}
            className={buttonClassName({ variant: "secondary", size: "lg" })}
          >
            {SITE_PHONES[0].display}
          </a>
        </div>
      </div>
    </LightSection>
  );
}
