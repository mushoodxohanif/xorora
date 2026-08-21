import { GitBranch, Layers, RefreshCw, Zap } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: RefreshCw,
    title: "Which .NET you are on",
    body: "This is a fork, not a version bump. Framework 4.8 means Windows-only hosting, no access to current performance work, and a shrinking pool of engineers willing to work on it. Modern .NET means the opposite. Every other architectural decision depends on this one, so we settle it in week one with a real assessment rather than an assumption.",
  },
  {
    icon: Layers,
    title: "How much abstraction the system has earned",
    body: "Clean Architecture, CQRS, and a mediator layer are good tools and a bad default. We have inherited three-project solutions with five layers of indirection wrapping a single database table. We add structure when a boundary is real, and we can explain why each layer exists. If we cannot, it comes out.",
  },
  {
    icon: GitBranch,
    title: "Where the query boundary sits",
    body: "EF Core's deferred execution means an IQueryable returned from a repository is a query nobody has finished writing yet, and it gets completed somewhere with no idea what it costs. We terminate queries at the boundary, use no-tracking reads where nothing is being mutated, and set query budgets per endpoint.",
  },
  {
    icon: Zap,
    title: "Async the whole way down",
    body: "One synchronous call inside an async path blocks a thread pool thread, and under load that becomes starvation: everything slow, nothing obviously broken. No sync-over-async anywhere, cancellation tokens threaded through, and load testing held long enough to expose it.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary:
    ".NET application architecture with ASP.NET Core, EF Core and async request handling",
  secondary: "ASP.NET Core, EF Core, async",
  context: "ASP.NET Core, EF Core and async request handling",
});

export function CdnArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Custom .NET application architecture"
        sub=".NET applications rarely fail from lack of structure. They fail from too much of it, applied before anyone knew what the system needed. Four decisions we make deliberately."
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
              Request path
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {[
                {
                  k: "Runtime fork",
                  v: "Framework 4.8 or modern .NET — settled in week one",
                },
                {
                  k: "Query boundary",
                  v: "EF Core terminated at the edge, budgets per endpoint",
                },
                {
                  k: "Async all the way",
                  v: "No sync-over-async; cancellation tokens threaded through",
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
