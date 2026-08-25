import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  onDark?: boolean;
  arrow?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function StatBlock({
  value,
  label,
  onDark = true,
  arrow = true,
  align = "left",
  className,
}: StatBlockProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      <div
        className={cn(
          "mb-[18px] h-px",
          onDark ? "bg-white/16" : "bg-border-strong",
          centered && "mx-auto w-full max-w-[180px]",
        )}
      />
      <div
        className={cn(
          "flex items-start gap-2",
          centered ? "justify-center" : "justify-between",
        )}
      >
        <span
          className={cn(
            "font-extrabold font-sans text-[clamp(40px,4.6vw,58px)] leading-[0.95] tracking-[-0.03em]",
            onDark ? "text-white" : "text-fg1",
          )}
        >
          {value}
        </span>
        {arrow && !centered && (
          <ArrowUpRight
            className="mt-1 h-[26px] w-[26px] shrink-0 text-tangerine-500"
            aria-hidden
          />
        )}
      </div>
      <div
        className={cn(
          "mt-4 font-sans text-[14.5px] leading-[1.45]",
          onDark ? "text-white/60" : "text-fg2",
          centered ? "mx-auto max-w-[220px]" : "max-w-[230px]",
        )}
      >
        {label}
      </div>
    </div>
  );
}
