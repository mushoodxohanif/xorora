import { ServiceFaq } from "@/components/services";

export const ASEO_FAQS = [
  {
    q: "What are Amazon SEO services?",
    a: "Amazon SEO services optimize your product listings to rank higher in Amazon's search results, covering keyword research, listing and A+ Content optimization, structured data, and ongoing reporting. The goal is more organic visibility in front of ready-to-buy shoppers, and more revenue per visitor.",
  },
  {
    q: "How is Amazon SEO different from Google SEO?",
    a: "Amazon SEO optimizes for a buying engine, not a web search engine. Amazon's algorithm weighs conversion, sales velocity, and relevance to a shopper ready to purchase, so the tactics differ: listing content, backend keywords, and A+ Content matter more than backlinks.",
  },
  {
    q: "How long until Amazon SEO drives results?",
    a: "Some gains show within weeks as optimized listings gain traction, while ranking and revenue build over the following months. Amazon SEO compounds, so momentum grows over time. We report against real metrics so progress is visible.",
  },
  {
    q: "What does an Amazon SEO engagement include?",
    a: "A documented strategy, keyword research, listing and content optimization, structured-data and content audits, and continuous analytics and reporting. We tailor the mix to your catalog and goals.",
  },
  {
    q: "Do you handle Vendor Central and Seller Central accounts?",
    a: "Yes. We optimize listings and content for both first-party (Vendor Central) and third-party (Seller Central) accounts, and brands running both.",
  },
  {
    q: "Can Amazon SEO be combined with Amazon PPC?",
    a: "Yes, and it works best that way. Organic and paid reinforce each other: SEO lifts the listings that ads drive traffic to, and PPC data sharpens keyword targeting. We coordinate the two so they compound.",
  },
] as const;

export function AseoFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Frequently asked questions"
        items={[...ASEO_FAQS]}
      />
    </div>
  );
}
