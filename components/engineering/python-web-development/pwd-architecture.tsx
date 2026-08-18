import { Database, Layers, Radio, Timer } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: Layers,
    title: "Where the boundary sits",
    body: "A modular monolith ships faster than microservices and stays maintainable far longer than most teams expect. We split services when there's a real reason: independent scaling, separate deployment cadence, a team boundary. Not because the diagram looks better.",
  },
  {
    icon: Timer,
    title: "What happens outside the request",
    body: "Anything slower than a few hundred milliseconds leaves the request cycle. Celery with Redis for most workloads, and idempotent task design so a retry cannot corrupt state. This is the single most common thing we fix in systems we inherit.",
  },
  {
    icon: Database,
    title: "How the database grows",
    body: "Indexes and query patterns get designed alongside the data model, not after the first slow page. Read replicas when read volume justifies them. Connection pooling from the start, because adding it under load is a bad week.",
  },
  {
    icon: Radio,
    title: "What happens when it breaks",
    body: "Structured logging, error tracking, and metrics ship with the first release. A system you cannot observe is a system you cannot operate.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary: "Python web application architecture",
  secondary: "Django, Celery task queue and PostgreSQL",
  context: "Django, Celery task queue and PostgreSQL",
});

export function PwdArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Python web application architecture"
        sub="Architecture decisions made in week one determine what the system costs in year three. Four we make deliberately on every Python web development project."
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
                { k: "Django core", v: "Auth, admin, domain logic" },
                { k: "Celery + Redis", v: "Work outside the request cycle" },
                { k: "PostgreSQL", v: "Indexed model, pooled connections" },
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
