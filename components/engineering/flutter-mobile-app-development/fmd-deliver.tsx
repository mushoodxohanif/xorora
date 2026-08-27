import type { ServiceCardItem } from "@/components/services";
import { ServiceCardGrid } from "@/components/services";
import { ROUTES } from "@/lib/navigation";

const CAPABILITIES: ServiceCardItem[] = [
  {
    icon: "app-window",
    name: "Flutter app development for iOS and Android",
    body: "One Dart codebase, two stores, one team. Shared business logic and platform behaviour where each system genuinely expects it, rather than a lowest common denominator that feels wrong on both.",
  },
  {
    icon: "cloud",
    name: "Offline-first and field applications",
    body: "Apps that work on a loading dock, in a basement, or on a train. Local persistence, conflict resolution, and sync that survives a dropped connection mid-write. This is designed in from the data model or it is bolted on badly later.",
  },
  {
    icon: "plug",
    name: "Backend and API development",
    body: "Most app projects are two projects. We build the Flutter client and the backend behind it in Python, Node.js, Laravel, or .NET, which means one team owns the contract between them rather than two teams negotiating it.",
  },
  {
    icon: "cpu",
    name: "Native integration",
    body: "Camera, biometrics, Bluetooth, background location, health data, payments. Where a plugin exists and is maintained, we use it. Where it doesn't, we write the platform channel rather than shipping around the gap.",
  },
  {
    icon: "refresh-cw",
    name: "App modernization and migration",
    body: "React Native and legacy native apps moved to Flutter, or existing Flutter apps on old SDK versions with abandoned dependencies. We assess what breaks before proposing anything.",
    href: ROUTES.applicationModernization,
  },
  {
    icon: "rocket",
    name: "Release engineering and store submission",
    body: "Signing, provisioning, CI pipelines, staged rollouts, crash reporting, and forced-upgrade handling. The unglamorous half of shipping mobile, and the half that decides whether your next release is routine or a weekend.",
  },
];

export function FmdDeliver() {
  return (
    <div id="services">
      <ServiceCardGrid
        label="What we build"
        title="Flutter app development services"
        sub="Mobile has a constraint web does not. You cannot patch what's already installed. A bug ships to every device and stays there until users update, and some never will. Our Flutter app development services are built around that: get it right before release, and build the update path in from the first sprint."
        items={CAPABILITIES}
        columns={2}
        bg="var(--slate-50)"
        showLearnMore={true}
      />
    </div>
  );
}
