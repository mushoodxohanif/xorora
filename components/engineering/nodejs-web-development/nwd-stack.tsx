import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Runtime & frameworks",
    logos: [
      { name: "Node.js LTS", src: "/assets/tech-stack/nodejs.svg" },
      { name: "TypeScript", abbr: "TS", color: "#3178C6" },
      { name: "NestJS", abbr: "N", color: "#E0234E" },
      { name: "Express", src: "/assets/tech-stack/express.svg" },
      { name: "Fastify", abbr: "FY", color: "#000000" },
    ],
  },
  {
    title: "Real-time",
    logos: [
      { name: "Socket.IO", abbr: "IO", color: "#010101" },
      { name: "ws", abbr: "ws", color: "#0A0A0A" },
      { name: "Server-Sent Events", abbr: "SSE", color: "#2C57C9" },
      { name: "Redis pub/sub", src: "/assets/tech-stack/redis.svg" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "MongoDB", src: "/assets/tech-stack/mongodb.svg" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "Prisma", abbr: "PR", color: "#2D3748" },
      { name: "Drizzle", abbr: "DR", color: "#C5F74F" },
    ],
  },
  {
    title: "Queues",
    logos: [
      { name: "BullMQ", abbr: "BQ", color: "#E11D48" },
      { name: "RabbitMQ", src: "/assets/tech-stack/rabbitmq.svg" },
      { name: "Kafka", abbr: "KF", color: "#231F20" },
    ],
  },
  {
    title: "Infra",
    logos: [
      { name: "Docker", src: "/assets/tech-stack/docker.svg" },
      { name: "Kubernetes", src: "/assets/ml-platforms/kubernetes.svg" },
      { name: "AWS Lambda", src: "/assets/tech-stack/aws.svg" },
      { name: "Vercel", src: "/assets/tech-stack/nextjs.svg" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "Vitest", abbr: "VT", color: "#729B1B" },
      { name: "Playwright", abbr: "PW", color: "#2EAD33" },
      { name: "ESLint", abbr: "ES", color: "#4B32C3" },
      { name: "Sentry", src: "/assets/tech-stack/sentry.svg" },
      { name: "OpenTelemetry", abbr: "OT", color: "#425CC7" },
    ],
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
      <div className="flex flex-col gap-8" title={gridSeo.title}>
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    {"src" in logo ? (
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        title={logo.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-[8px] border font-bold font-sans text-[11px]"
                        style={{
                          background: `${logo.color}1A`,
                          borderColor: `${logo.color}40`,
                          color: logo.color === "#C5F74F" ? "#3F4A00" : logo.color,
                        }}
                        title={logo.name}
                      >
                        {logo.abbr}
                      </span>
                    )}
                  </span>
                  <span className="font-sans font-semibold text-[14px] text-fg1 leading-snug">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
