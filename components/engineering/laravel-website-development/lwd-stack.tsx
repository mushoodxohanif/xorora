import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Framework",
    logos: [
      { name: "Laravel LTS", src: "/assets/tech-stack/laravel.svg" },
      { name: "PHP 8.3+", src: "/assets/tech-stack/php.svg" },
      { name: "Livewire", abbr: "LW", color: "#FB70A9" },
      { name: "Inertia", abbr: "IN", color: "#9553E9" },
      { name: "Blade", abbr: "BL", color: "#FF2D20" },
    ],
  },
  {
    title: "Data",
    logos: [
      { name: "MySQL", abbr: "MY", color: "#4479A1" },
      { name: "PostgreSQL", src: "/assets/tech-stack/postgresql.svg" },
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "Eloquent", abbr: "EL", color: "#FF2D20" },
      { name: "Laravel Scout", abbr: "SC", color: "#0EA5E9" },
    ],
  },
  {
    title: "Queues & jobs",
    logos: [
      { name: "Redis", src: "/assets/tech-stack/redis.svg" },
      { name: "Horizon", abbr: "HZ", color: "#4055F3" },
      { name: "SQS", abbr: "SQ", color: "#FF9900" },
      { name: "Scheduled tasks", abbr: "CR", color: "#64748B" },
    ],
  },
  {
    title: "Ecosystem",
    logos: [
      { name: "Cashier", abbr: "CA", color: "#635BFF" },
      { name: "Sanctum", abbr: "SA", color: "#FF2D20" },
      { name: "Filament", abbr: "FI", color: "#FDAE4B" },
      { name: "Reverb", abbr: "RV", color: "#111827" },
      { name: "Octane", abbr: "OC", color: "#F97316" },
    ],
  },
  {
    title: "Infra",
    logos: [
      { name: "Forge", abbr: "FG", color: "#1B4B66" },
      { name: "Vapor", abbr: "VP", color: "#25C4F2" },
      { name: "Docker", src: "/assets/tech-stack/docker.svg" },
      { name: "AWS", src: "/assets/tech-stack/aws.svg" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "Pest", abbr: "PE", color: "#18B69B" },
      { name: "PHPStan", abbr: "PS", color: "#2D3748" },
      { name: "Laravel Pint", abbr: "PT", color: "#FF2D20" },
      { name: "Telescope", abbr: "TE", color: "#4040C8" },
      { name: "Pulse", abbr: "PU", color: "#EC4899" },
    ],
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
                          color: logo.color,
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
