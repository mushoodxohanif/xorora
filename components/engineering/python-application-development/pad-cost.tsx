import { Bot, Layers, Plug, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";
import { ROUTES } from "@/lib/navigation";
import { SEO_LANDING_IMAGES } from "@/lib/seo-landing-images";

const FACTORS = [
  {
    icon: Layers,
    title: "Application complexity",
    body: "The single biggest factor. A scoped internal tool or MVP costs meaningfully less than a multi-tenant SaaS platform with billing, authentication, and third-party integrations.",
    href: ROUTES.mvpPocDevelopment,
    hrefLabel: "MVP",
  },
  {
    icon: Zap,
    title: "Framework choice",
    body: "Django's batteries-included approach can reduce initial build time for data-heavy applications. FastAPI's leaner footprint suits API-first projects where speed and performance matter more than built-in tooling.",
  },
  {
    icon: Bot,
    title: "AI/ML integration",
    body: "Model integration, data pipeline work, and ongoing evaluation aren't one-time costs — they're an ongoing part of the system when AI features sit in the roadmap.",
  },
  {
    icon: Users,
    title: "Team seniority",
    body: "Senior engineers cost more per hour but tend to make fewer costly architectural mistakes on complex builds — or you can bring senior Python capacity through staff augmentation instead of a full handoff.",
    href: ROUTES.staffAugmentation,
    hrefLabel: "staff augmentation",
  },
  {
    icon: Plug,
    title: "Integrations",
    body: "Payments, CRMs, and external APIs add both build and testing time regardless of the underlying framework.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Python application development cost factors",
  secondary: "Infrastructure that production Python applications run on",
  context: "production infrastructure",
});

export function PadCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="What drives the cost of Python application development"
        sub="We scope from the constraint, not from a price list. These factors move the number on a Python application build."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid items-start gap-[clamp(28px,4vw,48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/5] min-h-[280px] overflow-hidden rounded-(--r-xl) border border-border lg:sticky lg:top-24 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={SEO_LANDING_IMAGES.pythonApp.cost}
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
                  {"href" in item && item.href ? (
                    <>
                      {" "}
                      <Link
                        href={item.href}
                        className="font-semibold text-accent no-underline hover:text-tangerine-600"
                      >
                        {item.hrefLabel}
                      </Link>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </LightSection>
  );
}
