import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "app-window",
    name: "UI/UX design for mobile apps",
    body: "We design responsive, engaging mobile app UI/UX that improves usability and the user experience.",
  },
  {
    icon: "layers",
    name: "UI/UX design for web applications",
    body: "We create UI/UX for web apps, optimized for desktop and mobile alike.",
  },
  {
    icon: "pen-tool",
    name: "Custom UI/UX solutions",
    body: "We build custom UI/UX with intuitive, user-friendly interfaces aligned to your brand.",
  },
  {
    icon: "workflow",
    name: "UI/UX design for user engagement",
    body: "We specialize in engagement, using interaction design, usability testing, and UX research.",
  },
  {
    icon: "compass",
    name: "UI/UX wireframing and prototyping",
    body: "Our wireframing and prototyping let you see the product's experience before development begins.",
  },
  {
    icon: "gauge",
    name: "Usability testing and evaluation",
    body: "We run usability testing to find pain points and improve how the product works.",
  },
  {
    icon: "bar-chart-3",
    name: "UI/UX design for ecommerce websites",
    body: "We design ecommerce UI/UX that lifts conversions and cuts cart abandonment.",
  },
  {
    icon: "cpu",
    name: "UI/UX design for SaaS platforms",
    body: "Our SaaS UI/UX delivers intuitive dashboards and clear navigation.",
  },
] as const;

export function UiuxDeliver() {
  return (
    <ServiceCardGrid
      label="What we do"
      title="Our UI/UX design services"
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
