import { OutcomeGrid } from "@/components/services";

const WHY = [
  {
    icon: "shield-check",
    title: "You own it, licence-free",
    body: "We build on open frameworks, so you keep full IP ownership and never pay recurring licensing fees.",
  },
  {
    icon: "layers",
    title: "Publish once, everywhere",
    body: "Our headless and API-first builds push a single edit to every channel, cutting repeat work for your team.",
  },
  {
    icon: "trending-up",
    title: "Migration without the SEO hit",
    body: "We protect rankings through migration with URL mapping, redirects, and 90-day post-launch monitoring.",
  },
  {
    icon: "handshake",
    title: "Built to integrate",
    body: "Your CMS connects cleanly to the CRM, ERP, commerce, and analytics tools you already run.",
  },
] as const;

export function CmsWhy() {
  return (
    <OutcomeGrid
      label="Why Xorora"
      title="Why teams build their CMS with us"
      items={[...WHY]}
    />
  );
}
