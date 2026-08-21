import Image from "next/image";
import { AmazonLogo } from "@/components/amazon-a-to-z/vendor-central/amazon-logo";
import { cn } from "@/lib/utils";

interface AmazonListingFrameProps {
  src: string;
  alt: string;
  title?: string;
  marketplace?: string;
  onDark?: boolean;
  tilt?: boolean;
  /** Hero uses a shorter stage so copy isn’t squeezed. */
  size?: "default" | "hero";
  className?: string;
}

/**
 * Amazon product-page chrome — not a laptop browser frame.
 * White listing stage + Amazon nav strip with logo.
 */
export function AmazonListingFrame({
  src,
  alt,
  title,
  marketplace = "amazon.com.au",
  onDark = false,
  tilt = false,
  size = "default",
  className,
}: AmazonListingFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[14px] border shadow-[0_28px_60px_-28px_rgba(2,6,15,.45)]",
        onDark ? "border-white/12" : "border-[#D5D9D9]",
        tilt && "transform-[perspective(1800px)_rotateY(-6deg)_rotateX(2deg)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-[#131921] px-3.5 py-2.5">
        <AmazonLogo variant="orange" className="h-[20px] w-auto" decorative />
        <div className="hidden min-w-0 flex-1 sm:block">
          <div className="flex h-7 items-center overflow-hidden rounded-sm bg-white">
            <span className="truncate px-3 font-sans text-[11.5px] text-[#565959]">
              {title ?? "Card Tracker"}
            </span>
          </div>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-white/55 tracking-[0.04em]">
          {marketplace}
        </span>
      </div>

      <div className="border-[#D5D9D9] border-b bg-[#232F3E] px-3.5 py-1">
        <p className="m-0 font-sans text-[10.5px] text-white/70">
          Deliver to Australia · Amazon AU Listing
        </p>
      </div>

      <div
        className={cn(
          "relative flex w-full items-center justify-center bg-white",
          onDark && "bg-[#FAFAFA]",
          size === "hero" ? "aspect-[4/3]" : "aspect-square",
        )}
      >
        <Image
          src={src}
          alt={alt}
          title={title}
          fill
          sizes={
            size === "hero"
              ? "(max-width: 960px) 90vw, 400px"
              : "(max-width: 960px) 100vw, 640px"
          }
          quality={92}
          className={cn(
            "object-contain object-center",
            size === "hero" ? "p-3 sm:p-4" : "p-4 sm:p-6",
          )}
          priority={size === "hero"}
        />
      </div>
    </div>
  );
}
