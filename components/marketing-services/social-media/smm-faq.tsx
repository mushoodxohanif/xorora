import { ServiceFaq } from "@/components/services";

export const SMM_FAQS = [
  {
    q: "How does a free consultation work?",
    a: "We start with a call to understand your brand, goals, and current social presence, at no cost. You leave with a clear read on where the opportunities are and how we'd approach them. There's no obligation to continue.",
  },
  {
    q: "Can you manage social for my whole team and multiple brands?",
    a: "Yes. We handle multiple brands and coordinate with everyone who needs to be involved, with clear ownership and approval flows. Whether it's one brand or a portfolio, the process scales to fit.",
  },
  {
    q: "Who owns the accounts and content you create?",
    a: "You do. We work in your accounts and hand over everything we create, so your brand and its content stay yours. We're running the program on your behalf, not holding it hostage.",
  },
  {
    q: "Are there long contracts or cancellation fees?",
    a: "Social media rewards consistency, so it works best as an ongoing program, but we'll be upfront about terms before you commit. We'd rather keep earning the work each month. We'll cover the details during scoping.",
  },
  {
    q: "Can you take over profiles we currently run in Hootsuite or Sprout Social?",
    a: "Yes. We migrate existing profiles, schedules, and content from tools like Hootsuite or Sprout Social, so nothing is lost in the handover. We map what you have first, then take the day-to-day off your plate.",
  },
] as const;

export function SmmFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...SMM_FAQS]}
    />
  );
}
