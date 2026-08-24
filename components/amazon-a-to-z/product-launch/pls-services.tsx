import {
  BarChart3,
  FileText,
  MessageSquareQuote,
  Search,
  Target,
  Zap,
} from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const CARDS = [
  {
    icon: Search,
    title: "Thorough market research",
    body: "We research your market to understand the unique selling point of your product. We analyze competitors and buyer behavior to build strategies that align with your goals and position your product.",
  },
  {
    icon: FileText,
    title: "Optimized listing creation",
    body: "We craft conversion-focused listings that address buyer intent and reduce hesitation. From keyword-rich titles to informative descriptions, we make sure your listing catches shoppers and stands out on Amazon.",
  },
  {
    icon: Target,
    title: "Targeted keyword strategy",
    body: "We identify highly relevant keywords, mapped and segmented into core, secondary, and discoverability terms, so you know what to target for the best possible reach.",
  },
  {
    icon: MessageSquareQuote,
    title: "Effective review generation",
    body: "Most shoppers avoid products with few or no reviews. We encourage genuine, Amazon-compliant feedback that builds trust for a successful launch — never tactics that breach Amazon's review policies.",
  },
  {
    icon: Zap,
    title: "PPC campaign management",
    body: "We drive immediate traffic to your listing, setting up highly targeted campaigns with smart bidding. Our campaigns are structured to test, validate, and scale early demand signals.",
  },
  {
    icon: BarChart3,
    title: "Data-driven performance tracking",
    body: "We continuously monitor performance to identify what's working and what's not. With clear reporting and analysis, you stay informed about key metrics like sales and ACoS.",
  },
] as const;

export function PlsServices() {
  return (
    <LightSection>
      <SectionHead
        label="All in one"
        title="Amazon product launch services to grow your brand"
        sub="We've built our product launch strategy to eliminate the guesswork that often leads to failure with new listings."
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
