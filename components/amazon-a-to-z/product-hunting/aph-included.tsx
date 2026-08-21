import {
  Factory,
  FlaskConical,
  type LucideIcon,
  Palette,
  Search,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Search,
    title: "Advanced product hunting that finds winners",
    body: "We run structured research using Helium 10's Black Box and Cerebro to filter the catalogue by demand, competition, price band, and review depth, then reverse-engineer the keywords competing products actually rank for. We apply the 999 technique to estimate real sales velocity rather than guessing at it, and use BSR analysis across the category to separate consistent sellers from seasonal spikes. Every shortlisted product comes with the data behind it, including an honest margin model after Amazon fees, freight, and expected ad spend.",
  },
  {
    icon: Factory,
    title: "Trusted supplier sourcing",
    body: "We identify manufacturers who genuinely produce your product rather than trading companies reselling it, then verify business licences, production capability, export history, and certifications. We collect and compare multiple quotes, and negotiate unit cost, minimum order quantities, tooling charges, lead times, and payment terms on your behalf so you start from an informed position instead of a first offer.",
  },
  {
    icon: FlaskConical,
    title: "Samples and quality assurance",
    body: "Before any bulk order, we coordinate samples from shortlisted suppliers and assess them against your specification: materials, build quality, dimensions, finish, and packaging integrity. We document the differences between suppliers, flag anything that would generate returns or poor reviews, and help you define the inspection criteria your supplier must meet on production runs.",
  },
  {
    icon: Palette,
    title: "Branding and private-label setup",
    body: "We help turn a generic product into your product: brand naming direction, logo application, packaging and insert design, and the labelling requirements your category demands. We also prepare what you need to register the brand and list it correctly, so the product arrives ready to sell under your own label rather than as an unbranded commodity.",
  },
];

export function AphIncluded() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="What's included"
        title="What's included in our Amazon product hunting and sourcing service"
        sub="A complete path from a blank spreadsheet to a branded product with a verified supplier behind it. Each stage produces something you can review and challenge, so you always know why a product made the list and what it will cost to sell it."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-surface p-[clamp(24px,2.6vw,32px)]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {card.title}
              </h3>
              <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </LightSection>
  );
}
