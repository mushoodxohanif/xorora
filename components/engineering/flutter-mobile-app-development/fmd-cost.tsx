import {
  Bluetooth,
  CloudOff,
  LayoutTemplate,
  Server,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

const FACTORS = [
  {
    icon: CloudOff,
    title: "Offline requirements",
    body: "An app that needs a connection and one that works without it are different projects. Sync and conflict resolution is real engineering, not a library you install.",
  },
  {
    icon: Bluetooth,
    title: "Native integration depth",
    body: "Standard plugins are cheap. Bluetooth hardware, background location, health data, and anything needing custom platform channels on both systems is not.",
  },
  {
    icon: Server,
    title: "Whether a backend exists",
    body: "If the API is already built and documented, the app is the project. If not, that's the larger half of the work and it needs scoping alongside.",
  },
  {
    icon: LayoutTemplate,
    title: "Design scope",
    body: "A design system applied consistently costs less than screens designed individually, and it costs far less over the app's second year.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and store review risk",
    body: "Fintech and healthcare apps carry review requirements that add real time. Better planned than discovered at submission.",
  },
] as const;

const photoSeo = imageAltTitle({
  primary: "Flutter app development cost factors",
  secondary: "Infrastructure that production mobile systems run on",
  context: "production infrastructure",
});

export function FmdCost() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Scoping"
        title="Flutter app development cost factors"
        sub="We scope from the constraint, not from a price list. Five things move the number on a Flutter build. Discovery produces a fixed estimate. You see the number before you commit to the build."
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
    </LightSection>
  );
}
