import { OutcomeGrid } from "@/components/services";

const APPROACH = [
  {
    icon: "layers",
    title: "Foundations",
    body: "Paid search starts with clean structure and accurate tracking. Includes: account structure, conversion tracking, budget segmentation.",
  },
  {
    icon: "target",
    title: "Strategy",
    body: "We prioritize high-value keywords, define bidding logic, and allocate budget where return is strongest. Includes: keyword prioritization, bidding logic, budget modeling.",
  },
  {
    icon: "rocket",
    title: "Execution",
    body: "We refine messaging, structure ad groups deliberately, and manage placements to protect performance. Includes: search campaigns, Performance Max, Shopping ads, display and video.",
  },
  {
    icon: "gauge",
    title: "Optimization",
    body: "We test systematically, reallocate budget based on results, and scale what proves profitable. Includes: A/B testing, budget structure, ROAS monitoring, platform scaling.",
  },
] as const;

export function GoogleAdsApproach() {
  return (
    <OutcomeGrid
      label="Our approach"
      title="Structured paid search, measurable growth"
      sub="Google Ads performance improves when targeting, structure, and optimization work together."
      items={[...APPROACH]}
      columns={4}
    />
  );
}
