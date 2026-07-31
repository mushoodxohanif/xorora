import { OutcomeGrid } from "@/components/services";

const APPROACH = [
  {
    icon: "layers",
    title: "Integration over isolation",
    body: "We don't optimize SEO in a silo. Insights from your paid campaigns, conversion data, and sales pipeline inform the organic strategy, so every channel makes the others stronger.",
  },
  {
    icon: "target",
    title: "Revenue-first prioritization",
    body: "We prioritize by business impact, not best-practice checklists. The work that moves pipeline gets done first, and every recommendation ties back to a revenue outcome.",
  },
  {
    icon: "cpu",
    title: "Structural thinking",
    body: "We solve the architecture-level problems that hold sites back: cannibalization, crawl waste, and content gaps. Fixing the structure makes every future optimization more effective.",
  },
  {
    icon: "shield-check",
    title: "Durability over quick wins",
    body: "Our algorithm-aware SEO connects the fundamentals right, so gains hold up rather than spike and fade with the next update.",
  },
  {
    icon: "gauge",
    title: "Measurable accountability",
    body: "We connect SEO performance to pipeline and revenue, not vanity rankings and traffic. You always know what your organic investment is producing.",
  },
] as const;

export function SeoApproach() {
  return (
    <OutcomeGrid
      label="Our approach"
      title="A strategic framework for sustainable organic growth"
      sub="We build SEO programs as connected systems, where technical health, content authority, and site architecture reinforce each other."
      items={[...APPROACH]}
      columns={3}
    />
  );
}
