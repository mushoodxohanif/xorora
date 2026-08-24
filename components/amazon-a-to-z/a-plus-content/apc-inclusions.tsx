import {
  FileText,
  MessageSquareQuote,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    icon: FileText,
    title: "Attention-grabbing product descriptions",
    body: "Product descriptions that instantly capture readers' attention.",
  },
  {
    icon: Sparkles,
    title: "USP analysis",
    body: "We identify and spotlight your product's most noteworthy features and unique selling propositions through product and competitor analysis.",
  },
  {
    icon: Target,
    title: '"Why Amazon" positioning',
    body: "We emphasize what sets your brand apart and why Amazon shoppers should choose you over your competitors.",
  },
  {
    icon: MessageSquareQuote,
    title: "Authentic brand story",
    body: "An authentic portrayal of your brand story, identity, values, policies, and more.",
  },
  {
    icon: Search,
    title: "SEO-optimized reach",
    body: "Increased traffic and improved reach through SEO and keyword-optimized content.",
  },
] as const;

export function ApcInclusions() {
  return (
    <LightSection>
      <SectionHead
        label="What's included"
        title="Amazon A+ Content service inclusions"
        className="ind-reveal mb-12 max-w-[760px]"
      />
      <div className="vc-stagger grid grid-cols-1 gap-[22px] md:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="ind-reveal vc-card-lift flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 p-[clamp(22px,2.4vw,28px)]"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) border border-indigo-200 bg-indigo-50 text-xo-indigo">
                <Icon className="h-5 w-5" aria-hidden />
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
