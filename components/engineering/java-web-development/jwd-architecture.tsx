import { Cpu, Database, GitBranch, RefreshCw } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: RefreshCw,
    title: "Which Java, and whether jakarta is blocking you",
    body: "Java 8 to a current LTS is not just a version bump, because Spring Boot 3 also requires the javax to jakarta namespace change across every dependency you use. A library that never made the switch blocks the whole upgrade. We audit the dependency tree first, because that audit is the actual project.",
  },
  {
    icon: GitBranch,
    title: "Virtual threads or reactive",
    body: "Before virtual threads, handling high concurrency with blocking I/O meant a thread per request, and threads were expensive, so teams adopted WebFlux and a reactive programming model that is harder to write, harder to debug, and harder to hire for. Virtual threads made blocking code cheap. Reactive still earns its place for streaming and genuine backpressure. It rarely earns it for a REST API.",
  },
  {
    icon: Database,
    title: "Where the persistence session ends",
    body: "Hibernate's lazy loading is convenient until a query is triggered from a template or a serializer with no idea what it costs. Open session in view hides this and we turn it off. Queries terminate at the service boundary, DTO projections rather than entities cross it, and query budgets are asserted in tests.",
  },
  {
    icon: Cpu,
    title: "Heap, GC, and startup",
    body: "The JVM needs telling about container memory limits, and a wrong heap setting shows up as an OOM kill rather than an error you can read. GC choice follows the workload rather than the default. Where autoscaling is aggressive, startup time becomes an architectural concern rather than an annoyance.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary:
    "Java web application architecture with Spring Boot, virtual threads and persistence boundary",
  secondary: "Spring Boot, virtual threads, Hibernate",
  context: "Spring Boot, virtual threads and persistence boundary",
});

export function JwdArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Java web application architecture"
        sub="Java systems rarely fail suddenly. They accumulate decisions that each made sense and together make the system expensive. Four we make deliberately."
        className="mb-12 max-w-[760px]"
      />
      <div className="grid gap-[clamp(36px,5vw,56px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {DECISIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-(--r-lg) border border-border bg-white p-[clamp(20px,2.2vw,26px)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2 font-sans font-semibold text-[17px] text-fg1 leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[14px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
        <figure className="m-0">
          <div
            role="img"
            aria-label={diagramSeo.alt}
            title={diagramSeo.title}
            className="overflow-hidden rounded-(--r-xl) border border-border bg-white p-[clamp(22px,2.6vw,32px)] shadow-sm"
          >
            <p className="mb-5 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.16em]">
              Service path
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {[
                {
                  k: "Jakarta readiness",
                  v: "Dependency audit before any Spring Boot 3 upgrade",
                },
                {
                  k: "Concurrency model",
                  v: "Virtual threads for REST; reactive only with backpressure",
                },
                {
                  k: "Persistence boundary",
                  v: "No open session in view; DTOs cross the edge",
                },
                {
                  k: "JVM tuning",
                  v: "Heap limits, GC choice, and startup under autoscaling",
                },
              ].map((row, i) => (
                <li
                  key={row.k}
                  className="rounded-(--r-md) border border-border bg-slate-50 px-4 py-3.5"
                >
                  <p className="mb-1 font-mono text-[11px] text-xo-indigo">
                    0{i + 1}
                  </p>
                  <p className="m-0 font-sans font-semibold text-[16px] text-fg1">
                    {row.k}
                  </p>
                  <p className="mt-1 mb-0 font-sans text-[13.5px] text-fg2">
                    {row.v}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </figure>
      </div>
    </LightSection>
  );
}
