import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Design tools",
    logos: [
      { name: "Figma", src: "/assets/tech-stack/figma.svg" },
      { name: "Sketch", src: "/assets/tech-stack/sketch.svg" },
      { name: "InVision", src: "/assets/tech-stack/invision.svg" },
      { name: "Photoshop", src: "/assets/tech-stack/photoshop.svg" },
      { name: "Illustrator", src: "/assets/tech-stack/illustrator.svg" },
    ],
  },
  {
    title: "Technologies",
    logos: [
      { name: "HTML5", src: "/assets/tech-stack/html5.svg" },
      { name: "CSS3", src: "/assets/tech-stack/css3.svg" },
      { name: "JavaScript", src: "/assets/tech-stack/javascript.svg" },
    ],
  },
  {
    title: "Frameworks",
    logos: [
      { name: "React", src: "/assets/tech-stack/react.svg" },
      { name: "Vue.js", src: "/assets/tech-stack/vue.svg" },
      { name: "Angular", src: "/assets/tech-stack/angular.svg" },
      { name: "Bootstrap", src: "/assets/tech-stack/bootstrap.svg" },
      { name: "Magento", src: "/assets/tech-stack/magento.svg" },
    ],
  },
] as const;

export function UiuxTech() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Tech & tools"
        title="The design stack that powers our UI/UX excellence"
        sub="We pick design and front-end tools that fit the product, the team, and how the experience gets built."
        className="mb-12 max-w-[720px]"
      />
      <div className="flex flex-col gap-8">
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-slate-50 px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      title={logo.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                      unoptimized
                    />
                  </span>
                  <span className="font-sans font-semibold text-[14.5px] text-fg1">
                    {logo.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LightSection>
  );
}
