import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "brain-circuit",
    name: "Machine learning",
    body: "Train machines to understand images with computer vision, build chatbots and assistants with NLP, and forecast the future with predictive analytics.",
  },
  {
    icon: "layers",
    name: "AI solutions for industries",
    body: "Adopt state-of-the-art methods and algorithms with experts who've applied AI across travel, transportation, healthcare, retail, eCommerce, and finance.",
  },
  {
    icon: "bar-chart-3",
    name: "Business intelligence",
    body: "Turn your knowledge into a smart analytics tool with dashboards, visualizations, and custom indicators that make your organization genuinely data-driven.",
  },
  {
    icon: "database-zap",
    name: "Big data consulting",
    body: "Tame your data by transforming raw numbers into answers you can act on in the business.",
  },
] as const;

export function MdsDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we do"
        title="Data science and machine learning services"
        sub="Harness the latest in machine learning for your business, from computer vision to predictive analytics."
        items={[...CAPABILITIES]}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
