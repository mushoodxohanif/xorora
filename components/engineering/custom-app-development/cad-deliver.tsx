import { ServiceCardGrid } from "@/components/services";

const CAPABILITIES = [
  {
    icon: "app-window",
    name: "Custom-built mobile apps",
    body: "We engineer Android, iOS, and Windows apps that carry your essential and custom business requirements.",
  },
  {
    icon: "cpu",
    name: "Android app development",
    body: "We build for popular Android devices, covering integration, implementation, and support end to end.",
  },
  {
    icon: "layers",
    name: "iOS app development",
    body: "We help you reach more users on iOS, built to Apple's standards so your app publishes cleanly to the App Store.",
  },
  {
    icon: "cloud",
    name: "Windows and IoT apps",
    body: "We engineer Windows-based consumer and industrial mobile apps, including IoT, on the Microsoft stack.",
  },
  {
    icon: "workflow",
    name: "Enterprise mobile app development",
    body: "We build apps that meet the security and reliability requirements larger organizations run on.",
  },
  {
    icon: "pen-tool",
    name: "UX and UI design and development",
    body: "We improve your app's look, feel, and navigation with custom features and designs built for mobile.",
  },
  {
    icon: "refresh-cw",
    name: "App support and maintenance",
    body: "We support your app after deployment, keeping it performing correctly across devices.",
  },
  {
    icon: "brain-circuit",
    name: "AI-powered app features",
    body: "We add AI where it earns its place, from biometric authentication to in-app NLP chatbots.",
  },
] as const;

export function CadDeliver() {
  return (
    <ServiceCardGrid
      label="What we build"
      title="Custom mobile app development, end to end"
      sub="We build the right app from scratch or revamp your current one, with the features, integrations, and modifications your business actually needs."
      items={[...CAPABILITIES]}
      bg="var(--slate-50)"
      showLearnMore={true}
    />
  );
}
