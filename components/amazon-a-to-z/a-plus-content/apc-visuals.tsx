import { Check } from "lucide-react";
import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const INCLUSIONS = [
  "EBC-ready images, ensuring precise dimensions and pixel quality.",
  "Enhancing the appeal of product images — including white-background primary images that match bestseller listing standards — using Photoshop and advanced editing.",
  "Complete image creation to transform simple product shots into professional stock photos.",
  "Easy-to-digest infographics that combine aesthetics and comprehensibility.",
  "Eye-catching hero images that entice shoppers to pause, explore, and engage with your A+ content.",
] as const;

const EXAMPLES = [
  {
    label: "Card",
    caption: "",
    images: [
      {
        src: "/assets/case-studies/amazon-au-product-launch/aplus-01-never-lose.webp",
        alt: "Card Tracker A+ module — Never lose what matters",
      },
      {
        src: "/assets/case-studies/amazon-au-product-launch/aplus-03-always-know.webp",
        alt: "Card Tracker A+ module — Always know, never guess",
      },
      {
        src: "/assets/case-studies/amazon-au-product-launch/aplus-05-total-control.webp",
        alt: "Card Tracker A+ module — Designed for total control",
      },
    ],
  },
  {
    label: "Laundry Bag",
    caption: "",
    images: [
      {
        src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-01-size-every-wash.webp",
        alt: "Laundry Bag A+ module — A size for every wash",
      },
      {
        src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-02-module-1.webp",
        alt: "Laundry Bag A+ desktop module",
      },
      {
        src: "/assets/case-studies/amazon-au-laundry-bag-launch/aplus-03-module-2.webp",
        alt: "Laundry Bag A+ feature module",
      },
    ],
  },
] as const;

export function ApcVisuals() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        title="Visuals that speak volumes"
        sub="Our designers excel in image optimization and enhancement, guaranteeing your product images rise above a sea of competitors."
        className="ind-reveal mb-10 max-w-[760px]"
        titleSize="clamp(26px,3.2vw,38px)"
      />
      <ul className="ind-reveal m-0 mb-14 flex list-none flex-col gap-3 p-0">
        {INCLUSIONS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xo-indigo">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="font-sans text-[15.5px] text-fg2 leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-14">
        {EXAMPLES.map((example) => (
          <div key={example.label} className="ind-reveal">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h3 className="m-0 font-sans font-semibold text-[22px] text-fg1">
                {example.label}
              </h3>
              <p className="m-0 min-h-[1.25rem] font-sans text-[13.5px] text-fg3 italic">
                {example.caption || "\u00A0"}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {example.images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[16/9] overflow-hidden rounded-(--r-lg) border border-border bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                    quality={92}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
