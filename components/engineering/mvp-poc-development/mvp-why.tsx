import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "gauge",
    title: "Minimized financial risk",
    body: "Focusing on a smaller feature set cuts your upfront investment, so you don't spend capital on features users may not want.",
  },
  {
    icon: "rocket",
    title: "Accelerated time-to-market",
    body: "Rapid development cycles let you launch months ahead of traditional schedules and capture early market share.",
  },
  {
    icon: "target",
    title: "Data-driven roadmap",
    body: "An MVP gives you real user data that tells you exactly what to build next, so future budget goes to high-value features.",
  },
  {
    icon: "layers",
    title: "Faster pivot potential",
    body: "If your hypothesis is wrong, you find out early. A PoC or MVP lets you pivot with minimal friction instead of failing late.",
  },
  {
    icon: "cpu",
    title: "Efficient resource allocation",
    body: "We focus your team on the 20% of features that drive 80% of the value, for a higher-ROI, more focused release.",
  },
  {
    icon: "handshake",
    title: "Early user loyalty",
    body: "An MVP builds a community of early adopters who feel invested in your growth and drive the word-of-mouth that fuels organic scaling.",
  },
] as const;

export function MvpWhy() {
  return (
    <OutcomeGrid
      label="Why an MVP approach"
      title="Why your business needs an MVP approach"
      sub="Building a full-featured product in a vacuum is a high-risk strategy. Here's how our MVP and PoC services reduce that risk and drive smarter innovation."
      items={[...WHY]}
    />
  );
}
