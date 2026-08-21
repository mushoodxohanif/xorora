import { ArrowDown, Check } from "lucide-react";
import { AmHeroVisual } from "@/components/amazon-a-to-z/account-management/am-hero-visual";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { SignalField } from "@/components/geometry/signal-field";
import { Eyebrow } from "@/components/ui/eyebrow";
import { buttonClassName } from "@/lib/button-styles";

const INCLUDES = [
  "Seller Central and Vendor Central support",
  "Case management and escalations",
  "Listing suppressions and reinstatements",
  "Inventory performance management",
  "Catalog and listing maintenance",
  "Account health and compliance",
] as const;

export function AmHero() {
  return (
    <section className="relative mt-[-72px] overflow-hidden bg-linear-to-br from-navy-700 via-38% via-[#15225C] to-[#2C57C9] pt-[72px]">
      <SignalField className="opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_88%_30%,rgba(120,160,255,0.5)_0%,rgba(60,100,220,0.18)_34%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-indigo-300/50 to-transparent" />
      <div className="svc-header-grid relative z-10 mx-auto grid max-w-[1240px] grid-cols-[1.08fr_0.92fr] items-center gap-[clamp(40px,5vw,72px)] px-8 py-[clamp(96px,11vw,140px)] pb-[clamp(64px,7vw,96px)]">
        <div>
          <Eyebrow onDark className="hero-reveal mb-5">
            Amazon A to Z Services
          </Eyebrow>
          <h1 className="hero-reveal hero-reveal-1 mb-5 text-balance font-extrabold font-sans text-[clamp(34px,4.6vw,56px)] text-white leading-[1.02] tracking-[-0.03em]">
            Amazon account management that powers your{" "}
            <span className="text-tangerine-400">best sales yet</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mb-6 max-w-[540px] font-sans text-[16.5px] text-white/74 leading-relaxed">
            Xorora acts as your Amazon operations arm, handling the essential
            channel tasks that keep your account running smoothly.
          </p>
          <ul className="hero-reveal hero-reveal-2 m-0 mb-8 flex max-w-[540px] list-none flex-col gap-2 p-0">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-tangerine-400"
                  aria-hidden
                />
                <span className="font-sans text-[14.5px] text-white/82 leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="hero-reveal hero-reveal-2 mb-7">
            <a
              href="#free-audit"
              className={buttonClassName({ variant: "light", size: "lg" })}
            >
              Get free audit
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <div className="hero-reveal hero-reveal-2 flex items-center gap-2.5">
            <AmazonLogo className="h-6" />
            <span className="font-sans text-[13.5px] text-white/55">
              Seller Central · Vendor Central · Account health
            </span>
          </div>
        </div>
        <AmHeroVisual />
      </div>
    </section>
  );
}
