import { Database, GitBranch, Layers, RefreshCw } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: RefreshCw,
    title: "The request lifecycle is shared-nothing",
    body: "Laravel boots fresh on every request and discards everything afterwards. That is a real advantage: no memory leaks, no state drift between servers, and horizontal scaling that works by adding boxes. It also means nothing survives between requests, so caching, scheduling, and long-running work have to live somewhere deliberate rather than in process memory.",
  },
  {
    icon: Database,
    title: "Eloquent and the N+1 problem",
    body: "Eloquent makes relationships so easy to traverse that a loop over fifty records quietly becomes fifty-one queries. This is the single most common cause of slow Laravel applications, and it is invisible in development where the dataset is small. We set query budgets per endpoint, eager load explicitly, and drop to the query builder where a report needs it.",
  },
  {
    icon: Layers,
    title: "What leaves the request",
    body: "Laravel makes queueing trivial, which is exactly why it gets skipped. Mail, webhooks, exports, and third-party calls belong in jobs, with Horizon watching them and retries designed to be idempotent. Anything that depends on a service you do not control should never sit inside a user's request.",
  },
  {
    icon: GitBranch,
    title: "How the upgrade path stays open",
    body: "Laravel ships a major version each year. Applications that pin to old versions do it because they buried framework logic inside business code and cannot separate the two. We keep domain logic out of controllers and off models, so upgrading is a weekend rather than a quarter.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary: "Laravel request lifecycle with queue workers, Horizon and Redis",
  secondary: "Request, Horizon, Redis",
  context: "queue workers, Horizon and Redis",
});

export function LwdArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Laravel web application architecture"
        sub="Laravel fails differently from other backends. It rarely leaks and it scales sideways almost for free, but it gets slow in the database layer, quietly, one relationship at a time. Four decisions we make deliberately."
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
                  k: "HTTP request",
                  v: "Fresh boot, shared-nothing process model",
                },
                {
                  k: "Queue workers",
                  v: "Mail, webhooks, and exports leave the request",
                },
                {
                  k: "Horizon + Redis",
                  v: "Jobs watched, retries stay idempotent",
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
