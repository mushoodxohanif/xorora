import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";

const GROUPS = [
  {
    title: "Frontend",
    logos: [
      { name: "JavaScript", src: "/assets/tech-stack/javascript.svg" },
      { name: "React", src: "/assets/tech-stack/react.svg" },
      { name: "Node.js", src: "/assets/tech-stack/nodejs.svg" },
      { name: "Java", src: "/assets/tech-stack/java.svg" },
      { name: ".NET", src: "/assets/tech-stack/dotnet.svg" },
      { name: "Go", src: "/assets/tech-stack/go.svg" },
      { name: "PHP", src: "/assets/tech-stack/php.svg" },
      { name: "Vue", src: "/assets/tech-stack/vue.svg" },
      { name: "Angular", src: "/assets/tech-stack/angular.svg" },
    ],
  },
  {
    title: "Backend",
    logos: [
      { name: "Ruby", src: "/assets/tech-stack/ruby.svg" },
      { name: "Django", src: "/assets/tech-stack/django.svg" },
      { name: "Laravel", src: "/assets/tech-stack/laravel.svg" },
      { name: "GraphQL", src: "/assets/tech-stack/graphql.svg" },
      { name: "API", src: "/assets/tech-stack/api.svg" },
    ],
  },
  {
    title: "AI & Data",
    logos: [
      { name: "Generative AI", src: "/assets/tech-stack/openai.svg" },
      { name: "Machine Learning", src: "/assets/tech-stack/tensorflow.svg" },
      { name: "Deep Learning", src: "/assets/tech-stack/pytorch.svg" },
      { name: "Data Science", src: "/assets/tech-stack/python.svg" },
      { name: "Big Data", src: "/assets/tech-stack/big-data.svg" },
      { name: "Python", src: "/assets/tech-stack/python.svg" },
      { name: "SQL", src: "/assets/tech-stack/sql.svg" },
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
    title: "Mobile",
    logos: [
      { name: "iOS", src: "/assets/tech-stack/ios.svg" },
      { name: "Android", src: "/assets/tech-stack/android.svg" },
      { name: "React Native", src: "/assets/tech-stack/react-native.svg" },
    ],
  },
  {
    title: "CRM & ERP",
    logos: [
      { name: "Salesforce", src: "/assets/tech-stack/salesforce.svg" },
      { name: "HubSpot", src: "/assets/tech-stack/hubspot.svg" },
      { name: "NetSuite", src: "/assets/tech-stack/netsuite.svg" },
      { name: "ServiceNow", src: "/assets/tech-stack/servicenow.svg" },
    ],
  },
] as const;

export function SaTech() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="100+ technologies covered"
        title="Plug in specialists who already know your stack"
        sub="We have experts across everything from widely used frameworks like React to niche technologies like SAP ABAP. If your project needs something especially rare, our talent pipeline gives us the reach to find the right fit."
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
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-surface px-5 py-4"
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
