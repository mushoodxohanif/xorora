import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { V2GlassCTA } from "@/components/home/v2-glass-cta";
import { V2Rise } from "@/components/home/v2-shared";
import { LetsTalkContactLink } from "@/components/modals";
import { ROUTES } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const DESTINATIONS = [
  { href: ROUTES.engineering, label: "Engineering" },
  { href: ROUTES.ai, label: "AI" },
  { href: ROUTES.consulting, label: "Consulting" },
  { href: ROUTES.marketingServices, label: "Marketing" },
  { href: ROUTES.ourWork, label: "Our work" },
] as const;

export function NotFoundView() {
  return (
    <section className="relative mt-[-72px] flex min-h-dvh flex-col overflow-hidden bg-[#020209] pt-[72px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_55%_at_70%_20%,rgba(70,76,159,0.38),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_80%,rgba(242,107,33,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-[#020209]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-5 py-[clamp(40px,7vw,88px)] sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <V2Rise>
              <span className="lg mb-7 inline-flex items-center gap-2.5 rounded-pill py-1.5 pr-4 pl-1.5">
                <span className="rounded-pill bg-white px-[11px] py-1 font-bold font-sans text-[11.5px] text-xo-ink">
                  404
                </span>
                <span className="font-sans text-[13px] text-white/78">
                  No route at this URL
                </span>
              </span>
            </V2Rise>

            <V2Rise
              as="h1"
              delay={80}
              className="mb-6 font-extrabold font-sans text-[clamp(40px,7.4vw,92px)] uppercase leading-[0.9] tracking-tight"
            >
              <span className="block text-white">Lost the</span>
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.72)" }}
              >
                Signal
              </span>
              <span className="text-tangerine-400">.</span>
            </V2Rise>

            <V2Rise
              as="p"
              delay={160}
              className="mx-auto mb-9 max-w-[440px] font-light font-sans text-[clamp(16px,1.9vw,19px)] text-white/72 leading-relaxed lg:mx-0"
            >
              That path doesn&apos;t exist. Jump home, or pick a live surface
              below.
            </V2Rise>

            <V2Rise
              delay={240}
              className="mb-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Link
                href={ROUTES.home}
                className="hover:-translate-y-px inline-flex items-center gap-2.5 rounded-pill bg-white px-[26px] py-3.5 font-sans font-semibold text-[15.5px] text-xo-ink no-underline transition-transform duration-150"
              >
                Back home
              </Link>
              <V2GlassCTA>Talk to us</V2GlassCTA>
            </V2Rise>

            <V2Rise delay={320}>
              <nav
                aria-label="Popular destinations"
                className="flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              >
                {DESTINATIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="lg group inline-flex items-center gap-1.5 rounded-pill px-3.5 py-2 font-sans text-[13.5px] text-white/78 no-underline transition-colors hover:text-white"
                  >
                    {item.label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </V2Rise>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <LostRouteVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function LostRouteVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[min(92vw,520px)]">
      <div className="nf-orbit pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-white/12" />
      <div className="nf-orbit-rev pointer-events-none absolute inset-[16%] rounded-full border border-white/8" />
      <span className="nf-pulse pointer-events-none absolute top-[18%] right-[22%] h-2.5 w-2.5 rounded-full bg-tangerine-400 shadow-[0_0_18px_rgba(255,138,61,0.9)]" />
      <span className="nf-pulse pointer-events-none absolute bottom-[24%] left-[18%] h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(147,152,207,0.8)] [animation-delay:1.2s]" />

      <div
        className={cn(
          "lg-strong absolute inset-[12%] flex flex-col items-center justify-center rounded-[32px] sm:rounded-[40px]",
        )}
      >
        <p className="mb-2 font-mono text-[11px] text-white/45 uppercase tracking-[0.28em]">
          HTTP
        </p>
        <div className="flex items-end justify-center font-extrabold font-sans leading-none tracking-[-0.08em]">
          <span className="text-[clamp(84px,22vw,168px)] text-white">4</span>
          <span
            className="text-[clamp(84px,22vw,168px)] text-transparent"
            style={{ WebkitTextStroke: "2.5px rgba(255,138,61,0.95)" }}
          >
            0
          </span>
          <span className="text-[clamp(84px,22vw,168px)] text-white">4</span>
        </div>
        <LetsTalkContactLink className="mt-5 inline-flex items-center gap-1.5 font-sans text-[13px] text-white/55 no-underline transition-colors hover:text-tangerine-400">
          Report a broken link
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
        </LetsTalkContactLink>
      </div>
    </div>
  );
}
