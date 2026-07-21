import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "compass",
    name: "Strategy and consulting",
    body: "We combine people, technology, and data to lay out a transformation roadmap tied to your business.",
  },
  {
    icon: "layers",
    name: "Platform engineering",
    body: "We design, build, and maintain the technical foundation your software and services run on.",
  },
  {
    icon: "pen-tool",
    name: "UI/UX",
    body: "We design interfaces that are usable, considered, and built to give your users a clear path through.",
  },
  {
    icon: "refresh-cw",
    name: "Application modernization",
    body: "We modernize legacy systems without disrupting daily operations, so the business keeps running.",
  },
  {
    icon: "rocket",
    name: "Emerging technologies",
    body: "We put emerging tech to work where it fits, from blockchain to IoT to AR/VR, tied to real outcomes.",
  },
  {
    icon: "database-zap",
    name: "Data and AI",
    body: "We implement AI solutions that surface real-time insight and support decisions that move you forward.",
  },
  {
    icon: "workflow",
    name: "DevOps",
    body: "We streamline build and release so your teams ship more often, with fewer surprises in production.",
  },
] as const;

export function DtDeliver() {
  return (
    <ServiceCardGrid
      label="What we do"
      title="Scalable solutions to fast-track digital transformation"
      sub="Seven capabilities that carry you from strategy through to systems running in production."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
    />
  );
}
