import { StepApproach } from "@/components/services";

const STEPS = [
  {
    n: "01",
    name: "Discovery — 1 to 2 weeks",
    body: "Technical scope, architecture proposal, and a fixed estimate. For Flutter this includes the offline decision, native integration inventory, and the OS version support matrix. Those three drive most of the cost on mobile.",
  },
  {
    n: "02",
    name: "Architecture — 1 week",
    body: "State management, data layer, sync strategy, and the release pipeline design. Feature flags and minimum-version handling get designed here rather than added after the first incident.",
  },
  {
    n: "03",
    name: "Build — 2-week sprints",
    body: "Working builds at every sprint end, distributed to your devices through TestFlight and Firebase App Distribution from week one. You use the app as it grows rather than reading about it.",
  },
  {
    n: "04",
    name: "Hardening — 1 to 2 weeks",
    body: "Testing on real devices across the support matrix, not just simulators. Performance profiling, memory, and battery under realistic use. Offline scenarios exercised deliberately. Crash reporting live before submission.",
  },
  {
    n: "05",
    name: "Release and store submission — 1 to 3 weeks",
    body: "Signing, store listings, privacy declarations, and review. Apple review is outside anyone's control, and we plan for a rejection round rather than assuming a clean pass. Staged rollout on Android, phased release on iOS.",
  },
  {
    n: "06",
    name: "Handover — 1 week",
    body: "Documentation, runbooks, and a walkthrough with your team. Source, signing certificates, and store account access transfer to you. Signing credentials in particular are where teams get locked in, and we make sure you hold them.",
  },
] as const;

export function FmdProcess() {
  return (
    <div id="process">
      <StepApproach
        label="How we work"
        title="Our Flutter development process"
        sub="Six stages on mobile, because release is its own discipline."
        steps={[...STEPS]}
        gradientId="fmd-approach"
      />
    </div>
  );
}
