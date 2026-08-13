import { ServiceFaq } from "@/components/services";

export const ADSP_FAQS = [
  {
    q: "What is Amazon DSP and how is it different from Sponsored Ads?",
    a: "Amazon DSP is a demand-side platform for programmatic display, video, and audio ads that run both on Amazon and across off-Amazon inventory. Sponsored Ads appear in Amazon search and product pages and target shoppers actively searching. DSP reaches audiences earlier and more broadly, using Amazon's first-party data.",
  },
  {
    q: "Do I need to sell on Amazon to use Amazon DSP?",
    a: "Not necessarily. While many DSP advertisers sell on Amazon, DSP can also be used by brands that want to reach Amazon's audiences and off-Amazon inventory. We'll advise on the right setup for your goals.",
  },
  {
    q: "What types of ads can you run with Amazon DSP?",
    a: "Display, video, and audio ads across Amazon properties, publisher sites, apps, and streaming. We match format and placement to your audience and objective at each funnel stage.",
  },
  {
    q: "What is the minimum budget for Amazon DSP?",
    a: "Minimums vary depending on how DSP is accessed and the scope of the program. We'll walk you through what makes sense for your goals rather than pushing you into spend that won't perform.",
  },
  {
    q: "How do you measure Amazon DSP performance?",
    a: "We report across through-view, direct-page-view, purchase-rate, direct ROAS, and new-to-brand metrics, with attribution by audience segment and placement, so you see exactly what's driving return.",
  },
] as const;

export function AdspFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Amazon DSP questions"
        items={[...ADSP_FAQS]}
      />
    </div>
  );
}
