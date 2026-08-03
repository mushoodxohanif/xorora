import { ServiceFaq } from "@/components/services";

export const META_ADS_FAQS = [
  {
    q: "What is Meta Ads?",
    a: "Meta Ads is the advertising system across Facebook and Instagram, letting you reach precise audiences with images, video, and carousel formats. It's powerful because of how specifically you can target and measure. The skill is turning that reach into profitable results.",
  },
  {
    q: "How can Meta advertising help my business?",
    a: "It puts your brand in front of the exact audiences most likely to buy, then lets you retarget the ones who engaged. Done well, it drives awareness, leads, and sales you can measure. We build campaigns around your goals, not vanity metrics.",
  },
  {
    q: "How does bidding work on Meta Ads?",
    a: "You bid for your ads to be shown to your target audience, and Meta's auction decides placement based on your bid and ad quality. Smart bidding strategies balance cost against your campaign goals. We manage bids actively so budget goes where it returns most.",
  },
  {
    q: "How long does it take to see results from a Meta Ads campaign?",
    a: "Early signals often appear within the first couple of weeks as campaigns exit the learning phase, with performance improving as we optimize. Timelines depend on budget, competition, and goals. We set expectations up front and report as results build.",
  },
  {
    q: "Do I need a Meta Ads agency?",
    a: "If you want the full value of Meta's targeting without wasting budget learning it, an agency earns its keep. We bring the audit, creative, testing, and optimization discipline most in-house teams don't have time for. You stay focused on the business while we run the ads.",
  },
  {
    q: "Why choose Xorora as your Meta Ads agency?",
    a: "We run Meta Ads as a build-test-refine program, not set-and-forget, pairing strong creative with precise targeting and continuous optimization. Every decision ties back to ROI. You get senior attention and a team accountable to results.",
  },
] as const;

export function MetaAdsFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Meta FAQs"
      items={[...META_ADS_FAQS]}
    />
  );
}
