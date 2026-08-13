import { ServiceFaq } from "@/components/services";

export const AM_FAQS = [
  {
    q: 'What does "full Amazon account management" mean for your team?',
    a: "It means we own the day-to-day operation of your Amazon channel: Seller and Vendor Central support, listings, advertising, inventory, case management, and account health. You get one dedicated team accountable for the whole account, not a stack of point tools.",
  },
  {
    q: "Who is Xorora a good fit for?",
    a: "Established brands, companies without in-house Amazon expertise, fast-growing businesses, overwhelmed sellers, and multi-SKU or multi-marketplace brands. If you want expert operations without hiring internally, we're built for that.",
  },
  {
    q: "Do you work with Seller Central and Vendor Central?",
    a: "Yes. We support both first-party (Vendor Central) and third-party (Seller Central) accounts, and brands running a hybrid of the two.",
  },
  {
    q: "How is Xorora different from other Amazon account management agencies?",
    a: "We combine a dedicated operations team with end-to-end task ownership and senior oversight, and we're transparent about scope, team, and cost before you sign. We're Amazon specialists, not generalists with Amazon on a service list.",
  },
  {
    q: "Do you guarantee results?",
    a: "We don't sell guarantees; anyone who does on a marketplace this dynamic is overpromising. What we commit to is expert execution, clear reporting against real metrics, and a plan you approve before we start.",
  },
] as const;

export function AmFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Amazon account management questions"
        items={[...AM_FAQS]}
      />
    </div>
  );
}
