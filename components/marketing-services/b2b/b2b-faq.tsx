import { ServiceFaq } from "@/components/services";

export const B2B_FAQS = [
  {
    q: "How does a free consultation work?",
    a: "We start with a call to understand your buyers, pipeline goals, and current channels, at no cost. You leave with a clear read on where revenue opportunities sit and how we would approach them. There is no obligation to continue.",
  },
  {
    q: "How is B2B paid search different from consumer PPC?",
    a: "B2B paid search targets longer sales cycles, technical buyers, and multi-stakeholder decisions. We structure campaigns around pipeline quality and revenue attribution, not just click volume. Messaging and bidding follow how your buyers actually evaluate solutions.",
  },
  {
    q: "What is the difference between SEO and GEO?",
    a: "SEO builds visibility in classic search results for high-intent queries. GEO helps your brand show up where buyers now ask AI engines like Perplexity, Claude, and Google, plus communities like Reddit. We run both so organic demand is covered across traditional and AI search.",
  },
  {
    q: "Why invest in Reddit for B2B marketing?",
    a: "B2B buyers research solutions in communities before they talk to sales. We manage presence and ads on Reddit so you show up with the right targeting, content, and engagement where those conversations happen.",
  },
  {
    q: "How do you measure revenue attribution?",
    a: "We connect paid and organic touchpoints to pipeline and closed revenue with multi-touch attribution. Reports show which channels and creatives move deals forward, so budget follows what produces customers.",
  },
  {
    q: "Who will I work with day to day?",
    a: "You work with senior strategists who stay on the account after launch. There is no handoff to a junior bench. Strategy, creative, and optimization sit with people accountable for performance.",
  },
] as const;

export function B2bFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...B2B_FAQS]}
    />
  );
}
