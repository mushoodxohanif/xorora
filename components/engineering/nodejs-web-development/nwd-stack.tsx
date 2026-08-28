import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

const FRAMEWORKS = [
  {
    name: "NestJS",
    body: "When the team is more than three engineers or the system will outlive its authors. Opinionated structure, dependency injection, and modules mean a new engineer finds their way around in a day. Our default for platforms with real domain complexity.",
  },
  {
    name: "Express",
    body: "When the surface is small and the team is senior. Minimal, unopinionated, and everywhere. The cost is that structure is your responsibility, and Express codebases drift without discipline.",
  },
  {
    name: "Fastify",
    body: "When throughput is the constraint. Lower overhead per request and schema-based validation built in. Our default for high-volume APIs and gateway services.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Runtime & frameworks",
    logos: [
      "Node.js LTS",
      "TypeScript",
      "NestJS",
      "Express",
      "Fastify",
    ],
  },
  {
    title: "Real-time",
    logos: [
      "Socket.IO",
      "ws",
      "Server-Sent Events",
      "Redis pub/sub",
    ],
  },
  {
    title: "Data",
    logos: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  },
  {
    title: "Queues",
    logos: ["BullMQ", "RabbitMQ", "Kafka"],
  },
  {
    title: "Infra",
    logos: [
      "Docker",
      "Kubernetes",
      "AWS Lambda",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    title: "Quality",
    logos: ["Vitest", "Playwright", "ESLint", "Sentry", "OpenTelemetry"],
  },
];

const gridSeo = imageAltTitle({
  primary: "Node.js development stack",
  secondary: "NestJS, Express, Fastify, TypeScript, Redis",
  context: "NestJS, Express, Fastify, TypeScript, Redis",
});

export function NwdStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Node.js web development stack"
        sub="We pick the framework for the constraint, not the habit. Any Node.js web development company can list Express. The useful question is when each one wins."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {FRAMEWORKS.map((item) => (
          <div
            key={item.name}
            className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mb-10 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        TypeScript on all three. Not optional on anything we ship. A JavaScript
        backend past about ten thousand lines becomes a system nobody can
        refactor safely.
      </p>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
