import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Backend and languages",
    logos: [
      { name: ".NET", src: "/assets/tech-stack/dotnet.svg" },
      { name: "Ruby on Rails", src: "/assets/tech-stack/rails.svg" },
      { name: "Java", src: "/assets/tech-stack/java.svg" },
      { name: "PHP", src: "/assets/tech-stack/php.svg" },
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "C#", src: "/assets/tech-stack/csharp.svg" },
    ],
  },
  {
    title: "Frontend",
    logos: [
      { name: "Angular", src: "/assets/tech-stack/angular.svg" },
      { name: "Vue.js", src: "/assets/tech-stack/vue.svg" },
      { name: "JavaScript", src: "/assets/tech-stack/javascript.svg" },
      { name: "React", src: "/assets/tech-stack/react.svg" },
    ],
  },
  {
    title: "Mobile",
    logos: [
      { name: "React Native", src: "/assets/tech-stack/react-native.svg" },
      { name: "Flutter", src: "/assets/tech-stack/flutter.svg" },
      { name: "Xamarin", src: "/assets/tech-stack/xamarin.svg" },
      { name: "Swift", src: "/assets/tech-stack/swift.svg" },
      { name: "Kotlin", src: "/assets/tech-stack/kotlin.svg" },
    ],
  },
] as const;

export function CadTech() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Tech & tools"
        title="Development tools we use"
        sub="We work with a range of modern development tools and choose the ones that fit each project."
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
