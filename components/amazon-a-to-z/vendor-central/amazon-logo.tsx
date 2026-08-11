import Image from "next/image";
import { cn } from "@/lib/utils";

interface AmazonLogoProps {
  variant?: "orange" | "navy";
  className?: string;
  decorative?: boolean;
}

export function AmazonLogo({
  variant = "orange",
  className,
  decorative = false,
}: AmazonLogoProps) {
  const src =
    variant === "navy" ? "/amazon/amazon-navy.svg" : "/amazon/amazon.svg";

  return (
    <Image
      src={src}
      alt={decorative ? "" : "Amazon"}
      width={96}
      height={30}
      unoptimized
      className={cn("h-7 w-auto", className)}
    />
  );
}
