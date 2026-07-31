import { ServiceFaq } from "@/components/services";

export const SEO_FAQS = [
  {
    q: "Where is your SEO firm located?",
    a: "We're a global team serving clients across regions. What matters more than a pin on a map is how we work: technical-first, revenue-tied, and transparent. We'll happily walk you through how we operate on a call.",
  },
  {
    q: "How do you measure success?",
    a: "We measure against pipeline and revenue, not vanity rankings or raw traffic. Custom dashboards in GA4, Search Console, and Semrush show which organic activity drives business outcomes. If it doesn't tie back to revenue, it's not how we score the work.",
  },
  {
    q: "Do your SEO management services have a minimum contract length?",
    a: "SEO is a compounding investment, so it rewards consistency, but we'll be upfront about terms before you commit. We'd rather earn the next month than lock you into one. We'll cover contract details during scoping.",
  },
  {
    q: "Does Xorora use AI to write SEO content?",
    a: "We use AI to accelerate research and drafting, but expert writers and editors own the output. That keeps content authoritative and E-E-A-T-driven rather than generic. AI helps us move faster; it doesn't replace the judgment that makes content rank.",
  },
  {
    q: "Who will manage my account?",
    a: "You get a dedicated point of contact backed by specialists in technical SEO, content, and analytics. You won't be handed between strangers each month. We keep the same team close to your account throughout.",
  },
  {
    q: "How do your SEO optimization services drive revenue?",
    a: "We prioritize the work that moves pipeline, fix the structural issues that cap growth, and tie every recommendation to a revenue outcome. Then we report on those drivers, not just rankings. The goal is organic growth you can see in the business, not just in a dashboard.",
  },
] as const;

export function SeoFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="SEO services FAQs"
      items={[...SEO_FAQS]}
    />
  );
}
