import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { LetsTalkContactLink } from "@/components/modals";
import { buttonClassName } from "@/lib/button-styles";

export function IiBenefits() {
  return (
    <LightSection bg="var(--slate-50)">
      <div className="grid grid-cols-1 items-center gap-[clamp(40px,5vw,72px)] lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-balance font-extrabold font-sans text-[clamp(26px,3.2vw,40px)] text-fg1 leading-tight tracking-tight">
            What are the benefits of IT infrastructure consultancy?
          </h2>
          <p className="mb-8 m-0 font-sans text-[16px] text-fg2 leading-relaxed">
            Over time, your IT setup needs further optimization. The right
            solution raises efficiency, reduces costs, and improves customer
            satisfaction, while keeping you protected from threats like malware
            and unauthorized access. We audit your current setup and advise on
            how to improve it, or overhaul it entirely if it isn&apos;t meeting
            the needs of the business.
          </p>
          <LetsTalkContactLink
            className={buttonClassName({ variant: "primary", size: "lg" })}
          >
            Speak to us
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </LetsTalkContactLink>
        </div>
        <div className="relative aspect-[4/5] h-full min-h-0 overflow-hidden rounded-(--r-lg) lg:aspect-auto lg:min-h-[360px]">
          <Image
            src="/assets/infrastructure/consultancy-datacenter.webp"
            alt="Engineer working on infrastructure in a data center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
            className="object-cover object-[center_20%]"
          />
        </div>
      </div>
    </LightSection>
  );
}
