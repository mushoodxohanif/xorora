import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

export function PpcIntro() {
  return (
    <LightSection>
      <SectionHead
        title="Amazon PPC management services that grow your sales, not just your ad spend"
        sub="Your Amazon ads shouldn't just run low. They should drive measurable results. As a seasoned Amazon PPC management agency, we know the real mistakes sellers face: platform complexity, shifting algorithms, budget inefficiencies, and targeting that misses the mark."
        className="ind-reveal mb-6 max-w-[860px]"
        titleSize="clamp(26px,3.2vw,40px)"
      />
      <p className="ind-reveal m-0 mb-5 max-w-[760px] font-sans text-[16px] text-fg2 leading-relaxed">
        Many campaigns fail to deliver returns not because of the product, but
        because of poor execution. Our Amazon advertising services are designed
        around your business goals, margin thresholds, and competitive
        landscape. Whether you&apos;re running Sponsored Products, Brands, or
        Display campaigns, our strategies maximize visibility and conversions.
      </p>
      <p className="ind-reveal m-0 max-w-[760px] font-sans text-[16px] text-fg2 leading-relaxed">
        We don&apos;t just clear vanity roadblocks — we lay the groundwork for
        long-term, scalable growth in a saturated marketplace.
      </p>
    </LightSection>
  );
}
