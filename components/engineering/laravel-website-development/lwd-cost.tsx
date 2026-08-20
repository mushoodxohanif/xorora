import { Cloud, CreditCard, GitBranch, Layers, Plug } from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const FACTORS = [
  {
    icon: Layers,
    title: "Where the frontend boundary sits",
    body: "Blade with Livewire, Inertia, and a fully separate SPA are three different projects with three different budgets. This gets decided in architecture, not assumed at the quote.",
  },
  {
    icon: GitBranch,
    title: "Your current Laravel version",
    body: "A Laravel 12 application and a Laravel 5.8 application on unsupported PHP are different engagements. Upgrade cost sits mostly in the packages that were abandoned along the way.",
  },
  {
    icon: CreditCard,
    title: "Billing complexity",
    body: "Standard subscriptions are largely handled. Usage-based pricing, multi-currency, marketplace payouts, and custom proration are real engineering.",
  },
  {
    icon: Plug,
    title: "Integration count",
    body: "Every external system carries its own auth, rate limits, and failure modes. Three integrations and eleven are different projects.",
  },
  {
    icon: Cloud,
    title: "Who operates it after launch",
    body: "A system your team runs needs different documentation and tooling than one we maintain.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Laravel website development cost factors",
  secondary: "Infrastructure that production Laravel systems run on",
  context: "production infrastructure",
});

export function LwdCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="Laravel website development cost factors"
        sub="We scope from the constraint, not from a price list. Five things move the number on a Laravel build."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid items-start gap-[clamp(28px,4vw,48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/assets/infrastructure/consultancy-datacenter.webp"
            alt={photoSeo.alt}
            title={photoSeo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[center_20%]"
          />
        </div>
        <div className="grid gap-[18px] sm:grid-cols-2">
          {FACTORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[17.5px] text-fg1 leading-snug">
                  {item.title}
                </h3>
                <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="mt-8 mb-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        Discovery produces a fixed estimate. You see the number before you commit
        to the build.
      </p>
    </LightSection>
  );
}
