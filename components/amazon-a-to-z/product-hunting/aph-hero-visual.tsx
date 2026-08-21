import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";

const ORBIT = [
  { name: "Research", top: "0%", left: "50%", translate: "-translate-x-1/2" },
  {
    name: "Suppliers",
    top: "50%",
    left: "100%",
    translate: "-translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Samples",
    top: "100%",
    left: "50%",
    translate: "-translate-x-1/2 -translate-y-full",
  },
  {
    name: "Launch",
    top: "50%",
    left: "0%",
    translate: "-translate-x-1/2 -translate-y-1/2",
  },
] as const;

export function AphHeroVisual() {
  return (
    <div className="hero-reveal hero-reveal-2 relative mx-auto aspect-square w-full max-w-[440px]">
      <div className="vc-hero-glow absolute inset-[12%] rounded-full bg-[#FF9900]/18 blur-3xl" />
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        <circle
          cx="200"
          cy="200"
          r="95"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        <path
          d="M 200 50 Q 320 200 200 350"
          fill="none"
          stroke="rgba(255,140,66,0.45)"
          strokeWidth="1.5"
        />
        <path
          d="M 200 50 Q 80 200 200 350"
          fill="none"
          stroke="rgba(120,160,255,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M 50 200 Q 200 80 350 200"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-10 flex h-[132px] w-[132px] flex-col items-center justify-center rounded-full border-2 border-tangerine-400 bg-[#0B1224] shadow-[0_12px_40px_-12px_rgba(8,12,40,0.55)]">
        <AmazonLogo className="mb-1 h-5" />
        <span className="font-mono text-[10px] text-tangerine-400 uppercase tracking-[0.14em]">
          Core
        </span>
        <span className="mt-0.5 text-center font-bold font-sans text-[15px] text-white leading-tight">
          Private label
        </span>
      </div>

      {ORBIT.map((node) => (
        <div
          key={node.name}
          className={`absolute z-10 flex h-[78px] w-[78px] flex-col items-center justify-center rounded-full border border-white/18 bg-white/10 text-center shadow-sm backdrop-blur-sm ${node.translate}`}
          style={{ top: node.top, left: node.left }}
        >
          <span className="px-1 font-sans font-semibold text-[11.5px] text-white leading-tight">
            {node.name}
          </span>
        </div>
      ))}
    </div>
  );
}
