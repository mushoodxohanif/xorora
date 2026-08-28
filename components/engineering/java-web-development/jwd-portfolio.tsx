import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { ROUTES } from "@/lib/navigation";

const PATTERNS = [
  {
    href: ROUTES.applicationModernization,
    tag: "Migration",
    title: "Java 8 to current LTS, still shippable",
    body: "javax to jakarta namespace breaks block most Spring Boot 3 upgrades. We audit third-party dependencies first and sequence the move so production keeps shipping.",
  },
  {
    href: ROUTES.customAppDevelopment,
    tag: "Enterprise APIs",
    title: "Integrations with typed contracts",
    body: "Core banking, payment rails, and ERPs with behaviour documented only in the code. Integration tests against real containers, not mocks that agree with you.",
  },
  {
    href: ROUTES.mlDataScience,
    tag: "Event-driven",
    title: "Kafka pipelines at scale",
    body: "Consumer semantics designed rather than assumed. Stream processing and services that scale independently on a Java-native messaging stack.",
  },
] as const;

export function JwdPortfolio() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="How we ship"
        title="Our Java development portfolio"
        sub="Enterprise Java buyers respond to migration proof more than to greenfield builds, because migration is the thing they're afraid of. The pattern we use: audit dependencies first, keep the system shippable throughout, and leave the upgrade path open."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,40px)]">
          <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
            Version migrations
          </p>
          <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,28px)] text-fg1 leading-snug">
            Sequence the jakarta move. Do not freeze production.
          </h3>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            The obvious approach — stop features, upgrade everything, cut over in
            one weekend — is how Java migrations become rewrites nobody planned
            for.
          </p>
          <p className="mb-4 font-sans text-[15.5px] text-fg2 leading-relaxed">
            We audit the dependency tree first, because a library that never made
            the javax to jakarta switch blocks the whole Spring Boot 3 upgrade.
            That audit tells you whether this is a three-week job or a
            three-month one.
          </p>
          <p className="m-0 font-sans text-[15.5px] text-fg2 leading-relaxed">
            Domain logic stays separable from the framework shell, so next
            year&apos;s LTS upgrade is a planned effort rather than a
            quarter-long freeze.
          </p>
        </article>
        <article className="flex flex-col justify-between rounded-(--r-xl) border border-border bg-white p-[clamp(24px,3vw,36px)]">
          <div>
            <p className="mb-3 font-mono text-[12px] text-tangerine-600 uppercase tracking-[0.14em]">
              Performance work
            </p>
            <h3 className="mb-4 font-sans font-semibold text-[clamp(22px,2.4vw,26px)] text-fg1 leading-snug">
              Tell the database from the GC first.
            </h3>
            <p className="m-0 font-sans text-[15px] text-fg2 leading-relaxed">
              Slow Java is usually the database or the garbage collector. We
              profile under production-shaped load, fix query problems and memory
              problems separately, and leave you with metrics to catch the next
              regression before your users do.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.ourWork}
              className={buttonClassName({ variant: "primary", size: "lg" })}
            >
              See our work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <LetsTalkContactLink
              className={buttonClassName({ variant: "secondary", size: "lg" })}
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </article>
      </div>
      <div className="svc-grid3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATTERNS.map((item) => (
          <Link
            key={item.href + item.title}
            href={item.href}
            className="group hover:-translate-y-1 overflow-hidden rounded-(--r-xl) border border-border bg-white no-underline shadow-sm transition-all duration-300 hover:border-border-strong hover:shadow-md"
          >
            <div className="p-[clamp(22px,2.4vw,28px)]">
              <p className="mb-2 font-mono text-[11px] text-tangerine-600 uppercase tracking-[0.12em]">
                {item.tag}
              </p>
              <h3 className="mb-2 font-sans font-semibold text-[18px] text-fg1 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 mb-4 font-sans text-[14px] text-fg2 leading-relaxed">
                {item.body}
              </p>
              <span className="inline-flex items-center gap-1.5 font-sans font-semibold text-[13.5px] text-accent">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </LightSection>
  );
}
