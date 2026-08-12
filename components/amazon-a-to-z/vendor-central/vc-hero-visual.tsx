import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";

const METRICS = [
  { label: "Shipped COGS", value: "First-party", sub: "Revenue engine" },
  { label: "ROAS", value: "Full-funnel", sub: "DSP + Sponsored" },
  { label: "Organic rank", value: "Catalog", sub: "A+ Content" },
  { label: "New-to-brand", value: "Growth", sub: "DSP reach" },
] as const;

export function VcHeroVisual() {
  return (
    <div className="hero-reveal hero-reveal-2 relative mx-auto w-full max-w-[520px]">
      <div className="vc-hero-glow absolute inset-0 rounded-[28px] bg-[#FF9900]/20 blur-3xl" />
      <div className="vc-hero-panel relative overflow-hidden rounded-(--r-xl) border border-white/14 bg-[#0B1224]/80 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md">
        <div className="flex items-center justify-between border-white/10 border-b px-5 py-3.5">
          <div className="flex items-center gap-3">
            <AmazonLogo className="h-7" />
            <span className="rounded-pill bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white/80 uppercase tracking-[0.16em]">
              Vendor Central
            </span>
          </div>
          <span className="vc-live-dot flex items-center gap-1.5 font-mono text-[11px] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden />
            Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-5">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className="vc-metric-card rounded-(--r-md) border border-white/10 bg-white/5 px-3.5 py-3"
              style={{ animationDelay: `${0.35 + i * 0.1}s` }}
            >
              <div className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
                {metric.label}
              </div>
              <div className="mt-1.5 font-sans font-semibold text-[15px] text-white">
                {metric.value}
              </div>
              <div className="mt-0.5 font-sans text-[12px] text-white/55">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-white/10 border-t px-5 py-3.5">
          <div className="flex items-center gap-2">
            <AmazonLogo decorative className="h-4" />
            <span className="font-sans font-semibold text-[12px] text-white/80 tracking-wide">
              DSP
            </span>
          </div>
          <span className="font-mono text-[11px] text-white/45">
            Sponsored Brands · Premium placements
          </span>
        </div>
      </div>
    </div>
  );
}
