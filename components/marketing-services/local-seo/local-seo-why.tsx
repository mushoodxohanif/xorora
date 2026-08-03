import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

export function LocalSeoWhy() {
  return (
    <LightSection bg="var(--surface)">
      <div className="grid grid-cols-1 items-center gap-[clamp(36px,5vw,64px)] lg:grid-cols-2">
        <div>
          <SectionHead
            label="Why it matters"
            title="Increase leads from local customers with local SEO"
            sub="When someone nearby searches for what you do, local SEO puts you in the map pack and the local results, exactly where high-intent buyers are looking."
            className="mb-0 max-w-[540px]"
          />
        </div>
        <div className="relative overflow-hidden rounded-(--r-lg) border border-border bg-slate-50 shadow-[0_24px_60px_-36px_rgba(8,12,30,0.35)]">
          <Image
            src="/assets/local-seo/map-pack.png"
            alt="Google local search map pack showing business listings with map pins"
            width={1024}
            height={491}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full"
            priority={false}
          />
        </div>
      </div>
    </LightSection>
  );
}
