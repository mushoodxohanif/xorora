import {
  ArrowUpRight,
  Eye,
  GraduationCap,
  Handshake,
  Layers,
  Rocket,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SignalRule } from "@/components/geometry/signal-rule";
import { XWatermark } from "@/components/geometry/x-watermark";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

const REASONS: {
  n: string;
  title: string;
  body: string;
  icon: LucideIcon;
  featured?: boolean;
}[] = [
  {
    n: "01",
    title: "We build for production, not just demos",
    body: "Many vendors ship a proof of concept and disappear. Every agent we deliver is tested, integrated, and production-ready before handoff.",
    icon: Rocket,
  },
  {
    n: "02",
    title: "End-to-end AI agent development",
    body: "We handle the full lifecycle in-house: strategy, data integration, deployment, and maintenance. One team, no handoff gaps, no finger-pointing.",
    icon: Layers,
  },
  {
    n: "03",
    title: "60 days of free tech support after launch",
    body: "After go-live, our team stays available for 60 days to fix issues and make sure your team is confident using the system.",
    icon: Handshake,
    featured: true,
  },
  {
    n: "04",
    title: "Coaching and knowledge transfer",
    body: "We don't hand over a black box. We run coaching sessions so your team understands how the system works and can flag issues early.",
    icon: GraduationCap,
  },
  {
    n: "05",
    title: "Transparent communication throughout",
    body: "You get full visibility into every stage, from the first data audit to final deployment. No surprises, no scope creep without your approval.",
    icon: Eye,
  },
  {
    n: "06",
    title: "Built around your business goals",
    body: "We start by defining what success looks like for your business, not just what's technically achievable, and tie every decision back to your goals.",
    icon: Target,
  },
];

export function AadWhy() {
  const featured = REASONS.find((r) => r.featured)!;
  const others = REASONS.filter((r) => !r.featured);

  return (
    <section className="relative overflow-hidden bg-navy-900 px-8 py-[clamp(72px,9vw,118px)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_0%_0%,rgba(70,76,159,0.45)_0%,transparent_55%),radial-gradient(70%_60%_at_100%_100%,rgba(242,107,33,0.12)_0%,transparent_50%)]"
        aria-hidden
      />
      <XWatermark
        size={480}
        color="rgba(120,150,240,0.06)"
        className="-right-16 bottom-[-180px]"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-12 grid gap-10 lg:mb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-3">
              <SignalRule color="var(--tangerine-400)" />
              <span className="font-mono text-xs text-tangerine-400 uppercase tracking-[0.2em]">
                Why Xorora
              </span>
            </div>
            <h2 className="m-0 text-balance font-bold font-sans text-[clamp(32px,4.4vw,52px)] text-white leading-[1.05] tracking-[-0.02em]">
              Six reasons teams ship agents with us
            </h2>
          </div>
          <p className="m-0 max-w-[480px] font-sans text-[17px] text-white/66 leading-[1.65] lg:justify-self-end lg:pb-1">
            Not another demo factory. We stay through production, support, and
            the handoff that leaves your team running the system.
          </p>
        </div>

        {/* Featured reason — brand accent band */}
        <div className="relative mb-5 overflow-hidden rounded-(--r-xl) border border-tangerine-400/25 bg-linear-to-br from-tangerine-500/18 via-white/6 to-transparent p-[clamp(24px,3.2vw,36px)]">
          <div
            className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-tangerine-400/20 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="font-mono font-bold text-[13px] text-tangerine-400 tracking-[0.12em]">
                  {featured.n}
                </span>
                <span className="rounded-full border border-tangerine-400/35 bg-tangerine-500/15 px-3 py-1 font-mono text-[11px] text-tangerine-300 uppercase tracking-[0.14em]">
                  Included after launch
                </span>
              </div>
              <h3 className="mb-3 font-bold font-sans text-[clamp(22px,2.6vw,28px)] text-white leading-snug tracking-[-0.02em]">
                {featured.title}
              </h3>
              <p className="m-0 max-w-[560px] font-sans text-[15.5px] text-white/70 leading-relaxed">
                {featured.body}
              </p>
            </div>
            <LetsTalkContactLink
              className={cn(
                buttonClassName({ variant: "light", size: "lg" }),
                "shrink-0 self-start",
              )}
            >
              Book a scoping call
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </LetsTalkContactLink>
          </div>
        </div>

        {/* Remaining reasons — editorial rows, not OutcomeGrid cards */}
        <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
          {others.map((reason) => {
            const Icon = reason.icon;
            return (
              <li
                key={reason.n}
                className="group relative overflow-hidden rounded-(--r-lg) border border-white/10 bg-white/4 px-5 py-5 transition-colors duration-300 hover:border-indigo-300/35 hover:bg-white/6 sm:px-6 sm:py-6"
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-linear-to-b from-tangerine-400 to-xo-indigo transition-transform duration-300 group-hover:scale-y-100"
                  aria-hidden
                />
                <div className="mb-3.5 flex items-center justify-between gap-3">
                  <span className="font-mono font-bold text-[12px] text-indigo-300/80 tracking-[0.1em] transition-colors group-hover:text-tangerine-400">
                    {reason.n}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-(--r-md) border border-white/10 bg-indigo-900/40 text-indigo-200 transition-colors group-hover:border-tangerine-400/30 group-hover:text-tangerine-300">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                </div>
                <h3 className="mb-2 font-sans font-semibold text-[17px] text-white leading-snug tracking-[-0.01em]">
                  {reason.title}
                </h3>
                <p className="m-0 font-sans text-[14px] text-white/58 leading-relaxed">
                  {reason.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
