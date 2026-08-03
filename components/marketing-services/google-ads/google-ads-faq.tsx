import { ServiceFaq } from "@/components/services";

export const GOOGLE_ADS_FAQS = [
  {
    q: "How does PPC marketing work?",
    a: "You bid to show ads to people actively searching for what you offer, and pay when they click. Done well, it puts you in front of high-intent demand at the moment of need. The skill is turning those clicks into profit, not just traffic.",
  },
  {
    q: "Why should I choose Xorora as my PPC ad agency?",
    a: "We run paid search as a structured, revenue-tied program, clean account structure, disciplined testing, and budget aimed where return is strongest. We optimize against measurable return, not vanity clicks. You get active management, not set-and-forget campaigns.",
  },
  {
    q: "What do I need to get started on Google Ads?",
    a: "A clear goal, a website or landing page that converts, and access to your ad and analytics accounts. We handle the account structure, tracking, and campaign build from there. If you're starting fresh, we set the foundations up properly.",
  },
  {
    q: "How much budget should I allocate to advertise on Google Ads?",
    a: "It depends on your market, competition, and goals. We model budget against expected return rather than guessing, and start where the data supports it. You can scale up as campaigns prove profitable.",
  },
  {
    q: "What results can I expect from paid search advertising?",
    a: "With intent-led structure and ongoing optimization, you should see spend concentrate on the terms that convert and return improve over time. We report against revenue and ROAS, not just clicks. Results compound as testing sharpens the account.",
  },
  {
    q: "How much does Google Ads management cost?",
    a: "It depends on account size, spend, and scope. After a short review we give you a clear proposal tied to the work involved, rather than a flat number. The aim is management that pays for itself in performance.",
  },
] as const;

export function GoogleAdsFaq() {
  return (
    <ServiceFaq
      label="Applied with intent"
      title="Google Ads and PPC marketing FAQs"
      items={[...GOOGLE_ADS_FAQS]}
    />
  );
}
