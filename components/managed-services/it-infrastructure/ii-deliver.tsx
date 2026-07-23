import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "compass",
    name: "IT infrastructure consultancy",
    body: "Tell us your goals. We assess your pain points and the changes that bring the most ROI, then align upgrades to your medium and long-term strategy.",
  },
  {
    icon: "layers",
    name: "IT infrastructure integration",
    body: "We deliver a holistic upgrade to a new, optimized setup, or target specific fixes and modernizations, all while your operations keep running.",
  },
  {
    icon: "workflow",
    name: "IT infrastructure management services",
    body: "Once your setup is built, we run the whole estate, maintaining and retiring elements and planning capacity so the strategy stays optimal.",
  },
  {
    icon: "cloud",
    name: "Cloud setup and management",
    body: "We build a private cloud or set you up with a public provider such as Microsoft, tuned for a more flexible, cost-effective approach.",
  },
] as const;

export function IiDeliver() {
  return (
    <div id="infra-services" className="scroll-mt-24">
      <ServiceCardGrid
        label="What we do"
        title="IT infrastructure services from Xorora"
        sub="We cover every aspect of IT infrastructure. Ask us about any of the following."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
      />
    </div>
  );
}
