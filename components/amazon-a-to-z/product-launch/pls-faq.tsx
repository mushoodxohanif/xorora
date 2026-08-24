import { ServiceFaq } from "@/components/services";

export const PLS_FAQS = [
  {
    q: "How long does it take to see results from your product launch services?",
    a: "Some launches gain traction within the first few weeks as PPC and ranking build, while stronger organic performance compounds over the following months. We set expectations up front and report against real metrics so progress is visible.",
  },
  {
    q: "What makes Xorora's product launch services unique?",
    a: "We specialize in Amazon launches specifically, with a structured, data-led framework across research, listing, keywords, PPC, and monitoring. You get one accountable team focused on early momentum, not a generalist agency treating Amazon as a side channel.",
  },
  {
    q: "How do you ensure my product ranks on Amazon's first page?",
    a: "We can't promise a ranking, and anyone who does is overpromising. What we do is stack the odds: optimized listings, targeted keyword strategy, and PPC that drives the early sales velocity Amazon's algorithm rewards.",
  },
  {
    q: "What ongoing support do you offer after the product launch?",
    a: "We continue with performance monitoring, content optimization, PPC management, and reporting, adjusting strategy on real-time data to sustain momentum after launch.",
  },
  {
    q: "How do you handle customer reviews for new products?",
    a: "We use Amazon-compliant methods to encourage genuine reviews, since new products with few reviews struggle to convert. We never use tactics that breach Amazon's review policies.",
  },
] as const;

export function PlsFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Question / answer"
        title="Frequently asked questions about our Amazon product launch services"
        items={[...PLS_FAQS]}
      />
    </div>
  );
}
