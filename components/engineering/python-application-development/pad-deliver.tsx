import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Python application development",
    body: "Web applications, backend systems, automation tools, and data-driven products using Python as the core language. Readable syntax, a mature standard library, and one of the largest open-source ecosystems in software.",
  },
  {
    icon: "plug",
    name: "REST APIs and microservices",
    body: "FastAPI and Django REST Framework for typed, versioned APIs with proper error handling. Microservices where independent scaling or deployment cadence justifies the split — not because the diagram looks better.",
    href: ROUTES.pythonWebDevelopment,
  },
  {
    icon: "bot",
    name: "AI and ML integration",
    body: "Model integration, data pipeline work, and serving layers wired into applications people already use. Python is the industry standard for training, deploying, and serving models — and we build both sides under one roof.",
    href: ROUTES.mlDataScience,
  },
  {
    icon: "database-zap",
    name: "Data pipelines and automation",
    body: "Internal tools and data-driven systems where pandas, NumPy, and Python's scripting strength reduce long-term maintenance burden. Logic and data processing in one stack instead of stitching languages together.",
  },
  {
    icon: "refresh-cw",
    name: "Legacy Python modernization",
    body: "Python 2 estates, outdated Django versions, and systems that outgrew their original architecture. We map the risk before touching anything.",
    href: ROUTES.applicationModernization,
  },
  {
    icon: "cloud",
    name: "Cloud-native deployment",
    body: "Docker, CI/CD, and cloud deployment on AWS, GCP, or Azure as standard practice — not an extra line item bolted on after launch.",
    href: ROUTES.customAppDevelopment,
  },
];

export function PadDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Python application development services"
        sub="Python has quietly become the default starting point for a huge range of software projects — not because it's trendy, but because it holds up across web platforms, internal tools, data pipelines, and the AI layer behind all three. As a Python application development company, we scope every engagement to the system you have, not to a template."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
