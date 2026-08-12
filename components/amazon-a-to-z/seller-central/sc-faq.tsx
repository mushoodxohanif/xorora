import { ServiceFaq } from "@/components/services";

export const SC_FAQS = [
  {
    q: "What does Amazon Seller Central management include?",
    a: "Everything from catalog and listing optimization to advertising, FBA and inventory planning, account-health and compliance monitoring, and reporting. We manage the full operation, so you get one accountable team instead of a stack of point tools.",
  },
  {
    q: "Can you help with Amazon account suspensions or policy violations?",
    a: "Yes. We handle account-health issues, appeals, and reinstatement cases, and, more importantly, we monitor proactively so problems get caught before they become suspensions.",
  },
  {
    q: "How long does it take to see results from Seller Central management?",
    a: "Some fixes (a corrected listing, a recovered case) show within days, while advertising and ranking gains build over weeks. We set expectations up front and report against real metrics as results compound.",
  },
  {
    q: "How do you approach ACOS management?",
    a: "We manage advertising to your ACOS/TACOS and revenue targets, concentrating spend on the terms and products that convert and cutting waste. The goal is profitable growth, not just a low ACOS or high spend for its own sake.",
  },
  {
    q: "Do you manage Amazon advertising as part of Seller Central management?",
    a: "Yes. Full-funnel PPC across Sponsored Products, Brands, and Display is part of the program, coordinated with inventory and listings so the levers reinforce each other.",
  },
  {
    q: "Who is a good fit for Seller Central management?",
    a: "Brands selling third-party on Amazon who want expert operations, advertising, and compliance handled without building an in-house Amazon team.",
  },
] as const;

export function ScFaq() {
  return (
    <div className="ind-reveal">
      <ServiceFaq
        label="Questions"
        title="Amazon Seller Central management questions"
        items={[...SC_FAQS]}
      />
    </div>
  );
}
