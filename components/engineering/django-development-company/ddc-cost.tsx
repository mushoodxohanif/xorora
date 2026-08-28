import {
  Code2,
  DatabaseZap,
  Gauge,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";
import { SEO_LANDING_IMAGES } from "@/lib/seo-landing-images";

const FACTORS = [
  {
    icon: LayoutTemplate,
    title: "Where the frontend boundary sits",
    body: "Django templates with HTMX and a separate React frontend are different projects with different budgets and different team shapes. Decided in architecture, not assumed at the quote.",
  },
  {
    icon: ShieldCheck,
    title: "Permission complexity",
    body: "Model-level permissions are close to free. Object-level and row-level rules with per-tenant variation are real engineering, and they are the most commonly underestimated part of a Django scope.",
  },
  {
    icon: Code2,
    title: "Your current Django version",
    body: "A Django 5.x application and a Django 2.2 application on an unsupported Python are different engagements. Upgrade cost sits mostly in abandoned third-party packages.",
  },
  {
    icon: DatabaseZap,
    title: "Data volume against existing query patterns",
    body: "On performance work, cost is in profiling and in the queries nobody knew were there rather than in writing new code.",
  },
  {
    icon: Gauge,
    title: "Who operates it after launch",
    body: "A system your team runs needs different documentation and tooling than one we maintain.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Django development cost factors",
  secondary: "Infrastructure that production Django systems run on",
  context: "production infrastructure",
});

export function DdcCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="Django development cost factors"
        sub="We scope from the constraint, not from a price list. Five things move the number on a Django build. Discovery produces a fixed estimate. You see the number before you commit to the build."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid items-start gap-[clamp(28px,4vw,48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={SEO_LANDING_IMAGES.django.cost}
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
    </LightSection>
  );
}
