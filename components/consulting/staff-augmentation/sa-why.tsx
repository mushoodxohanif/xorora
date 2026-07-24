import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "target",
    title: "Right fit, first time",
    body: "Our vetting is built so the engineer you onboard is a strong fit for your team from the start — matched to your stack, domain, and working style.",
  },
  {
    icon: "gauge",
    title: "Ongoing performance management",
    body: "We don't place engineers and walk away. Delivery managers track performance, resolve issues, and hold our engineers to your standards.",
  },
  {
    icon: "shield-check",
    title: "Retention that protects your roadmap",
    body: "Engineers who stay on engagements mean continuity, not constant re-onboarding — so institutional knowledge compounds instead of resetting.",
  },
  {
    icon: "rocket",
    title: "Senior by default",
    body: "You get experienced engineers who bring domain knowledge, which means faster ramp-up and better problem-solving.",
  },
] as const;

export function SaWhy() {
  return (
    <OutcomeGrid
      label="Our performance model"
      title="Expect performance. We built our model around it."
      sub="We don't ask you to hope your next engineer works out. Our vetting is designed to make sure they do, and we monitor performance throughout the engagement."
      items={[...WHY]}
    />
  );
}
