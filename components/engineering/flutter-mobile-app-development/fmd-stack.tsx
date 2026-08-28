import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import {
  TechStackGrid,
  type TechStackGroup,
} from "@/components/engineering/shared/tech-stack-grid";
import { imageAltTitle } from "@/lib/image-seo";

const DECISIONS = [
  {
    name: "Riverpod as default",
    body: "Compile-time safety, testable without a widget tree, and no dependence on where a widget sits in the tree. Most Flutter projects that become hard to change got there through implicit state, and this is the most reliable way we've found to avoid it.",
  },
  {
    name: "Bloc for complex teams",
    body: "Where the team is large or the domain has genuinely complex state transitions worth modelling explicitly. More ceremony per feature, and that ceremony pays for itself when six engineers are in the same codebase.",
  },
  {
    name: "Not GetX",
    body: "It's popular because it's fast to start with. It couples state, routing, and dependency injection into one framework, and untangling that later is a rewrite. We don't start projects on it, and we'll say why on the call.",
  },
] as const;

const GROUPS: TechStackGroup[] = [
  {
    title: "Language & SDK",
    logos: ["Dart 3", "Flutter stable", "Impeller"],
  },
  {
    title: "State",
    logos: ["Riverpod", "Bloc", "freezed", "get_it"],
  },
  {
    title: "Local data",
    logos: ["Drift", "Isar", "Hive", "Secure Storage"],
  },
  {
    title: "Backend & services",
    logos: ["Firebase", "REST", "GraphQL", "FCM and APNs"],
  },
  {
    title: "Release",
    logos: [
      "Codemagic",
      "Fastlane",
      "GitHub Actions",
      "Firebase App Distribution",
    ],
  },
  {
    title: "Quality",
    logos: [
      "flutter_test",
      "integration_test",
      "Patrol",
      "Sentry",
      "Crashlytics",
    ],
  },
];

const gridSeo = imageAltTitle({
  primary: "Flutter stack",
  secondary: "Dart, Riverpod, Bloc, Drift, Codemagic, Firebase",
  context: "Dart, Riverpod, Bloc, Drift, Codemagic, Firebase",
});

export function FmdStack() {
  return (
    <LightSection bg="var(--slate-50)">
      <SectionHead
        label="Tech & tools"
        title="Our Flutter development stack"
        sub="The framework decision is made. The consequential one is state management, because it shapes every file in the project and it is expensive to reverse. Impeller for rendering, which resolved most of the shader jank that Flutter was fairly criticised for."
        className="mb-10 max-w-[760px]"
      />
      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {DECISIONS.map((item) => (
          <div
            key={item.name}
            className="rounded-(--r-lg) border border-border bg-white p-[clamp(22px,2.4vw,28px)]"
          >
            <h3 className="mb-2.5 font-sans font-semibold text-[18px] text-fg1 leading-snug">
              {item.name}
            </h3>
            <p className="m-0 font-sans text-[14.5px] text-fg2 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <TechStackGrid groups={GROUPS} title={gridSeo.title} />
    </LightSection>
  );
}
