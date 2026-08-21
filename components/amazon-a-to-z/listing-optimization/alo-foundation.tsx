import {
  BookOpen,
  Images,
  LayoutList,
  type LucideIcon,
  ShieldCheck,
  Truck,
  Type,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Brand Registry and its future",
    body: "Brand Registry is what unlocks A+ Content, Stores, Sponsored Brands, and real protection against hijacked listings. We get you enrolled and set up to use everything it opens up.",
  },
  {
    icon: LayoutList,
    title: "Creating the basic listing",
    body: "Category and browse-node selection, variation structure, attributes, and required fields. Getting the foundation right early prevents the catalog problems that are painful to unwind later.",
  },
  {
    icon: Images,
    title: "Image guidelines and SOPs",
    body: "Main-image requirements, resolution and background rules, and a repeatable gallery order your team can follow, so every new product launches with compliant, consistent creative.",
  },
  {
    icon: Type,
    title: "Why title, bullets, and description matter",
    body: "The title carries the most ranking weight, the bullets carry the decision, and the description closes it. Each has a distinct job, and we write them to do their own job well.",
  },
  {
    icon: BookOpen,
    title: "Basic and advanced copy guidelines",
    body: "Character limits, prohibited claims, and keyword placement come first. Beyond that, the advanced layer is structure and sequencing: leading with the benefit shoppers care about most.",
  },
  {
    icon: Truck,
    title: "Shipping plan creation and basics",
    body: "How your shipping plan, FBA prep, and inventory availability affect the listing. A great detail page that goes out of stock loses the rank it earned, so fulfilment is part of the plan.",
  },
];

export function AloFoundation() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="The foundation"
        title="How a high-converting Amazon listing is built"
        sub="Great listings follow a system, not guesswork. Here's the foundation we build every listing on."
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger svc-grid3 grid grid-cols-3 gap-[22px]">
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
