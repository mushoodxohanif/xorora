import { ServiceFaq } from "@/components/services";

export const PPC_FAQS = [
  {
    q: "How long does it take to see measurable results from Amazon PPC campaigns?",
    a: "Some improvements show within the first few weeks as we cut wasted spend and sharpen targeting, while stronger returns build over the following months as the account and organic ranking respond. We set expectations up front and report against real metrics like ACoS, TACoS, and ROAS.",
  },
  {
    q: "Can you work with my existing Amazon ad campaigns, or do you start everything from scratch?",
    a: "Both. We usually start with a free audit of what you're running, keep what works, and restructure what doesn't. If you're starting fresh, we build the campaign architecture from the ground up on real product and business logic.",
  },
  {
    q: "Do you manage all Amazon ad formats or just Sponsored Products?",
    a: "We manage the full spectrum: Sponsored Products, Sponsored Brands, Sponsored Display, video, and Storefront and Store Spotlight ads — run as one coordinated, full-funnel program rather than in silos.",
  },
  {
    q: "What's your approach to keyword research and targeting strategy?",
    a: "We combine Amazon Brand Analytics and marketplace data with your product and margin logic to build segmented campaigns by intent and product stage, then mine search terms and negatives continuously to keep spend efficient.",
  },
  {
    q: "How often will I receive reports, and what insights do they include?",
    a: "You get real-time dashboards, weekly performance reports, and a monthly strategy session with a real strategist — covering ACoS, TACoS, CTR, ROAS, revenue per click, and competitive trends, with no fluff.",
  },
  {
    q: "How are you different from automated PPC tools or general digital marketing agencies?",
    a: "We're Amazon-first, not a generalist agency, and we pair automation with human oversight rather than leaving your budget to a rules engine. You work directly with your strategist, and every decision ties back to profitability — not vanity clicks.",
  },
] as const;

export function PpcFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Frequently asked questions: Amazon PPC management services"
        items={[...PPC_FAQS]}
      />
    </div>
  );
}
