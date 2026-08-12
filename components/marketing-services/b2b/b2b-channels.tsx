import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    stage: "Awareness",
    n: "01",
    channels: [
      "Digital Out of Home",
      "Programmatic Audio",
      "Connected TV",
      "Online Video",
    ],
    width: "100%",
    tone: "navy" as const,
  },
  {
    stage: "Consideration",
    n: "02",
    channels: [
      "Programmatic Takeovers",
      "Adhesive Ads",
      "In-Email Display",
      "In-Banner Video",
    ],
    width: "86%",
    tone: "deep" as const,
  },
  {
    stage: "Conversion",
    n: "03",
    channels: [
      "Native Display",
      "Social Mirroring",
      "Performance Display",
      "Programmatic Direct Mail",
    ],
    width: "70%",
    tone: "indigo" as const,
  },
] as const;

function FunnelConnector() {
  return (
    <div className="relative z-10 flex flex-col items-center py-0.5" aria-hidden>
      <div className="h-3 w-px bg-linear-to-b from-indigo-400 to-tangerine-400" />
      <svg width="40" height="22" viewBox="0 0 40 22" fill="none">
        <path
          d="M4 2 L20 18 L36 2"
          stroke="#FF8C42"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="h-2 w-px bg-tangerine-400/60" />
    </div>
  );
}

function FunnelBand({
  topInset,
  bottomInset,
  className,
}: {
  topInset: number;
  bottomInset: number;
  className?: string;
}) {
  const t = `${topInset}%`;
  const b = `${bottomInset}%`;
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        clipPath: `polygon(${t} 0%, ${100 - topInset}% 0%, ${100 - bottomInset}% 100%, ${b} 100%)`,
      }}
      aria-hidden
    />
  );
}

export function B2bChannels() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Channels"
        title="Convert across the consumer journey"
        sub="For every stage of the digital sales funnel, we reach your audience at every point in their online experience."
        className="mb-12 max-w-[720px]"
      />

      <div className="mx-auto flex max-w-[900px] flex-col items-center">
        {STAGES.map((group, gi) => {
          const topInset = gi === 0 ? 0 : gi === 1 ? 3 : 6;
          const bottomInset = gi === 0 ? 4 : gi === 1 ? 7 : 10;

          return (
            <div
              key={group.stage}
              className="flex w-full flex-col items-center"
            >
              <div
                className="relative mx-auto"
                style={{ width: group.width }}
              >
                <div
                  className={cn(
                    "relative overflow-hidden px-[clamp(18px,3.5vw,36px)] py-[clamp(26px,3.2vw,36px)]",
                    group.tone === "navy" && "bg-navy-900",
                    group.tone === "deep" && "bg-[#15225C]",
                    group.tone === "indigo" && "bg-indigo-800",
                  )}
                  style={{
                    clipPath: `polygon(${topInset}% 0%, ${100 - topInset}% 0%, ${100 - bottomInset}% 100%, ${bottomInset}% 100%)`,
                  }}
                >
                  <FunnelBand
                    topInset={0}
                    bottomInset={0}
                    className="bg-[radial-gradient(80%_120%_at_50%_0%,rgba(120,160,255,0.22),transparent_70%)]"
                  />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-tangerine-400/50 font-mono text-[11px] text-tangerine-400">
                        {group.n}
                      </span>
                      <h3 className="m-0 font-sans font-semibold text-[clamp(18px,2vw,22px)] text-white">
                        {group.stage}
                      </h3>
                    </div>
                    <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-2 p-0 sm:gap-2.5">
                      {group.channels.map((channel) => (
                        <li
                          key={channel}
                          className="rounded-(--r-md) border border-white/16 bg-white/10 px-3 py-1.5 font-sans font-medium text-[12.5px] text-white/92 sm:px-3.5 sm:py-2 sm:text-[13px]"
                        >
                          {channel}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {gi < STAGES.length - 1 && <FunnelConnector />}
            </div>
          );
        })}

        <FunnelConnector />
        <div
          className="flex w-[48%] max-w-[260px] min-w-[140px] items-center justify-center border border-tangerine-400/35 bg-tangerine-500/12 py-3.5"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 78% 100%, 22% 100%)",
          }}
        >
          <span className="font-sans font-semibold text-[13px] text-tangerine-600 tracking-[0.08em]">
            Revenue
          </span>
        </div>
      </div>
    </LightSection>
  );
}
