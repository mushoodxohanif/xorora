import { Database, Layers, Plug, Rocket } from "lucide-react";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    icon: Layers,
    title: "Where state lives",
    body: "The most common cause of an unmaintainable Flutter app is state scattered across widgets, so behaviour depends on which screen the user came from. We keep state in providers separated from UI, testable without rendering anything, so business rules can be verified without a device.",
  },
  {
    icon: Plug,
    title: "Where the native boundary sits",
    body: "Every plugin is a dependency on someone else's maintenance. We check commit history and issue response before adopting one for anything critical, because an abandoned plugin blocking an iOS release is a bad month. Where the risk is real, we write the platform channel ourselves and own it.",
  },
  {
    icon: Database,
    title: "What happens without a connection",
    body: "Offline is not a feature you add. It's a decision about whether the local database or the server holds truth, and how conflicts resolve when both changed. We settle that before the first screen, because retrofitting it means rewriting the data layer.",
  },
  {
    icon: Rocket,
    title: "How the next version reaches users",
    body: "You cannot hotfix mobile. So feature flags ship from release one, letting you disable a broken feature without a store submission. Minimum-version checks let you force an upgrade when the API contract has to change. Staged rollout catches a crash at 5% of users rather than 100%. Teams that skip this find out during their first incident.",
  },
] as const;

const diagramSeo = imageAltTitle({
  primary: "Flutter app architecture with state layer",
  secondary: "local database and sync",
  context: "state layer, local database and sync",
});

export function FmdArchitecture() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="How we design"
        title="Flutter app architecture"
        sub="Mobile fails in ways web does not, mostly because you cannot reach the installed version. Four decisions we make deliberately."
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
              App path
            </p>
            <ol className="m-0 flex list-none flex-col gap-3 p-0">
              {[
                {
                  k: "Providers / state",
                  v: "Separated from UI, testable without a device",
                },
                {
                  k: "Local data layer",
                  v: "Drift/Isar truth + sync strategy",
                },
                {
                  k: "Platform channels",
                  v: "Owned native boundary where plugins are risky",
                },
                {
                  k: "Release path",
                  v: "Feature flags, min-version, staged rollout",
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
