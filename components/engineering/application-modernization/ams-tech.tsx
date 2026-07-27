import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Frameworks",
    logos: [
      { name: "Flutter", src: "/assets/tech-stack/flutter.svg" },
      { name: "Laravel", src: "/assets/tech-stack/laravel.svg" },
      { name: "Node.js", src: "/assets/tech-stack/nodejs.svg" },
      { name: "React Native", src: "/assets/tech-stack/react-native.svg" },
      { name: "React", src: "/assets/tech-stack/react.svg" },
      { name: "Spring", src: "/assets/tech-stack/spring.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    logos: [
      { name: "AWS", src: "/assets/tech-stack/aws.svg" },
      { name: "Azure", src: "/assets/tech-stack/azure.svg" },
      { name: "Google Cloud", src: "/assets/tech-stack/google-cloud.svg" },
    ],
  },
  {
    title: "Languages & Servers",
    logos: [
      { name: "Java", src: "/assets/tech-stack/java.svg" },
      { name: ".NET", src: "/assets/tech-stack/dotnet.svg" },
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "Go", src: "/assets/tech-stack/go.svg" },
      { name: "C#", src: "/assets/tech-stack/csharp.svg" },
      { name: "PHP", src: "/assets/tech-stack/php.svg" },
    ],
  },
  {
    title: "Platforms",
    logos: [
      { name: "Salesforce", src: "/assets/tech-stack/salesforce.svg" },
      { name: "ServiceNow", src: "/assets/tech-stack/servicenow.svg" },
      { name: "HubSpot", src: "/assets/tech-stack/hubspot.svg" },
      { name: "NetSuite", src: "/assets/tech-stack/netsuite.svg" },
    ],
  },
  {
    title: "Databases",
    logos: [{ name: "SQL", src: "/assets/tech-stack/sql.svg" }],
  },
  {
    title: "AI & Testing",
    logos: [
      { name: "OpenAI", src: "/assets/tech-stack/openai.svg" },
      { name: "TensorFlow", src: "/assets/tech-stack/tensorflow.svg" },
      { name: "PyTorch", src: "/assets/tech-stack/pytorch.svg" },
    ],
  },
] as const;

export function AmsTech() {
  return (
    <LightSection bg="var(--surface)">
      <SectionHead
        label="Tech & tools"
        title="Tech stack"
        sub="We modernize with frameworks, cloud platforms, and AI tools chosen for each legacy landscape."
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
