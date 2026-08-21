import { Check } from "lucide-react";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";

const INCLUDES = [
  "Seller Central and Vendor Central support",
  "Case management and escalations",
  "Listing suppressions and reinstatements",
  "Inventory performance management",
  "Catalog and listing maintenance",
  "Account health and compliance",
] as const;

export function AmHeroVisual() {
  return (
    <div className="hero-reveal hero-reveal-2 relative mx-auto w-full max-w-[520px]">
      <div className="vc-hero-glow absolute inset-0 rounded-[28px] bg-[#FF9900]/20 blur-3xl" />
      <div className="vc-hero-panel relative overflow-hidden rounded-(--r-xl) border border-white/14 bg-[#0B1224]/80 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-between border-white/10 border-b px-5 py-3.5">
          <div className="flex items-center gap-3">
            <AmazonLogo className="h-7" />
            <span className="rounded-pill bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white/80 uppercase tracking-[0.16em]">
              Xorora
            </span>
          </div>
          <span className="vc-live-dot flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-300"
              aria-hidden
            />
            Live
          </span>
        </div>

        <div className="px-5 pt-4 pb-2">
          <p className="mb-1 font-mono text-[10px] text-white/50 uppercase tracking-widest">
            Amazon channel management
          </p>
          <h3 className="m-0 font-sans font-semibold text-[16px] text-white">
            Dedicated operations arm
          </h3>
        </div>

        <ul className="m-0 flex list-none flex-col gap-2.5 px-5 py-4">
          {INCLUDES.map((item, i) => (
            <li
              key={item}
              className="vc-metric-card flex items-start gap-2.5 rounded-(--r-md) border border-white/10 bg-white/5 px-3 py-2.5"
              style={{ animationDelay: `${0.28 + i * 0.07}s` }}
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                <Check className="h-3 w-3" aria-hidden />
              </span>
              <span className="font-sans text-[13px] text-white/88 leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 border-white/10 border-t px-5 py-3.5">
          <div className="flex items-center gap-2">
            <AmazonLogo decorative className="h-4" />
            <span className="font-sans font-semibold text-[12px] text-white/80 tracking-wide">
              Seller + Vendor
            </span>
          </div>
          <span className="font-mono text-[11px] text-white/45">
            Listings · Ads · Compliance
          </span>
        </div>
      </div>
    </div>
  );
}
