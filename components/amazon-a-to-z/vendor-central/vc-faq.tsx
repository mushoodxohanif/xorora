import { ServiceFaq } from "@/components/services";

export const VC_FAQS = [
  {
    q: "What is Amazon Vendor Central and how is it different from Seller Central?",
    a: "Vendor Central is invite-only and first-party: you sell wholesale to Amazon, and Amazon sells to customers as the retailer. Seller Central is third-party, where you sell to customers directly and control pricing. Vendor Central trades some control for scale and the \"Ships from and sold by Amazon\" trust signal.",
  },
  {
    q: "Can you help us recover Amazon Vendor Central chargebacks?",
    a: "Yes. Chargeback management and dispute resolution are core to what we do. We monitor deductions, dispute the ones that are recoverable, and fix the root causes so they stop recurring.",
  },
  {
    q: "How do you help with Amazon Vendor Central negotiation?",
    a: "We bring negotiation experience and data-driven pricing to your vendor agreement, from wholesale pricing structure to purchase-order terms, so you protect the margins that make first-party profitable.",
  },
  {
    q: "What advertising opportunities does Vendor Central offer?",
    a: "Vendor Central unlocks first-party advertising like Amazon DSP, Sponsored Brands video, and premium placements. We build full-funnel campaigns that use that access and coordinate them with inventory to protect rank and margin.",
  },
  {
    q: "How is reporting handled?",
    a: "Monthly reporting tied to the metrics that matter for first-party: shipped COGS, ROAS, organic ranking, and new-to-brand sales, with Vendor Central API integration where useful.",
  },
  {
    q: "Who is a good fit for Vendor Central management?",
    a: "Established brands selling wholesale to Amazon who want to protect margins and grow first-party revenue without building an in-house Amazon team.",
  },
] as const;

export function VcFaq() {
  return (
    <ServiceFaq
      label="Questions"
      title="Amazon Vendor Central questions"
      items={[...VC_FAQS]}
    />
  );
}
