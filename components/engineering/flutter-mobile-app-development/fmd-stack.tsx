import Image from "next/image";
import { LightSection } from "@/components/case-study/light-section";
import { SectionHead } from "@/components/case-study/section-head";
import { imageAltTitle } from "@/lib/image-seo";

type Logo =
  | { name: string; src: string }
  | { name: string; abbr: string; color: string };

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

const GROUPS: { title: string; logos: Logo[] }[] = [
  {
    title: "Language & SDK",
    logos: [
      { name: "Dart 3", abbr: "Da", color: "#0175C2" },
      { name: "Flutter stable", src: "/assets/tech-stack/flutter.svg" },
      { name: "Impeller", abbr: "Im", color: "#02569B" },
    ],
  },
  {
    title: "State",
    logos: [
      { name: "Riverpod", abbr: "Rv", color: "#1D4ED8" },
      { name: "Bloc", abbr: "Bl", color: "#5C6BC0" },
      { name: "freezed", abbr: "fr", color: "#0F172A" },
      { name: "get_it", abbr: "gi", color: "#334155" },
    ],
  },
  {
    title: "Local data",
    logos: [
      { name: "Drift", abbr: "Dr", color: "#0EA5E9" },
      { name: "Isar", abbr: "Is", color: "#FF6B6B" },
      { name: "Hive", abbr: "Hv", color: "#FFC107" },
      { name: "flutter_secure_storage", abbr: "SS", color: "#16A34A" },
    ],
  },
  {
    title: "Backend & services",
    logos: [
      { name: "Firebase", abbr: "Fb", color: "#FFCA28" },
      { name: "REST", abbr: "RE", color: "#0F766E" },
      { name: "GraphQL", src: "/assets/tech-stack/graphql.svg" },
      { name: "FCM and APNs", abbr: "PN", color: "#EA4335" },
    ],
  },
  {
    title: "Release",
    logos: [
      { name: "Codemagic", abbr: "CM", color: "#00B0FF" },
      { name: "Fastlane", abbr: "FL", color: "#00F2C3" },
      { name: "GitHub Actions", src: "/assets/tech-stack/githubactions.svg" },
      { name: "Firebase App Distribution", abbr: "AD", color: "#FFA000" },
    ],
  },
  {
    title: "Quality",
    logos: [
      { name: "flutter_test", abbr: "FT", color: "#02569B" },
      { name: "integration_test", abbr: "IT", color: "#0277BD" },
      { name: "Patrol", abbr: "Pa", color: "#7C3AED" },
      { name: "Sentry", src: "/assets/tech-stack/sentry.svg" },
      { name: "Crashlytics", abbr: "Cr", color: "#FF6F00" },
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
      <div className="flex flex-col gap-8" title={gridSeo.title}>
        {GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-sans font-semibold text-[15px] text-fg2 tracking-[0.02em]">
              {group.title}
            </h3>
            <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {group.logos.map((logo) => (
                <li
                  key={`${group.title}-${logo.name}`}
                  className="flex items-center gap-3.5 rounded-(--r-md) border border-border bg-white px-5 py-4"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                    {"src" in logo ? (
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        title={logo.name}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-[8px] border font-bold font-sans text-[12px]"
                        style={{
                          background: `${logo.color}1A`,
                          borderColor: `${logo.color}40`,
                          color:
                            logo.color === "#FFCA28" ||
                            logo.color === "#FFC107" ||
                            logo.color === "#00F2C3"
                              ? "#1A1A1A"
                              : logo.color,
                        }}
                        title={logo.name}
                      >
                        {logo.abbr}
                      </span>
                    )}
                  </span>
                  <span className="font-sans font-semibold text-[14px] text-fg1 leading-snug">
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
