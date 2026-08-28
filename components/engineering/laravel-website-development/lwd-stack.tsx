import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

const BOUNDARIES = [
  {
    name: "Blade with Livewire",
    body: "When you want one team and one codebase. Reactive interfaces rendered server-side, no separate API, no separate frontend repository, no state duplicated in two languages. Our default for business applications and internal platforms, and it is why small teams ship disproportionately fast on this stack.",
  },
  {
    name: "Inertia with Vue or React",
    body: "When the interface genuinely needs SPA behaviour but you do not want to build and version a public API to get it. Client-side routing and component state, server-side routing and auth.",
  },
  {
    name: "API-only with a separate frontend",
    body: "When there is a mobile app or a second consumer. Real separation costs real coordination, so we recommend it when something forces it, not by default.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Framework",
    logos: ["Laravel LTS", "PHP 8.3+", "Livewire", "Inertia", "Blade"],
  },
  {
    title: "Data",
    logos: ["MySQL", "PostgreSQL", "Redis", "Eloquent", "Laravel Scout"],
  },
  {
    title: "Queues & jobs",
    logos: ["Redis", "Horizon", "SQS", "Scheduled tasks"],
  },
  {
    title: "Ecosystem",
    logos: ["Cashier", "Sanctum", "Filament", "Reverb", "Octane"],
  },
  {
    title: "Infra",
    logos: ["Forge", "Vapor", "Docker", "AWS", "GitHub Actions"],
  },
  {
    title: "Quality",
    logos: ["Pest", "PHPStan", "Laravel Pint", "Telescope", "Pulse"],
  },
];

const gridSeo = imageAltTitle({
  primary: "Laravel stack",
  secondary: "Livewire, Inertia, Filament, Eloquent, Horizon, Redis",
  context: "Livewire, Inertia, Filament, Eloquent, Horizon, Redis",
});

export function LwdStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Laravel website development stack"
        sub="The biggest decision on a Laravel build is not which packages you use. It is where the frontend boundary sits, because that choice sets your team shape, your hiring, and your maintenance cost for years."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {BOUNDARIES.map((item) => (
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
        Filament for admin and operations. Octane where per-request boot cost is
        measurably hurting throughput.
      </p>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
