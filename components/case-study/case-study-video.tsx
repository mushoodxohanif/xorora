import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { cn } from "@/lib/utils";

interface CaseStudyVideoProps {
  src: string;
  poster?: string;
  title?: string;
  onDark?: boolean;
  className?: string;
  amazon?: boolean;
}

/**
 * Full-width cinematic product video — Amazon-branded, no laptop chrome.
 */
export function CaseStudyVideo({
  src,
  poster,
  title = "Product video",
  onDark = true,
  className,
  amazon = true,
}: CaseStudyVideoProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[980px]", className)}>
      <div
        className={cn(
          "pointer-events-none absolute -inset-6 rounded-[32px] opacity-80 blur-2xl",
          onDark
            ? "bg-[radial-gradient(circle_at_50%_30%,rgba(255,153,0,0.22),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_50%_30%,rgba(255,153,0,0.14),transparent_60%)]",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative overflow-hidden rounded-[18px] border shadow-[0_32px_80px_-36px_rgba(2,6,15,.55)]",
          amazon
            ? "border-[#D5D9D9] bg-[#0F1111]"
            : onDark
              ? "border-white/10 bg-[#0C1430]"
              : "border-border bg-black",
        )}
      >
        {amazon && (
          <div className="flex items-center justify-between gap-3 bg-[#131921] px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <AmazonLogo
                variant="orange"
                className="h-[20px] w-auto"
                decorative
              />
              <span className="font-sans text-[12px] text-white/70">
                {title}
              </span>
            </div>
            <span className="rounded-sm bg-[#FF9900]/15 px-2 py-0.5 font-mono text-[10px] text-[#FF9900] tracking-[0.06em]">
              15s
            </span>
          </div>
        )}

        <video
          className="block aspect-video h-auto w-full bg-black object-contain"
          controls
          playsInline
          muted
          preload="metadata"
          poster={poster}
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
