import { ServiceFaq } from "@/components/services";

export const MVP_FAQS = [
  {
    q: "Why do most AI pilots fail to scale?",
    a: "Most stall because they were built as demos, not for production, with no plan for data, deployment, or ongoing ownership. A PoC or MVP done right validates feasibility and sets up the path to scale from the start. That's the gap we design around.",
  },
  {
    q: "How long does it take to build an AI PoC or MVP?",
    a: "A focused PoC can move in a few weeks, while a market-ready MVP takes longer depending on scope. We define the timeline up front and work in stages, so you see progress and can adjust. Speed is the point, but not at the cost of a throwaway build.",
  },
  {
    q: "How does Xorora ensure my AI project delivers ROI?",
    a: "We start by identifying the AI opportunities most likely to create measurable business value, then focus the build on them. We measure against real user data rather than assumptions. The goal is spend that ties back to outcomes.",
  },
  {
    q: "How secure and compliant are AI PoCs and MVPs developed by Xorora?",
    a: "Security and compliance are part of the design, not an afterthought. We build with controlled access and sound data practices, and align to the standards your industry requires. A prototype still deserves real protection.",
  },
  {
    q: "Can Xorora integrate the MVP with our existing systems?",
    a: "Yes. We design the MVP to fit your current architecture and data, so it connects to what you already run rather than sitting apart from it. Clean integration is part of making an MVP genuinely useful.",
  },
  {
    q: "What happens after the MVP is launched?",
    a: "We use real usage data to decide what to build next, harden the product, and scale what works. An MVP is a starting point, and we help you move from validated learning to a fuller product.",
  },
] as const;

export function MvpFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="Frequently asked questions"
      items={[...MVP_FAQS]}
    />
  );
}
