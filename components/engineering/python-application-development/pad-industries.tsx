import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  Landmark,
  LayoutGrid,
  Settings,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { ROUTES } from "@/lib/navigation";
import { SEO_LANDING_IMAGES } from "@/lib/seo-landing-images";

const INDUSTRIES: {
  icon: LucideIcon;
  name: string;
  href: string;
  body: string;
  img: string;
  imageAlt: string;
  imageTitle: string;
}[] = [
  {
    icon: LayoutGrid,
    name: "Web apps and SaaS",
    href: ROUTES.industry("saas"),
    body: "Web applications and SaaS platforms built on Django or FastAPI, handling user-facing product logic and complex backend workflows from one Python stack.",
    img: SEO_LANDING_IMAGES.pythonApp.industries.saas,
    imageAlt: "Python application development for SaaS and web platforms",
    imageTitle: "SaaS Python application development — Xorora",
  },
  {
    icon: Sparkles,
    name: "Data-driven tools",
    href: ROUTES.mlDataScience,
    body: "Internal tools and data-driven applications where pandas and NumPy integrate directly into the application layer rather than living in a separate system.",
    img: SEO_LANDING_IMAGES.pythonApp.industries.data,
    imageAlt: "Python application development for data-driven internal tools",
    imageTitle: "Data-driven Python applications — Xorora",
  },
  {
    icon: Bot,
    name: "AI-powered products",
    href: ROUTES.mlDataScience,
    body: "Machine learning-powered products where Python is the industry standard for training, deploying, and serving models — built alongside the application, not as a bolt-on.",
    img: SEO_LANDING_IMAGES.pythonApp.industries.ai,
    imageAlt: "Python application development for AI and ML products",
    imageTitle: "AI Python application development — Xorora",
  },
  {
    icon: Settings,
    name: "Automation",
    href: ROUTES.workflowAutomation,
    body: "Automation and system administration tools where Python's readability and scripting strength reduce long-term maintenance burden.",
    img: SEO_LANDING_IMAGES.pythonApp.industries.automation,
    imageAlt: "Python application development for automation and scripting",
    imageTitle: "Automation Python applications — Xorora",
  },
  {
    icon: Landmark,
    name: "Fintech and regulated",
    href: ROUTES.industry("fintech"),
    body: "Fintech and regulated-industry applications where Python's mature libraries for data validation, security, and compliance tooling reduce custom-build overhead.",
    img: SEO_LANDING_IMAGES.pythonApp.industries.fintech,
    imageAlt: "Python application development for fintech and regulated industries",
    imageTitle: "Fintech Python application development — Xorora",
  },
];

export function PadIndustries() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Use cases"
        title="Where Python application development actually fits"
        sub="Python isn't the right tool for every project, but it's a strong fit across a wider range of application types than most languages."
        className="mb-12 max-w-[720px]"
      />
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group hover:-translate-y-0.5 flex flex-col overflow-hidden rounded-(--r-lg) border border-border bg-white no-underline transition-all duration-200 hover:border-border-strong hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={item.img}
                  alt={item.imageAlt}
                  title={item.imageTitle}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex grow flex-col p-[clamp(22px,2.4vw,28px)]">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-(--r-md) bg-indigo-50 text-xo-indigo transition-colors group-hover:bg-xo-indigo group-hover:text-white">
                  <Icon className="h-[22px] w-[22px]" aria-hidden />
                </span>
                <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                  {item.name}
                </h3>
                <p className="mb-4 grow font-sans text-[14.5px] text-fg2 leading-relaxed">
                  {item.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="mt-10 mb-0 max-w-[720px] font-sans text-[15.5px] text-fg2 leading-relaxed">
        The common thread: Python performs best when a project needs to move data,
        logic, and increasingly AI capability through one coherent stack. That
        is the same reasoning behind our{" "}
        <Link
          href={ROUTES.customAppDevelopment}
          className="font-semibold text-accent no-underline hover:text-tangerine-600"
        >
          custom application development
        </Link>{" "}
        approach.
      </p>
    </LightSection>
  );
}
